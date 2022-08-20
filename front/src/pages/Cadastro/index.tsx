import React from 'react';
//import { Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { BackgroundCadastro, LogoApp, WelcomeText } from './style';

export default function Cadastro() {
    return (
        <BackgroundCadastro>
            
            <WelcomeText>Seja bem-vindo a</WelcomeText>
            <LogoApp source={require('../../assets/ejcmongo_logo.svg')}></LogoApp>

            
        </BackgroundCadastro>
    )

}