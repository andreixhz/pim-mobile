import React from 'react'
import {View, TextInput, Text} from 'react-native'
import styles from './styles'

function Input({title,type}) {

    return(
        <View
         style={[styles.container,styles[type] ]}>
            <Text style={[styles.title,styles[type]]}>{title}</Text>
            <TextInput style={[styles.title,styles[type]]}/>
            <Text style={[styles.title,styles[type]]}>{title}</Text>
        </View>
    )
}

export default Input