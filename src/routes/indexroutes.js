//index route
const express = require('express');
const router = express.Router();

//define array
const messages = [];

//get request to render messages
router.get('/', (req, res) => {

res.render("index", { title: "Mini Messageboard", messages: messages })

});

router.post('/new', (req, res) => {
  //grabbing form fields  
  const author = req.body.author; 
  const usermessage = req.body.usermessage;
  
  //pushing to messages array
  messages.push({text: usermessage, user: author, added: new Date()})

  //sending user back too root
  res.redirect("/")
});

module.exports = router;