import React, { useContext, useEffect, useState } from "react";
import { Container, PokebolaBg, Title } from "../Pokédex/style";
import { PokeCard } from "../../components/PokeCard";
import { ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { pokemons } from "../../constants/pokemons";
import pokemonServices from '../../services/pokemonServices';
import { AuthContext } from '../../contexts/auth';

interface pokemonData {
  id: number,
  name: string;
  height: number;
  pokédex_index: number;
  pokémon_type: string;
  sex: string;
  photo: string;
}

function MeusPokémons() {
  const Auth = useContext(AuthContext);
  const [myPokemons, setMyPokemons] = useState<pokemonData[]>();

  const getMyPokemons = () => {
    pokemonServices.catchedPokemons(Auth.token).then(response => {
      setMyPokemons(response?.data.catched);
    })
  }

  useFocusEffect(
    React.useCallback(() => {
      // tela está ativa
      getMyPokemons();
      return () => {
        // tela está inativa
        setMyPokemons([]);
      };
    }, [])
  );

  const reload = () => {
    setMyPokemons([]);
    getMyPokemons();
  }

  return (
    <Container>
      <PokebolaBg source={require("../../assets/PokeballBG.png")} />
      <Title>Meus Pokémons</Title>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginVertical: 20 }}
      >
        {/* {pokemons.map((pokemon) => {
            return (
              <PokeCard
                key={pokemon.index}
                pokeName={pokemon.name}
                pokeType={pokemon.type}
                index={pokemon.index}
                height={pokemon.height}
                isPokedex={false}
              />
            );
        })} */}
        {myPokemons?.map((pokemon) => {
            return (
              <PokeCard
                key={pokemon.pokédex_index}
                pokeName={pokemon.name}
                pokeType={pokemon.pokémon_type}
                index={pokemon.pokédex_index}
                height={pokemon.height}
                isPokedex={false} 
                pokeImage={pokemon.photo} 
                pokeFunction={reload}              
              />
            );
        })}
      </ScrollView>
    </Container>
  );
}

export default MeusPokémons;
