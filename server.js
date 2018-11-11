const express = require('express')

const users = require('./routes/users')
const activities = require('./routes/activities')

const server = express()

// Middleware
server.use(express.json())

// Routes
server.use('/users', users)
server.use('/activities', activities)

module.exports = server
