const express = require('express');
const patient_controller = require('../../../../controller/API/V1/patients_controller')
const passport = require('passport');

const router = express.Router();

router.post('/register',passport.authenticate('jwt',{session:false}),patient_controller.register);
router.get('/:id/allReports',patient_controller.allReport);
router.get('/:id/createReport',passport.authenticate('jwt',{session:false}),patient_controller.createReport);

module.exports = router;