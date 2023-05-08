const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const secret = "test123";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const usersRouter = require("./routes/users");
const exercisesRouter = require("./routes/exercises");
// const taskRouter = require("./routes/task");
// const taskRetrieve = require("./routes/taskretrieve");

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

app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);
app.use("/api/users", usersRouter);
app.use("/api/exercises", exercisesRouter);
// app.use("/api/task", taskRouter);
// app.use("/api/taskretrieve", taskRetrieve);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started at port: 5000`);
});
