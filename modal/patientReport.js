const mongoose = require('mongoose');

const patientReportSchama = mongoose.Schema({
    doctorname:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['Negative','Travelled-Quarantine','Symptoms-Quarantine','Positive-Admit'],
        required: true
    },
    patientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient',
        required:true
    },
    date:{
        type: String,
        required:true
    }
},{
    timestamps:true
})

const PatientReport = mongoose.model('PatientReport',patientReportSchama);

module.exports = PatientReport;