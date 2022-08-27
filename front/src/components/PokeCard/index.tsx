import React from 'react';
import Botao from '../Botao';
import { Btn, BtnIcon, BtnTxt, Data, DataText, DataWrapper, IconWrapper, InfoTop, InfoTxt, InfoWrapper, Type, YellowText, Card, PokeIcon, BtnsWrapper } from './style';
import { TouchableOpacity } from 'react-native';
import { AiFillCloseCircle, AiFillStar } from 'react-icons/ai'
import { useState } from 'react';


type PokeCardInfo = {
    pokeName: string;
    pokeType: string;
    index: number;
    height: number;
    isPokedex: boolean;
}

export function PokeCard({ pokeName, index, height, pokeType, isPokedex } : PokeCardInfo) {
    const [isFavourite, setIsFavourite] = useState(false);
    let typeBg : string;
    let starColor : string;
    let starOpacity : number;

    // Define a cor de fundo em relação ao tipo de Pokémon 
    switch (pokeType) {
        case 'fire': 
            typeBg = '#FF9741';
            break;
        
        case 'water': 
            typeBg = '#3692DC';
            break;
        
        case 'grass': 
            typeBg = '#38BF4B';
            break;
        
        case 'electric': 
            typeBg = '#FBD100';
            break;
    }

    // Define a cor e opacidade da estrela de favoritos
    if (isFavourite) {
        starColor = 'yellow';
        starOpacity= 0.8;
    } else {
        starColor = 'white';
        starOpacity = 0.3;
    }

    return(
        <Card>
            <IconWrapper style={{backgroundColor: `${typeBg!}`}}>
                <PokeIcon source={require(`../../assets/${pokeName}.png`)} />
            </IconWrapper>
            <InfoWrapper>
                <InfoTop>
                    <InfoTxt>
                        {pokeName}
                    </InfoTxt>
                    <Type source={require(`../../assets/${pokeType}.png`)} />
                </InfoTop>
                <DataWrapper>
                    <Data>
                        <DataText>
                            Index:
                        </DataText>
                        <YellowText>
                            {index}
                        </YellowText>
                    </Data>
                    <Data>
                        <DataText>
                            Altura:
                        </DataText>
                        <YellowText>
                            {height} pés
                        </YellowText>
                    </Data>
                </DataWrapper>

                {isPokedex ? 
                    <Btn>
                        <BtnTxt>Capturar</BtnTxt>
                        <BtnIcon source={require('../../assets/ActivePokeball.png')} />
                    </Btn>
                    : 
                    <BtnsWrapper>
                        <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
                            <AiFillStar style={{ fontSize: '48px', color: `${starColor}`, opacity: `${starOpacity}` }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AiFillCloseCircle style={{ fontSize: '48px', color: 'white', opacity: 0.3 }} />
                        </TouchableOpacity>
                    </BtnsWrapper>
                }   

            </InfoWrapper>
        </Card>
    );
}