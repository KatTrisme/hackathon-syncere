const express = require('express');
const router = express.Router();
const adminPortalController = require('../controllers/admin-portal');

router.post('/', adminPortalController.createProduct);
router.put('/', adminPortalController.updateProduct);

module.exports = router;