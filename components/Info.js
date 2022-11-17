import { useEffect } from 'react'
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';
import React, { useState } from "react";
import { PixelRatio, Pressable, StyleSheet, Text, View, FlatList, TouchableHighlight, ScrollView } from 'react-native';
import { Foundation } from '@expo/vector-icons'; import Donut from './Donut.js';
import Price from './Price.js';
import Cents from './Cents.js';
import Calories from './Calories.js'

import {
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from "react-native";

const Info = ({ route }) => {
  // console.log('props', route)
  let data = route.params;
  const [firstRender, setFirstRender] = useState(false)

  const badges = {
    egg_free: require('../assets/eggFree.jpg'),
    no_artificial_colors: require('../assets/artificialColors.jpg'),
    dairy_free: require('../assets/dairyFree.jpg'),
    vegetarian: require('../assets/vegetarian.jpg'),
    gluten_free: require('../assets/glutenFree.jpg')
  }

  const radius = PixelRatio.roundToNearestPixel(130);
  const STROKE_WIDTH = 12;

  // useEffect(() => {
  //   if (firstRender === false) {
  //     setFirstRender(true)
  //     console.log(info)
  //   }
  //   // setInfo(info)
  // }, [info])

  const graphColors = {
    percentProtein: 'red',
    percentFat: 'blue',
    percentCarbs: '#ffd000',
    score: 'green'
  }

  const image = { uri: "https://static.vecteezy.com/system/resources/previews/005/361/667/original/soft-pink-social-media-duotone-gradient-background-social-network-stories-soft-colorful-theme-bright-graphic-display-wallpaper-modern-vibrant-mobile-app-design-blending-bright-duo-colors-template-vector.jpg" };

  let flag = true;
  if (flag === false) {
    return (
      <Text>test</Text>
    )
  }

  let breakdown = data.nutrition.caloricBreakdown
  breakdown.score = data.score;

  return (
    <ScrollView>

      <View style={{ display: 'flex', backgroundColor: '#a5a5a5' }}>
        <View className='top-row' style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ display: 'flex', flexDirection: 'column', borderRadius: 10, backgroundColor: 'white', width: '45%', height: 110, marginTop: 25, marginLeft: 15, borderWidth: 2, borderColor: 'gray', elevation: 10, shadowColor: 'black', shadowOpacity: '0.25', shadowRadius: 4 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 8 }}>
              <Price />
              <View style={styles.square}></View>
              <Cents />
            </View>
            <Text style={{ textAlign: 'center', fontSize: 30 }}>DOLLARS</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'column', borderRadius: 10, backgroundColor: 'white', width: '45%', height: 110, marginTop: 25, marginLeft: 15, borderWidth: 2, borderColor: 'gray', elevation: 10, shadowColor: 'black', shadowOpacity: '0.25', shadowRadius: 4 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 8 }}>
              <Calories />
            </View>
            <Text style={{ textAlign: 'center', fontSize: 30 }}>CALORIES</Text>
          </View>
        </View>
        <View className='second-row' style={{ backgroundColor: 'white', borderRadius: 10, backgroundColor: 'white', width: '93%', height: 140, marginTop: 25, marginLeft: 15, borderWidth: 2, borderColor: 'gray', elevation: 10, shadowColor: 'black', shadowOpacity: '0.25', shadowRadius: 4 }}>
          <View className='badge-header' style={{
            display: 'flex',
            marginTop: 5,
            border: '3px dashed #1c87c9',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text style={styles.header}>Badges</Text>
          </View>
          <View className='badge-container' style={styles.container}>
            {data.badges.map((item, i) => {
              // console.log(badges[item])
              return (
                badges[item] ? <Image key={i} style={styles.tinyLogo} source={badges[item]} /> : null
              )
            })}
          </View>
        </View>
        <View className='third-row' style={{ backgroundColor: 'white', borderRadius: 10, backgroundColor: 'white', width: '93%', height: 230, marginTop: 25, marginLeft: 15, borderWidth: 2, borderColor: 'gray', elevation: 10, shadowColor: 'black', shadowOpacity: '0.25', shadowRadius: 4 }}>
          <View className='nutrition-header' style={{
            display: 'flex',
            marginTop: 10,
            border: '3px dashed #1c87c9',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text style={styles.header}>Nutrition Breakdown</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center' }}>
            <FlatList
              data={Object.keys(breakdown)}
              horizontal={true}
              renderItem={({ item, index, separators }) => (
                <Donut key={index} percentage={breakdown[item]} color={graphColors[item]} delay={500 + 100 * index} max={100} title={item} type={item !== 'score' ? undefined : 'score'} />
              )}
            />
          </View>
        </View>
        <View className='fourth-row' style={{ backgroundColor: 'white', borderRadius: 10, backgroundColor: 'white', width: '93%', height: 230, marginTop: 25, marginLeft: 15, borderWidth: 2, borderColor: 'gray', elevation: 10, shadowColor: 'black', shadowOpacity: '0.25', shadowRadius: 4 }}>
          <View className='description-header' style={{
            display: 'flex',
            border: '3px dashed #1c87c9',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 8,
            marginBottom: 3
          }}>
            <Text style={styles.header}>Description</Text>
          </View>
          <ScrollView>
          <Text style={{marginLeft: 5, fontSize: 18}}>
            {data.description}
          </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: 'blue'
  },
  container: {
    paddingTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10
  },
  tinyLogo: {
    width: 70,
    height: 70,
  },
  logo: {
    width: 66,
    height: 58,
  },
  header: {
    fontSize: 27
  },
  square: {
    width: 10,
    height: 10,
    backgroundColor: '#00214d',
    opacity: 0.4,
    borderRadius: 10 / 2,
    marginTop: 47,
    marginLeft: 11
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
});


export default Info