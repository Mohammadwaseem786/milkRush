import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MilkRush from '../../assests/Logos/MilkRush.svg';


export default function HomePageScreen({ navigation }) {
  useEffect(() => {
    // Navigate after 5 seconds
    const timer = setTimeout(() => {
      navigation.replace('RoleSelectScreen'); // change "Login" to your next screen name
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MilkRush width={351} height={248.01} color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1982C5', // brand background
    justifyContent: 'center',
    alignItems: 'center',
  },
});
