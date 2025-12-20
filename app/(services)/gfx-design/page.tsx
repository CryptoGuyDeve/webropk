import { db } from "@/lib/db";
import { services } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import GFXDesignPageClient from "./client";

export default async function GFXDesignPage() {
  // Fetch service data from DB
  const [serviceData] = await db
    .select()
    .from(services)
    .where(eq(services.slug, "gfx-design"));

  return <GFXDesignPageClient data={serviceData as any} />;

}
