import React from 'react'
import { ImageBackground, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

export const DimensionsScreen = () => {
const {width,height}=useWindowDimensions();

    return (
        <View>
        <View style={styles.container}>
            <View style={{
                ...styles.cajaAzul,
                width: width * 0.20
            }}></View>
            <View style={styles.CajaNaranja}></View>
        </View>
        <Text style={styles.title}>W:{width} H: {height}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        //marginTop:40,
        backgroundColor: "red",
        width: "100%",
        height: 600


    },

    cajaAzul: {
        backgroundColor: "blue",
        //width: "50%",
        height: "50%"


    },

    CajaNaranja: {
        backgroundColor: "#f28824"
    },

    title: {
        fontSize: 33,
fontWeight:"bold"

    }


})
