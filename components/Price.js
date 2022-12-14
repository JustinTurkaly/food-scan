import * as React from 'react';
import {
  Easing,
  TextInput,
  Animated,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Constants from 'expo-constants';
import Svg, { G, Circle, Rect } from 'react-native-svg';



const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function Price({
  percentage = 5,
  radius = 70,
  strokeWidth = 10,
  duration = 1100,
  color = "tomato",
  delay = 0,
  textColor,
  max = 100,
  title,
  type = 'nutrition',
  price = 5.78
}) {
  const animated = React.useRef(new Animated.Value(0)).current;
  // console.log('test', textColor)
  const circleRef = React.useRef();
  const inputRef = React.useRef();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animation = (toValue) => {
    const config = {
      delay: 300,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }
    return Animated.timing(animated, config).start(() => {
      animation(toValue === 0 ? percentage : percentage);
    });
  };

  // React.useEffect(() => {
  //   animation(percentage);
  //   animated.addListener((v) => {
  //     const maxPerc = 100 * v.value / max;
  //     const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
  //     if (inputRef?.current) {
  //       inputRef.current.setNativeProps({
  //         text: `${Math.round(v.value)}`,
  //       });
  //     }
  //     if (circleRef?.current) {
  //       circleRef.current.setNativeProps({
  //         strokeDashoffset,
  //       });
  //     }
  //   }, [max, percentage]);

  //   return () => {
  //     animated.removeAllListeners();
  //   };
  // });

  const camelToFlat=(camel)=>{
    const camelCase =camel.replace(/([a-z])([A-Z])/g, '$1 $2').split(" ").slice(1)

    return camelCase
}

  return (
    <View style={{ width: 50, height: 60}}>
      <AnimatedTextInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="0"
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: 70, color: textColor ?? color },
          styles.text,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: { fontWeight: '900', textAlign: 'center' },
});
