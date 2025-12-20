"use client";

import { useEffect, useState } from "react";
import { getBlogs } from "@/actions/blog";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Link from "next/link";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function LatestBlogs() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const { data } = await getBlogs(false);
                if (data) {
                    // Sort by date desc and take top 5-10
                    setBlogs(data.slice(0, 10));
                }
            } catch (error) {
                console.error("Failed to fetch blogs", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading || blogs.length === 0) return null;

    return (
        <section className="bg-background py-16 md:py-24 border-t border-border/40">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-600 dark:text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                            Live Updates
                        </div>
                        <h2 className="text-3xl font-bold md:text-4xl tracking-tight">Latest & Popular Insights</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                            Stay ahead with our daily tech and design updates.
                        </p>
                    </div>
                    <Link href="/blog" className="text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-500 flex items-center gap-1 group">
                        View All Articles
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                </div>

                <div className="relative overflow-hidden py-4">
                    {/* We use InfiniteSlider for the "moving" effect */}
                    <InfiniteSlider speedOnHover={10} speed={40} gap={24}>
                        {blogs.map((blog) => (
                            <Link key={blog.id} href={`/blog/${blog.id}`} className="block h-full py-4">
                                <div className="group relative flex h-full min-w-[320px] max-w-[320px] flex-col overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-amber-500/30">

                                    {/* Decorative Header Area */}
                                    <div className="h-40 w-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 relative overflow-hidden group-hover:from-amber-500/10 group-hover:to-orange-500/10 transition-colors duration-500">
                                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center" />
                                        <div className="absolute top-4 left-4">
                                            <Badge variant="secondary" className="backdrop-blur-md bg-white/80 dark:bg-black/50 border-white/20 shadow-sm">
                                                {blog.category}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                                            <span className="flex items-center gap-1">
                                                <User className="h-3 w-3" /> {blog.author || "Admin"}
                                            </span>
                                            <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                            <span className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                {blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString() : "Draft"}
                                            </span>
                                        </div>

                                        <h3 className="line-clamp-2 text-lg font-bold tracking-tight mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                            {blog.title}
                                        </h3>

                                        <p className="line-clamp-3 text-sm text-muted-foreground mb-4 flex-1">
                                            {blog.description}
                                        </p>

                                        <div className="mt-auto flex items-center text-sm font-medium text-amber-600 dark:text-amber-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                            Read Article <ArrowUpRight className="ml-1 h-3 w-3" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </InfiniteSlider>

                    {/* Gradient Masks */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent" />
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent" />
                </div>
            </div>
        </section>
    );
}
