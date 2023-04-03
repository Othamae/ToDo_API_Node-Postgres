const { check } = require('express-validator')
const { validateResult } = require('../middlewares/handleValidators')

const validatorCreateTask = [
  check('title')
    .exists()
    .notEmpty(),
  check('completed')
    .optional()
    .isBoolean(),
  check('user_id')
    .if((value, { req }) => req.method === 'POST')
    .isNumeric(),
  (req, res, next) => {
    return validateResult(req, res, next)
  }
]

const validatorGetTask = [
  check('id')
    .exists()
    .notEmpty(),
  check('title')
    .exists()
    .notEmpty(),
  (req, res, next) => {
    return validateResult(req, res, next)
  }
]

const validatorUpdateTask = [
  check('title')
    .optional()
    .notEmpty(),
  check('completed')
    .optional()
    .isBoolean(),
  (req, res, next) => {
    return validateResult(req, res, next)
  }
]
module.exports = { validatorCreateTask, validatorGetTask, validatorUpdateTask }
