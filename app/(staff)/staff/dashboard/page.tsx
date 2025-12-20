import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICE_LIST } from "@/constants/services";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Edit, Package } from "lucide-react";
import { db } from "@/lib/db";
import { services } from "@/lib/db/schema";
import { inArray } from "drizzle-orm";

export default async function StaffDashboard() {
    const session = await auth();

    // Strict Role Check
    if (!session?.user || (session.user as any).role !== "staff") {
        return redirect("/staff/login");
    }

    // Fetch status of services (to see if they have been edited/seeded)
    const existingServices = await db.select({ slug: services.slug }).from(services).where(inArray(services.slug, SERVICE_LIST.map(s => s.slug)));
    const existingSlugs = new Set(existingServices.map(s => s.slug));

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-6 md:p-12">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Content Manager</h1>
                        <p className="text-zinc-500 dark:text-zinc-400">Welcome, {session.user.name}. Select a service to update its content.</p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href="/api/auth/signout">Logout</Link>
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICE_LIST.map((service) => (
                        <Card key={service.slug} className="hover:shadow-lg transition-all border-zinc-200 dark:border-zinc-800">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400 mb-2">
                                        <Package className="w-6 h-6" />
                                    </div>
                                    {existingSlugs.has(service.slug) ? (
                                        <Badge variant="secondary" className="bg-green-100 text-green-700">Live Config</Badge>
                                    ) : (
                                        <Badge variant="outline">Default Content</Badge>
                                    )}
                                </div>
                                <CardTitle className="text-xl">{service.title}</CardTitle>
                                <CardDescription>
                                    Manage pricing, features, and descriptions.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button className="w-full gap-2" asChild>
                                    <Link href={`/staff/dashboard/${service.slug}`}>
                                        <Edit className="w-4 h-4" /> Edit Content
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
