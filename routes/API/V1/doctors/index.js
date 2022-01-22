const express = require('express');
const doctorsController = require('../../../../controller/API/V1/doctors_controller');

const router = express.Router();

router.post('/register',doctorsController.register);
router.post('/login',doctorsController.login);

module.exports = router;