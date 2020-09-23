const Races = require('express').Router()
const Race = require('../controller/controller.race')

// C
Races.post('/new',Race.create)
// R
Races.get('/',Race.getAll)
Races.get('/:id',Race.getOne)
// U
Races.patch('/update/:id',Race.updateOne)
// D
Races.delete('/delete/:id',Race.deleteOne)

module.exports = Races