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

export default pool;