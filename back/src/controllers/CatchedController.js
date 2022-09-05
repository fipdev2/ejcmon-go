const Catched = require('../models/Catched');
const Pokemon = require('../models/Pokemon');
const Trainer = require('../models/Trainer');
const Auth = require('../config/auth');

async function capture(req, res) {
    const { pokemonId } = req.params;
    try {
        const token = Auth.getToken(req);
        const payload = Auth.decodeJwt(token);
        let trainer = await Trainer.findByPk(payload.sub);
        const pokemon = await Pokemon.findByPk(pokemonId);
        await trainer.addCatched(pokemon);
        await Catched.update(req.body, { where: { PokemonId: pokemonId, TrainerId: payload.sub } })
        return res.status(200).json({ msg: "Pokémon capturado!" });

    } catch (error) {
        return res.status(500).json({ error: "Pokémon bateu, desviou e não entrou na sua pokebola" });
    }
}

async function remove(req, res) {
    const { pokemonId } = req.params;
    try {
        const token = Auth.getToken(req);
        const payload = Auth.decodeJwt(token);
        const trainer = await Trainer.findByPk(payload.sub);
        const pokemon = await Pokemon.findByPk(pokemonId);
        await trainer.removeCatched(pokemon);
        return res.status(200).json({ msg: "Você abandonou um pokémon :(" });
    } catch (err) {
        return res.status(500).json({ err: "Erro ao remover pokémon" });

    }
}
async function index(req, res) {
    try {
        const token = Auth.getToken(req);
        const payload = Auth.decodeJwt(token);
        const catched = await Catched.findAll({ where: { TrainerId: payload.sub } });
        const pokemonIds = catched.map((tabela) => tabela.PokemonId);
        const pokemons = await Pokemon.findAll({ where: { id: pokemonIds } });
        return res.status(200).json({ pokemons });
    }
    catch (err) {
        return res.status(500).json({ err: "Não achamos seus pokémons" })
    }
}
module.exports = {
    capture, remove, index
}