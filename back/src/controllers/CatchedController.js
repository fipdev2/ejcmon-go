const Catched = require('../models/Catched');
const Pokémon = require('../models/Pokémon');
const Trainer = require('../models/Trainer');

async function capture(req, res) {
    const { trainerId, pokemonId } = req.params;
    try {
        let trainer = await Trainer.findByPk(trainerId);
        const pokémon = await Pokémon.findByPk(pokemonId);
        await trainer.addCatched(pokémon);
        await Catched.update(req.body, { where: { PokémonId: pokemonId, TrainerId: trainerId } })
        return res.status(200).json({ msg: "Pokémon capturado!" });

    } catch (error) {
        return res.status(500).json({ error: "Pokémon bateu, desviou e não entrou na sua pokebola" });
    }
}

async function remove(req, res) {
    const { trainerId, pokemonId } = req.params;
    try {
        let trainer = await Trainer.findByPk(trainerId);
        const pokémon = await Pokémon.findByPk(pokemonId);
        await trainer.removeCatched(pokémon);
        return res.status(200).json({ msg: "Você abandonou um pokémon :(" });
    } catch (err) {
        return res.status(500).json({ err: "Erro ao remover pokémon" });

    }
}
async function index(req, res) {
    const { trainerId } = req.params;
    try {
        const catched = await Catched.findAll({ where: { TrainerId: trainerId } });
        return res.status(200).json({catched});
    }
    catch (err) {
        return res.status(500).json({ err: "Não achamos seus pokémons" })
    }
}
module.exports = {
    capture, remove, index
}