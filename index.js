const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const db = require('./config/mongoose');
const passportJWT = require('./config/passport-jwt-strategy');

const app = express();

app.use(urlencoded({extended:true}));

app.use('/',require('./routes'));


app.listen(8000,(err)=>{
    console.log('✅  successfully Running surver');
    if(err){
        console.log(err,'❌ error Stsrting server --->');
    }
})