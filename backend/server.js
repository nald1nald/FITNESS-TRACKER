const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "09193605632Qwe!",
  port: 3306,
  database: "fitnessdb",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected to database with id " + db.threadId);
});

app.post("/register", (req, res) => {
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

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const sql = "SELECT * FROM accounts WHERE email = ?";
  const values = [email];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error retrieving user information: " + err.stack);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = results[0];
    if (password !== user.password) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // If the email and password are valid, redirect to the homepage
    res.json({ user });
  });
});

app.listen(5000, () => {
  console.log(`Server started at port: 5000`);
});
