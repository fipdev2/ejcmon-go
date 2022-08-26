import React from 'react';
import { Container, PokebolaBg, Title } from '../Pokédex/style';
import { Btn, BtnTxt, Info, InfoTitle } from './style';
import { user } from '../../constants/user';
import { useNavigation } from '@react-navigation/native';

function Perfil() {
    const Navigation = useNavigation();
    return (
        <Container>
            <PokebolaBg source={require('../../assets/PokeballBG.png')} />
            <Title>Meu Perfil</Title>
            <Btn onPress={() => Navigation.navigate('Editar Perfil' as never)}>
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