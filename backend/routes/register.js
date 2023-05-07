const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const db = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  port: process.env.MYSQL_ADDON_PORT,
  database: process.env.MYSQL_ADDON_DB,
});

router.post("/", (req, res) => {
  const sql =
    "INSERT INTO accounts (`first_name`, `last_name`, `email`, `password`, `birthdate`, `gender`, `height`, `weight`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.password,
    req.body.birthdate,
    req.body.gender,
    req.body.height,
    req.body.weight,
  ];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Error inserting user: " + err.stack);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json({ message: "User registered successfully" });
  });
});

module.exports = router;
