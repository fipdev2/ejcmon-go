import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function InputTexto({param}){
    return(
        <View style={styles.container}>
            <TextInput style={styles.caixatexto} placeholder={param}/>
        </View>
    )
}

const styles=StyleSheet.create({

    container:{
        
    },

    caixatexto:{
        backgroundColor:'#2B3151',
        width: 333,
        height: 51,
        borderRadius:10,
        marginBottom:32,
        fontSize:16,
        color:"white",
        placeholderTextColor:"#FFFFFF",
        paddingLeft:32,

    },
});