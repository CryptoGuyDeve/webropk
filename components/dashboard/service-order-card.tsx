"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    Package,
    Clock,
    CheckCircle2,
    XCircle,
    PlayCircle,
    Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceOrder {
    id: number;
    serviceName: string;
    packageType: string;
    price: string;
    status: string;
    progress: number;
    createdAt: Date;
    updatedAt: Date;
}

interface ServiceOrderCardProps {
    order: ServiceOrder;
    index: number;
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

export function ServiceOrderCard({ order, index }: ServiceOrderCardProps) {
    const config = statusConfig[order.status as keyof typeof statusConfig] || statusConfig.pending;
    const Icon = config.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
        >
            <Card className="border-zinc-200/60 bg-white/70 shadow-sm backdrop-blur-sm dark:border-zinc-800/60 dark:bg-zinc-900/50 hover:shadow-md transition-all">
                <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#CCAA33]/10">
                                <Package className="h-5 w-5 text-[#CCAA33]" />
                            </div>
                            <div>
                                <CardTitle className="text-base font-semibold">
                                    {order.serviceName}
                                </CardTitle>
                                <p className="text-xs text-zinc-500 mt-0.5">
                                    {order.packageType}
                                </p>
                            </div>
                        </div>
                        <Badge
                            variant="outline"
                            className={cn("gap-1.5 font-medium", config.color)}
                        >
                            <Icon className={cn("h-3 w-3", config.iconColor, order.status === "in_process_dealing" || order.status === "half_done" ? "animate-spin" : "")} />
                            {config.label}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Progress Bar */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-zinc-600 dark:text-zinc-400">Progress</span>
                            <span className="font-semibold text-[#CCAA33]">{order.progress}%</span>
                        </div>
                        <div className="relative">
                            <Progress
                                value={order.progress}
                                className="h-2 bg-zinc-100 dark:bg-zinc-800"
                            />
                            <motion.div
                                className="absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r from-[#CCAA33] to-[#FFD666]"
                                initial={{ width: 0 }}
                                animate={{ width: `${order.progress}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            />
                        </div>
                    </div>

                    {/* Price and Date */}
                    <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800">
                        <div className="text-sm">
                            <span className="text-zinc-500">Price:</span>{" "}
                            <span className="font-bold text-[#CCAA33]">${order.price}</span>
                        </div>
                        <div className="text-xs text-zinc-400">
                            {new Date(order.createdAt).toLocaleDateString()}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
