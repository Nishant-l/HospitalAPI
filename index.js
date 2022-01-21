const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use('/',require('./routes'));


app.listen(8000,(err)=>{
    console.log('up and running');
    if(err){
        console.log(err);
    }
})