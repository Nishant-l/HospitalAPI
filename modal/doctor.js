const mongoose = require('mongoose');

const doctorSchama = mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps:true
})

const Doctor = mongoose.model('Doctor',doctorSchama);

module.exports = Doctor;