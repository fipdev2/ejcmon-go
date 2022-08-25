import React from 'react';
import { Container, PokebolaBg, Title } from '../Pokédex/style';
import { PokeCard } from '../../components/PokeCard';
import { user } from '../../constants/user';
import { pokemons } from '../../constants/pokemons';

function MeusPokémons() {
    return (
        <Container>
            <PokebolaBg source={require('../../assets/PokeballBG.png')} />
            <Title>Meus Pokémons</Title>

            {pokemons.map((pokemon) => {
                if (user.capturedPokemons.includes(pokemon.index)) {
                    return (
                        <PokeCard
                            key={pokemon.index}
                            pokeName={pokemon.name}
                            pokeType={pokemon.type}
                            index={pokemon.index}
                            height={pokemon.height}
                            isPokedex={false}
                        />
                    )
                }
            }
            )}

        </Container>
    );
}

export default MeusPokémons;