import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

async function main() {
  const { db } = await import("@/lib/db");
  const { blogs } = await import("@/lib/db/schema");
  const { eq } = await import("drizzle-orm");

  console.log("Updating blog 1 to public...");
  await db
    .update(blogs)
    .set({ isPublic: true, publishedAt: new Date() })
    .where(eq(blogs.id, 1));

  console.log("Update complete.");
}

main()
  .catch(console.error)
  .finally(() => process.exit(0));
