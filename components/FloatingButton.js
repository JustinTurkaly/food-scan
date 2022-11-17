import React from "react";
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from "react-native";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";

export default class FloatingButton extends React.Component {
    animation = new Animated.Value(0);

    toggleMenu = () => {
        const toValue = this.open ? 0 : 1;

        Animated.spring(this.animation, {
            toValue,
            friction: 5
        }).start();

        this.open = !this.open;
    };

    render() {
        const pinStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateX: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -53.3]
                    })
                }
            ]
        };

        const thumbStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateX: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -93.2]
                    })
                }
            ]
        };

        const heartStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateX: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -133.2]
                    })
                }
            ]
        };

        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "90deg"]
                    })
                }
            ]
        };

        const opacity = this.animation.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0, 1]
        });

        const handleLike = (word) => {
          console.log('in like func', word)
        }

        const handleDislike = (word) => {
          console.log('in dislike func', word)
        }

        const handleSearch = (word) => {
          console.log('in search func', word)
        }

        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableWithoutFeedback onPress={()=>{handleLike(this.props.text)}}>
                    <Animated.View style={[styles.button, styles.secondary, heartStyle, opacity]}>
                        <AntDesign name="hearto" size={20} color="#ff5470" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={()=>{handleDislike(this.props.text)}}>
                    <Animated.View style={[styles.button, styles.secondary, thumbStyle, opacity]}>
                        <Entypo name="thumbs-up" size={20} color="#ff5470" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={()=>{handleSearch(this.props.text)}}>
                    <Animated.View style={[styles.button, styles.secondary, pinStyle, opacity]}>
                        <Entypo name="thumbs-down" size={20} color="#ff5470" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, styles.menu, rotation]}>
                    <FontAwesome name="angle-double-left" size={24} color="#00214d" />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        position: "absolute"
    },
    button: {
        position: "absolute",
        width: 30,
        height: 30,
        borderRadius: 60 / 2,
        alignItems: "center",
        justifyContent: "center",
        shadowRadius: 10,
        shadowColor: "#ff5470",
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 }
    },
    menu: {
        backgroundColor: "#00ebc7"
    },
    secondary: {
        width: 30,
        height: 30,
        borderRadius: 48 / 2,
        backgroundColor: "#FFF"
    }
});