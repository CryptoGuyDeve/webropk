"use server";

import { db } from "@/lib/db";
import { services } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function updateServiceContent(slug: string, formData: FormData) {
  const heroTitle = formData.get("heroTitle") as string;
  const heroSubtitle = formData.get("heroSubtitle") as string;

  // Parse packages from JSON string (client side will stringify)
  const packagesJson = formData.get("packages") as string;
  const packages = JSON.parse(packagesJson);

  try {
    // Upsert logic
    await db
      .insert(services)
      .values({
        slug,
        heroTitle,
        heroSubtitle,
        packages,
        updatedAt: new Date(),
      })
      .onConflictDoUpdate({
        target: services.slug,
        set: {
          heroTitle,
          heroSubtitle,
          packages,
          updatedAt: new Date(),
        },
      });

    revalidatePath(`/staff/dashboard/${slug}`);
    revalidatePath(`/(services)/${slug}`); // Key: revalidate the public page!

    return { success: "Service content updated successfully" };
  } catch (error) {
    console.error("Failed to update service:", error);
    return { error: "Failed to update service content" };
  }
}
