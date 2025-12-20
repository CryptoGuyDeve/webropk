import { getBlogById } from "@/actions/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const { data: blog } = await getBlogById(parseInt(id));

    if (!blog) {
        return {
            title: "Blog Not Found | Webropk",
        };
    }

    return {
        title: `${blog.title} | Webropk Blog`,
        description: blog.description,
    };
}

export default async function BlogDetailPage({ params }: PageProps) {
    const { id } = await params;
    const { data: blog, error } = await getBlogById(parseInt(id));

    if (error || !blog) {
        notFound();
    }

    // Calculate read time (approximate)
    const readTime = Math.ceil(blog.content.split(/\s+/).length / 200);

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-20">
            {/* Hero Section */}
            <div className="relative pt-32 pb-16 px-6 sm:px-12 lg:px-24 overflow-hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -z-10" />

                <div className="max-w-4xl mx-auto space-y-8">
                    <Link href="/blog">
                        <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-blue-600 dark:hover:text-blue-400">
                            <ArrowLeft className="h-4 w-4" />
                            Back to All Articles
                        </Button>
                    </Link>

                    <div className="space-y-6">
                        <div className="flex gap-2">
                            <Badge variant="secondary" className="px-3 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                                {blog.category}
                            </Badge>
                            {!blog.isPublic && (
                                <Badge variant="outline" className="border-amber-500 text-amber-600">Draft</Badge>
                            )}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                {blog.author || "Admin"}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                }) : "Draft"}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {readTime} min read
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-6 sm:px-12 lg:px-24 py-12">
                <article className="max-w-3xl mx-auto prose prose-zinc dark:prose-invert prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 dark:prose-a:text-blue-400">
                    <p className="lead text-xl text-zinc-600 dark:text-zinc-300 mb-8 border-l-4 border-blue-500 pl-4 py-2 italic font-serif">
                        {blog.description}
                    </p>
                    <div
                        className="whitespace-pre-wrap"
                        style={{ whiteSpace: 'pre-wrap' }}
                    >
                        {blog.content}
                    </div>
                </article>
            </div>
        </div>
    );
}
