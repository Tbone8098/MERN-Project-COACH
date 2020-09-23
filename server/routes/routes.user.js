const Users = require('express').Router()
const User = require('../controller/controller.user')
const { authenticate } = require('../config/mongoose.config')

// C
Users.post('/new', User.create)
// R
Users.post('/login', User.login)
// Users.get('/auth', User.authenticateToken)
Users.get('/', authenticate, User.getAll)
Users.get('/:id', User.getOne)
// U
Users.patch('/update/:id', User.updateOne)
// D
Users.delete('/delete/:id', User.deleteOne)

module.exports = Users