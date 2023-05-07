// routes/exercises.js

const express = require("express");
const mysql = require("mysql2");
const router = express.Router();

const db = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  port: process.env.MYSQL_ADDON_PORT,
  database: process.env.MYSQL_ADDON_DB,
});

router.get("/", (req, res) => {
  const sql = "SELECT exercise_name FROM exercises";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error retrieving exercises: " + err.stack);
      return res.status(500).json({ error: "Internal server error" });
    }

    const exercises = data.map((row) => row.exercise_name);
    res.json({ exercises });
  });
});

module.exports = router;
