const mongoose = require('mongoose');

const report_schama = mongoose.Schema({
    createdBy:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true,
        enum:['Negative','Travelled-Quarantine','Symptoms-Quarantine','Positive-Admit']
    },
    date:{
        type: Date,
        required: true
    }
})

const Report = mongoose.model('Report',report_schama);

module.exports = Report;