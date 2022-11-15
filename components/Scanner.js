import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';

export default function Scanner({screenView, setScreenView, info, setInfo}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(true);
  const [text, setText] = useState('Not yet scanned');
  const [buttonReady, setButtonReady] = useState(false);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
    // console.log('test', text)
  }, []);

  // What hScannerens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };



  const handleScanSubmit = () => {
    let flag = false;
    const config = {
      headers: {
        'x-api-key': '4405bda7befe464e8dc5e6942dec0372'
      }
    }

    // console.log(typeof text)
    // console.log(text[0])

    if (text[0] === '0' && text[1] === '0'){
      flag = true;
    }

    axios.get(`https://api.spoonacular.com/food/products/upc/051500720028`, config)
        .then((data) => {
          // console.log('success', data)
          // console.log(data.data.description)
          let result = data.data
          setInfo({
            description: result.description,
            badges: result.badges,
            ingredientList: result.ingredientList,
            ingredients: result.ingredients,
            nutrition: result.nutrition,
            price: result.price,
            score: result.spoonacularScore,
            title: result.title
          })
          setScreenView(3)
          console.log(info)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    // Check permissions and return the screens
    if (hasPermission === null) {
      return (
        <View style={styles.container}>
          <Text>Requesting for camera permission</Text>
        </View>)
    }
    if (hasPermission === false) {
      return (
        <View style={styles.container}>
          <Text style={{ margin: 10 }}>No access to camera</Text>
          <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
        </View>)
    }

    // Return the View
    return (
      <View style={styles.container}>
        <View style={styles.barcodebox}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 400, width: 400 }} />
        </View>
        <Text style={styles.maintext}>{text}</Text>

        {scanned && <Button title={'Load Info'} onPress={() => { handleScanSubmit() }} color='tomato' />}
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    maintext: {
      fontSize: 16,
      margin: 20,
    },
    barcodebox: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 300,
      width: 300,
      overflow: 'hidden',
      borderRadius: 30,
      backgroundColor: 'tomato'
    }
  });