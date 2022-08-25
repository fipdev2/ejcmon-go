import React, { useState } from 'react';
import { Container, PokebolaBg, Title } from './style';
import { PokeCard } from '../../components/PokeCard';
import { SearchBar } from '../../components/SearchBar';
import { pokemons } from '../../constants/pokemons';

function Pokédex() {
    const [searchValue, setSearchValue] = useState('');

    const getSearchValue = (event: any) => {
        setSearchValue(event.target.value);
        console.log(searchValue);
    }

    return (
        <Container>
            <PokebolaBg source={require('../../assets/PokeballBG.png')} />
            <Title>Pokédex</Title>

            <SearchBar searchValue={getSearchValue} />

            {/* Mapear o array */}
            {
                pokemons.map((pokemon) =>
                    <PokeCard
                        key={pokemon.index}
                        pokeName={pokemon.name}
                        pokeType={pokemon.type}
                        index={pokemon.index}
                        height={pokemon.height}
                        isPokedex={true}
                    />
                )
            }
        </Container>
    );
}

export default Pokédex;