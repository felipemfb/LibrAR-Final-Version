// app/SplashScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Logo = require('../../assets/icons/logo.png');

export default function SplashScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bem vindo</Text>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>libr.AR</Text>
      <Text style={styles.subtitle}>Seu tradutor de libras</Text>
      <TouchableOpacity style={styles.button} onPress={() => { router.push('/CamPredict'); }} activeOpacity={0.8}>
        <Ionicons name="camera-outline" size={36} color="#BCA6F7" style={{ marginRight: 12 }} />
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141124',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    color: '#fff',
    fontSize: 32,
    marginBottom: 36,
    fontWeight: '500',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 36,
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    color: '#BCA6F7',
    fontSize: 24,
    marginBottom: 56,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#BCA6F7',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 48,
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
  },
});
