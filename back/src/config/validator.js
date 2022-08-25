const { body } = require("express-validator");

// Validação do Usuário
const trainerValidator = (method) => {
    switch (method) {
        case 'create': {
            return [
                body('name').exists().withMessage("Preencha o campo com seu nome.").isLength({ min: 1 }),
                body('email').exists().withMessage("Preencha com o seu email.").isLength({ min: 5, max: 50 }).isEmail().withMessage('Insira um e-mail válido.'),
                body('cpf').exists().withMessage("Preencha o campo com o seu CPF.").isLength({ min: 11, max: 11 }).withMessage('Insira um CPF válido.'),
                body('password').exists().withMessage("Insira a senha desejada.").isLength({ min: 8 }).withMessage('Insira uma senha de pelo menos 8 dígitos.')
            ]
        }
        case 'update': {
            return [
                body('name').exists().withMessage("Preencha o campo com seu nome.").isLength({ min: 1 }),
                body('email').exists().withMessage("Preencha com o seu email.").isLength({ min: 5, max: 50 }).isEmail().withMessage('Insira um e-mail válido.'),
                body('cpf').exists().withMessage("Preencha o campo com o seu CPF.").isLength({ min: 11, max: 11 }).withMessage('Insira um CPF válido.'),
                body('password').exists().withMessage("Insira a senha desejada.").isLength({ min: 8 }).withMessage('Insira uma senha de pelo menos 8 dígitos.')
            ]
        }
    }
}
module.exports = {
    trainerValidator
}