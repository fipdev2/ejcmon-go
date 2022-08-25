import * as React from 'react';
import Botao from '../../components/Botao';
import { PokebolaBg } from '../Pokédex/style';
import { Container2, EditInfo, FieldInput, Titulo } from './style';

export default function EditarPerfil() {
    return (
        <Container2>

            <PokebolaBg source={require('../../assets/PokeballBG.png')} />

            <EditInfo>
                <Titulo>Nome</Titulo>
                <FieldInput
                    placeholder='Thiago Barcellos'
                />

                <Titulo>Email</Titulo>
                <FieldInput
                    placeholder='thiagobar@ejcm.com.br'
                />

                <Titulo>CPF</Titulo>
                <FieldInput
                    placeholder='123.456.789-10'
                />
                
            </EditInfo>

            <Botao param={"Salvar"}/>

        </Container2>    
    );
}