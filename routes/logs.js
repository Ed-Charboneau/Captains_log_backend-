const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.logs.getAll);

module.exports = router;
