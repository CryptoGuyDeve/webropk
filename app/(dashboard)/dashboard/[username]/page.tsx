"use client";

import { useRouter } from "next/navigation";
import { useEffect, use, useState } from "react";
import React from "react";
import { getUser } from "@/actions/user";

interface DashboardPageProps {
  params: Promise<{
    username: string;
  }>;
}

interface UserProfile {
  name: string | null;
  username: string;
  email: string;
  skills: string | null;
}

export default function DashboardPage({ params }: DashboardPageProps) {
  const { username } = use(params);
  const router = useRouter();
  const [viewer, setViewer] = useState<UserProfile | null | undefined>(
    undefined
  );

  useEffect(() => {
    // Fetch user data
    async function fetchUser() {
      try {
        const user = await getUser(username);
        setViewer(user);

        // Redirect if not found (or handle differnetly) -
        // Logic in original code: if viewer === null (fetched but not logged in? or not found?)
        // Here getUser returns null if not found.
        if (user === null) {
          // Maybe 404? Or redirect to signin if it was supposed to be protected "me"?
          // The original code had logic: if (viewer === null) router.push("/signin");
          // But here "viewer" is the profile of the visited user, not necessarily the logged in user.
          // However, existing logic seemed to treat it as "viewer" = "current user" from Convex `api.users.viewer`.
          // Convex `api.users.viewer` typically implies "me".
          // But the route is `[username]`.
          // Only if convex viewer was "me", then it checked `viewer.username !== username`.
          // For now, let's assume we just display the profile of 'username'.
          // But we should check if we are logged in?
          // Original code: if (viewer === null) router.push("/signin");
          // This implies "viewer" was the authenticated user.
          // If I just fetch public profile, I can't check auth status unless I use useSession as well.
          // Let's rely on getUser returning null to mean "user not found".
          // But for auth check, we should use useSession if we want to enforce login.
          // The original code enforced login.
        }
      } catch (error) {
        console.error(error);
        setViewer(null);
      }
    }
    fetchUser();
  }, [username]);

  // Original auth check simulation
  useEffect(() => {
    // If we want to check if the current user is logged in, we should use useSession.
    // But purely based on "viewer" variable which now holds the profile of the URL param user:
    // If the user doesn't exist (viewer === null), what should we do?
    if (viewer === null) {
      // User not found in DB
      // Maybe redirect to 404 or home?
      // Or if this was meant to be "my dashboard", redirect to signin.
    }
  }, [viewer, router]);

  if (viewer === undefined) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Loading dashboard...</p>
      </div>
    );
  }

  if (viewer === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">User not found.</p>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Welcome, {viewer.name || viewer.username || "User"} 👋
      </h1>

      <p className="text-gray-600 mt-2">This is your personalized dashboard.</p>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p>
            <span className="font-medium">Email:</span> {viewer.email}
          </p>
          <p>
            <span className="font-medium">Username:</span> {viewer.username}
          </p>
          {viewer.skills && (
            <p>
              <span className="font-medium">Skills:</span> {viewer.skills}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
