import React, { Component } from 'react'
import { Text } from 'react-native';
import styles from './styles';

function H1({ texto }) {

    return(
        <Text style={styles.fontGrandeEComCor}>{texto}</Text>
    )

}

export default H1;