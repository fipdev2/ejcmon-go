import * as React from 'react';
import { Btn, BtnIcon, BtnTxt, Container, Data, DataText, DataWrapper, IconWrapper, InfoTop, InfoTxt, InfoWrapper, PokebolaBg, PokeCard, PokeIcon, Search, SearchWrapper, Title, Type, YellowText } from './style';
import { GoSearch } from 'react-icons/go'
import { globalStyles } from '../../global/globalStyles';
import { View, Image, Text, TouchableOpacity } from 'react-native';




function Pokédex() {
    return (
        <Container>
            <PokebolaBg source={require('../../assets/PokeballBG.png')} />
            <Title>Pokédex</Title>
            <SearchWrapper>
                <Search placeholder="Buscar Pokémon">
                </Search>
                <GoSearch style={{ color: globalStyles.colors.primaryPurple, fontSize: "32px" }} />
            </SearchWrapper>
            <PokeCard>
                <IconWrapper>
                    <PokeIcon source={require('../../assets/Charmander.png')} />
                </IconWrapper>
                <InfoWrapper>
                    <InfoTop>
                        <InfoTxt>
                            Charmander
                        </InfoTxt>
                        <Type source={require('../../assets/fire.png')} />
                    </InfoTop>
                    <DataWrapper>
                        <Data>
                            <DataText>
                                Index:
                            </DataText>
                            <YellowText>
                                176
                            </YellowText>
                        </Data>
                        <Data>
                            <DataText>
                                Altura:
                            </DataText>
                            <YellowText>
                                6 pés
                            </YellowText>
                        </Data>
                    </DataWrapper>
                    <Btn>
                        <BtnTxt>Capturar</BtnTxt>
                        <BtnIcon source={require('../../assets/ActivePokeball.png')} />
                    </Btn>
                </InfoWrapper>
            </PokeCard>
            <PokeCard>
                <IconWrapper>
                    <PokeIcon source={require('../../assets/Charmander.png')} />
                </IconWrapper>
                <InfoWrapper>
                    <InfoTop>
                        <InfoTxt>
                            Charmander
                        </InfoTxt>
                        <Type source={require('../../assets/fire.png')} />
                    </InfoTop>
                    <DataWrapper>
                        <Data>
                            <DataText>
                                Index:
                            </DataText>
                            <YellowText>
                                176
                            </YellowText>
                        </Data>
                        <Data>
                            <DataText>
                                Altura:
                            </DataText>
                            <YellowText>
                                6 pés
                            </YellowText>
                        </Data>
                    </DataWrapper>
                    <Btn>
                        <BtnTxt>Capturar</BtnTxt>
                        <BtnIcon source={require('../../assets/ActivePokeball.png')} />
                    </Btn>
                </InfoWrapper>
            </PokeCard>
            <PokeCard>
                <IconWrapper>
                    <PokeIcon source={require('../../assets/Charmander.png')} />
                </IconWrapper>
                <InfoWrapper>
                    <InfoTop>
                        <InfoTxt>
                            Charmander
                        </InfoTxt>
                        <Type source={require('../../assets/fire.png')} />
                    </InfoTop>
                    <DataWrapper>
                        <Data>
                            <DataText>
                                Index:
                            </DataText>
                            <YellowText>
                                176
                            </YellowText>
                        </Data>
                        <Data>
                            <DataText>
                                Altura:
                            </DataText>
                            <YellowText>
                                6 pés
                            </YellowText>
                        </Data>
                    </DataWrapper>
                    <Btn>
                        <BtnTxt>Capturar</BtnTxt>
                        <BtnIcon source={require('../../assets/ActivePokeball.png')} />
                    </Btn>
                </InfoWrapper>
            </PokeCard>
        </Container>

    );
}

export default Pokédex;