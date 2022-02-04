const ToDo = require('../../model/schema')
const { getToDos } = require('./getToDo')

const updateToDo = (req, res) => {
  const { content, isDone } = req.body
  ToDo.updateOne({
    _id: req.params.toDoId,
  }, {
    $set: {
      content,
      isDone,
    },
  }, async (err) => {
    if (err) res.send(err)
    await getToDos(req, res)
  })
}

module.exports = { updateToDo }
