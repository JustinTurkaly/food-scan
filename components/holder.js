import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function Login({ screenView, setScreenView }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const image = { uri: "https://static.vecteezy.com/system/resources/previews/005/361/667/original/soft-pink-social-media-duotone-gradient-background-social-network-stories-soft-colorful-theme-bright-graphic-display-wallpaper-modern-vibrant-mobile-app-design-blending-bright-duo-colors-template-vector.jpg" };


  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={()=>{setScreenView(screenView + 1)}}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    justifyContent: "center"
  },

  inputView: {
    marginLeft: 65,
    justifyContent: 'center',
    backgroundColor: "white",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    alignItems: 'center'
  },

  forgot_button: {
    marginLeft: 160,
    height: 30,
    marginBottom: 30,
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

