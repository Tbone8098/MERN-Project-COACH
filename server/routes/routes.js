const controller = require('../controller/controller')

module.exports = app => {
    app.use('/user', require('./routes.user'))
    app.use('/race', require('./routes.race'))
}