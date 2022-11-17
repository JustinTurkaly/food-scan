import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Feather } from '@expo/vector-icons';
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

export default function Signup({ screenView, setScreenView }) {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [preference, setPreference] = useState("");
  const [listPreferences, setListPreferences] = useState([]);

  const handlePreferenceSubmit = () => {
    // console.log('test')
    setListPreferences(current => [...current, preference])
    setPreference('')
  }

  const handleRemovePref = (item) => {
  console.log('test', item)
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/backgroundlogin.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.form}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email."
              placeholderTextColor="#003f5c"
              onChangeText={(newEmail) => setNewEmail(newEmail)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password."
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(newPassword) => setNewPassword(newPassword)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Confirm Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              value={preference}
              style={styles.TextInput}
              placeholder="Food Preferences"
              placeholderTextColor="#003f5c"
              autoCapitalize='none'
              onChangeText={(preference) => setPreference(preference)}
            />
            <TouchableOpacity style={{
              backgroundColor: '#00ebc7',
              width: 30,
              height: 30,
              borderRadius: 60 / 2,
              alignItems: "center",
              justifyContent: "center",
              shadowRadius: 10,
              shadowColor: "#ff5470",
              shadowOpacity: 0.3,
              shadowOffset: { height: 10 },
              marginRight: 10
            }} onPress={handlePreferenceSubmit} >
              <Text style={{ fontSize: 22, marginBottom: 10 }}>+</Text>
            </TouchableOpacity>
          </View>
          <View className='preference-map' >
            {listPreferences.map((item, i) => {
              return (
                <View key={i} style={styles.listView}>
                  <Text style={{marginLeft: 8}}>{item}</Text>
                  <TouchableOpacity style={{
                    alignItems: "center",
                    justifyContent: "center",
                    shadowRadius: 10,
                    shadowColor: "#ff5470",
                    shadowOpacity: 0.3,
                    shadowOffset: { height: 10 },
                    marginLeft: 'auto',
                    paddingRight: 4
                  }} >
                    <Feather name="x-octagon" size={20} color="red" style={{}} />
                  </TouchableOpacity>
                </View>
              )
            })}
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={() => { setScreenView(screenView + 1) }}>
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
    display: 'flex',
    flexDirection: 'row'
  },

  listView: {
    marginLeft: 65,
    backgroundColor: "white",
    borderRadius: 20,
    width: "35%",
    height: 30,
    marginBottom: 10,
    alignItems: "center",
    display: 'flex',
    flexDirection: 'row',
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
    marginTop: 20,
    backgroundColor: "white",
  },

  form: {
    marginTop: 200
  },

  logo: {
    width: '70%',
    height: 100,
    marginLeft: 72,
    marginBottom: 40
  }
});

/*{
  backgroundColor: '#00ebc7',
  width: 20,
  height: 20,
  borderRadius: 20 / 2,
  alignItems: "center",
  justifyContent: "center",
  shadowRadius: 10,
  shadowColor: "#ff5470",
  shadowOpacity: 0.3,
  shadowOffset: { height: 10 },
  marginLeft: 'auto'
}
*/