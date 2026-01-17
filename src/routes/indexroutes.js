//index route
const express = require('express');
const router = express.Router();
const { getMessagesController, addMessageController, getMessageByIdController } = require('../controllers/messageController');

// Get message by ID
router.get('/details/:id', getMessageByIdController);

//get request to render messages
  router.get('/', getMessagesController);

//post reques to insert the message into the database
router.post('/new', addMessageController);


module.exports = router;

