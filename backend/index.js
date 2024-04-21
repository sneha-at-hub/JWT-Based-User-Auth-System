import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "Signup"
});

// Handle database connection errors
db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        process.exit(1); // Exit the process if database connection fails
    } else {
        console.log('Connected to MySQL database');
        connection.release();
    }
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Please provide email and password.' });
    }

    let sql = "SELECT * FROM farmer WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, farmerResult) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            return res.status(500).json({ error: 'An error occurred while logging in. Please try again.' });
        }

        if (farmerResult.length > 0) {
            const farmerName = farmerResult[0].fullName;
            console.log('Farmer logged in successfully:', farmerName);
            return res.json({ isFarmer: true, farmerName });
        } else {
            // If not found in the farmer table, check the login table
            sql = "SELECT * FROM login WHERE email = ? AND password = ?";
            db.query(sql, [email, password], (err, loginResult) => {
                if (err) {
                    console.error('Error executing MySQL query:', err);
                    return res.status(500).json({ error: 'An error occurred while logging in. Please try again.' });
                }
        
                if (loginResult.length > 0) {
                    const email = loginResult[0].name; // Fetch the user's email from the loginResult
                    console.log('User logged in successfully:', email);
                    return res.json({ isFarmer: false, email }); // Return the user's email in the response
                } else {
                    // If not found in the login table, check the admins table
                    sql = "SELECT * FROM admins WHERE email = ? AND password = ?";
                    db.query(sql, [email, password], (err, adminResult) => {
                        if (err) {
                            console.error('Error executing MySQL query:', err);
                            return res.status(500).json({ error: 'An error occurred while logging in. Please try again.' });
                        }
                
                        if (adminResult.length > 0) {
                            const adminEmail = adminResult[0].name; // Fetch the admin's email from the adminResult
                            console.log('Admin logged in successfully:', adminEmail);
                            return res.json({ isAdmin: true, adminEmail }); // Return the admin's email in the response
                        } else {
                            return res.status(401).json({ error: 'Invalid username or password.' });
                        }
                    });
                }
            });
        }
    });
});


app.post("/signup", (req, res) => {
    const { fullName, email, phoneNumber, password } = req.body;

    if (!fullName || !email || !phoneNumber || !password) {
        return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    // Check if the email already exists in the farmer table
    let sql = "SELECT * FROM farmer WHERE email = ?";
    db.query(sql, [email], (err, farmerResult) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            return res.status(500).json({ error: 'An error occurred while signing up. Please try again.' });
        }

        if (farmerResult.length > 0) {
            return res.status(409).json({ error: 'Email already exists as a farmer.' });
        }

        // If not found in the farmer table, check the login table
        sql = "SELECT * FROM login WHERE email = ?";
        db.query(sql, [email], (err, loginResult) => {
            if (err) {
                console.error('Error executing MySQL query:', err);
                return res.status(500).json({ error: 'An error occurred while signing up. Please try again.' });
            }

            if (loginResult.length > 0) {
                return res.status(409).json({ error: 'Email already exists as a user.' });
            }

            // If email is unique, proceed with signup
            const insertSql = "INSERT INTO login (name, email, phone_number, password) VALUES (?, ?, ?, ?)";
            db.query(insertSql, [fullName, email, phoneNumber, password], (err, result) => {
                if (err) {
                    console.error('Error executing MySQL query:', err);
                    return res.status(500).json({ error: 'An error occurred while signing up. Please try again.' });
                }

                console.log('User signed up successfully:', result);
                return res.status(200).json({ message: 'Signup successful' });
            });
        });
    });
});

app.post("/farmer_signup", (req, res) => {
    const { fullName, email, phoneNumber, farmName, farmerAddress, password } = req.body;

    if (!fullName || !email || !phoneNumber || !farmName || !farmerAddress || !password) {
        return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    // Check if the email already exists in the login table
    let sql = "SELECT * FROM login WHERE email = ?";
    db.query(sql, [email], (err, loginResult) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            return res.status(500).json({ error: 'An error occurred while signing up. Please try again.' });
        }

        if (loginResult.length > 0) {
            return res.status(409).json({ error: 'Email already exists as a user.' });
        }

        // If not found in the login table, proceed with signup
        const insertSql = "INSERT INTO farmer (fullName, email, phoneNumber, farmName, farmerAddress, password) VALUES (?, ?, ?, ?, ?, ?)";
        db.query(insertSql, [fullName, email, phoneNumber, farmName, farmerAddress, password], (err, result) => {
            if (err) {
                console.error('Error executing MySQL query:', err);
                return res.status(500).json({ error: 'An error occurred while signing up. Please try again.' });
            }

            console.log('Farmer signed up successfully:', result);
            return res.status(200).json({ message: 'Farmer signup successful' });
        });
    });
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
