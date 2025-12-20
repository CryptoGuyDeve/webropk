import { db } from "@/lib/db";
import { services } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import SocialMediaManagerPageClient from "./client";

export default async function SocialMediaManagerPage() {
  // Fetch service data from DB
  const [serviceData] = await db
    .select()
    .from(services)
    .where(eq(services.slug, "social-media-manager"));

  return <SocialMediaManagerPageClient data={serviceData as any} />;

}
