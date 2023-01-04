const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")

const LocalUserSchema = new mongoose.Schema({
    provider: {
        type: String,
        default: "Local"
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    picture: {
        type: String,
        default: "https://res.cloudinary.com/wizeric/image/upload/v1663709923/Impressions/626fd8140423801.6241b91e24d9c_upuqtc.png"
    }
});


// Adds passpord field to local strategy of userSchema
LocalUserSchema.plugin(passportLocalMongoose)

const LocalUser = mongoose.model("LocalUser", LocalUserSchema)

module.exports = LocalUser;