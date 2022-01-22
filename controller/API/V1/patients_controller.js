const Patient = require('../../../modal/patient');
const Report = require('../../../modal/patientReport');

module.exports.register = async(req,res)=>{ //to register new patient
    try{
        const patient = await Patient.findOne({phoneNumber:req.body.phoneNumber}); // find patient by phone noumber
        if(patient){ // if patient with phone noumber exists returned the patient info
            return res.status(200).json({
                message:'patient with phoneNumber alredy exists',
                info:{
                    name:patient.name,
                    phoneNumber:patient.phoneNumber,
                    NoOfReports:patient.reports.length,
                }
            })
        }else{ //if patient does not exist create new patient
            const newPatient = await Patient.create(req.body);
            return res.status(200).json({
                message:'new patient created successfully',
                info:newPatient
            })
        }
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:'error creating patient'
        })
    }

};

module.exports.createReport = async (req,res)=>{ // to create report of existing patient
    try{
        const patient = await Patient.findOne({phoneNumber:req.params.id})
        // console.log(req.user);
        var today = new Date();
        const report = await Report.create({  //create a report object
            doctorname:req.user.userName,
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
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"Error creating Patient Report/ please check the status should one of the folowing ['Negative','Travelled-Quarantine','Symptoms-Quarantine','Positive-Admit']",
        })
    }

};

module.exports.allReport = async (req,res) => {  // to get all reports of a user
    try{
        const reports = await Patient.findOne({phoneNumber:req.params.id})
                                     .populate('reports');
        if(reports==null){
            return res.status(404).json({
                message:'user with phoneNo does not exist'
            })
        }
        return res.status(200).json({
            message:'List of all report of a patent',
            data:{
                name:reports.name,
                phoneNumber:reports.phoneNumber,
                reports:reports.reports.map((i)=>{
                    return{
                        doctorname:i.doctorname,
                        status:i.status,
                        date:i.date
                    }
                })
            }
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:'error fetching reports'
        })
    }
};