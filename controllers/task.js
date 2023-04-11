/* eslint-disable camelcase */

const { handleHTTPError } = require('../middlewares/handleHTTPError')
const taskModel = require('../models/task')
const { matchedData } = require('express-validator')

const getAllTask = async (req, res) => {
  try {
    const data = await taskModel.findAll()
    res.status(200).send(data)
  } catch (error) {
    console.log(error)
    handleHTTPError(res, 'ERROR_GETTING_ALL_TASKs', 400)
  }
}

const getTask = () => {

}

const addTask = async (req, res) => {
  try {
    const { title, user_id } = req.body
    const newTask = {
      title,
      completed: req.body.completed || false,
      user_id
    }
    await taskModel.create(newTask)
    const createdTask = await taskModel.findOne({ where: { title } })

    res.status(201).send(createdTask)
  } catch (error) {
    console.log(error)
    handleHTTPError(res, 'ERROR_CREATING_TASK')
  }
}

const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const { ...body } = matchedData(req)
    const taskToUpdate = await taskModel.findOne({ where: { id } })

    if (!taskToUpdate) return res.status(404).send('NO_TASK_FOUND')

    taskToUpdate.set({ ...body })
    const updatedTask = await taskToUpdate.save()
    const data = {
      id: updatedTask.id,
      title: updatedTask.title,
      completed: updatedTask.completed
    }
    res.status(200).send({ data })
  } catch (error) {
    console.log(error)
    handleHTTPError(res, 'ERROR_UPDATING_TASK')
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    const TaskToDelete = await taskModel.findOne({ where: { id } })
    if (!TaskToDelete) return res.status(404).send('NO_TASK_FOUND')
    await taskModel.destroy({ where: { id } })
    res.status(200).send(TaskToDelete)
  } catch (error) {
    console.log(error)
    handleHTTPError(res, 'ERROR_DELETING_TASK')
  }
}

const getAllTaskByUser = async (req, res) => {
  try {
    const { id } = req.params
    const listOfTask = await taskModel.findAll({ where: { user_id: id } })
    if (listOfTask.length === 0) return res.status(200).send('NO_TASK_FOR_THIS_USER')
    res.status(200).send(listOfTask)
  } catch (error) {
    console.log(error)
    handleHTTPError(res, 'ERROR_GETTING_TASK_BY_USER')
  }
}
module.exports = { getAllTask, getTask, addTask, updateTask, deleteTask, getAllTaskByUser }
