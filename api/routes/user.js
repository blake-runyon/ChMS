// create an express router to handle the api routes
const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/', userController.getUser);

// post add user
router.post('/', userController.addUser);

// export router
module.exports = router;
