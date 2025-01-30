import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'


// propiedades de un componente
interface Props {
    title: string;
    onPress: () => void;
    //position: string; //bl, br
    position?: "bl"| "br";  // ? propiedad opcional
}


// componente reutilizable
export const Fab = ({ title,onPress, position ='bl' }: Props) => {
    //console.log(props.title);
    return (
        <TouchableOpacity style={[
            styles.fab,
            (position === 'bl')
            ?styles.fabLocationBL
            :styles.fabLocationBR
        ]}


            onPress={onPress}>
            <Text style={styles.fabtext}>{title}</Text>
        </TouchableOpacity>
    )
}

//componente de estilos
const styles = StyleSheet.create({

    fab: {
        backgroundColor: 'blue',
        borderRadius: 100,
        width: 50,
        height: 50,
        justifyContent: "center",

    },

    fabtext: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center"
    },

    fabLocationBL: {
        position: "absolute",
        bottom: 20,
        left: 20

    },

    fabLocationBR: {
        position: "absolute",
        bottom: 20,
        right: 20

    }
})

export default Fab
