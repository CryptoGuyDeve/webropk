"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Calendar, User, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BlogListProps {
    initialBlogs: any[];
}

const CATEGORIES = [
    "All",
    "Technology",
    "Design",
    "Development",
    "Business",
    "Tutorial",
    "News",
    "Other"
];

// Gold/Premium Color Constants
const GOLD_ACCENT = "text-amber-500 dark:text-amber-400";
const GOLD_BG = "bg-amber-500 dark:bg-amber-400";
const GOLD_BORDER = "border-amber-500/50 dark:border-amber-400/50";
const GOLD_GLOW = "shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]";

export function BlogList({ initialBlogs }: BlogListProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const filteredBlogs = initialBlogs.filter((blog) => {
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.description.toLowerCase().includes(searchQuery.toLowerCase());

        const blogCategory = blog.category.toLowerCase().trim();
        const filterCategory = selectedCategory.toLowerCase().trim();
        const matchesCategory = selectedCategory === "All" || blogCategory === filterCategory;

        return matchesSearch && matchesCategory;
    });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 50, opacity: 0, scale: 0.9 },
        show: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <div className="space-y-12 select-none">
            {/* Search and Filter Section - Floating layout */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="sticky top-4 z-40 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-xl p-4 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg flex flex-col md:flex-row gap-4 items-center justify-between"
            >
                <div className="relative w-full md:w-96 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
                    <Search className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 group-focus-within:${GOLD_ACCENT} transition-colors`} />
                    <Input
                        placeholder="Search premium articles..."
                        className="pl-10 h-10 bg-white/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus-visible:ring-amber-500/50 transition-all font-light tracking-wide"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex gap-2 overflow-x-auto pb-1 w-full md:w-auto no-scrollbar mask-gradient-x">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={cn(
                                "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap",
                                selectedCategory === cat
                                    ? "text-white shadow-lg shadow-amber-500/25"
                                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                            )}
                        >
                            {selectedCategory === cat && (
                                <motion.div
                                    layoutId="activeCategory"
                                    className={`absolute inset-0 ${GOLD_BG} rounded-full -z-10`}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            {cat}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Blog Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 perspective-1000"
            >
                <AnimatePresence mode="popLayout">
                    {filteredBlogs.length > 0 ? (
                        filteredBlogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                variants={item}
                                layout
                                onHoverStart={() => setHoveredCard(blog.id)}
                                onHoverEnd={() => setHoveredCard(null)}
                                className="h-full"
                            >
                                <Link href={`/blog/${blog.id}`} className="block h-full">
                                    <Card className={cn(
                                        "h-full flex flex-col overflow-hidden relative border-0 bg-white dark:bg-zinc-900 shadow-xl dark:shadow-2xl transition-all duration-500 group",
                                        hoveredCard === blog.id ? "transform -translate-y-2" : ""
                                    )}>
                                        {/* Gradient Border */}
                                        <div className={cn(
                                            "absolute inset-0 p-[1px] rounded-xl bg-gradient-to-br from-transparent to-transparent opacity-50 transition-all duration-500",
                                            hoveredCard === blog.id ? "from-amber-400 via-orange-400 to-transparent opacity-100" : ""
                                        )} style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />

                                        {/* Image Placeholder with Shine Effect */}
                                        <div className="h-56 w-full bg-zinc-900 relative overflow-hidden group">
                                            <div className={`absolute inset-0 bg-gradient-to-br from-amber-900/40 to-black/80 z-10`} />

                                            {/* Abstract shapes */}
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-400/30 transition-colors duration-700" />
                                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                                            {/* Category Tag */}
                                            <div className="absolute top-4 left-4 z-20">
                                                <Badge className="bg-black/50 text-white border border-white/10 backdrop-blur-md uppercase text-[10px] tracking-widest font-bold px-3 py-1 shadow-lg">
                                                    {blog.category}
                                                </Badge>
                                            </div>

                                            {/* Subtle Animated Grid */}
                                            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 bg-center" />
                                        </div>

                                        <CardContent className="flex-grow pt-8 px-6 relative z-20">
                                            {/* Author & Date */}
                                            <div className="flex items-center gap-4 text-xs font-medium text-zinc-400 mb-4 font-mono">
                                                <div className="flex items-center gap-1.5">
                                                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-[10px] text-white font-bold">
                                                        {blog.author ? blog.author[0].toUpperCase() : "A"}
                                                    </div>
                                                    <span className="text-zinc-600 dark:text-zinc-300">{blog.author || "Admin"}</span>
                                                </div>
                                                <div className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="h-3 w-3" />
                                                    {blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString() : "Draft"}
                                                </div>
                                            </div>

                                            <h3
                                                className="text-xl font-bold tracking-tight mb-3 line-clamp-2 text-zinc-900 dark:text-zinc-100 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300"
                                            >
                                                {blog.title}
                                            </h3>

                                            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-3 mb-6 font-light">
                                                {blog.description}
                                            </p>
                                        </CardContent>

                                        <CardFooter className="pb-6 px-6 relative z-20 mt-auto border-t border-zinc-100 dark:border-zinc-800 pt-4">
                                            <div className="w-full flex items-center justify-between group/btn">
                                                <span className={`text-xs font-bold uppercase tracking-widest ${GOLD_ACCENT} opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                                                    Read Full Article
                                                </span>
                                                <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-amber-500/50">
                                                    <ArrowUpRight className="h-4 w-4 transform group-hover:rotate-45 transition-transform duration-300" />
                                                </div>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="col-span-full py-24 text-center bg-zinc-50/50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800"
                        >
                            <div className={`inline-flex h-20 w-20 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-900/20 mb-6 ${GOLD_GLOW}`}>
                                <Sparkles className={`h-10 w-10 ${GOLD_ACCENT}`} />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 font-serif">Empty Canvas</h3>
                            <p className="text-zinc-500 max-w-md mx-auto mt-3 mb-8 font-light">
                                We couldn't find any articles matching your premium taste. Try adjusting the filters.
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => { setSearchQuery(""); setSelectedCategory("All") }}
                                className="rounded-full px-8 hover:bg-amber-50 hover:text-amber-600 dark:hover:bg-amber-900/20 dark:hover:border-amber-700/50 transition-all"
                            >
                                Clear All Filters
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
