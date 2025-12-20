import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/signin",
    newUser: "/signup",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const role = (auth?.user as any)?.role;

      const isAdminRoute = nextUrl.pathname.startsWith("/admin");
      const isStaffRoute = nextUrl.pathname.startsWith("/staff");
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

      // Admin Protection
      // Admin Protection
      if (isAdminRoute) {
        // Allow access to login page
        if (nextUrl.pathname === "/admin") {
          if (isLoggedIn && role === "admin") {
            return Response.redirect(new URL("/admin/dashboard", nextUrl));
          }
          return true;
        }

        if (isLoggedIn && role === "admin") return true;
        return false; // Redirect standard user/staff or unauthenticated
      }

      // Staff Protection
      if (isStaffRoute) {
        // Allow access to login page
        if (nextUrl.pathname === "/staff/login") {
          if (isLoggedIn && role === "staff") {
            return Response.redirect(new URL("/staff/dashboard", nextUrl));
          }
          return true;
        }
        if (isLoggedIn && role === "staff") return true;
        return false;
      }

      // User Dashboard Protection
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        // Redirect logged-in users away from auth pages
        if (nextUrl.pathname === "/signin" || nextUrl.pathname === "/signup") {
          if (role === "admin")
            return Response.redirect(new URL("/admin", nextUrl));
          if (role === "staff")
            return Response.redirect(new URL("/staff/dashboard", nextUrl));
          return Response.redirect(new URL("/dashboard/me", nextUrl));
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role || "user";
      }
      return token;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  providers: [], // Configured in auth.ts
} satisfies NextAuthConfig;
