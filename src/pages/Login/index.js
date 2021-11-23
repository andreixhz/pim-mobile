import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../../components/Button'

function Login () {

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button title="Entrar" type="normal"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default Login