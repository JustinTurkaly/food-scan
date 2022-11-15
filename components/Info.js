import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { DonutChart } from "react-native-circular-chart";
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

const Info = ({ screenView, setScreenView, info }) => {

  const badges = {
    egg_free: require('../assets/eggFree.jpg'),
    no_artificial_colors: require('../assets/artificialColors.jpg'),
    dairy_free: require('../assets/dairyFree.jpg'),
    vegetarian: require('../assets/vegetarian.jpg'),
    gluten_free: require('../assets/glutenFree.jpg')
  }

  let data= []

  return (
    <View>
      <View className='badge-container' style={styles.container}>
        {info.badges.map((item, i) => {
          console.log(badges[item])
          return (
            badges[item] ? <Image key={i} style={styles.tinyLogo} source={badges[item]}/> : null
          )
        })}
      </View>
      <View className='graph-container'>
      {/* <DonutChart
    data={data}
    strokeWidth={15}
    radius={90}
    containerHeight={105 * 2}
    type="round"
    startAngle={0}
    endAngle={360}
    animationType="slide"
  /> */}
      </View>
      <View className='ingredient-container'>
        {info.ingredients.map((item, i) => {
          return(
            <Text key={i} >{item.name}</Text>
          )
        })}
      </View>
    <Text>
      {info.description}
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    display:'flex',
    flexDirection: 'row'
  },
  tinyLogo: {
    width: 80,
    height: 80,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default Info