const Pokémon = require('../models/Pokémon');

//mostra todos os pokémons
async function index(req, res) {
    try {
        const pokémon = await Pokémon.findAll();
        return res.status(200).json({ pokémon })
    }
    catch (err) {
        return res.status(500).json({ err })
    }
}
//mostra apenas um pokémon
async function show(req, res) {
    const { id } = req.params;
    try {
        const pokémon = await Pokémon.findByPk(id);
        return res.status(200).json({ pokémon });
    }
    catch (err) {
        return res.status(500).json("Este id não pertence a nenhum pokémon")
    }
}
//cria um pokémon
async function create(req, res) {

    try {
        const pokémon = await Pokémon.create(req.body);
        return res.status(201)
    }
    catch (err) {
        return res.status(500)
    }
}
// não vai se deletar pokémon
// async function destroy(req, res) {
//     const { id } = req.params;
//     try {
//         const deleted = await Pokémon.destroy({ where: { id: id } })
//         if (deleted) {
//             return res.status(202).json("Pokémon deletado com sucesso")
//         }
//         throw new Error();
//     }
//     catch (err) {
//         return res.status(500).json("Pokémon não existe")
//     }
//}
module.exports = {
    index, show, create
}