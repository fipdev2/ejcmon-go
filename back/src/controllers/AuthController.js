const Auth = require('../config/auth');
const Trainer = require('../models/Trainer');

async function login(req, res) {
    try {
        const trainer = await Trainer.findOne({ where: { email: req.body.email } })
        if (!trainer) {
            return res.status(404).json('Treinador não cadastrado :(');
        }
        const { password } = req.body;
        if (Auth.checkPassword(password, trainer.hash, trainer.salt)) {
            const token = Auth.generateJWT(trainer);
            return res.status(202).json({ token });
        }
        else {
            return res.status(401).json('Senha incorreta, treinador!')
        }
    }
    catch (err) {
        return res.status(500).json({ err })
    }
}

async function getDetails(req, res) {
    try {
        const token = Auth.getToken(req);
        const payload = Auth.decodeJwt(token);
        const trainer = await Trainer.findByPk(payload.sub);
        if (!trainer)
            return res.status(404).json({ message: "Treinador não encontrado" });
        return res.status(200).json({ trainer: trainer });
    } catch (err) {
        return res.status(500).json({ err })
    }
}
module.exports = { login, getDetails }
