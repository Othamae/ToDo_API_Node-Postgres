const { check } = require('express-validator')
const { validateResult } = require('../middlewares/handleValidators')

const validatorRegister = [
  check('email')
    .exists()
    .notEmpty()
    .isEmail(),
  check('name')
    .exists()
    .notEmpty(),
  check('password')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 15 }),
  (req, res, next) => {
    return validateResult(req, res, next)
  }

]

const validatorLogin = [
  check('password')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 15 }),
  check('email')
    .exists()
    .notEmpty()
    .isEmail(),

  (req, res, next) => {
    return validateResult(req, res, next)
  }
]

module.exports = { validatorRegister, validatorLogin }
