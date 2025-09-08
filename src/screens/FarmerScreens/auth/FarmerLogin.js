import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import PhoneIcon from '../../../assests/icons/PhoneIcon.svg';

function ErrorIcon({ size = 18, color = '#FFFFFF' }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
               10-4.48 10-10S17.52 2 12 2zm0 14a1.25 1.25 0 1 1 0 2.5
               1.25 1.25 0 0 1 0-2.5zm1-3.5h-2V7h2v5.5z" />
    </Svg>
  );
}

export default function FarmerLogin({ navigation }) {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleContinue = () => {
    if (phone.trim().length >= 10) {
      if (phone === '9740995422' || phone === '9740995421') {
        setError('');
        navigation.navigate('FarmerOtp', { phone });
      } else {
        setError('Please enter registered mobile phone number');
      }
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.label}>Enter your mobile number</Text>
        <Text style={styles.subLabel}>
          You'll receive an OTP code for mobile number verification
        </Text>

        <View style={styles.inputContainer}>
          <PhoneIcon width={19.2} height={19.2} fill="#ABABAB" />
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            placeholderTextColor="#ABABAB"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={(text) => {
              setPhone(text);
              if (error) setError('');
            }}
            maxLength={10}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, { opacity: phone.length < 10 ? 0.5 : 1 }]}
          disabled={phone.length < 10}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        {error ? (
          <View style={styles.errorBox}>
            <ErrorIcon width={18} height={18} fill='#FFFFFF'/>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingHorizontal: 28,
    paddingTop: 24,
  },
  label: {
    maxWidth: 312,
    fontFamily: 'Noto Sans',
    fontSize: 25,
    lineHeight: 45,
    color: '#545F71',
    fontWeight: '800',
    marginBottom: 8,
  },
  subLabel: {
    maxWidth: 319,
    fontFamily: 'Noto Sans',
    fontSize: 15.5,
    lineHeight: 20,
    color: '#000000B3',
    fontWeight: '600',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ABABAB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 40,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontFamily: 'Noto Sans',
    fontSize: 18,
    lineHeight: 22,
    color: '#000000',
  },
  button: {
    width: 345,
    height: 56,
    backgroundColor: '#308ECB',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 1,
  },
  buttonText: {
    fontFamily: 'Noto Sans',
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  errorBox: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C62424',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: 345,
    alignSelf: 'center',
  },
  errorText: {
    marginLeft: 8,
    fontFamily: 'Noto Sans',
    fontSize: 14,
    lineHeight: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});
