// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './Screens/WelcomeScreen';
import TabBar from './Components/TabBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="TabBar" component={TabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
