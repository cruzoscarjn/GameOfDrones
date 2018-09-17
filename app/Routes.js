const express = require('express');

const ScoresController = require('./controllers/ScoresController');
const MovementsController = require('./controllers/MovementsController');

const router = express.Router();

router.get('/get_scores', ScoresController.getScores);
router.get('/get_movements', MovementsController.getMovements);

router.post('/insert_scores', ScoresController.insertScores);

module.exports = router;
