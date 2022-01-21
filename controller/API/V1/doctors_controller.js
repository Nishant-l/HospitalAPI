const Doctor = require('../../../modal/doctor');

module.exports.register = async(req,res)=>{

    try{
        const newDoctor = await Doctor.create(req.body);
        console.log(newDoctor);
        return res.status(200).json({
            message:'registered successfully',
            data: newDoctor
        })
    }catch{
        return res.status(400).json({
            message:'Either user with same usename alredy exists / or you have not entered username and password '
        });
    }
};

module.exports.login = (req,res)=>{
    return res.status(200).json({
        message:'registered successfully',
        data:'api--->v1-->doctor/login--->index'
    })
};