import * as React from 'react';
import { Container, PokebolaBg, Title } from '../Pokédex/style';
import { TouchableOpacity, Text } from 'react-native';
import { Btn, BtnTxt, Info, InfoTitle } from './style';
import { user } from '../../constants/user';

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
            <Info>{user.name}</Info>
            <InfoTitle>E-mail</InfoTitle>
            <Info>{user.email}</Info>
            <InfoTitle>CPF</InfoTitle>
            <Info>{user.CPF}</Info>
            <InfoTitle>Pokémons Capturados</InfoTitle>
            <Info>{user.capturedPokemons.length} Pokémons</Info>
        </Container>
    );
}

export default Perfil;