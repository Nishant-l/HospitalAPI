const Patient = require('../../../modal/patient');
const Report = require('../../../modal/patientReport');

module.exports.register = async(req,res)=>{
    try{
        const patient = await Patient.findOne({phoneNumber:req.body.phoneNumber});
        if(patient){
            return res.status(200).json({
                message:'patient with phoneNumber alredy exists',
                info:patient
            })
        }else{
            const newPatient = await Patient.create(req.body);
            return res.status(200).json({
                message:'new patient created successfully',
                info:newPatient
            })
        }
    }catch{
        return res.status(400).json({
            message:'error creating patient'
        })
    }

};

module.exports.createReport = async (req,res)=>{
    try{
        const patient = await Patient.findOne({phoneNumber:req.params.id})
        console.log(patient);
        var today = new Date();
        const report = await Report.create({
            doctorname:req.body.doctorname,
            patientId:patient._id,
            status:req.body.ststus,
            date: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        })
        await patient.reports.push(report._id);
        patient.save();
        return res.status(200).json({
            message:'successfully created Report',
            data:report
        })
    }catch{
        return res.status(400).json({
            message:"Error creating Patient Report/ please check the status should one of the folowing ['Negative','Travelled-Quarantine','Symptoms-Quarantine','Positive-Admit']",
        })
    }

};

module.exports.allReport = async (req,res) => {
    try{
        const reports = await Patient.findOne({phoneNumber:req.params.id})
                                     .populate('reports');
        if(reports==null){
            return res.status(400).json({
                message:'user with phoneNo does not exist'
            })
        }
        return res.status(200).json({
            message:'List of all report of patent',
            data:reports
        })
    }catch{
        return res.status(400).json({
            message:'error fetching reports'
        })
    }
};