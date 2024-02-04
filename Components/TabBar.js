// TabBar.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import colors from '../config/colors';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import ShopScreen from '../Screens/ShopScreen';

const Tab = createBottomTabNavigator();

const getTabBarStyles = () => ({
  position: "absolute",
  bottom: 25,
  left: 20,
  right: 20,
  elevation: 0,
  backgroundColor: "white",
  borderRadius: 15,
  height: 90,
});

export default function TabBar() {
  return (
    <Tab.Navigator
    initialRouteName="Profile"

     screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
      
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarStyle: getTabBarStyles(),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarStyle: getTabBarStyles(),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarStyle: getTabBarStyles(),
        }}
      />
    </Tab.Navigator>
  );
}
