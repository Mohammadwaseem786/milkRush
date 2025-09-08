// src/screens/admin/AdminLogin.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, Pressable, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FarmerIcon from '../../../assests/icons/FarmerIcon.svg';
import LockIcon from '../../../assests/icons/LockIcon.svg';
import ErrorIcon from '../../../assests/icons/ErrorIcon.svg'; // ⛔ error icon

const FdoLogin = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleContactSupport = () => {
    Linking.openURL('mailto:altqubesupport@gmail.com?subject=Password%20Recovery%20Request');
  };

  const handleLogin = () => {
    const u = username.trim();
    const p = password.trim();
    const isValid =
      (u === 'was1' && p === 'was1') ||
      (u === 'was2' && p === 'was2');

    if (isValid) {
      setHasError(false);
      navigation.navigate('FarmerStack');
    } else {
      setHasError(true);
    }
  };

  const onChangeUsername = (text) => {
    if (hasError) setHasError(false);
    setUsername(text);
  };

  const onChangePassword = (text) => {
    if (hasError) setHasError(false);
    setPassword(text);
  };

  // ✅ both icons use the same color depending on error
  const iconColor = hasError ? '#C62424' : '#ABABAB';

  return (
    <View style={styles.container}>
      <Text style={styles.usernameLabel}>Username</Text>

      <View style={styles.usernameInputContainer}>
        <FarmerIcon width={20} height={20} color={iconColor} style={styles.icon} />
        <TextInput
          style={styles.usernameInput}
          placeholder="Enter your username"
          placeholderTextColor="#ABABAB"
          value={username}
          onChangeText={onChangeUsername}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
        />
      </View>

      {/* Password Label */}
      <Text style={styles.passwordLabel}>Password</Text>

      {/* Password Input */}
      <View style={styles.passwordInputContainer}>
        <LockIcon width={20} height={20} color={iconColor} style={styles.icon} />
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter your password"
          placeholderTextColor="#ABABAB"
          secureTextEntry={false}   // keeping text visible
          value={password}
          onChangeText={onChangePassword}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          onSubmitEditing={handleLogin}
        />
      </View>

      {/* Error Banner */}
      {hasError && (
        <View style={styles.errorBanner}>
          <ErrorIcon width={22} height={22} style={styles.errorIcon} />
          <Text style={styles.errorText}>Wrong Username / Password</Text>
        </View>
      )}

      {/* Forgot Password */}
      <TouchableOpacity onPress={() => setShowForgotModal(true)} activeOpacity={0.7}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Log In Button */}
      <TouchableOpacity style={styles.loginBtn} activeOpacity={0.8} onPress={handleLogin}>
        <Text style={styles.loginBtnText}>Log In</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        transparent
        visible={showForgotModal}
        animationType="fade"
        onRequestClose={() => setShowForgotModal(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <View style={styles.modalBadge}>
              <Text style={styles.modalBadgeText}>🔒</Text>
            </View>
            <Text style={styles.modalTitle}>Password Recovery</Text>
            <Text style={styles.modalMsg}>
              Please contact the tech team for password recovery:
            </Text>
            <Pressable onPress={handleContactSupport}>
              <Text style={styles.modalEmail}>altqubesupport@gmail.com</Text>
            </Pressable>

            <View style={styles.modalActions}>
              <Pressable style={styles.secondaryBtn} onPress={() => setShowForgotModal(false)}>
                <Text style={styles.secondaryBtnText}>Close</Text>
              </Pressable>
              <Pressable style={styles.primaryBtn} onPress={handleContactSupport}>
                <Text style={styles.primaryBtnText}>Contact Support</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 55,
    backgroundColor: '#FFFFFF',
  },
  usernameLabel: {
    width: 335,
    height: 29,
    fontFamily: 'NotoSans-Bold',
    fontSize: 25,
    lineHeight: 22,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  usernameInputContainer: {
    width: 335,
    height: 58,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  icon: {
    marginRight: 12,
  },
  usernameInput: {
    flex: 1,
    fontFamily: 'NotoSans-Regular',
    fontSize: 17,
    lineHeight: 22,
    color: '#000000',
  },
  passwordLabel: {
    width: 410,
    height: 29,
    fontFamily: 'NotoSans-Regular',
    fontSize: 25,
    lineHeight: 27,
    color: '#000000',
    fontWeight: '800',
    marginBottom: 8,
    marginTop: 13,
  },
  passwordInputContainer: {
    width: 335,
    height: 58,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  passwordInput: {
    flex: 1,
    fontFamily: 'NotoSans-Regular',
    fontSize: 17,
    lineHeight: 22,
    color: '#000000',
  },
  errorBanner: {
    width: 331,
    height: 37,
    backgroundColor: '#C62424',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 6,
    marginBottom: 4,
  },
  errorIcon: {
    marginRight: 5,
  },
  errorText: {
    fontFamily: 'NotoSans-Regular',
    fontSize: 15,
    color: '#FFFFFF',
  },
  forgotPassword: {
    width: 335,
    height: 27,
    fontFamily: 'NotoSans-Regular',
    fontSize: 18,
    lineHeight: 25,
    color: '#1982C5',
    textAlign: 'right',
    marginBottom: 16,
  },
  loginBtn: {
    position: 'absolute',
    width: 335,
    height: 59,
    backgroundColor: '#1982C5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    left: 20,
    bottom: 40,
  },
  loginBtnText: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 18,
    color: '#FFFFFF',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  modalCard: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  modalBadge: {
    alignSelf: 'center',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E8F3FB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  modalBadgeText: { fontSize: 26 },
  modalTitle: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 18,
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 6,
  },
  modalMsg: {
    fontFamily: 'NotoSans-Regular',
    fontSize: 14,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 8,
  },
  modalEmail: {
    fontFamily: 'NotoSans-Regular',
    fontSize: 15,
    color: '#1982C5',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 18,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
  secondaryBtn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: '#F1F5F9',
  },
  secondaryBtnText: {
    fontFamily: 'NotoSans-Regular',
    fontSize: 14,
    color: '#0F172A',
  },
  primaryBtn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: '#1982C5',
  },
  primaryBtnText: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});

export default FdoLogin;
