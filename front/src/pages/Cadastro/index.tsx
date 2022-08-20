import React from 'react';

import { BackgroundCadastro, BotaoDeEntrar, ChamadaLogin, Formulario, LogoApp, Rodape, WelcomeText } from './style';
import BotaoCadastrar from '../../components/BotaoCadastrar';
import InputTexto from "../../components/InputTexto";

export default function Cadastro() {
    return (
        <BackgroundCadastro>
            
            <WelcomeText>Seja bem-vindo a</WelcomeText>
            <LogoApp source={require('../../assets/ejcmongo_logo.svg')}></LogoApp>

            <Formulario>
                <InputTexto param={"Nome"}/>
                <InputTexto param={"E-mail"}/>
                <InputTexto param={"Senha"}/>
                <InputTexto param={"Confirme sua senha"}/>
                <InputTexto param={"CPF"}/>
                <BotaoCadastrar/>
                <Rodape>    
                    <ChamadaLogin>Já possui uma conta?</ChamadaLogin>
                    <BotaoDeEntrar>Login</BotaoDeEntrar>
                </Rodape>
            </Formulario>
        </BackgroundCadastro>
    )

}