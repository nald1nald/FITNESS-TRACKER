const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '09193605632Qwe!',
    port: 3306,
    database: 'fitnessdb'
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database with id ' + db.threadId);
});

app.post('/register', (req, res) => {
    const sql = 'INSERT INTO users (`first_name`, `last_name`, `email`, `password`, `birthdate`, `gender`, `height`, `weight`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.password,
        req.body.birthdate,
        req.body.gender,
        req.body.height,
        req.body.weight
    ]
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error inserting user: ' + err.stack);
            return res.status(500).json({ error: 'Internal server error' });
        }
        return res.json({ message: 'User registered successfully' });
    })
})

app.listen(5000, () => {
    console.log(`Server started at port: 5000`)
})
