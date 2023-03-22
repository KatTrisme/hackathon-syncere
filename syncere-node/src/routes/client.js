const express = require('express');
const router = express.Router();
const clientPortalController = require('../controllers/client-portal');

router.get('/', clientPortalController.getProduct);

module.exports = router;