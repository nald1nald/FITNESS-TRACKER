const express = require("express");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const router = express.Router();
const secret = "test123";

dotenv.config();

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

router.get("/", (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, secret, (err, user) => {
    console.log(user);
    if (err) {
      console.error("Error verifying token: " + err.stack);
      return res.status(403).json({ error: "Forbidden" });
    }

    const userId = user.id;
    const sql =
      "SELECT first_name, last_name, height, weight FROM accounts WHERE user_id = ?";
    const values = [userId];

    db.query(sql, values, (err, data) => {
      if (err) {
        console.error("Error retrieving user information: " + err.stack);
        return res.status(500).json({ error: "Internal server error" });
      }

      if (data.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }

      const user = data[0];
      res.json({
        height: user.height,
        weight: user.weight,
        first_name: user.first_name,
        last_name: user.last_name,
      });
    });
  });
});

module.exports = router;
