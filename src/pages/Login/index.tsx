import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import InputTexto from "../../components/InputTexto";
import BotaoEntrar from "../../components/BotaoEntrar";

// Usei @expo-google-fonts para conseguir usar Roboto na página
const Login = ()=> {
    let [fontsLoaded,error] = useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold})

    if (!fontsLoaded) {
        return<AppLoading/>
    }

return  (
    
    <View style={styles.container}>

        <ImageBackground 
            style={styles.fundo} 
            source={require('../../assets/background.svg')}>

            <Text style={styles.texto1}> Seja bem-vindo</Text>

            <Image 
                style={styles.logo}
                source={require('../../assets/ejcmongo_logo.svg')} />

            <View style={styles.dados}>
                <InputTexto param={"E-mail"}/>
                <InputTexto  param={"Senha"}/>
            </View>

            <BotaoEntrar/>

            <View style={styles.below}>
                <Text style={styles.under1}>Ainda não possui conta?</Text>
                <Text style={styles.under2}>Registre-se</Text>
            </View>

        </ImageBackground>

        

    </View>
)    
}

//Estilizei com Stylesheets para ser figurativo e lúdico durante a aula e deixar styled-components para a próx. aula

const styles=StyleSheet.create({

    container:{
        display:"flex",
        flexDirection:"column",
        alignContent:"center",
        
        
    },
    
    fundo:{
        width:428,
        height:926,
    },
    
    
    texto1:{
        fontFamily:"Roboto_400Regular",
        fontSize:16,
        color:"white",
        marginTop:64,
        marginLeft:61,
    },

    logo:{
        width:329,
        height:216,
        marginTop:6,
        marginLeft:55,
    },

    dados:{
        marginTop:242,
        marginLeft:47,
    },

    below:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        marginTop:16,   
    },

    under1:{
      color:"white",
      fontFamily:"Roboto_700Bold",

    },
    
    under2:{
      color:"#FFCD00",
      fontFamily:"Roboto_700Bold",
      marginLeft:3,

    }

})


export default Login;