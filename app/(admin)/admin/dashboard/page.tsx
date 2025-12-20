import { auth } from "@/auth";
import { db } from "@/lib/db";
import { adminUsers, staffUsers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { DashboardView } from "@/components/admin/dashboard-view";
import { getBlogs } from "@/actions/blog";

export default async function AdminDashboardPage() {
  const session = await auth();

  if (!session?.user?.email) {
    return redirect("/admin");
  }

  // Check if user is an admin
  const [currentAdmin] = await db
    .select()
    .from(adminUsers)
    .where(eq(adminUsers.email, session.user.email));

  if (!currentAdmin) {
    // Not authorized
    return redirect("/admin");
  }

  // Fetch all admins
  const allAdmins = await db.select().from(adminUsers);

  // Fetch all staff
  const allStaff = await db.select().from(staffUsers);

  // Fetch all blogs (admin view)
  const blogsResult = await getBlogs(true);
  const blogs = blogsResult.data || [];

  return (
    <DashboardView
      admins={allAdmins}
      staff={allStaff}
      blogs={blogs}
      currentUser={session.user}
    />
  );
}

