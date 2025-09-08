import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pre-auth screens
import HomePageScreen from '../screens/HomePageScreen/HomePageScreen.js';
import RoleSelectScreen from '../screens/HomePageScreen/RoleSelectScreen.js';

// Auth stack (note: exports a Stack.Navigator, NOT a NavigationContainer)
import AuthStack from './AuthStack.js';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomePageScreen} />
      <Stack.Screen name="RoleSelectScreen" component={RoleSelectScreen} />
      {/* Mount the whole auth flow as a single screen */}
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
  );
}
