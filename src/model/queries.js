//function to get messages from the database
const pool = require("./pool");

const getMessages = async () => {
  try {
    const res = await pool.query("SELECT * FROM messages");
    return res.rows;
  } catch (err) {
    console.error(err);
    throw err;      
  }
};

//function to get a message by id
const getMessageById = async (id) => {
  try {
    const res = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    return res.rows[0];
  } catch (err) {
    console.error(err);
    throw err;
  }
};

//function to add messages to the database
const addMessage = async (author, subject, usermessage) => {
  try {
    const res = await pool.query(
      "INSERT INTO messages (author, subject, usermessage, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *",
      [author, subject, usermessage]
    );
    return res.rows[0];
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = { getMessages, getMessageById, addMessage };