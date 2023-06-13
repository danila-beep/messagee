const mongoose = require("mongoose")

const userModel = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        pic: {
            type: String,
            required: true,
            default: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userModel)

module.exports = User