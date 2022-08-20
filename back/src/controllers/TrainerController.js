const Trainer = require('../models/Trainer');

//mostrar todos os treinadores
async function index(req, res) {
    try {
        const trainers = await Trainer.findAll();
        return res.status(200).json({ trainers });
    }
    catch (err) {
        return res.status(500).json({ err });
    }
}
//filtrar um treinador por id
async function show(req, res) {
    const { id } = req.params;
    try {
        const trainer = await Trainer.findByPk(id);
        return res.status(200).json({ trainer })
    }
    catch (err) {
        return res.status(500).json("Treinador não encontrado")
    }
}

//criar perfil de treinador
async function create(req, res) {
    try {
        const trainer = await Trainer.create();
        return res.status(201).json("Treinador registrado com sucesso :D");
    }
    catch (err) {
        return res.status(500).json({ err })
    }
}
//atualizar alguma instância do treinador
async function update(req, res) {
    const { id } = req.params;
    try {
        const [updated] = await Trainer.update(req.body, { where: { id: id } });
        if (updated) {
            const trainer = await Trainer.findByPk(id);
            return res.status(202).send(trainer);
        }
    }
    catch (err) {
        return res.status(500).json({ err })
    }
}
//deleta o treinador
async function destroy(req, res) {
    const { id } = req.params;
    try {
        const deleted = await Trainer.destroy({ where: { id: id } })
        if (deleted) {
            return res.status(202).json("Treinador deletado :(")
        }
    }
    catch (err) {
        return res.status(500).json({ err });
    }
}

module.exports = {
    create, show, index, update, destroy
}