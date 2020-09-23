const { Race } = require("../models/models");

module.exports = {
    // C
    create: (req, res) => {
        Race.create(req.body)
            .then((data) => res.json(data))
            .catch((err) => {
                console.log("createRace error: ", err);
                res.json(err);
            });
    },
    // R
    getAll: (req, res) => {
        Race.find()
            .then((data) => res.json(data))
            .catch((err) => console.log("getAll error: ", err));
    },
    getOne: (req, res) => {
        console.log(req.params.id);
        Race.findOne({ _id: req.params.id })
            .populate("participants")
            .exec((err, data) => {
                err ? res.json(err) : res.json(data);
            });
    },
    // U
    updateParticipants: (req, res) => {
        Race.findOneAndUpdate(
            { _id: req.params.id },
            { $addToSet: { participants: req.body.participants } },
            { new: true, useFindAndModify: false, runValidators: true }
        )
            .then((data) => res.json(data))
            .catch((err) => {
                console.log("updateOne error: ", err);
                res.json(err);
            });
    },
    updateOne: (req, res) => {
        Race.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            useFindAndModify: false,
            runValidators: true,
        })
            .then((data) => res.json(data))
            .catch((err) => {
                console.log("updateOne error: ", err);
                res.json(err);
            });
    },
    removeParticipant: (req, res) => {
        console.log(req.params.id);
        let id = `ObjectId(${req.params.id})`;
        Race.findByIdAndUpdate(
            { _id: req.params.id },
            // TODO Left off here
            { $pull: { participants: { _id: id } } },
            { new: true, useFindAndModify: false, runValidators: true }
        )
            .then((resp) => {
                res.json(resp);
            })
            .catch((err) => console.log(err));
    },
    // D
    deleteOne: (req, res) => {
        Race.deleteOne({ _id: req.params.id })
            .then((data) => res.json(data))
            .catch((err) => console.log("delete error: ", err));
    },
};
