import * as React from 'react';
import { Container, PokebolaBg, Title } from '../Pokédex/style';
import { TouchableOpacity, Text } from 'react-native';
import { render } from 'react-dom';
import { Btn, BtnTxt, Info, InfoTitle } from './style';





function Perfil() {
    return (
        <Container>
            <PokebolaBg source={require('../../assets/PokeballBG.png')} />
            <Title>Meu Perfil</Title>
            <Btn>
                <BtnTxt>
                    Editar Perfil
                </BtnTxt>
            </Btn>
            <InfoTitle>Nome</InfoTitle>
            <Info>Thiago Barcellos</Info>
            <InfoTitle>E-mail</InfoTitle>
            <Info>thiagobar@ejcm.com.br</Info>
            <InfoTitle>CPF</InfoTitle>
            <Info>123.456.789-10</Info>
            <InfoTitle>Pokémons Capturados</InfoTitle>
            <Info>10 Pokémons</Info>
        </Container>
    );
}

export default Perfil;