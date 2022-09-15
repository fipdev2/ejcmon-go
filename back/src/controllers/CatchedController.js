const Catched = require('../models/Catched');
const Pokémon = require('../models/Pokémon');
const Trainer = require('../models/Trainer');
const pokemonController = require('../controllers/PokémonController');
const Auth = require('../config/auth');

async function authCapture(req, res) {
    const { pokemonId } = req.params;
    try {
        const token = Auth.getToken(req);
        const payload = Auth.decodeJwt(token);
        let trainer = await Trainer.findByPk(payload.sub);
        const pokémon = await Pokémon.findByPk(pokemonId);
        await trainer.addCatched(pokémon);
        await Catched.update(req.body, { where: { PokémonId: pokemonId, TrainerId: payload.sub } })
        return res.status(200).json({ msg: "Pokémon capturado!" });

    } catch (error) {
        return res.status(500).json({ error: "Pokémon bateu, desviou e não entrou na sua pokebola" });
    }
}

async function authRemove(req, res) {
    const { pokemonId } = req.params;
    const token = Auth.getToken(req);
    const payload = Auth.decodeJwt(token);
    try {
        let trainer = await Trainer.findByPk(payload.sub);
        const pokémon = await Pokémon.findByPk(pokemonId);
        await trainer.removeCatched(pokémon);
        return res.status(200).json({ msg: "Você abandonou um pokémon :(" });
    } catch (err) {
        return res.status(500).json({ err: "Erro ao remover pokémon" });

    }
}

async function authIndex(req, res) {
    const token = Auth.getToken(req);
    const payload = Auth.decodeJwt(token);
    try {
        let pokeArray = [];
        const catched = await Catched.findAll({ where: { TrainerId: payload.sub } });
        for(i = 0; i < catched.length; i++){
            pokeArray.push(await Pokémon.findByPk(catched[i].PokémonId));
        }
        return res.status(200).json({catched: pokeArray});
    }
    catch (err) {
        return res.status(500).json({ err: "Não achamos seus pokémons" })
    }
}

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
        let pokeArray;
        const catched = await Catched.findAll({ where: { TrainerId: trainerId } });
        for(i = 0; i < catched.length; i++){
            pokeArray.push(await pokemonController.show(catched[i].PokémonId));
        }
        return res.status(200).json({catched: pokeArray});
    }
    catch (err) {
        return res.status(500).json({ err: "Não achamos seus pokémons" })
    }
}

module.exports = {
    authCapture, 
    capture, 
    authRemove, 
    remove, 
    authIndex,
    index
}