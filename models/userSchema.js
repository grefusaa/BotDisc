const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    userID: {type: String, required:true, unique:true},
    userName: {type: String, required:true, unique:true},
    name: {type: String, default:null},
    age: {type: String, default:null},
    description: {type: String, default:null},

});

const model = mongoose.model("usuarios", usersSchema);

module.exports = model;