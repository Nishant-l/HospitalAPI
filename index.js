const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/mongoose');

const app = express();

app.use(urlencoded({extended:true}));

app.use('/',require('./routes'));


app.listen(8000,(err)=>{
    console.log('✅  successfully Running surver');
    if(err){
        console.log(err,'❌ error Stsrting server --->');
    }
})