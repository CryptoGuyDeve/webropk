"use server";

import { db } from "@/lib/db";
import { serviceOrders } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";
import { auth } from "@/auth";

export type ServiceOrderStatus =
  | "pending"
  | "in_process_dealing"
  | "started"
  | "half_done"
  | "done"
  | "canceled";

export interface CreateServiceOrderInput {
  userEmail: string;
  userName?: string;
  serviceName: string;
  packageType: string;
  price: string;
}

export interface UpdateServiceOrderInput {
  id: number;
  status?: ServiceOrderStatus;
  progress?: number;
  notes?: string;
}

/**
 * Create a new service order
 */
export async function createServiceOrder(input: CreateServiceOrderInput) {
  try {
    const [order] = await db
      .insert(serviceOrders)
      .values({
        userEmail: input.userEmail,
        userName: input.userName || null,
        serviceName: input.serviceName,
        packageType: input.packageType,
        price: input.price,
        status: "pending",
        progress: 0,
      })
      .returning();

    return { success: true, data: order };
  } catch (error) {
    console.error("Error creating service order:", error);
    return { success: false, error: "Failed to create service order" };
  }
}

/**
 * Get all service orders for a specific user by email
 */
export async function getUserServiceOrders(email: string) {
  try {
    const orders = await db
      .select()
      .from(serviceOrders)
      .where(eq(serviceOrders.userEmail, email))
      .orderBy(desc(serviceOrders.createdAt));

    return { success: true, data: orders };
  } catch (error) {
    console.error("Error fetching user service orders:", error);
    return {
      success: false,
      error: "Failed to fetch service orders",
      data: [],
    };
  }
}

/**
 * Get all service orders (admin only)
 */
export async function getAllServiceOrders() {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return { success: false, error: "Unauthorized", data: [] };
    }

    // You can add admin check here if needed
    const orders = await db
      .select()
      .from(serviceOrders)
      .orderBy(desc(serviceOrders.createdAt));

    return { success: true, data: orders };
  } catch (error) {
    console.error("Error fetching all service orders:", error);
    return {
      success: false,
      error: "Failed to fetch service orders",
      data: [],
    };
  }
}

/**
 * Update service order status and progress (admin only)
 */
export async function updateServiceOrder(input: UpdateServiceOrderInput) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return { success: false, error: "Unauthorized" };
    }

    const updateData: any = {
      updatedAt: new Date(),
    };

    if (input.status !== undefined) {
      updateData.status = input.status;

      // Auto-set progress based on status
      if (input.progress === undefined) {
        switch (input.status) {
          case "pending":
          case "in_process_dealing":
            updateData.progress = 0;
            break;
          case "started":
            updateData.progress = 25;
            break;
          case "half_done":
            updateData.progress = 50;
            break;
          case "done":
            updateData.progress = 100;
            break;
          case "canceled":
            updateData.progress = 0;
            break;
        }
      }
    }

    if (input.progress !== undefined) {
      updateData.progress = input.progress;
    }

    if (input.notes !== undefined) {
      updateData.notes = input.notes;
    }

    const [updatedOrder] = await db
      .update(serviceOrders)
      .set(updateData)
      .where(eq(serviceOrders.id, input.id))
      .returning();

    return { success: true, data: updatedOrder };
  } catch (error) {
    console.error("Error updating service order:", error);
    return { success: false, error: "Failed to update service order" };
  }
}

/**
 * Delete a service order (admin only)
 */
export async function deleteServiceOrder(id: number) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return { success: false, error: "Unauthorized" };
    }

    await db.delete(serviceOrders).where(eq(serviceOrders.id, id));

    return { success: true };
  } catch (error) {
    console.error("Error deleting service order:", error);
    return { success: false, error: "Failed to delete service order" };
  }
}
