import React from 'react'
import { View, StyleSheet } from 'react-native';

export const PositionAbsoluteScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxBlue}> </View>
            <View style={styles.boxOrange}></View>
            <View style={styles.boxGreen}></View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //paddingTop: 40,
        //flex: 1,
        width: 300,
        height: 300,
        backgroundColor: '#4caebd',
        //justifyContent: 'center',
        //alignItems:'center'


    },

    boxBlue: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderWidth: 10,
        borderColor: '#ffffff',
        //position: "relative",
        //top:30,
        //left:50
        position: 'absolute',
        top: 0,
        right: 0
    },

    boxOrange: {
        width: 100,
        height: 100,
        backgroundColor: '#f28824',
        borderWidth: 10,
        borderColor: '#ffffff',
        //top: -50
        position: 'absolute',
        bottom: 0,
        right: 0
    },

    boxGreen: {
        ///width: 100,
        //height: 100,
        backgroundColor: '#39e01d',
        borderWidth: 10,
        borderColor: '#ffffff',
        //top: -50
        position: 'absolute',
        top:0,
        bottom: 0,
        left: 0,
        right:0
    }

})
export default PositionAbsoluteScreen
