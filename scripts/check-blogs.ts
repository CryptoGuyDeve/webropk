import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

async function main() {
  // Dynamic import to ensure env is loaded first
  const { db } = await import("@/lib/db");
  const { blogs } = await import("@/lib/db/schema");

  console.log("Checking blogs table...");
  const allBlogs = await db.select().from(blogs);
  console.log("Found blogs:", JSON.stringify(allBlogs, null, 2));
}

main()
  .catch(console.error)
  .finally(() => process.exit(0));
