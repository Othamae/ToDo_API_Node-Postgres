const express = require('express')
const router = express.Router()
const { getAllTask, getTask, addTask, updateTask, deleteTask } = require('../controllers/task')

router.get('/task', getAllTask)

router.get('/tast/:id', getTask)

router.post('/task', addTask)

router.put('/task/:id', updateTask)

router.delete('/task/:id', deleteTask)

module.exports = router
