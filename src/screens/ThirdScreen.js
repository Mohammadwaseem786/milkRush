import React from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';


export default function ThirdScreen() {
  return (
    <View style={styles.container}>
      {/* require() loads from local project assets */}
      <Image source={require("../assests/images/cow-376_256.gif")} style={styles.image} resizeMethod="resize" />
      <Text style={styles.text}>
        Hey! You Saw Me Now Go Back To Work
      </Text>
    </View>
   
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0a0a0aff' },
  image: { width: 256, height: 256, resizeMode: 'contain' },
   text: {
    color: '#ffffff',
    fontSize: 28,
     fontWeight: 'bold',
    textAlign: 'center'
  }
});



