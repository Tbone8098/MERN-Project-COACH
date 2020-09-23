const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

mongoose.connect('mongodb://localhost/COACH', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connected to the db'))
    .catch(err => console.log('something went wrong', err))


module.exports = {
    authenticate(req, res, next) {
        console.log("**************************************");
        console.log(req.cookies);
        console.log("**************************************");
        jwt.verify(req.cookies.accessToken, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if (err) {
                res.status(401).json({ verified: false })
            } else {
                next()
            }
        })
    }
}