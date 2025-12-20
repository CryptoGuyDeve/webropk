import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Staff Panel | WebRoPK",
    description: "WebRoPK Staff Content Management System",
};

export default function StaffLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
            {children}
        </div>
    );
}
