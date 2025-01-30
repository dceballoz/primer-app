import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style = {styles.container}>
<Text style={styles.box1}>Caja 1</Text>
<Text style={styles.box2}>Caja 2</Text>
<Text style={styles.box3}>Caja 3</Text>
<Text style={styles.box1}>Caja 1</Text>
<Text style={styles.box2}>Caja 2</Text>
<Text style={styles.box3}>Caja 3</Text>
<Text style={styles.box1}>Caja 1</Text>
<Text style={styles.box2}>Caja 2</Text>
<Text style={styles.box3}>Caja 3</Text>
<Text style={styles.box1}>Caja 1</Text>
<Text style={styles.box2}>Caja 2</Text>
<Text style={styles.box3}>Caja 3</Text>
<Text style={styles.box1}>Caja 1</Text>
<Text style={styles.box2}>Caja 2</Text>
<Text style={styles.box3}>Caja 3</Text>
<Text style={styles.box1}>Caja 1</Text>
<Text style={styles.box2}>Caja 2</Text>
<Text style={styles.box3}>Caja 3</Text>
<Text style={styles.box1}>Caja 1</Text>
<Text style={styles.box2}>Caja 2</Text>
<Text style={styles.box3}>Caja 3</Text>
<Text style={styles.box1}>Caja 1</Text>
<Text style={styles.box2}>Caja 2</Text>
<Text style={styles.box3}>Caja 3</Text>
<Text style={styles.box1}>Caja 1</Text>
<Text style={styles.box2}>Caja 2</Text>
<Text style={styles.box3}>Caja 3</Text>
<Text style={styles.box1}>Caja 1</Text>
<Text style={styles.box2}>Caja 2</Text>
<Text style={styles.box3}>Caja 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor: "#39e01d",
//flexDirection: 'row', // 'row' ' column''column-reverse'
justifyContent: 'center',
alignItems:'flex-start',
flexWrap:'wrap'
},

box1:{
    //flex:1,
    borderWidth:2,
    borderColor: 'white',
    fontSize:25,
    //alignSelf:'center'
},

box2:{
    //flex:1,
    borderWidth:2,
    borderColor: 'white',
    fontSize:25,
    //alignSelf:'flex-start'

},

box3:{
    //flex:1,
    borderWidth:2,
    borderColor: 'white',
    fontSize:25,
    //alignSelf:'flex-end'

}

})

export default FlexScreen
