import React from 'react'
import { View, StyleSheet } from 'react-native';

const PositionRelativeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxBlue}>
                <View style={styles.boxOrange}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        width:300,
        height:300,
        backgroundColor: '#4caebd',
        justifyContent: 'center',
        alignItems:'center'


    },

    boxBlue: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderWidth: 10,
        borderColor: '#ffffff'
    },

    boxOrange: {
        width: 100,
        height: 100,
        backgroundColor: '#f28824',
        borderWidth: 10,
        borderColor: '#ffffff',
        top: -50
    }

})
export default PositionRelativeScreen
