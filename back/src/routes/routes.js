const { Router } = require('express');
//importações
const PokémonController = require('../controllers/PokémonController');
const TrainerController = require('../controllers/TrainerController');
const CatchedController = require('../controllers/CatchedController');
const AuthController = require('../controllers/AuthController');
const passport = require('passport');
const validator = require('../config/validator')

const router = Router();
//Pokémon Routes
router.get('/pokemons', PokémonController.index);
router.get('/pokemons/:id', PokémonController.show);
router.post('/pokemons', PokémonController.create);

//Trainer Routes
router.get('/trainers', TrainerController.index);
router.get('/private/trainers/:id', TrainerController.show);
router.post('/trainers',  TrainerController.create);
router.put('/private/trainers/:id',  TrainerController.update);
router.delete('/private/trainers/:id', TrainerController.destroy);

//Catched Routes
router.get('/private/mypokemons/:trainerId', CatchedController.index)
router.post('/private/mypokemons/:trainerId/:pokemonId', CatchedController.capture)
router.delete('/private/mypokemons/:trainerId/:pokemonId', CatchedController.remove)

//Auth Routes
router.use('/private', passport.authenticate("jwt", { session: false }));
router.post('/login', AuthController.login);
router.get('/private/getDetails', AuthController.getDetails);

module.exports = router;