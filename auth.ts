import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { db } from "@/lib/db";
import { users, adminUsers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { authConfig } from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials =
          typeof credentials === "object" ? credentials : {};
        const email = parsedCredentials.email as string;
        const password = parsedCredentials.password as string;

        if (!email || !password) return null;

        const user = await db.query.users.findFirst({
          where: eq(users.email, email),
        });

        if (!user) return null;

        const passwordsMatch = await compare(password, user.password);
        if (passwordsMatch) return { ...user, id: user.id.toString() };

        return null;
      },
    }),
    Credentials({
      id: "admin-login",
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsedCredentials =
          typeof credentials === "object" ? credentials : {};
        const email = parsedCredentials.email as string;
        const password = parsedCredentials.password as string;

        if (!email || !password) return null;

        // Check against admin_users table
        const admin = await db.query.adminUsers.findFirst({
          where: eq(adminUsers.email, email),
        });

        if (!admin || !admin.password) return null;

        const passwordsMatch = await compare(password, admin.password);
        if (passwordsMatch)
          return {
            id: `admin-${admin.id}`,
            email: admin.email,
            name: admin.name,
            role: "admin",
          } as any;

        return null;
      },
    }),
  ],
});
