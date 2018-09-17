const ScoresController = module.exports;

const MovementsRepository = require('../repositories/MovementsRepository');

/**
 * @api {get} /api/get_movements Get available movements
 * @apiName GetMovements
 * @apiGroup gameOfDrones
 * @apiDescription Get list of available movements.
 *
 * @apiError (500) {Object} Error on internal runtime, should return anything.
 */
ScoresController.getMovements = (req, res, next) =>
  MovementsRepository.find.then((result) => {
    res.send({
      message: 'success',
      result,
    });
  }).catch((err) => {
    next(err);
  });
