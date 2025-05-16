const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();

// Protected routes
router.get('/me', auth, userController.getMe);
router.put('/preferences', auth, userController.updatePreferences);

module.exports = router;