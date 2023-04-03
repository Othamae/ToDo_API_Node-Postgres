/* eslint-disable camelcase */

const { handleHTTPError } = require('../middlewares/handleHTTPError')
const taskModel = require('../models/task')

const getAllTask = async (req, res) => {
  try {
    const data = await taskModel.findAll()
    res.status(200).send({ data })
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
    const data = {
      id: createdTask.id,
      title,
      completed: createdTask.completed,
      user_id: createdTask.user_id
    }
    res.status(201).send({ data })
  } catch (error) {
    console.log(error)
    handleHTTPError(res, 'ERROR_CREATING_TASK')
  }
}

const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const { ...body } = req
    const taskToUpdate = await taskModel.findOne({ where: { id } })

    if (!taskToUpdate) return res.status(404).send('NO_TASK_FOUND')

    taskToUpdate.set({ ...body })
    const updatedTask = await taskToUpdate.save()
    res.status(200).send({ updatedTask })
  } catch (error) {
    console.log(error)
    handleHTTPError(res, 'ERROR_UPDATING_TASK')
  }
}

const deleteTask = () => {

}

const getAllTaskByUser = async (req, res) => {
  try {
    const { id } = req.params
    const listOfTask = await taskModel.findAll({ where: { user_id: id } })
    if (listOfTask.length === 0) return res.status(200).send('NO_TASK_FOR_THIS_USER')
    res.status(200).send({ listOfTask })
  } catch (error) {
    console.log(error)
    handleHTTPError(res, 'ERROR_GETTING_TASK_BY_USER')
  }
}
module.exports = { getAllTask, getTask, addTask, updateTask, deleteTask, getAllTaskByUser }
