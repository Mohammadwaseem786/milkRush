// App.js
import React from "react";
import AppLoading from "expo-app-loading";
import FontLoaderhook from "./src/hooks/customhooks/FontLoaderhook";
import AppNavigator from "./src/navigation/AppNavigator.js";

export default function App() {
  const fontsLoaded = FontLoaderhook();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <AppNavigator />;
}
