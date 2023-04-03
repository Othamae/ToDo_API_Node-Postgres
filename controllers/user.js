
const { handleHTTPError } = require('../middlewares/handleHTTPError')
const { tokenSign } = require('../middlewares/handleJWT')
const { encrypt, compare } = require('../middlewares/handlePassword')
const userModel = require('../models/user')

const userRegister = async (req, res) => {
  try {
    const { body } = req
    const { name, email, password } = body
    const newUser = {
      name,
      email,
      password: await encrypt(password)
    }
    await userModel.create(newUser)
    const userCreated = await userModel.findOne({ where: { email } })
    const data = {
      id: userCreated.id,
      name,
      email
    }
    res.status(201).send({ data })
  } catch (error) {
    console.log((error.errors[0].message).toUpperCase())
    const errMessage = (error.errors[0].message).toUpperCase()
    handleHTTPError(res, errMessage || 'ERROR_REGISTER_USER')
  }
}

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await userModel.findOne({ where: { email } })
    const checkPassword = await compare(password, user.password)
    if (!checkPassword) {
      return handleHTTPError(res, 'INCORRECT_PASSWORD_OR_EMAIL', 401)
    }
    const data = {
      id: user.id,
      name: user.name,
      email: user.email,
      token: await tokenSign(user)
    }
    res.status(200).send({ data })
  } catch (error) {
    console.log(error)
    handleHTTPError(res, 'ERROR_LOGIN_USER', 401)
  }
}

module.exports = { userRegister, userLogin }
