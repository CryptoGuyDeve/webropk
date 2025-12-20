import { db } from "@/lib/db";
import { services } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import FullBusinessMarketingPageClient from "./client";

export default async function FullBusinessMarketingPage() {
  // Fetch service data from DB
  const [serviceData] = await db
    .select()
    .from(services)
    .where(eq(services.slug, "full-business-marketing"));

  return <FullBusinessMarketingPageClient data={serviceData as any} />;

}
