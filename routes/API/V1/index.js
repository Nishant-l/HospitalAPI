const express = require('express');

const router = express.Router();

router.use('/patients',require('./patients'));
router.use('/doctors',require('./doctors'));
router.use('/reports',require('./reports'));

router.get('/',(req,res)=>{
    // to check if api is working
    return res.send('api--->v1--->index')
})

module.exports = router;
