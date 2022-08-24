const index = require('../controllers/usersController').index;

const express = require('express')

const router = express.Router();
router.get('/users', index)

module.exports = router;
