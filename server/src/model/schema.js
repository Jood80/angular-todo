const mongoose = require('mongoose')

const ToDo = mongoose.model('to-do', {
  content: {
    type: String,
    default: '',
  },
  isDone: {
    type: Boolean,
    default: false,
  },
})

module.exports = ToDo
