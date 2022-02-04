const { join } = require('path')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
require('env2')('./config.env')
const router = require('./src/controllers/index')

const { DATABASE_URL, PORT } = process.env
const app = express()

mongoose.connect(DATABASE_URL)

app.use(express.static(join(__dirname, './client/public')))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', router)
app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'))
})

app.listen(PORT || 8080)
console.log(`App is listening on port ${PORT}`)
