import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "AugustCov38@",
    database: "ecomm_store"
});

pool.connect();

// pool.query('SELECT * FROM products', (err, res) => {
//     if(!err){
//         console.log(res.rows);
//     } else {
//         console.log(err.message);
//     }

//     pool.end;
// });

export default pool;