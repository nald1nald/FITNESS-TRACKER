const express = require("express");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const secret = "test123";

dotenv.config();

const loginRouter = express.Router();

const db = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  port: process.env.MYSQL_ADDON_PORT,
  database: process.env.MYSQL_ADDON_DB,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected to database with id " + db.threadId);
});

loginRouter.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const sql = "SELECT * FROM accounts WHERE `email` = ? AND `password` = ? ";
  const values = [email, password];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Error retrieving user information: " + err.stack);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (data.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = data[0];
    if (password !== user.password) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user.user_id, email: user.email }, secret, {
      expiresIn: "999h",
    });

    const decodedToken = jwt.decode(token);
    if (decodedToken && decodedToken.email === email) {
      console.log("User authenticated successfully");
      res.json({ token: token });
    } else {
      console.error("Invalid token");
      return res.status(401).json({ error: "Invalid token" });
    }

    console.log(user);
  });
});

module.exports = loginRouter;
