const express = require('express')
const { userRegister, userLogin } = require('../controllers/user')
const { getAllTaskByUser } = require('../controllers/task')

const router = express.Router()

router.post('/user/register', userRegister)

router.post('/user/login', userLogin)

router.get('/user/:id/task', getAllTaskByUser)

module.exports = router
