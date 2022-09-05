const Pokemon = require('../../models/Pokemon');
const faker = require('faker-br');
const axios = require('axios');


const seedPokemon = async function () {
    const PokemonArray = [];
    let i;
    try {
        for (i = 1; i < 50; i++) {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => {
                PokemonArray.push({
                    name: res.data.name,
                    height: res.data.height,
                    pokédex_index: res.data.id,
                    pokémon_type: res.data.types[0].type.name,
                    sex: faker.random.arrayElement(['male', 'female', 'non-binary']),
                    photo: res.data.sprites.front_default
                })
            })
        }
        await Pokemon.sync({ force: true });
        await Pokemon.bulkCreate(PokemonArray);
    }
    catch (err) {
        console.log(err);
    }
};
module.exports = seedPokemon;