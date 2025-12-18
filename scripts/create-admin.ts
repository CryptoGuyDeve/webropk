import { config } from "dotenv";
config({ path: ".env.local" });

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { adminUsers } from "../lib/db/schema";
import { hash } from "bcryptjs";

async function createAdminUser() {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not defined in .env.local");
    }

    const sql = neon(process.env.DATABASE_URL);
    const db = drizzle(sql);

    const email = "m.faizurrehman.crypto@gmail.com";
    const password = "faiz@2030";
    const name = "Faiz Ur Rehman";

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Insert admin user
    const [newAdmin] = await db
      .insert(adminUsers)
      .values({
        email,
        password: hashedPassword,
        name,
      })
      .returning();

    console.log("✅ Admin user created successfully!");
    console.log("Email:", newAdmin.email);
    console.log("Name:", newAdmin.name);
    console.log("\nYou can now login at /admin with these credentials:");
    console.log("Email:", email);
    console.log("Password: faiz@2030");

    process.exit(0);
  } catch (error: any) {
    if (error.message?.includes("duplicate key")) {
      console.log("⚠️  Admin user already exists with this email!");
    } else {
      console.error("❌ Error creating admin user:", error);
    }
    process.exit(1);
  }
}

createAdminUser();
