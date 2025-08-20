

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// use your existing files:
import Login from '../screens/Login';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';




const Stack = createNativeStackNavigator();


export default function AppNavigator() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login', headerShown: true }}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{ title: 'Second Screen', headerShown: true }}
        />
        <Stack.Screen
          name="ThirdScreen"
          component={ThirdScreen}
          options={{ title: 'Third Screen', headerShown: true }}
        />
      </Stack.Navigator>


    </NavigationContainer>
   
  );
}



