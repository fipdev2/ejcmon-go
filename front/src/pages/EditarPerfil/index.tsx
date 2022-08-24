import * as React from 'react';
import { TextInput } from 'react-native';
import { InfoTitle } from '../Perfil/style';
import { Container, PokebolaBg, Title } from '../Pokédex/style'

function EditarPerfil() {
    return (
        <Container>
            <PokebolaBg source={require('../../assets/PokeballBG.png')} />            
        </Container>
    );
}

export default EditarPerfil;