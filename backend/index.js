const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const port = 8080;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'react_example'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
        return;
    }
    console.log('Connected to database.');
});

app.get('/', (req, res) => {
    res.send('Root path of react_example backend!');
});

app.get('/products', (req, res) => {
    const query = 'SELECT * FROM products';

    connection.query(query, (error, results, fields) => {
        if (error) {
            console.error('Error querying the database: ' + error.stack);
            return res.status(500).send('Error querying the database');
        }
        res.json(results);
    });
});

app.get('/products/:id', (req, res) => {
    const productId = req.params.id;

    const query = `SELECT * FROM products where id = ${productId}`;

    connection.query(query, (error, results, fields) => {
        if (error) {
            console.error('Error querying the database: ' + error.stack);
            return res.status(500).send('Error querying the database');
        }
        
        if(results.length === 0) {
            return res.status(404).json({ error: 'Product not found.' });
        }

        res.json(results[0]);
    });
});

app.post('/products', (req, res) => {
    const { title, price } = req.body;

    const sql = 'INSERT INTO products(title,price) VALUES(?,?)';

    connection.query(sql, [title, price], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error deleting product');
        } else {
            res.send(`Product added successfully`);
        }
    });
});

app.put('/products/:id', (req, res) => {
    const productId = req.params.id;
    const { title, price } = req.body;

    const sql = 'UPDATE products SET title = ?, price = ? WHERE id = ?';

    connection.query(sql, [title, price, productId], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error deleting product');
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Product not found.' });
        }

        else {
            res.send(`Product with id ${productId} updated successfully`);
        }
    });
});

app.delete('/products/:id', (req, res) => {
    const productId = req.params.id;

    const sql = `DELETE FROM products WHERE id = ${productId}`;
    connection.query(sql, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error deleting product');
        } else {
            res.send(`Product with id ${productId} deleted successfully`);
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});

// CREATE TABLE IF NOT EXISTS products (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     price INT NOT NULL
//   );                                   