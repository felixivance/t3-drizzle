import type { Config } from "drizzle-kit";
 
export default {
  schema: "src/db/schema.ts",
  driver: 'pg',
  dbCredentials: {
    connectionString: "postgres://felixivance:8rMQiZC5yvUL@ep-purple-king-11566354.us-east-2.aws.neon.tech/todos",
  }
} satisfies Config;