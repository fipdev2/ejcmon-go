import React, { useContext, useEffect } from "react";
import {
  Btn,
  BtnIcon,
  BtnTxt,
  Data,
  DataText,
  DataWrapper,
  IconWrapper,
  InfoTop,
  InfoTxt,
  InfoWrapper,
  Type,
  YellowText,
  Card,
  PokeIcon,
  BtnsWrapper,
} from "./style";
import { Alert, TouchableOpacity } from "react-native";
import { AiFillCloseCircle, AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { AuthContext } from "../../contexts/auth";
import pokemonServices from '../../services/pokemonServices';

type PokeCardInfo = {
  pokeName: string;
  pokeType: string;
  pokeImage: string;
  index: number;
  height: number;
  isPokedex: boolean;
  pokeFunction: any;
};

export function PokeCard({
  pokeName,
  pokeImage,
  index,
  height,
  pokeType,
  isPokedex,
  pokeFunction
}: PokeCardInfo) {
  const Auth = useContext(AuthContext);
  const [isFavourite, setIsFavourite] = useState(false);
  const [isCaptured, setIsCaptured] = useState(false);
  const [capturedPokemon, setCapturedPokemon] = useState<any[]>();
  let typeBg: string;
  let starColor: string;
  let starOpacity: number;

  const Capture = () => {
    if (isCaptured) {
      //libertar o pokemon
      pokemonServices.releasePokemon(Auth.token, index).then(response => {
        setIsCaptured(false);
      })
    } else {
      //capturar o pokemon
      pokemonServices.capturePokemon(Auth.token, index).then(response => {
        setIsCaptured(true);
      });
    }
  };

  const release = () => {
    pokemonServices.releasePokemon(Auth.token, index).then(response => {
      pokeFunction();
      setIsCaptured(false);
    })
  }

  // Define a cor de fundo em relação ao tipo de Pokémon
  switch (pokeType) {
    case "fire":
      typeBg = "#FF9741";
      break;

    case "water":
      typeBg = "#3692DC";
      break;

    case "grass":
      typeBg = "#38BF4B";
      break;

    case "electric":
      typeBg = "#FBD100";
      break;
  }

  // Define a cor e opacidade da estrela de favoritos
  if (isFavourite) {
    starColor = "yellow";
    starOpacity = 0.8;
  } else {
    starColor = "white";
    starOpacity = 0.3;
  }

  return (
    <Card>
      <IconWrapper style={{ backgroundColor: `${typeBg!}` }}>
        {/* <PokeIcon source={require(`../../assets/${pokeName}.png`)} /> */}
        <PokeIcon source={{ uri: pokeImage }} />
      </IconWrapper>
      <InfoWrapper>
        <InfoTop>
          <InfoTxt>{pokeName}</InfoTxt>
          <Type source={require(`../../assets/${pokeType}.png`)} />
          {/* <Type source={require(`../../assets/fire.png`)} /> */}
        </InfoTop>
        <DataWrapper>
          <Data>
            <DataText>Index:</DataText>
            <YellowText>{index}</YellowText>
          </Data>
          <Data>
            <DataText>Altura:</DataText>
            <YellowText>{height} pés</YellowText>
          </Data>
        </DataWrapper>

        {isPokedex ? (
          isCaptured ? (
            <Btn onPress={Capture}>
              <BtnTxt>Capturado</BtnTxt>
              {/* <BtnIcon source={require("../../assets/ActivePokeball.png")} /> */}
            </Btn>
          ) : (
            <Btn onPress={Capture}>
              <BtnTxt>Capturar</BtnTxt>
              <BtnIcon source={require("../../assets/ActivePokeball.png")} />
            </Btn>
          )
        ) : (
          <BtnsWrapper>
            <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
              <AiFillStar
                style={{
                  fontSize: "48px",
                  color: `${starColor}`,
                  opacity: `${starOpacity}`,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={release}>
              <AiFillCloseCircle
                style={{ fontSize: "48px", color: "white", opacity: 0.3 }}
              />
            </TouchableOpacity>
          </BtnsWrapper>
        )}
      </InfoWrapper>
    </Card>
  );
}
