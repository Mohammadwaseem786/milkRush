// src/navigation/AuthStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FarmerLogin from '../screens/FarmerScreens/auth/FarmerLogin.js';
import FdoLogin from '../screens/FdoScreens/auth/FdoLogin.js';
import AdminLogin from '../screens/AdminScreens/auth/AdminLogin.js';
import FarmerOtp from '../screens/FarmerScreens/auth/FarmerOtp.js';

const Stack = createNativeStackNavigator();

export default function AuthStack({ route }) {
  const role = route?.params?.role; // passed from RoleSelectScreen

  // Decide which login screen should open first
  let initial = 'FarmerLogin';
  if (role === 'admin') initial = 'AdminLogin';
  else if (role === 'fdo') initial = 'FdoLogin';

  return (
    <Stack.Navigator
      initialRouteName={initial}
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'left',
        headerTintColor: '#1982C5',
        headerTitleStyle: {
          fontSize: 28,
          fontWeight: '600',
          fontFamily: 'EBGaramond_600SemiBold',
        },
      }}
    >
      <Stack.Screen
        name="FarmerLogin"
        component={FarmerLogin}
        options={{ title: 'Farmer Login' }}
      />
      <Stack.Screen
        name="FarmerOtp"
        component={FarmerOtp}
        options={{ title: 'Farmer Login' }} // ✅ added OTP screen
      />
      <Stack.Screen
        name="FdoLogin"
        component={FdoLogin}
        options={{ title: 'FDO Login' }}
      />
      <Stack.Screen
        name="AdminLogin"
        component={AdminLogin}
        options={{ title: 'Admin Login' }}
      />
    </Stack.Navigator>
  );
}
