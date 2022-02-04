const ToDo = require('../../model/schema')
const { getToDos } = require('./getToDo')

const removeToDo = (req, res) => {
  ToDo.remove({
    _id: req.params.toDoId,
  }, async (err) => {
    if (err) res.send(err)
    await getToDos(req, res)
  })
}

module.exports = { removeToDo }
