import { defineConfig } from 'drizzle-kit'
 
export default defineConfig({
  schema: "./drizzle/schema.ts",
  driver: 'mysql2',
  dbCredentials: {
    host: "localhost",
    port: 3306,
    database: "hospital_system",
    user: "root",
  },
  verbose: true,
  strict: true,
})
