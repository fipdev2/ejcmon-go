import React from "react";
import { Button, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";


const BotaoCadastrar = ()=> {
    let [fontsLoaded,error] = useFonts({Roboto_700Bold})

    if (!fontsLoaded) {
        return<AppLoading/>
    }


    return(
        <TouchableOpacity>
            <View style={styles.btn}>
                <Text style={styles.txt}>Cadastrar-se</Text>
            </View>
        </TouchableOpacity>

    )

}
const styles=StyleSheet.create({

    btn:{
        width:293,
        height:55,
        backgroundColor:"#FFCD00",
        borderRadius:10,
        //marginLeft:67,
        alignItems:"center",
        justifyContent:"center"
    },

    txt:{
        fontFamily:"Roboto_700Bold",
        fontSize:20,
        color:"#2B3151",
        letterSpacing:1.3,

    },
})
export default BotaoCadastrar;