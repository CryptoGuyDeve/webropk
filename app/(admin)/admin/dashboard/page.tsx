import { auth } from "@/auth";
import { db } from "@/lib/db";
import { adminUsers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, ShieldCheck, Users, Lock } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// --- Theme Definition ---
const GOLD_HEX = "#CCAA33";
const YELLOW_TEXT = `text-[${GOLD_HEX}] dark:text-[#FFD666]`;

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

  // Fetch all admins to display in the table
  const allAdmins = await db.select().from(adminUsers);

  return (
    <div className="min-h-screen bg-zinc-50/50 dark:bg-zinc-950 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
              <ShieldCheck className={`h-8 w-8 ${YELLOW_TEXT}`} />
              Admin Dashboard
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 mt-2">
              Manage authorized administrators and system settings.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="border-green-200 bg-green-50 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              System Operational
            </Badge>
          </div>
        </div>

        {/* Stats / Info */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-zinc-200/60 bg-white/70 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-900/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Admins
              </CardTitle>
              <Shield className="h-4 w-4 text-zinc-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{allAdmins.length}</div>
              <p className="text-xs text-zinc-500">Authorized personnel</p>
            </CardContent>
          </Card>
          {/* Placeholders for future stats */}
          <Card className="border-zinc-200/60 bg-white/70 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-900/50 opacity-60">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-zinc-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">--</div>
              <p className="text-xs text-zinc-500">Registered accounts</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200/60 bg-white/70 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-900/50 opacity-60">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Security Level
              </CardTitle>
              <Lock className="h-4 w-4 text-zinc-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">High</div>
              <p className="text-xs text-zinc-500">Role-based access active</p>
            </CardContent>
          </Card>
        </div>

        {/* Admin List Table */}
        <Card className="border-zinc-200/60 bg-white/70 shadow-sm backdrop-blur-sm dark:border-zinc-800/60 dark:bg-zinc-900/50">
          <CardHeader>
            <CardTitle>Authorized Administrators</CardTitle>
            <CardDescription>
              A list of users with administrative access to this dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Avatar</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead className="text-right">Added</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allAdmins.map((admin) => (
                  <TableRow key={admin.id}>
                    <TableCell>
                      <Avatar className="h-9 w-9">
                        <AvatarFallback className="bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                          {admin.name
                            ? admin.name.slice(0, 2).toUpperCase()
                            : "AD"}
                        </AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell className="font-medium">
                      {admin.name || "N/A"}
                    </TableCell>
                    <TableCell>{admin.email}</TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-500 border-amber-200 dark:border-amber-800"
                      >
                        Super Admin
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right text-zinc-500">
                      {admin.createdAt
                        ? new Date(admin.createdAt).toLocaleDateString()
                        : "-"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
