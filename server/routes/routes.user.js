const Users = require('express').Router()
const User = require('../controller/controller.user')
const { authenticate } = require('../config/mongoose.config')

// C
Users.post('/new', User.create)
// R
Users.post('/login', User.login)
Users.get('/logout', User.logout)
Users.get('/', authenticate, User.getAll)
Users.get('/:id', authenticate, User.getOne)
Users.get('/usersInRace/:raceCode', authenticate, User.getUsersInRace)
// U
Users.patch('/update/:id', authenticate, User.updateOne)
// D
Users.delete('/delete/:id', authenticate, User.deleteOne)

module.exports = Users