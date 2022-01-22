const Doctor = require('../../../modal/doctor');
const jwt = require('jsonwebtoken');

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

module.exports.login = async (req,res)=>{
    try{
        let doctor = await Doctor.findOne({userName:req.body.userName});
        if(!doctor || doctor.password!=req.body.password){
            return res.status(422).json({
                message:'invallid username or password'
            })
        }

        return res.status(200).json({
            message:"sign in successfull",
            data:{
                token: jwt.sign(doctor.toJSON(),'Secret',{expiresIn:'10000'})
            }
        })



    }catch(err){
        console.log('------>err--------->',err);
        return res.status(500).json({
            message:"internal Server error"
        })
    }
};