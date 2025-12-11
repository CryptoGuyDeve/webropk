const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

const envPath = path.resolve(process.cwd(), ".env.local");

console.log("--- Environment Diagnostics ---");
console.log("Checking .env.local at:", envPath);

if (fs.existsSync(envPath)) {
  const rawContent = fs.readFileSync(envPath, "utf8");
  console.log("File exists. Content length:", rawContent.length);

  // Check for weird characters
  const firstChar = rawContent.charCodeAt(0);
  console.log("First character code:", firstChar);
  if (firstChar === 65279) {
    console.log("⚠️ WARNING: BOM (Byte Order Mark) detected at start of file!");
  }

  const parsed = dotenv.parse(rawContent);
  const dbUrl = parsed.DATABASE_URL;

  if (dbUrl) {
    console.log("DATABASE_URL found in file:", "YES");
    console.log("DATABASE_URL starts with:", dbUrl.substring(0, 10) + "...");
    console.log("DATABASE_URL length:", dbUrl.length);

    // Check for quotes included in value
    if (dbUrl.startsWith('"') || dbUrl.startsWith("'")) {
      console.log(
        "⚠️ WARNING: DATABASE_URL seems to have quotes included in the parsed value. Dotenv might not be handling quotes as expected or they are part of the string."
      );
    }
  } else {
    console.error("❌ DATABASE_URL NOT found in .env.local parse result.");
  }
} else {
  console.error("❌ .env.local file NOT found at expected path.");
}

console.log("--- process.env check ---");
require("dotenv").config({ path: ".env.local" });
console.log("process.env.DATABASE_URL defined:", !!process.env.DATABASE_URL);
if (process.env.DATABASE_URL) {
  console.log(
    "process.env.DATABASE_URL starts with:",
    process.env.DATABASE_URL.substring(0, 10) + "..."
  );
}
