const Reports = require('../../../modal/patientReport');

module.exports.allReportStatus = async (req,res)=>{ //Get all reports filtered by status of the report
    try{
        const report = await Reports.find({status:req.params.status}).populate('patientId'); //get report by the status and populate the patient info
        return res.status(200).json({
            message:'successfull',
            data:report.map((r)=>{ // make object with relevent info and discard un wanted fields
                    return ({
                        patientName:r.patientId.name,
                        patientNo:r.patientId.phoneNumber,
                        doctorName:r.doctorname,
                        status:r.status,
                        dateOfCreationOfReport:r.date
                    })
            })
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:'internal server error'
        })

    }
};