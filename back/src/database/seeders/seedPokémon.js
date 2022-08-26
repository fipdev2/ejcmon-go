const faker = require('faker-br');
const Pokémon = require('../../models/Pokémon');
const { pokemons } = require('./constants');




const seedPokémon = async function () {
    let PokémonArray = [];
    for (let i = 0; i < pokemons.length; i++) {
        PokémonArray.push({
            name: pokemons[i].name,
            height: pokemons[i].height,
            pokédex_index: pokemons[i].pokédex_index,
            pokémon_type: pokemons[i].pokémon_type,
            sex: pokemons[i].sex,
            photo: pokemons[i].photo
        })
    }
    try {
        await Pokémon.sync({ force: true });
        await Pokémon.bulkCreate(PokémonArray);
    }
    catch (err) {
        console.log(err);
    }
};
module.exports = seedPokémon;