const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
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
    isDelete: {
        type: String,
        default: false
    },
    joiningDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("user", UserSchema);