import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button'
import Input from './src/components/Input'
import Login from './src/pages/Login';

export default function App() {
  function cadastrar() {
    console.log('clicou cadastrar')
  }
  function entrar() {
    console.log('clicou entrar')
  }
  return (
    <View>
      <Login/>
     <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
