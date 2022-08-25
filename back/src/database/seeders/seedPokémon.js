const faker = require('faker-br');
const Pokémon = require('../../models/Pokémon');
const Pokedex = require('pokedex-promise-v2')();
const P = new Pokedex();



const seedPokémon = async function () {
    const PokémonArray = [];
    let i;
    for (i = 1; i < 800; i++) {
        P.getPokemonByName(i, res, error).then((res) => {
            PokémonArray.push({
                name: res.name,
                height: res.height,
                pokédex_index: res.id,
                pokémon_type: res.types[0].type,
                sex: faker.random.arrayElement(['male', 'female']),
                photo: res.sprites.front_default
            })
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