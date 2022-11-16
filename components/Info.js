import {useEffect} from 'react'
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';
import React, { useState } from "react";
import { PixelRatio, Pressable, StyleSheet, Text, View, FlatList, TouchableHighlight, ScrollView } from 'react-native';
import Donut from './Donut.js';
import {
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from "react-native";

const Info = ({route}) => {
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


    // if (!info.nutrition) {
    //   let breakdown = {}
    // } else {
      // }
      // console.log(info)
      // let breakdown = info.nutrition.caloricBreakdown

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
    <View style={{display: 'flex'}}>
      <View className='badge-header' style={{display: 'flex',
        marginTop: 20,
        border: '3px dashed #1c87c9',
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 60}}>
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
      <View className='nutrition-header' style={{display: 'flex',
        marginTop: 20,
        border: '3px dashed #1c87c9',
        alignItems: 'center',
        justifyContent:'center'}}>
        <Text style={styles.header}>Nutrition Breakdown</Text>
        </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center'}}>
        {/* {Object.keys(breakdown).map((key, i) => {
          console.log(key)
          return (
            <Donut key={i} percentage={breakdown[key]} color={graphColors[key]} delay={500 + 100 * i} max={100} title={key} />
          )
        })} */}

        <FlatList
          data={Object.keys(breakdown)}
          horizontal={true}
          renderItem={({ item, index, separators }) => (
            <Donut key={index} percentage={breakdown[item]} color={graphColors[item]} delay={500 + 100 * index} max={100} title={item} type={item !== 'score' ? undefined : 'score'}/>
          )}
          />
      </View>
      <View className='ingredients-header' style={{display: 'flex',
        border: '3px dashed #1c87c9',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: 15}}>
        <Text style={styles.header}>Ingredients</Text>
        </View>
      <View className='ingredient-container'>
        {data.ingredients.map((item, i) => {
          return (
            <Text key={i} >{item.name}</Text>
          )
        })}
      </View>
      <Text>
        {data.description}
      </Text>
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
  header: {
    fontSize: 27
  }
});

export default Info