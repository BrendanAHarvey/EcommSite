import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    host: "",
    user: "",
    port: ,
    password: "",
    database: ""
});

pool.connect();

export default pool;
