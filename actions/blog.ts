"use server";

import { db } from "@/lib/db";
import { blogs } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export type CreateBlogInput = {
  title: string;
  description: string;
  content: string;
  category: string;
  author: string;
  isPublic: boolean;
};

export async function createBlog(data: CreateBlogInput) {
  try {
    await db.insert(blogs).values({
      ...data,
      publishedAt: data.isPublic ? new Date() : null,
    });
    revalidatePath("/blog");
    revalidatePath("/admin/dashboard");
    return { success: true };
  } catch (error) {
    console.error("Error creating blog:", error);
    return { error: "Failed to create blog" };
  }
}

export async function getBlogs(isAdmin = false) {
  try {
    const conditions = isAdmin ? undefined : eq(blogs.isPublic, true);

    const allBlogs = await db.query.blogs.findMany({
      where: conditions,
      orderBy: [desc(blogs.createdAt)],
    });
    return { data: allBlogs };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { error: "Failed to fetch blogs" };
  }
}

export async function getBlogById(id: number) {
  try {
    const blog = await db.query.blogs.findFirst({
      where: eq(blogs.id, id),
    });
    return { data: blog };
  } catch (error) {
    console.error("Error fetching blog:", error);
    return { error: "Failed to fetch blog" };
  }
}

export async function deleteBlog(id: number) {
  try {
    await db.delete(blogs).where(eq(blogs.id, id));
    revalidatePath("/blog");
    revalidatePath("/admin/dashboard");
    return { success: true };
  } catch (error) {
    console.error("Error deleting blog:", error);
    return { error: "Failed to delete blog" };
  }
}

export async function updateBlogStatus(id: number, isPublic: boolean) {
  try {
    await db
      .update(blogs)
      .set({
        isPublic,
        publishedAt: isPublic ? new Date() : null,
      })
      .where(eq(blogs.id, id));
    revalidatePath("/blog");
    revalidatePath("/admin/dashboard");
    return { success: true };
  } catch (error) {
    console.error("Error updating blog status:", error);
    return { error: "Failed to update blog status" };
  }
}
