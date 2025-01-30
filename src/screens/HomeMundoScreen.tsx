import React from 'react'
import { Text, View } from 'react-native'

const HomeMundoScreen = () => {
  return (
    <View style={{
        flex:1,
        backgroundColor: "red",
        justifyContent: "center"
      }
      }>
        <Text style={{
      fontSize: 40,
      textAlign: "center",
      
        }}>Hola Mundo!!</Text>
      </View>
  )
}

export default HomeMundoScreen
