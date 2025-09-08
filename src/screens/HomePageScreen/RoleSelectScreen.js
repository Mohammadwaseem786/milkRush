// src/screens/RoleSelectScreen/RoleSelectScreen.js
import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import MilkRush from '../../assests/Logos/MilkRush.svg';
import FarmerIcon from '../../assests/icons/FarmerIcon.svg';
import FdoIcon from '../../assests/icons/FdoIcon.svg';
import AdminIcon from '../../assests/icons/AdminIcon.svg';

export default function RoleSelectScreen({ navigation }) {
  const [selectedRole, setSelectedRole] = useState(null); // 'farmer' | 'fdo' | null

  // --- navigate to AuthStack with the selected role ---
  const handleNext = () => {
    if (!selectedRole) return;
    navigation.navigate('AuthStack', { role: selectedRole });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.logoWrapper}>
        <MilkRush width={192} height={140} color="#1982C5" />
      </View>

      {/* Farmer Login Box (selectable with gradient) */}
      <Pressable onPress={() => setSelectedRole('farmer')} style={{ alignSelf: 'center', width: 340 }}>
        {selectedRole === 'farmer' ? (
          <LinearGradient
            colors={['#1982C5', '#4CAFE9', '#E8F1FD']}
            locations={[0, 0.7, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.box, styles.boxSelected]}
          >
            <View style={styles.iconWrapper}>
              <FarmerIcon width={21} height={24} color="#fff" />
            </View>
            <Text style={[styles.farmerText, { color: '#fff' }]}>Farmer Login</Text>
          </LinearGradient>
        ) : (
          <View style={styles.box}>
            <View style={styles.iconWrapper}>
              <FarmerIcon width={21} height={24} color="#1982C5" />
            </View>
            <Text style={styles.farmerText}>Farmer Login</Text>
          </View>
        )}
      </Pressable>

      {/* Field Officer Login Box (selectable with the same gradient) */}
      <Pressable
        onPress={() => setSelectedRole('fdo')}
        style={{ alignSelf: 'center', width: 340 }}
      >
        {selectedRole === 'fdo' ? (
          <LinearGradient
            colors={['#1982C5', '#4CAFE9', '#E8F1FD']}
            locations={[0, 0.7, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.box, styles.boxBelow, styles.boxSelected]}
          >
            <View style={styles.iconWrapper}>
              <FdoIcon width={21} height={24} color="#fff" />
            </View>
            <Text style={[styles.fdoText, { color: '#fff' }]}>Field Officer Login</Text>
          </LinearGradient>
        ) : (
          <View style={[styles.box, styles.boxBelow]}>
            <View style={styles.iconWrapper}>
              <FdoIcon width={21} height={24} color="#1982C5" />
            </View>
            <Text style={styles.fdoText}>Field Officer Login</Text>
          </View>
        )}
      </Pressable>

      {/* Admin Login chip → navigate directly to AuthStack with role 'admin' */}
      <Pressable
        onPress={() => navigation.navigate('AuthStack', { role: 'admin' })}
        style={styles.adminChip}
        hitSlop={8}
      >
        <AdminIcon width={17} height={15} color="#1982C5" />
        <Text style={styles.adminText}>Admin Login</Text>
      </Pressable>

      {/* Next button (solid brand blue when enabled; disabled grey otherwise) */}
      <Pressable
        disabled={!selectedRole}
        onPress={handleNext}
        style={[
          styles.nextButton,
          !selectedRole && styles.nextButtonDisabled,
        ]}
      >
        <Text
          style={[
            styles.nextButtonText,
            !selectedRole && styles.nextButtonTextDisabled,
          ]}
        >
          Next
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoWrapper: {
    alignItems: 'center',
    marginTop: '30%',
  },
  box: {
    alignSelf: 'center',
    width: 340,
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 75,
  },
  boxBelow: {
    marginTop: 16,
  },
  boxSelected: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E6E6E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  farmerText: {
    marginLeft: 15,
    fontFamily: 'NotoSans_500Medium',
    fontSize: 16,
    lineHeight: 24,
    color: '#000',
  },
  fdoText: {
    marginLeft: 15,
    fontFamily: 'NotoSans_500Medium',
    fontSize: 16,
    lineHeight: 24,
    color: '#000',
  },
  adminChip: {
    alignSelf: 'center',
    marginTop: 16,
    minWidth: 115.1,
    height: 32,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#F2F4F7',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  adminText: {
    fontFamily: 'NotoSans_500Medium',
    fontSize: 14,
    lineHeight: 19,
    color: '#1982C5',
  },
  nextButton: {
    alignSelf: 'center',
    width: 340,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#1982C5',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
  },
  nextButtonDisabled: {
    backgroundColor: '#F2F4F7',
  },
  nextButtonText: {
    width: 37,
    height: 16,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'NotoSans_500Medium',
    fontSize: 16,
    lineHeight: 16,
  },
  nextButtonTextDisabled: {
    color: '#8C8C8C',
  },
});
