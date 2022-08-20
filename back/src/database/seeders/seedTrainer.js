const faker = require('faker-br');
const Trainer = require('../../models/Trainer');

const seedTrainer = async function () {
    const TrainerArray = [];
    for (i = 0; i < 10; i++) {
        TrainerArray.push({
            name: faker.name.firstName(),
            email: faker.internet.email(),
            cpf: faker.br.cpf()
        });
    }

    try {
        await Trainer.sync({ force: true });
        await Trainer.bulkCreate(TrainerArray);
    }
    catch (err) {
        console.log(err);
    }
};
module.exports = seedTrainer;