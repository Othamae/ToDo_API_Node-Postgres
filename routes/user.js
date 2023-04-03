const express = require('express')
const { userRegister, userLogin } = require('../controllers/user')
const { getAllTaskByUser } = require('../controllers/task')
const { validatorLogin, validatorRegister } = require('../validators/user')

const router = express.Router()

router.post('/user/register', validatorRegister, userRegister)

router.post('/user/login', validatorLogin, userLogin)

router.get('/user/:id/task', getAllTaskByUser)

module.exports = router
