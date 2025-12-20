import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { services } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { ServiceEditor } from "@/components/staff/service-editor";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ServiceEditorPage({ params }: PageProps) {
    const { slug } = await params;
    const session = await auth();

    if (!session?.user || (session.user as any).role !== "staff") {
        return redirect("/staff/login");
    }

    const serviceData = await db.query.services.findFirst({
        where: eq(services.slug, slug),
    });

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-6 md:p-12">
            <div className="max-w-6xl mx-auto space-y-6">
                <Button variant="ghost" asChild className="gap-2">
                    <Link href="/staff/dashboard">
                        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                    </Link>
                </Button>

                <ServiceEditor
                    slug={slug}
                    initialData={serviceData ? {
                        heroTitle: serviceData.heroTitle,
                        heroSubtitle: serviceData.heroSubtitle,
                        packages: serviceData.packages as any
                    } : null}
                />
            </div>
        </div>
    );
}
