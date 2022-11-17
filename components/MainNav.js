import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BlurView } from 'expo-blur';

// Screens
import Info from './Info.js';
import Recipes from './Recipes.js';
import Login from './Login.js';
import Ingredients from './Ingredients.js';

//Screen names
const homeName = "Summary";
const detailsName = "Ingredients";
const settingsName = "Recipes";

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'red',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const Tab = createBottomTabNavigator();

function MainNav({info, setInfo}) {
  // console.log('first', info)
  return (
    <NavigationContainer >
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarActiveBackgroundColor: 'white',
          tabBarInactiveBackgroundColor: 'white',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ff5470',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={Info} initialParams={info}/>
        <Tab.Screen name={detailsName} component={Ingredients} initialParams={info}/>
        <Tab.Screen name={settingsName} component={Recipes} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainNav;