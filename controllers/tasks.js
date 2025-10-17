const Task = require('../models/Task.js');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createTask = async (req, res) => {
    try {
        const { title, completed } = req.body
        const task = await Task.create({title, completed})
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id) 
    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' })
    }
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({ message: error.message }) // erro de servidor
  }
}

const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true, runValidators: true}
        )
        if (!task) {
            return res.status(404).json({ message: 'Tarefa não encontrada' })
        }
        res.status(200).json(task)

    } catch (error) {
        res.status(500).json({ message: error.message }) // erro de servidor
    }
}

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            return res.status(404).json({ message: 'Tarefa não encontrada' })
        }
        res.status(200).json({message: 'Tarefa deletada com sucesso!'})

    } catch (error) {
        res.status(500).json({ message: error.message }) // erro de servidor
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,

}