const express = require('express');
const patient_controller = require('../../../../controller/API/V1/patients_controller')

const router = express.Router();

router.post('/register',patient_controller.register);
router.get('/:id/allReports',patient_controller.allReport);
router.get('/:id/createReport',patient_controller.createReport);

module.exports = router;