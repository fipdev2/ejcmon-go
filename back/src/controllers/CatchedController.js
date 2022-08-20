const Catched = require('../models/Pokémon');

//mostra todos os pokémons capturados
async function index(req, res) {
    try {
        const catcheds = await Catched.findAll()
        return res.status(200).json({ catcheds })
    }
    catch (err) {
        return res.status(500).json({ err })
    }
}
//mostra apenas um pokémon capturado
async function show(req, res) {
    const { id } = req.params;
    try {
        const catched = await Catched.findByPk(id);
        return res.status(200).json({ catched });
    }
    catch (err) {
        return res.status(500).json("Este id não pertence a nenhum dos seus pokémons")
    }
}
//captura um pokémon
async function create(req, res) {
    try {
        const catched = await Catched.create(req.body);
        return res.status(201)
    }
    catch (err) {
        return res.status(500)
    }
}
//deleta um pokémon de "meus pokémons"
async function destroy(req, res) {
    const { id } = req.params;
    try {
        const catched = await Catched.destroy({ where: { id: id } })
        if (deleted) {
            return res.status(202).json("Este pokémon não é mais seu :(")
        }
        throw new Error();
    }
    catch (err) {
        return res.status(500).json("Pokémon não existe")
    }

}
module.exports = {
    index, show, create, destroy
}