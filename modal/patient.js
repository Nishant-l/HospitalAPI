const mongoose = require('mongoose');

const patientSchama = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phoneNumber:{
        type:Number,
        required: true,
        unique: true
    },
    reports:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'PatientReport'
    }]
},{
    timestamps:true
})

const Patient = mongoose.model('Patient',patientSchama);

module.exports = Patient;