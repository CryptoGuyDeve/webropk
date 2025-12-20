"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
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
import { Badge } from "@/components/ui/badge";
import { Plus, ArrowLeft, Loader2, Pencil, Trash2, Eye, EyeOff } from "lucide-react";
import { createBlog, deleteBlog, updateBlogStatus } from "@/actions/blog";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type Blog = {
    id: number;
    title: string;
    category: string;
    isPublic: boolean | null; // Allow null for drizzle compatibility
    createdAt: Date | null;
};

interface BlogManagerProps {
    initialBlogs: Blog[];
    currentUserName?: string | null;
}

const CATEGORIES = [
    "Technology",
    "Design",
    "Development",
    "Business",
    "Tutorial",
    "News",
    "Other"
];

export function BlogManager({ initialBlogs, currentUserName }: BlogManagerProps) {
    const [view, setView] = useState<"list" | "create">("list");
    const [loading, setLoading] = useState(false);

    // Form State
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [isPublic, setIsPublic] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const result = await createBlog({
                title,
                description,
                content,
                category,
                author: currentUserName || "Admin",
                isPublic,
            });

            if (result.success) {
                toast.success("Blog post created successfully!");
                setView("list");
                // Reset form
                setTitle("");
                setDescription("");
                setContent("");
                setCategory("");
                setIsPublic(false);
            } else {
                toast.error(result.error || "Failed to create blog");
            }
        } catch (err) {
            toast.error("An error occurred");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this blog?")) return;

        try {
            const result = await deleteBlog(id);
            if (result.success) {
                toast.success("Blog deleted successfully");
            } else {
                toast.error(result.error);
            }
        } catch (e) {
            toast.error("Failed to delete blog");
        }
    };

    const toggleStatus = async (id: number, currentStatus: boolean) => {
        try {
            const result = await updateBlogStatus(id, !currentStatus);
            if (result.success) {
                toast.success(`Blog is now ${!currentStatus ? 'Public' : 'Hidden'}`);
            } else {
                toast.error(result.error);
            }
        } catch (e) {
            toast.error("Failed to update status");
        }
    }

    if (view === "create") {
        return (
            <Card className="border-0 shadow-none bg-transparent">
                <div className="mb-6 flex items-center justify-between">
                    <Button
                        variant="ghost"
                        onClick={() => setView("list")}
                        className="gap-2 pl-0 hover:bg-transparent hover:text-zinc-900 dark:hover:text-zinc-100"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to List
                    </Button>
                </div>

                <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl">Create New Blog Post</CardTitle>
                    <CardDescription>
                        Write a new article for your viewers.
                    </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Title</label>
                            <Input
                                placeholder="Enter blog title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                className="bg-white dark:bg-zinc-900"
                            />
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Category</label>
                                <Select value={category} onValueChange={setCategory} required>
                                    <SelectTrigger className="bg-white dark:bg-zinc-900">
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {CATEGORIES.map(cat => (
                                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Visibility</label>
                                <div
                                    className={cn(
                                        "flex items-center gap-2 p-2 border rounded-md cursor-pointer transition-colors",
                                        isPublic ? "bg-green-50/50 border-green-200 dark:bg-green-900/10 dark:border-green-800" : "bg-zinc-50 border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800"
                                    )}
                                    onClick={() => setIsPublic(!isPublic)}
                                >
                                    <div className={cn(
                                        "w-4 h-4 rounded-full border flex items-center justify-center transition-colors",
                                        isPublic ? "border-green-500 bg-green-500" : "border-zinc-400"
                                    )}>
                                        {isPublic && <div className="w-2 h-2 bg-white rounded-full" />}
                                    </div>
                                    <span className="text-sm font-medium">
                                        {isPublic ? "Public (Visible to everyone)" : "Draft (Hidden)"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Short Description</label>
                            <Textarea
                                placeholder="Brief summary for the card preview..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                className="bg-white dark:bg-zinc-900 h-20 resize-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Content</label>
                            <Textarea
                                placeholder="Write your article content here..."
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                                className="bg-white dark:bg-zinc-900 h-[400px] font-mono text-sm leading-relaxed"
                            />
                            <p className="text-xs text-zinc-500">
                                Tip: This field supports basic text content. For complex formatting, we'll upgrade to a rich text editor later.
                            </p>
                        </div>

                        <div className="pt-4 flex items-center gap-4">
                            <Button type="submit" disabled={loading} className="w-full md:w-auto">
                                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Publish Post
                            </Button>
                            <Button type="button" variant="outline" onClick={() => setView("list")} disabled={loading}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="border-zinc-200/60 bg-white/70 shadow-sm backdrop-blur-sm dark:border-zinc-800/60 dark:bg-zinc-900/50">
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Blog Management</CardTitle>
                    <CardDescription>
                        Manage and publish articles to your blog.
                    </CardDescription>
                </div>
                <Button onClick={() => setView("create")} size="sm" className="gap-2">
                    <Plus className="h-4 w-4" />
                    Create New
                </Button>
            </CardHeader>
            <CardContent>
                {initialBlogs.length === 0 ? (
                    <div className="text-center py-12 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg">
                        <p className="text-zinc-500">No blog posts found. Create your first one!</p>
                    </div>
                ) : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {initialBlogs.map((blog) => (
                                <TableRow key={blog.id}>
                                    <TableCell className="font-medium">{blog.title}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className="font-normal">
                                            {blog.category}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div onClick={() => toggleStatus(blog.id, !!blog.isPublic)} className="cursor-pointer">
                                            <Badge
                                                variant={blog.isPublic ? "default" : "secondary"}
                                                className={cn(
                                                    "hover:opacity-80 transition-opacity",
                                                    blog.isPublic ? "bg-green-500 hover:bg-green-600" : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
                                                )}
                                            >
                                                {blog.isPublic ? "Public" : "Draft"}
                                            </Badge>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-zinc-500">
                                        {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : "-"}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                                                onClick={() => handleDelete(blog.id)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </CardContent>
        </Card>
    );
}
