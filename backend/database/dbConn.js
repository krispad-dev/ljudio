import PG from 'pg';
import 'dotenv/config';


export function setDB(source) {

    const db = new PG.Pool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: source,
        ssl: true,
        max: 10
    });

    return db;
}