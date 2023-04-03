const express = require('express')
const router = express.Router()
const { getAllTask, getTask, addTask, updateTask, deleteTask } = require('../controllers/task')
const { validatorCreateTask, validatorUpdateTask } = require('../validators/task')

router.get('/task', getAllTask)

router.get('/tast/:id', getTask)

router.post('/task', validatorCreateTask, addTask)

router.put('/task/:id', validatorUpdateTask, updateTask)

router.delete('/task/:id', deleteTask)

module.exports = router
