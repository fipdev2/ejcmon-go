import * as React from 'react';
import { Container, Data, DataText, DataWrapper, IconWrapper, InfoTop, InfoTxt, InfoWrapper, PokebolaBg, PokeCard, PokeIcon, Search, SearchWrapper, Title, Type, YellowText } from '../Pokédex/style';
import { GoSearch } from 'react-icons/go'
import { BtnsWrapper } from './style';
import { AiFillCloseCircle, AiFillStar } from 'react-icons/ai'
import { TouchableOpacity } from 'react-native';

function MeusPokémons() {
    return (
        <Container>
            <PokebolaBg source={require('../../assets/PokeballBG.png')} />
            <Title>Meus Pokémons</Title>
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
                    <BtnsWrapper>
                        <TouchableOpacity>
                            <AiFillStar style={{ fontSize: '48px', color: 'white', opacity: 0.3 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AiFillCloseCircle style={{ fontSize: '48px', color: 'white', opacity: 0.3 }} />
                        </TouchableOpacity>
                    </BtnsWrapper>
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
                    <BtnsWrapper>
                        <TouchableOpacity>
                            <AiFillStar style={{ fontSize: '48px', color: 'white', opacity: 0.3 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AiFillCloseCircle style={{ fontSize: '48px', color: 'white', opacity: 0.3 }} />
                        </TouchableOpacity>
                    </BtnsWrapper>
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
                    <BtnsWrapper>
                        <TouchableOpacity>
                            <AiFillStar style={{ fontSize: '48px', color: 'white', opacity: 0.3 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AiFillCloseCircle style={{ fontSize: '48px', color: 'white', opacity: 0.3 }} />
                        </TouchableOpacity>
                    </BtnsWrapper>
                </InfoWrapper>
            </PokeCard>
        </Container>
    );
}

export default MeusPokémons;