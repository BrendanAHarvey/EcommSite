import express from "express";
import cors from "cors";
import pool from "./database.js";
import bodyParser from "body-parser";

// Initilising the express server
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: false,
    optionSuccessStatus: 200
};


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());
// Routes from the api.js filenpm start
// app.use('/', router);

app.get('/api/products', async (req, res) => {
    try{
        const { rows } = await pool.query('SELECT * FROM products');
        res.send(rows);
        console.log('server running test')
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error')
    }
});

app.post('/api/cart', (req, res) => {
    const { productId, quantity } = req.body;
    // Add the product with the specified ID and quantity to the cart
    // Update the cart in the PostgreSQL database
    res.send('Product added to cart');
    console.log('Added to Cart')
  });
  
  app.delete('/api/cart/:productId', (req, res) => {
    const { productId } = req.params;
    // Remove the product with the specified ID from the cart
    // Update the cart in the PostgreSQL database
    res.send('Product removed from cart');
    console.log('Removed from Cart')
  });

app.get('/products/:id', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM products WHERE id = $1', [req.params.id]);
      res.json(rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});