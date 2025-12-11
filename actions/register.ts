"use server";

import * as z from "zod";
import { hash } from "bcryptjs";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

const RegisterSchema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  skills: z.string().optional(),
});

export async function register(formData: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(formData);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password, name, username, skills } = validatedFields.data;
  const hashedPassword = await hash(password, 10);

  try {
    await db.insert(users).values({
      name,
      username,
      email,
      password: hashedPassword,
      skills,
    });

    // Auto login after register? or redirect.
    // For now purely creating user.
    return { success: "Account created!" };
  } catch (error) {
    // Handle unique constraint violations
    return { error: "Email or Username already taken." };
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
