const { Router } = require('express');
//importações das controllers
const PokémonController = require('../controllers/PokémonController');
const TrainerController = require('../controllers/TrainerController');
const CatchedController = require('../controllers/CatchedController')

const router = Router();
//Pokémon Routes
router.get('/pokémons', PokémonController.index);
router.get('/pokémons/:id', PokémonController.show);
router.post('/pokémons', PokémonController.create);

//Trainer Routes
router.get('/trainers', TrainerController.index);
router.get('/trainers/:id', TrainerController.show);
router.post('/trainers', TrainerController.create);
router.put('/trainers/:id', TrainerController.update);
router.delete('/trainers/:id', TrainerController.destroy);

//Catched Routes
router.get('/my-pokemons', CatchedController.index);
router.get('/my-pokemons/:id', CatchedController.show);
router.post('/my-pokemons', CatchedController.create);
router.delete('/my-pokemons/:id', CatchedController.destroy);

module.exports = router;