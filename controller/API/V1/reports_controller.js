const Reports = require('../../../modal/patientReport');

module.exports.allReportStatus = async (req,res)=>{
    try{
        const report = await Reports.find({status:req.params.status}).populate('patientId');
        return res.status(200).json({
            message:'successfull',
            data:report.map((r)=>{
                    return ({
                        patientName:r.patientId.name,
                        patientNo:r.patientId.phoneNumber,
                        doctorName:r.doctorname,
                        status:r.status,
                        dateOfCreationOfReport:r.date
                    })
            })
        })
    }catch{
        return res.status(500).json({
            message:'internal server error'
        })

    }
};