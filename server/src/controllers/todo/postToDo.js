const ToDo = require('../../model/schema')
const { getToDos } = require('./getToDo')

const postToDo = async (req, res) => {
  const { content, isDone } = req.body
  ToDo.create({
    content,
    isDone,
  }, async (err) => {
    if (err) res.send(err)
    await getToDos(req, res)
  })
}

module.exports = { postToDo }
