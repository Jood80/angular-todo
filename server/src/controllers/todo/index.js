const { postToDo: PostToDo } = require('./postToDo')
const { getToDos: GetToDo } = require('./getToDo')
const { updateToDo: UpdateToDo } = require('./updateToDo')
const { removeToDo: DeleteToDo } = require('./deleteToDo')

module.exports = {
  PostToDo, GetToDo, UpdateToDo, DeleteToDo,
}
