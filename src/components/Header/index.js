import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import image from '../../assets/Topo.png'

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

function Header() {

    return(
        <View style={styles.content}>
            <View style={styles.actions}>
            </View>
            <Image
                resizeMode="contain" 
                style={styles.logo} 
                source={require('../../assets/header-svg.svg')}/>
        </View>

    )

}

const styles = StyleSheet.create({
    logo: {
        width: imageWidth,
        height: 96,
        marginBottom: -1
    },
    actions: {
        width: imageWidth,
        backgroundColor: '#ED5353',
        height: 40
    },
    content: {
        backgroundColor: '#ED5353',
        borderBottomColor: '#fff',
    }
  });
  

export default Header;