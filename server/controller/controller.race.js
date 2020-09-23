const { Race } = require('../models/models')

module.exports = {
    // C
    create: (req, res) => {
        Race.create(req.body)
            .then(data => res.json(data))
            .catch(err => {
                console.log("createRace error: ", err)
                res.json(err)
            })
    },
    // R
    getAll: (req, res) => {
        Race.find()
            .then(data => res.json(data))
            .catch(err => console.log("getAll error: ", err))
    },
    getOne: (req, res) => {
        Race.find({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => console.log("getOne error: ", err))
    },
    // U
    updateOne: (req, res) => {
        Race.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false, runValidators: true })
            .then(data => res.json(data))
            .catch(err => {
                console.log("updateOne error: ", err)
                res.json(err)
            })
    },
    // D
    deleteOne: (req, res) => {
        Race.deleteOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => console.log("delete error: ", err))
    }
}