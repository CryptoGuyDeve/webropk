import { db } from "@/lib/db";
import { services } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import MetaAdsPageClient from "./client";

export default async function MetaAdsPage() {
  // Fetch service data from DB
  const [serviceData] = await db
    .select()
    .from(services)
    .where(eq(services.slug, "meta-ads-and-campaigns"));

  return <MetaAdsPageClient data={serviceData as any} />;

}
