import React, { useEffect, useState } from "react";
import { Container, PokebolaBg, Title } from "./style";
import { PokeCard } from "../../components/PokeCard";
import { SearchBar } from "../../components/SearchBar";
import { pokemons } from "../../constants/pokemons";
import { ScrollView } from "react-native";
import pokemonServices from '../../services/pokemonServices';

interface pokemonData {
  id: number,
  name: string;
  height: number;
  pokédex_index: number;
  pokémon_type: string;
  sex: string;
  photo: string;
}

function Pokédex() {
  const [searchValue, setSearchValue] = useState("");
  const [pokemons, setPokemons] = useState<pokemonData[]>();

  const getSearchValue = (event: any) => {
    setSearchValue(event.target.value);
    console.log(searchValue);
  };

  useEffect(() => {
    pokemonServices.getPokedex().then(response => {
      console.log(response?.data.pokémon);
      setPokemons(response?.data.pokémon);
    })
  },[])

  return (
    <Container>
      <PokebolaBg source={require("../../assets/PokeballBG.png")} />
      <Title>Pokédex</Title>

      <SearchBar searchValue={getSearchValue} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginVertical: 20 }}
      >
        {/* Mapear o array */}
        {/* {pokemons.map((pokemon) => (
          <PokeCard
            key={pokemon.index}
            pokeName={pokemon.name}
            pokeType={pokemon.type}
            index={pokemon.index}
            height={pokemon.height}
            isPokedex={true}
          />
        ))} */}
        {pokemons?.map((pokemon) => (
          <PokeCard
            key={pokemon.id}
            pokeName={pokemon.name}
            pokeType={pokemon.pokémon_type}
            index={pokemon.id}
            height={pokemon.height}
            isPokedex={true} 
            pokeImage={pokemon.photo} 
            pokeFunction={undefined}          />
        ))}
      </ScrollView>
    </Container>
  );
}

export default Pokédex;
