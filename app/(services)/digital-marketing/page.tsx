import { db } from "@/lib/db";
import { services } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import DigitalMarketingPageClient from "./client";

export default async function DigitalMarketingPage() {
  // Fetch service data from DB
  const [serviceData] = await db
    .select()
    .from(services)
    .where(eq(services.slug, "digital-marketing"));

  return <DigitalMarketingPageClient data={serviceData as any} />;

}
