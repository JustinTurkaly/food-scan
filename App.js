import { StatusBar } from 'expo-status-bar';
import React from "react";
import {useState, useEffect} from 'react';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableOpacity } from "react-native";
import Login  from './components/Login.js';
import Scanner  from './components/Scanner.js'
import Info from './components/Info.js'
import MainNav from './components/MainNav.js'
import Signup from './components/Signup.js'

const image = { uri: "https://static.vecteezy.com/system/resources/previews/005/361/667/original/soft-pink-social-media-duotone-gradient-background-social-network-stories-soft-colorful-theme-bright-graphic-display-wallpaper-modern-vibrant-mobile-app-design-blending-bright-duo-colors-template-vector.jpg" };

const App = () => {
  const [screenView, setScreenView] = useState(0);
  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState(null);
  const [info, setInfo] = useState({true});

  const screenRender = (page) => {

    let directory = {
      0: <Login screenView={screenView} setScreenView={setScreenView}/>,
    1: <View style={styles.container}>
    <ImageBackground source={require('./assets/camBackground.png')} resizeMode="cover" style={styles.image}>
    <TouchableOpacity style={styles.loginBtn} onPress={()=>{setScreenView(screenView + 1)}}>
          <Text style={styles.loginText}>Scan Food</Text>
        </TouchableOpacity>
    <Button
      title="go back"
      onPress={()=>{setScreenView(screenView - 1)}}>
        Go Back
      </Button>
    </ImageBackground>
  </View>,
  2: <Scanner screenView={screenView} setScreenView={setScreenView} info={info} setInfo={setInfo}></Scanner>,
  3: <Info info={info} setInfo={setInfo}/>,
  4: <MainNav info={info} setInfo={setInfo}/>,
  5: <Signup screenView={screenView} setScreenView={setScreenView}/>
    }

    return directory[screenView]
  }

return (screenRender())

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  loginBtn: {
    marginLeft: 65,
    width: "75%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "white",
  },
});

const styles1 = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
