const mongoose = require('mongoose')

const RaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [5, "must be at least 2 chars"]
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    raceJoinCode: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const Race = mongoose.model("Race", RaceSchema)

module.exports = Race