const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    return res.send('api--->v1----->patients--->index')
})

module.exports = router;