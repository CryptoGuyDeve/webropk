import { getBlogs } from "@/actions/blog";
import { BlogList } from "@/components/blog/blog-list";
import { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
    title: "Premium Insights | Webropk",
    description: "Curated daily articles on technology, design, and business excellence.",
};

export default async function BlogPage() {
    const { data: blogs } = await getBlogs(false);

    return (
        <div className="min-h-screen bg-white dark:bg-black selection:bg-amber-500/30">
            {/* Premium Background */}
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-white to-white dark:from-zinc-900 dark:via-black dark:to-black"></div>

            {/* Golden Glows */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-amber-500/10 rounded-[100%] blur-[100px] -z-10 pointer-events-none mix-blend-screen dark:mix-blend-color-dodge"></div>

            <div className="relative pt-24 pb-20 px-6 sm:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto space-y-16">
                    {/* Premium Header */}
                    <div className="text-center space-y-6 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-600 dark:text-amber-400 text-xs font-bold tracking-widest uppercase mb-4 animate-in fade-in slide-in-from-top-4 duration-1000">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                            Latest Intelligence
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
                            Insights for the <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 animate-gradient-x bg-[length:200%_auto]">
                                Modern Visionary
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto font-light animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                            Explore our curated collection of thoughts on technology, design paradigms, and the future of digital experiences.
                        </p>
                    </div>

                    {/* Blog List Application */}
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                        <BlogList initialBlogs={blogs || []} />
                    </div>
                </div>
            </div>
        </div>
    );
}
