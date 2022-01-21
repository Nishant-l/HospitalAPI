const express = require('express');
const reports_controller = require('../../../../controller/API/V1/reports_controller');

const router = express.Router();

router.get('/:status',reports_controller.allReportStatus);

module.exports = router;