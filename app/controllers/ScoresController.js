const ScoresController = module.exports;

const Validator = require('../validators/Validator');
const ScoreSchema = require('../validators/ScoresSchema');
const GetScoreSchema = require('../validators/GetScoresSchema');
const { BaseError } = require('../handlers/ErrorHandler');
const ScoresRepository = require('../repositories/ScoresRepository');

/**
 * @api {get} /api/get_scores List player score
 * @apiName GetScores
 * @apiGroup gameOfDrones
 * @apiDescription Get scores for specified player name.
 *
 * @apiParam (Parameter) {String} player_name  player to find scores.
 * @apiParam (Parameter) {String} page_size expected page size.
 * @apiParam (Parameter) {String} page number.
 *
 * @apiSuccessExample Success Response:
 *  HTTP/1.1 200 {
 *    "message": "success",
 *    "result": {
 *        "lose": 10,
 *        "win": 5
 *        "table": [
*           {
*             "player_1": "player name",
*             "player_2": "player name",
*             "winer": "player_name",
*             "wins_with": 'rock'
*           }
 *        ],
 *        "last_page": 2,
 *        "current_page": 2
 *      }
 *   }
 *
 * @apiError (400) {Json} ValidationError error on bad json
 * @apiErrorExample ValidationError
 *  HTTP/1.1 400 Bad Request
 * [
 *   {
 *       "keyword": "required",
 *       "dataPath": "",
 *       "schemaPath": "#/required",
 *       "params": {
 *           "missingProperty": "player_name"
 *       },
 *       "message": "should have required property 'player_name'"
 *   }
 *]
 *
 * @apiError (500) {Object} Error on internal runtime, should return anything.
 */
ScoresController.getScores = (req, res, next) => {
  const { query } = req;
  const scoreValidator = Validator(GetScoreSchema);
  const valid = scoreValidator.validate(query);

  if (!valid) throw new BaseError(scoreValidator.getError(), 400);

  ScoresRepository.find(query).then((result) => {
    res.send({
      message: 'success',
      result,
    });
  }).catch((err) => {
    next(err);
  });
};

/**
 * @api {post} /api/insert_scores Insert game scores
 * @apiName postInsertScores
 * @apiGroup gameOfDrones
 * @apiDescription Inserts game results on db.
 *
 * @apiParam (Body) {String} player_1  Player 1 name.
 * @apiParam (Body) {String} player_2  Player 2 name.
 * @apiParam (Body) {String} winer  Winer name.
 * @apiParam (Body) {String} wins_with  Name of winer movement.
 *
 * @apiError (400) {Json} ValidationError error on bad json
 * @apiErrorExample ValidationError
 *  HTTP/1.1 400 Bad Request
 * [
 *   {
 *       "keyword": "maxLength",
 *       "dataPath": ".player_1",
 *       "schemaPath": "#/properties/player_1/maxLength",
 *       "params": {
 *           "limit": 30
 *       },
 *       "message": "should NOT be longer than 30 characters"
 *   }
 *]
 *
 * @apiError (500) {Object} Error on internal runtime, should return anything.
 *
 */
ScoresController.insertScores = (req, res, next) => {
  const { body } = req;
  const scoreValidator = Validator(ScoreSchema);
  const valid = scoreValidator.validate(body);

  if (!valid) throw new BaseError(scoreValidator.getError(), 400);

  ScoresRepository.insert(body).then(() => {
    res.send();
  }).catch((err) => {
    next(err);
  });
};
