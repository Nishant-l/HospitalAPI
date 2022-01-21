const express = require('express');
const doctorsController = require('../../../../controller/API/V1/doctors_controller');

const router = express.Router();

router.post('/register',doctorsController.register);
router.get('/login',doctorsController.login);

module.exports = router;