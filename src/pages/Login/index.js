import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../../components/Button'
import H1 from '../../components/H1'
import Header from '../../components/Header'
import Input from '../../components/Input'

function Login ({ navigation}) {

  function goToRegistro(){
    console.log("Teste do Button")
    navigation.navigate("Cadastro")
  }


    return (
        <View style={styles.container}>
          <Header />
          <View style={styles.conteudo}>
            <View style={styles.title}>
              <H1 texto="Faça login"/>
              <Text>Entre ou faça um conta agora mesmo!</Text>
            </View>
            <View>
              <Input title="Email" type="inverted"></Input>
              <Input title="Senha" type="inverted"></Input>
            </View>
          </View>
          <View style={styles.bottom}>
            <Button onPress={goToRegistro} title="Entrar" type="normal"></Button>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    conteudo: {
      padding: 40
    },
    title: {
      marginBottom: 40
    },
    bottom: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 36
    }
  });
  

export default Login