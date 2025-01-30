import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
   <View style= {styles.container}>
    <Text style ={styles.title}>Box Object Model</Text>
   </View>
  )
}

const styles = StyleSheet.create({
    container:{
        //marginTop:40,
        flex:1,
        backgroundColor:"red"
    },
    
    title:{
        paddingHorizontal:50,
        paddingVertical:30,
        marginHorizontal:20,
        fontSize: 25,
        //width;150,
        borderWidth:10
    }
})

export default BoxObjectModelScreen
