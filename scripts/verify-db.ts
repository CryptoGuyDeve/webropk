import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { neon } from "@neondatabase/serverless";

const dbUrl = process.env.DATABASE_URL;

console.log("Checking DATABASE_URL...");
if (!dbUrl) {
  console.error("❌ DATABASE_URL is NOT defined in this process.");
  process.exit(1);
} else {
  console.log("✅ DATABASE_URL is defined.");
  if (dbUrl.startsWith("postgres")) {
    console.log("✅ DATABASE_URL starts with 'postgres'.");
  } else {
    console.warn("⚠️ DATABASE_URL might be malformed.");
  }
}

async function testConnection() {
  try {
    const sql = neon(dbUrl);
    const result = await sql`SELECT 1 as result`;
    console.log("✅ Successfully connected to database! Result:", result);
  } catch (e) {
    console.error("❌ Failed to connect to database:", e);
  }
}

testConnection();
