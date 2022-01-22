const express = require('express');
const reports_controller = require('../../../../controller/API/V1/reports_controller');
const passport = require('passport');

const router = express.Router();

router.get('/:status',passport.authenticate('jwt',{session:false}),reports_controller.allReportStatus);

module.exports = router;