//messages controller
const { getMessages, addMessage, getMessageById } = require("../model/queries");

//controller to get messages and render them on the page
const getMessagesController = async (req, res) => {
  try {
    const messages = await getMessages();
    res.render("index", { messages });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

//controller to get message by id and render the details page
const getMessageByIdController = async (req, res) => {

  const id = parseInt(req.params.id, 10); 
  if (isNaN(id)) {
    return res.status(400).send("Invalid message ID");
  }
  
  try {
    const message = await getMessageById(id);

    if (!message) {
      // If no message found, render a 404 page or send 404
      return res.status(404).render("404", { message: "Message not found" });
    }

    // Render the message details page
    res.render("messagedetails", { message });

  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};


//controller to add messages to the database and redirect to the homepage
const addMessageController = async (req, res) => {
  const { author, subject, usermessage } = req.body;
  try {
    await addMessage(author, subject, usermessage);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = { getMessagesController, addMessageController, getMessageByIdController };