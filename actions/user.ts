"use server";

import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@/auth";

export async function getUser(username: string) {
  let dbUser;

  if (username === "me") {
    const session = await auth();
    if (!session?.user?.email) return null;
    dbUser = await db.query.users.findFirst({
      where: eq(users.email, session.user.email),
    });
  } else {
    dbUser = await db.query.users.findFirst({
      where: eq(users.username, username),
    });
  }

  if (!dbUser) {
    return null;
  }

  return {
    name: dbUser.name,
    username: dbUser.username,
    email: dbUser.email,
    skills: dbUser.skills,
  };
}

export async function getUserByEmail(email: string) {
  const dbUser = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (!dbUser) {
    return null;
  }

  return {
    username: dbUser.username,
  };
}
