const express = require('express')
const {
  PostToDo, GetToDo, UpdateToDo, DeleteToDo,
} = require('./todo')

const router = express.Router()

router.post('/todos', PostToDo)
router.get('/todos', GetToDo)
router.put('/todos/:toDoId', UpdateToDo)
router.delete('/todos/:toDoId', DeleteToDo)

module.exports = router
