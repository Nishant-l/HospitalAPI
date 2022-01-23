const express = require('express');

const router = express.Router();

router.use('/v1',require('./V1'));

module.exports = router;
