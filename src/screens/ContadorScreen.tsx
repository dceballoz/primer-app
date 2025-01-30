import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

  import {Fab} from '../components/Fab';

export const ContadorScreen = () => {
  //hook useState: permite cmabiar el estado de un componente funcional
  const [contador, setContador] = useState<number>(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}
      </Text>
      <Fab title='+1' onPress={() => setContador(contador +1)}/>
      <Fab title='-1' onPress={() => setContador(contador -1)} position='br'/>

      {/* <TouchableOpacity
        style={[styles.fab,   styles.fabLocationBL]}

        onPress={() => { setContador(contador + 1) }}>
        <Text style={styles.fabtext}>+1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.fab,   styles.fabLocationBR]}

        onPress={() => { setContador(contador - 1) }}>
        <Text style={styles.fabtext}>-1</Text>
      </TouchableOpacity> */}

    </View>
  )
}

//Componente de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    textAlign: 'center',
    fontSize: 30,
    //position: 'relative',
    top: -70
  },


})