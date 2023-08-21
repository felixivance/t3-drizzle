import { pgTable,varchar } from 'drizzle-orm/pg-core' 
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg';
import { n } from 'drizzle-orm/query-promise.d-31db3408';

const pool = new Pool ({
    connectionString: 'postgres://felixivance:8rMQiZC5yvUL@ep-purple-king-11566354.us-east-2.aws.neon.tech/todos?ssl=true' //env.DATABASE_URL
})
export const db = drizzle(pool)