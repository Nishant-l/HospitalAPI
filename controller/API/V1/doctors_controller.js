const Doctor = require('../../../modal/doctor');
const jwt = require('jsonwebtoken');

module.exports.register = async(req,res)=>{ // to createnew account for a doctor

    try{
        const newDoctor = await Doctor.create(req.body);
        console.log(newDoctor);
        return res.status(200).json({
            message:'registered successfully',
            data: newDoctor
        })
    }catch{
        return res.status(500).json({
            message:'Either user with same usename alredy exists / or you have not entered username and password '
        });
    }
};

module.exports.login = async (req,res)=>{ // login for a doctor
    try{
        let doctor = await Doctor.findOne({userName:req.body.userName}); // find if doctor with username exists
        if(!doctor || doctor.password!=req.body.password){ // match the passwords
            return res.status(400).json({  // if password does not match
                message:'invallid username or password'
            })
        }

        return res.status(200).json({ // if password matches
            message:"sign in successfull",
            data:{
                token: jwt.sign(doctor.toJSON(),'Secret',{expiresIn:'100000'})  // send a jwt token
            }
        })



    }catch(err){
        console.log('------>err--------->',err);
        return res.status(500).json({
            message:"internal Server error"
        })
    }
};