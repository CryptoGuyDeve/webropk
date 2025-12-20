import { db } from "@/lib/db";
import { services } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import ShopifyStoreCreationClient from "./client";

export default async function ShopifyStoreCreationPage() {
  const serviceData = await db.query.services.findFirst({
    where: eq(services.slug, "shopify-store-creation"),
  });

  return <ShopifyStoreCreationClient data={serviceData ? {
    heroTitle: serviceData.heroTitle,
    heroSubtitle: serviceData.heroSubtitle,
    packages: serviceData.packages as any[]
  } : null} />;
}
