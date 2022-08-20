const { Router } = require('express');
//importações das controllers
const PokémonController = require('../controllers/PokémonController');
const TrainerController = require('../controllers/TrainerController');

const router = Router();
//Pokémon Routes
router.get('/pokémons', PokémonController.index);
router.get('/pokémons/:id', PokémonController.show);
router.post('/pokémons', PokémonController.create);
router.delete('/pokémon/:id', PokémonController.destroy)

//Trainer Routes
router.get('/trainers', TrainerController.index);
router.get('/trainers/:id', TrainerController.show);
router.post('/trainers', TrainerController.create);
router.put('/trainers/:id', TrainerController.update);
router.delete('/trainers/:id', TrainerController.destroy);

module.exports = router;