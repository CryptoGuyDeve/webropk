import { db } from "@/lib/db";
import { services } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import ShopifyStoreManagingClient from "./client";

export default async function ShopifyStoreManagingPage() {
  const serviceData = await db.query.services.findFirst({
    where: eq(services.slug, "shopify-store-managing"),
  });

  return <ShopifyStoreManagingClient data={serviceData ? {
    heroTitle: serviceData.heroTitle,
    heroSubtitle: serviceData.heroSubtitle,
    packages: serviceData.packages as any[]
  } : null} />;
}
