import express from "express";
import cors from "cors";
import pool from "./database.js";
import bodyParser from "body-parser";
import bcrypt from 'bcrypt';
import session from "express-session";
import PgSession from 'connect-pg-simple'

// Initilising the express server
const app = express();

const authenticateUser = (req, res, next) => {
  if (req.session.user && req.session.user.isAuthenticated) {
    // User is authenticated
    next();
  } else {
    // User is not authenticated
    res.status(401).send('Unauthorised');
  }
};

const pgSession = PgSession(session);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(
  session({
    store: new pgSession({
      pool: pool,
      tableName: 'session',
    }),
    secret: 'placeholder',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
)

// Route to retrieve user data
app.get('/api/users', async (req, res) => {
  try {
    const user = await pool.query('SELECT * FROM user WHERE id=$1', [req.params.id]);
    res.json(user[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error')
  }
})


// Routes to retrieve product data
app.get('/api/products', async (req, res) => {
    try{
        const { rows } = await pool.query('SELECT * FROM products');
        res.send(rows);
        console.log('server running')
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error')
    }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM products WHERE id=$1', [req.params.id]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Regitration route
app.post('/api/register', async (req, res) => {
  try {
    const {first_name, last_name, email, password, address, phone} = req.body;

    // Generate salt and hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const addToUser = await pool.query(`
    INSERT INTO users (first_name, last_name, email, password, address, phone) VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`, [first_name, last_name, email, hashedPassword, address, phone])

    res.send(addToUser.rows[0]);
    console.log('added to users table')
  } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
  }
});


// Login route
app.post('/api/login', async (req, res) => {
  try {
    const {email, password} = req.body;

    // Valid if the user with the specified email exist
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (user.rows.length === 0) {
      return res.status(400).send( 'Invalid email or password' )
    };

    // Compare provided password with hashed password
    const passwordMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!passwordMatch) {
      return res.status(400).send( 'Invalid email or password' )
    };

    // // Store user information in the session
    // req.session.user = user.rows[0]
    // // Login successful
    // const isAuthenticated = true;

    req.session.user = {
      id: user.rows[0].id,
      isAuthenticated: true
    };

    req.session.save();

    res.json({ isAuthenticated: true})
    console.log('Authenticated');
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error')
  }
});

app.get('/api/authUser', authenticateUser, (req, res) => {
  const authUser = req.session.user.id;
});



// Update cart route
app.post('/api/cart', async (req, res) => {
  try {
    // Add the product with the specified ID and quantity to the cart
    const { user_id, product_id, quantity } = req.body;

    // Check if the user with the specified user_id exists
    const user = await pool.query('SELECT id FROM users WHERE id = $1', [user_id]);
    if (user.rows.length === 0) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }

    // Check if the product with the specified product_id exists
    const product = await pool.query('SELECT * FROM products WHERE id = $1', [product_id]);
    if (product.rows.length === 0) {
      return res.status(404).send('Product not found');
    }

    const total_price = quantity * product.rows[0].price;

    // Check if the product is already in the cart for the specified user
    const existingCartItem = await pool.query(
      'SELECT * FROM cart WHERE user_id = $1 AND product_id = $2',
      [user_id, product_id]
    );

    if (existingCartItem.rows.length === 0) {
      // Insert a new cart item if it doesn't exist in the cart
      const newCartItem = await pool.query(
        'INSERT INTO cart (user_id, product_id, quantity, total_price) VALUES ($1, $2, $3, $4) RETURNING *',
        [user_id, product_id, quantity, total_price]
      );

      res.json(newCartItem.rows[0]);
    } else {
      // Update the quantity and total_price of the existing cart item
      const updatedCartItem = await pool.query(
        'UPDATE cart SET quantity = $1, total_price = $2 WHERE user_id = $3 AND product_id = $4 RETURNING *',
        [quantity, total_price, user_id, product_id]
      );

      res.json(updatedCartItem.rows[0]);
    }

    console.log('Added to Cart');
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});
  
  
  app.delete('/api/cart/:productId', (req, res) => {
    const { productId } = req.params;
    // Remove the product with the specified ID from the cart
    // Update the cart in the PostgreSQL database
    res.send('Product removed from cart');
    console.log('Removed from Cart')
  });


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});




// // Routes to update the cart 
// app.post('/api/cart', async (req, res) => {
//   try {
//     // Add the product with the specified ID and quantity to the cart
//     const { user_id, product_id, quantity } = req.body;

//      // Check if the user with the specified user_id exists
//     const user = await pool.query( 'SELECT id  FROM users WHERE id = $1', [user_id]);
//     if (user.rowCount.length === 0) {
//       return res.status(400).json({ error: 'Invalid user ID' })
//     }

//     // Check if the product with the specified product_id exists
//     const product = await pool.query('SELECT * FROM products WHERE id=$1', [product_id]); // Use product_id instead of req.params.id
//     if (product.rows.length === 0) {
//       return res.status(404).send('Product not found');
//     }
//     const total_price = quantity * product.rows[0].price;

//     // Update the cart in the PostgreSQL database
//     const newCartItem = await pool.query(
//       'INSERT INTO cart (user_id, product_id, quantity, total_price) VALUES ($1, $2, $3, $4) RETURNING *', 
//       [user_id, product_id, quantity, total_price]
//     );

//     res.json(newCartItem.rows[0]);
//     console.log('Added to Cart');
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Server error');
//   }
// });