require('../../config/dotenv')();
require('../../config/sequelize');

//importação das seeders
const seedTrainer = require('./seedTrainer');
const seedPokémon = require('./seedPokémon');
  (async () => {
    try {
      await seedTrainer();
      await seedPokémon();
    }
    catch (err) {
      console.log(err)
    }
  })();
