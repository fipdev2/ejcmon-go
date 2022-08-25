import * as React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import InputTexto from "../../components/InputTexto";
import Botao from "../../components/Botao";
import { useNavigation } from "@react-navigation/native";

// Usei @expo-google-fonts para conseguir usar Roboto na página
const Login = () => {
    let [fontsLoaded, error] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })

    if (!fontsLoaded) {
        return <AppLoading />
    }
    const navigation = useNavigation();
    return (

        <View style={styles.container}>
            <ImageBackground
                style={styles.fundo}
                source={require('../../assets/background.svg')}>

                <Text style={styles.texto1}> Seja bem-vindo a</Text>

                <Image
                    style={styles.logo}
                    source={require('../../assets/ejcmongo_logo.svg')} />

                <View style={styles.dados}>
                    <InputTexto placeholderText="Email" />
                    <InputTexto placeholderText="Senha" />
                </View>

                <Botao
                    value={"Entrar"}
                    onPress={() => navigation.navigate('Tabs')} />

                <View style={styles.below}>
                    <Text style={styles.under1}>Ainda não possui conta?</Text>
                    <Text style={styles.under2}
                        onPress={() => navigation.navigate('Cadastro')}>Registre-se</Text>
                </View>

            </ImageBackground>



        </View>
    )
}

//Estilizei com Stylesheets para ser figurativo e lúdico durante a aula e deixar styled-components para a próx. aula

const styles = StyleSheet.create({

    container: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",


    },

    fundo: {
        width: '428px',
        height: '926px',
    },


    texto1: {
        fontFamily: "Roboto_400Regular",
        fontSize: 16,
        color: "white",
        marginTop: '64px',
        marginLeft: '57px',
    },

    logo: {
        width: '327px',
        height: '218px',
        marginTop: '6px',
        marginLeft: '55px',
    },

    dados: {
        marginTop: '242px',
        marginLeft: '47px',
    },

    below: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 16,
    },

    under1: {
        color: "white",
        fontFamily: "Roboto_700Bold",

    },

    under2: {
        color: "#FFCD00",
        fontFamily: "Roboto_700Bold",
        marginLeft: 3,

    }

})


export default Login;
