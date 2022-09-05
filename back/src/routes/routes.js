const { Router } = require('express');
//importações
const PokémonController = require('../controllers/PokemonController');
const TrainerController = require('../controllers/TrainerController');
const CatchedController = require('../controllers/CatchedController');
const AuthController = require('../controllers/AuthController');
const passport = require('passport');
// const validator = require('../config/validator')

const router = Router();
//Auth Routes
router.use('/private', passport.authenticate("jwt", { session: false }));
router.post('/login', AuthController.login);
router.get('/private/getDetails', AuthController.getDetails);
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
router.post('/private/mypokemons/:pokemonId', CatchedController.capture)
router.get('/private/mypokemons', CatchedController.index)
router.delete('/private/mypokemons/:pokemonId', CatchedController.remove)


module.exports = router;