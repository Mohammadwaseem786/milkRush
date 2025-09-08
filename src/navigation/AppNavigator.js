// src/navigation/AppNavigator.js
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./RootStack.js";
//import AuthStack from "./AuthStack";
//import FarmerStack from "./FarmerStack";
//import AdminStack from "./AdminStack";

export default function AppNavigator() {

  return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
  );
  
}
