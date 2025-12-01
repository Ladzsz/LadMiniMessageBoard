//index route
const express = require('express');
const router = express.Router();

//define arrays
const messages = [];

//get request to render messages
router.get('/', (req, res) => {

res.render("index", { title: "Mini Messageboard", messages: messages })
});

//get request to render messages details
router.get('/details', (req, res) => {

res.render("messagedetails", { title: "Message Details", messages: messages })
});

router.post('/new', (req, res) => {
  //grabbing forms feilds
  const author = req.body.author;
  const messagesubject = req.body.subject;
  const usermessage = req.body.usermessage;

  //settng to object
   const newMessage = {
    text: messagesubject,
    user: author,
    added: new Date(),
    details: usermessage // store details inside the message
  };
  
  //pushing newMessage object
  messages.push(newMessage);

  //sending user back too root
  res.redirect("/")
});

//get request to get the message by its id.
router.get('/details/:id', (req, res) => {
  const id = req.params.id;
  const message = messages[id];

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render('messagedetails', {
    title: "Message Details",
    message: message
  });
});

module.exports = router;

