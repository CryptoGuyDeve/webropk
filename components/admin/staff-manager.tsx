"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { createStaffUser } from "@/actions/staff";
import { toast } from "sonner";
import { UserPlus, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface StaffManagerProps {
    staff: any[];
}

export function StaffManager({ staff }: StaffManagerProps) {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);

        try {
            const result = await createStaffUser(null, formData);
            if (result.error) {
                toast.error(result.error);
            } else {
                toast.success("Staff user created successfully");
                (e.target as HTMLFormElement).reset();
            }
        } catch (err) {
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <Card className="border-zinc-200/60 bg-white/70 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-900/50">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <UserPlus className="h-5 w-5" />
                        Add New Staff
                    </CardTitle>
                    <CardDescription>
                        Create an account for a staff member to manage service content.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                        <Input name="name" placeholder="Full Name" required className="md:w-1/4" />
                        <Input name="email" type="email" placeholder="Email Address" required className="md:w-1/4" />
                        <Input name="password" type="password" placeholder="Password" required className="md:w-1/4" />
                        <Button type="submit" disabled={loading} className="md:w-1/4">
                            {loading ? "Creating..." : "Create Account"}
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <Card className="border-zinc-200/60 bg-white/70 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-900/50">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5" />
                        Staff Directory
                    </CardTitle>
                    <CardDescription>
                        List of all staff members with access to the Staff Panel.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Joined</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {staff.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                                        No staff members found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                staff.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell className="font-medium">{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>
                                            <Badge variant="secondary" className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                                                Active
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right text-muted-foreground">
                                            {new Date(user.createdAt).toLocaleDateString()}
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
