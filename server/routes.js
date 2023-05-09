import express from "express";
import pool from "./database.js";

const router = express.Router();

router.get('/products', async (req, res) => {
    try{
        const { rows } = await pool.query('SELECT * FROM products');
        res.send(rows);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error')
    }
});

router.get('/products/:id', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM products WHERE id = $1', [req.params.id]);
      res.json(rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });

router.post('/', (req, res) => {

});

 export default router;
