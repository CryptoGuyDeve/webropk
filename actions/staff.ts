"use server";

import { db } from "@/lib/db";
import { staffUsers } from "@/lib/db/schema";
import { hash } from "bcryptjs";
import { revalidatePath } from "next/cache";

export async function createStaffUser(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password || !name) {
    return { error: "Missing required fields" };
  }

  try {
    const hashedPassword = await hash(password, 10);

    await db.insert(staffUsers).values({
      name,
      email,
      password: hashedPassword,
    });

    revalidatePath("/admin/staff");
    return { success: "Staff user created successfully" };
  } catch (error) {
    console.error("Failed to create staff user:", error);
    return { error: "Failed to create staff user (Email might be in use)" };
  }
}
