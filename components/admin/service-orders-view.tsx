"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Search,
    Package,
    Clock,
    CheckCircle2,
    XCircle,
    PlayCircle,
    Loader2,
    Mail,
    DollarSign,
    Calendar,
    Filter,
} from "lucide-react";
import { updateServiceOrder } from "@/actions/service-orders";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ServiceOrder {
    id: number;
    userEmail: string;
    userName: string | null;
    serviceName: string;
    packageType: string;
    price: string;
    status: string;
    progress: number;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
}

interface ServiceOrdersViewProps {
    orders: ServiceOrder[];
}

const statusConfig = {
    pending: {
        label: "Pending",
        color: "bg-gray-100 text-gray-700 border-gray-300",
        icon: Clock,
        iconColor: "text-gray-500",
    },
    in_process_dealing: {
        label: "In Process",
        color: "bg-blue-100 text-blue-700 border-blue-300",
        icon: Loader2,
        iconColor: "text-blue-500",
    },
    started: {
        label: "Started",
        color: "bg-purple-100 text-purple-700 border-purple-300",
        icon: PlayCircle,
        iconColor: "text-purple-500",
    },
    half_done: {
        label: "Half Done",
        color: "bg-amber-100 text-amber-700 border-amber-300",
        icon: Loader2,
        iconColor: "text-amber-500",
    },
    done: {
        label: "Completed",
        color: "bg-green-100 text-green-700 border-green-300",
        icon: CheckCircle2,
        iconColor: "text-green-500",
    },
    canceled: {
        label: "Canceled",
        color: "bg-red-100 text-red-700 border-red-300",
        icon: XCircle,
        iconColor: "text-red-500",
    },
};

export function ServiceOrdersView({ orders: initialOrders }: ServiceOrdersViewProps) {
    const [orders, setOrders] = useState(initialOrders);
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [isUpdating, setIsUpdating] = useState<number | null>(null);

    const filteredOrders = orders.filter((order) => {
        const matchesSearch =
            order.userEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.userName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.serviceName.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesStatus = statusFilter === "all" || order.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const handleStatusChange = async (orderId: number, newStatus: string) => {
        setIsUpdating(orderId);
        try {
            const result = await updateServiceOrder({
                id: orderId,
                status: newStatus as any,
            });

            if (result.success && result.data) {
                setOrders((prev) =>
                    prev.map((order) =>
                        order.id === orderId ? { ...order, ...result.data } : order
                    )
                );
                toast.success("Order status updated successfully");
            } else {
                toast.error(result.error || "Failed to update order status");
            }
        } catch (error) {
            toast.error("An error occurred while updating the order");
        } finally {
            setIsUpdating(null);
        }
    };

    const totalRevenue = orders.reduce((sum, order) => sum + parseFloat(order.price || "0"), 0);
    const activeOrders = orders.filter((o) => !["done", "canceled"].includes(o.status)).length;
    const completedOrders = orders.filter((o) => o.status === "done").length;

    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                        <Package className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{orders.length}</div>
                        <p className="text-xs text-muted-foreground">All time</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                        <Loader2 className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{activeOrders}</div>
                        <p className="text-xs text-muted-foreground">In progress</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Completed</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{completedOrders}</div>
                        <p className="text-xs text-muted-foreground">Successfully finished</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <DollarSign className="h-4 w-4 text-[#CCAA33]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${totalRevenue.toFixed(2)}</div>
                        <p className="text-xs text-muted-foreground">From all orders</p>
                    </CardContent>
                </Card>
            </div>

            {/* Filters and Search */}
            <Card>
                <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <CardTitle>Service Orders Management</CardTitle>
                            <CardDescription>
                                Manage and track all customer service orders
                            </CardDescription>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="relative w-full sm:w-64">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search by email, name, or service..."
                                    className="pl-9"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <Select value={statusFilter} onValueChange={setStatusFilter}>
                                <SelectTrigger className="w-full sm:w-40">
                                    <Filter className="h-4 w-4 mr-2" />
                                    <SelectValue placeholder="Filter by status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Status</SelectItem>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="in_process_dealing">In Process</SelectItem>
                                    <SelectItem value="started">Started</SelectItem>
                                    <SelectItem value="half_done">Half Done</SelectItem>
                                    <SelectItem value="done">Completed</SelectItem>
                                    <SelectItem value="canceled">Canceled</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {filteredOrders.length > 0 ? (
                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Customer</TableHead>
                                        <TableHead>Service</TableHead>
                                        <TableHead>Package</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead>Progress</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Date</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredOrders.map((order, index) => {
                                        const config = statusConfig[order.status as keyof typeof statusConfig] || statusConfig.pending;
                                        const Icon = config.icon;

                                        return (
                                            <motion.tr
                                                key={order.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                                className="group hover:bg-muted/50"
                                            >
                                                <TableCell>
                                                    <div className="flex flex-col">
                                                        <div className="flex items-center gap-2">
                                                            <Mail className="h-3 w-3 text-muted-foreground" />
                                                            <span className="font-medium text-sm">
                                                                {order.userName || "Unknown"}
                                                            </span>
                                                        </div>
                                                        <span className="text-xs text-muted-foreground">
                                                            {order.userEmail}
                                                        </span>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="font-medium">
                                                    {order.serviceName}
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="outline" className="text-xs">
                                                        {order.packageType}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="font-semibold text-[#CCAA33]">
                                                    ${order.price}
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-16 h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                                            <div
                                                                className="h-full bg-[#CCAA33] transition-all duration-500"
                                                                style={{ width: `${order.progress}%` }}
                                                            />
                                                        </div>
                                                        <span className="text-xs text-muted-foreground">
                                                            {order.progress}%
                                                        </span>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <Select
                                                        value={order.status}
                                                        onValueChange={(value) => handleStatusChange(order.id, value)}
                                                        disabled={isUpdating === order.id}
                                                    >
                                                        <SelectTrigger
                                                            className={cn(
                                                                "w-40 h-8 text-xs",
                                                                config.color,
                                                                isUpdating === order.id && "opacity-50"
                                                            )}
                                                        >
                                                            <div className="flex items-center gap-1.5">
                                                                <Icon
                                                                    className={cn(
                                                                        "h-3 w-3",
                                                                        config.iconColor,
                                                                        isUpdating === order.id && "animate-spin"
                                                                    )}
                                                                />
                                                                <SelectValue />
                                                            </div>
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="pending">Pending</SelectItem>
                                                            <SelectItem value="in_process_dealing">
                                                                In Process Dealing
                                                            </SelectItem>
                                                            <SelectItem value="started">Started</SelectItem>
                                                            <SelectItem value="half_done">Half Done</SelectItem>
                                                            <SelectItem value="done">Deal Done</SelectItem>
                                                            <SelectItem value="canceled">Deal Canceled</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </TableCell>
                                                <TableCell className="text-xs text-muted-foreground">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="h-3 w-3" />
                                                        {new Date(order.createdAt).toLocaleDateString()}
                                                    </div>
                                                </TableCell>
                                            </motion.tr>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <Package className="h-12 w-12 text-muted-foreground mb-4" />
                            <h3 className="text-lg font-semibold mb-2">No orders found</h3>
                            <p className="text-sm text-muted-foreground">
                                {searchQuery || statusFilter !== "all"
                                    ? "Try adjusting your filters"
                                    : "No service orders have been created yet"}
                            </p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
