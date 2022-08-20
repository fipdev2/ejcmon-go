require('../../config/dotenv')();
require('../../config/sequelize');

//importação das seeders
const seedTrainer = require('./seedTrainer');

  (async () => {
    try {
      await seedTrainer();

    }
    catch (err) {
      console.log(err)
    }
  })();
