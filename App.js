import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
 
const Stack = createStackNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen 
          options={{headerShown: false}}
          name="Login" 
          component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}