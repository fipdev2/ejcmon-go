const { Router } = require('express');
//importações das controllers
const PokémonController = require('../controllers/PokémonController');
const TrainerController = require('../controllers/TrainerController');
const CatchedController = require('../controllers/CatchedController');
//importação da auth
const AuthController = require('../controllers/AuthController');
const passport = require('passport');

const router = Router();
//Pokémon Routes
router.get('/pokémons', PokémonController.index);
router.get('/pokémons/:id', PokémonController.show);
router.post('/pokémons', PokémonController.create);

//Trainer Routes
router.get('/private/trainers', TrainerController.index);
router.get('/private/trainers/:id', TrainerController.show);
router.post('/trainers', TrainerController.create);
router.put('/private/trainers/:id', TrainerController.update);
router.delete('/private/trainers/:id', TrainerController.destroy);

//Catched Routes
router.get('/private/my-pokemons', CatchedController.index);
router.get('/private/my-pokemons/:id', CatchedController.show);
router.post('/private/my-pokemons', CatchedController.create);
router.delete('/private/my-pokemons/:id', CatchedController.destroy);

//Auth Routes
router.use('/private', passport.authenticate("jwt", { session: false }));
router.post('/login', AuthController.login);
router.get('/private/getDetails', AuthController.getDetails);

module.exports = router;