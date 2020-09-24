const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const EntrySchema = new mongoose.Schema(
    {
        exercise: {
            type: String,
            required: true,
        },
        food: {
            type: String,
            required: true,
        },
        water: {
            type: String,
            required: true,
        },
        sleep: {
            type: String,
            required: true,
        },
        entryPoints: Number,
    },
    { timestamps: true }
);

const UserSchema = new mongoose.Schema(
    {
        fname: {
            type: String,
            required: true,
            minlength: [
                3,
                "You must have at least 3 characters in you first name",
            ],
        },
        lname: {
            type: String,
            required: true,
            minlength: [
                3,
                "You must have at least 3 characters in you first name",
            ],
        },
        displayName: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: true,
            validate: {
                validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email",
            },
        },
        password: {
            type: String,
            required: [true, "Email is required"],
            minlength: [8, "Password must be at least 8 characters long"],
            // TODO add validations
        },
        // raceCode: String,
        raceId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Race",
        },
        totalPoints: {
            type: Number,
            default: 0,
        },
        entry: [EntrySchema],
        fitnessScale: {
            exercise: {
                type: Number,
                default: 0,
            },
            food: {
                type: Number,
                default: 0,
            },
            water: {
                type: Number,
                default: 0,
            },
            sleep: {
                type: Number,
                default: 0,
            },
        },
    },
    { timestamps: true }
);

UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => (this._confirmPassword = value));

UserSchema.pre("validate", function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate(
            "confirmPassword",
            "Password must match confirm password"
        );
    }
    next();
});

UserSchema.pre("save", function (next) {
    bcrypt.hash(this.password, 10).then((hash) => {
        this.password = hash;
        next();
    });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
