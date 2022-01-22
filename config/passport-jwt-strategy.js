const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const extractJWT = require('passport-jwt').ExtractJwt;

const Doctor = require('../modal/doctor');

let opts = {
    jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:'Secret'
}

passport.use(new JWTStrategy(opts,(jwtPayLoad,done)=>{


    Doctor.findById(jwtPayLoad._id,(err,user)=>{
        if(err){
            console.log('error in finding user from jwt');
            return;
        }
        if(user){
            return done(null,user);
        }else{
            return done(null,false);
        }
    })

}))


module.exports = passport;