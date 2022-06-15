require('dotenv').config();
const {Pool} = require('pg');



const localConfig = {
    user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        database: process.env.PG_DATABASE

};

connectToDb = async () => {
    const pool = new Pool(
        localConfig
    );
    if (pool) {
        (console.log('> pool already exists'))
        return pool;
    } else {
        try {
            await pool.connect();
            console.log('connected to midwestern interactive databse');
            return pool;
        } catch (err) {
            console.log('not connected to DB', err)
        }
    }
};

module.exports =  {connectToDb};