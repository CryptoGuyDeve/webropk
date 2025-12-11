import { auth } from "@/auth";
import { getUser } from "@/actions/user";
import { redirect } from "next/navigation";

export default async function DashboardMePage() {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/signin");
  }

  // We can use the 'me' keyword with getUser which handles email lookup from session
  const user = await getUser("me");

  if (user?.username) {
    redirect(`/dashboard/${user.username}`);
  } else {
    // If for some reason we can't find the username, stay here or go to error?
    // Let's redirect to a generic setup page or show error.
    // For now, let's just 404 or redirect to home.
    redirect("/");
  }
}
