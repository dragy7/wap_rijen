const mongoose = require('mongoose');

const carShema = mongoose.Schema({
    name: {type: String, require: true},
    model: {type: String, require: true},
    color: {type: String, require: true},
    shifting: {type: String, require: true},
    year: {type: Number, require: true},
});

module.exports = mongoose.model("Car", carShema);







