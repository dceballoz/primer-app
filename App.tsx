import React from 'react'
//import { ContadorScreen } from './src/screens/ContadorScreen';
//import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
import { SafeAreaView } from 'react-native';
//import { DimensionsScreen } from './src/screens/DimensionsScreen';
//import PositionRelativeScreen from './src/screens/PositionRelativeScreen';
//import prueba from './src/screens/prueba';
//import HomeMundoScreen from './src/screens/HomeMundoScreen';
//import PositionAbsoluteScreen from './src/screens/PositionAbsoluteScreen';
import FlexScreen from './src/screens/FlexScreen';

const App = () => {
   return (
      <SafeAreaView style={{ flex: 1 }}>
         {/* <BoxObjectModelScreen/> */}
         {/* <DimensionsScreen/> */}

         {/* /* <PositionRelativeScreen />  */}
         {/* <HomeMundoScreen/> */}
         {/* <prueba/> */}
         {/* <PositionAbsoluteScreen/> */}
         <FlexScreen/>
      </SafeAreaView>


   )

}


export default App

