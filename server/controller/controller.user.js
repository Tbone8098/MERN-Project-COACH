const { User } = require('../models/models')
const { getOne } = require('./controller.race')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    // C
    create: (req, res) => {
        // TODO need to make sure that the email is unique
        User.create(req.body)
            .then(user => {
                res.json({ msg: "Success!", user: user })
            })
            .catch(err => {
                console.log("createUser error: ", err)
                res.json(err)
            })
    },
    // R
    login: (req, res) => {
        console.log(req.body);
        User.find({ email: req.body.email })
            .then(async resp => {
                // Auth the user
                console.log(resp);
                const realPass = resp[0].password
                const givenPass = req.body.password
                console.log(`real: ${realPass} | given: ${givenPass}`);

                try {
                    if (await bcrypt.compare(req.body.password, resp[0].password)) {
                        const accessToken = jwt.sign({ resp }, process.env.ACCESS_TOKEN_SECRET)
                        // res.json({ accessToken: accessToken })
                        res.cookie("accessToken", accessToken, { httpOnly: true }).json({
                            msg: "Success",
                            id: resp[0]._id,
                            accessToken: accessToken
                        })
                    } else {
                        res.send("Not Allowed")
                    }
                } catch {
                    res.status(500).send()
                }
            })
            .catch(err => console.log(err))
    },
    logout: (req, res) => {
        res.clearCookie('accessToken')
        res.sendStatus(200)
    },
    getAll: (req, res) => {
        User.find()
            .then(data => res.json(data))
            .catch(err => console.log("getAll error: ", err))
    },
    getOne: (req, res) => {
        User.find({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => console.log("getOne error: ", err))
    },
    // U
    updateOne: (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false, runValidators: true })
            .then(data => res.json(data))
            .catch(err => {
                console.log("updateOne error: ", err)
                res.json(err)
            })
    },
    // D
    deleteOne: (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => console.log("delete error: ", err))
    }
}