const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "Plese enter username"],
    },
    email:{
        type: String,
        required: [true, "Plese enter user email"],
        unique: [true, "Email address already taken"],
    },
    password:{
        type: String,
        required: [true, "Plese enter user password"],
    },
},{
    timestamps: true,
}
);

module.exports = mongoose.model("User", userSchema);