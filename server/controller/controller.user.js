const { User } = require("../models/models");
const { getOne } = require("./controller.race");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
    // C
    create: (req, res) => {
        // TODO need to make sure that the email is unique
        User.create(req.body)
            .then((user) => {
                res.json({ msg: "Success!", user: user });
            })
            .catch((err) => {
                console.log("createUser error: ", err);
                res.json(err);
            });
    },
    // R
    login: (req, res) => {
        User.find({ email: req.body.email })
            .then(async (resp) => {
                // Auth the user

                try {
                    if (
                        await bcrypt.compare(
                            req.body.password,
                            resp[0].password
                        )
                    ) {
                        const accessToken = jwt.sign(
                            { id: resp[0]._id },
                            process.env.ACCESS_TOKEN_SECRET
                        );
                        res.cookie("accessToken", accessToken, {
                            httpOnly: true,
                        }).json({
                            msg: "Success",
                            id: resp[0]._id,
                        });
                    } else {
                        res.send("Not Allowed");
                    }
                } catch {
                    res.status(500).send();
                }
            })
            .catch((err) => console.log(err));
    },
    logout: (req, res) => {
        res.clearCookie("accessToken");
        console.log("cookies cleared");
        res.sendStatus(200);
    },
    getAll: (req, res) => {
        User.find()
            .then((data) => res.json(data))
            .catch((err) => console.log("getAll error: ", err));
    },
    getUsersInRace: (req, res) => {
        User.find({ raceJoinCode: req.params.raceCode })
            .then((data) => {
                res.json({ msg: "success!" });
            })
            .catch((err) => console.log("getAll error: ", err));
    },
    getOne: (req, res) => {
        User.find({ _id: req.params.id })
            .then((resp) => {
                // TODO remove password from return
                const { password, ...respCopy } = resp[0];
                res.json(respCopy);
            })
            .catch((err) => console.log("getOne error: ", err));
    },
    // U
    updateOne: (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            useFindAndModify: false,
            runValidators: true,
        })
            .then((data) => res.json({ msg: "Successfully updated" }))
            .catch((err) => {
                console.log("updateOne error: ", err);
                res.json(err);
            });
    },
    addEntry: async (req, res) => {
        let entry = req.body;

        User.find({ _id: req.params.id })
            .then((resp) => {
                let totalPoints = resp[0].totalPoints;

                let exercisePoints = parseInt(req.body.exercise);
                let foodPoints = parseInt(req.body.food);
                let waterPoints = parseInt(req.body.water);
                let sleepPoints = parseInt(req.body.sleep);

                let exerciseMultiplier = parseInt(
                    resp[0].fitnessScale.exercise
                );
                let foodMultiplier = parseInt(resp[0].fitnessScale.food);
                let waterMultiplier = parseInt(resp[0].fitnessScale.water);
                let sleepMultiplier = parseInt(resp[0].fitnessScale.sleep);

                let exerciseTotalPoints =
                    exercisePoints + exercisePoints * exerciseMultiplier;
                let foodTotalPoints = foodPoints + foodPoints * foodMultiplier;
                let waterTotalPoints =
                    waterPoints + waterPoints * waterMultiplier;
                let sleepTotalPoints =
                    sleepPoints + sleepPoints * sleepMultiplier;

                let newTotalPoints =
                    totalPoints +
                    exerciseTotalPoints +
                    foodTotalPoints +
                    waterTotalPoints +
                    sleepTotalPoints;

                User.findOneAndUpdate(
                    { _id: req.params.id },
                    {
                        $addToSet: {
                            entry: {
                                exercise: req.body.exercise,
                                food: req.body.food,
                                water: req.body.water,
                                sleep: req.body.sleep,
                            },
                        },
                        totalPoints: newTotalPoints,
                    },
                    {
                        new: true,
                        useFindAndModify: false,
                        runValidators: true,
                    }
                )
                    .then((data) => res.json({ msg: "Successfully updated" }))
                    .catch((err) => {
                        console.log("updateOne error: ", err);
                        res.json(err);
                    });
            })

            .catch();
    },
    editEntry: (req, res) => {
        User.updateOne(
            {
                _id: req.params.id,
                entry: { $elemMatch: { _id: req.params.entry_id } },
            },
            {
                $set: {
                    "entry.$.sleep": req.body.exercise,
                    "entry.$.food": req.body.food,
                    "entry.$.water": req.body.water,
                    "entry.$.sleep": req.body.sleep,
                },
            },
            { new: true, useFindAndModify: false, runValidators: true }
        )
            .then((resp) => {
                res.json(resp);
            })
            .catch((err) => console.log(err));
    },
    // D
    deleteOne: (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then((data) => res.json(data))
            .catch((err) => console.log("delete error: ", err));
    },
};
