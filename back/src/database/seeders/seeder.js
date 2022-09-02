require('../../config/dotenv')();
require('../../config/sequelize');

//importação das seeders
const seedTrainer = require('./seedTrainer');
const seedPokémon = require('./seedPokemon');
  (async () => {
    try {
      await seedTrainer();
      await seedPokémon();
    }
    catch (err) {
      console.log(err)
    }
  })();
