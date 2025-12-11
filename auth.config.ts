import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/signin",
    newUser: "/signup",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        if (nextUrl.pathname === "/signin" || nextUrl.pathname === "/signup") {
          return Response.redirect(new URL("/dashboard/me", nextUrl));
        }
      }
      return true;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        // We can fetch more user details here if needed, or pass from token
        session.user.id = token.sub;
      }
      return session;
    },
  },
  providers: [], // Configured in auth.ts
} satisfies NextAuthConfig;
