const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const secret = "test123";

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

app.get("/users", (req, res) => {
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
    const sql = "SELECT height, weight FROM accounts WHERE user_id = ?";
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
      });
    });
  });
});

app.get("/exercises", (req, res) => {
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

app.listen(5000, () => {
  console.log(`Server started at port: 5000`);
});
