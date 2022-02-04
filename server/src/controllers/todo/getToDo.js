const ToDo = require('../../model/schema')

const getToDos = async (_req, res) => {
  await ToDo.find({}, (err, todos) => {
    if (err) throw err
    res.json(todos)
  }).clone().catch((err) => res.json(err))
}

module.exports = { getToDos }
