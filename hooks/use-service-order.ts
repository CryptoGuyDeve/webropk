"use client";

import { createServiceOrder } from "@/actions/service-orders";
import { useIntercom } from "./use-intercom";
import { toast } from "sonner";

interface UseServiceOrderParams {
  serviceName: string;
  packageType: string;
  price: string;
}

export function useServiceOrder() {
  const { openIntercomWithMessage } = useIntercom();

  const createOrderAndContact = async (
    params: UseServiceOrderParams,
    userEmail?: string | null,
    userName?: string | null
  ) => {
    try {
      // If user is logged in, create the order
      if (userEmail) {
        const result = await createServiceOrder({
          userEmail,
          userName: userName ?? undefined,
          serviceName: params.serviceName,
          packageType: params.packageType,
          price: params.price,
        });

        if (result.success) {
          toast.success(
            "Service order created! Our team will contact you shortly."
          );
        } else {
          toast.error("Failed to create order. Please try again.");
        }
      }

      // Open Intercom with pre-filled message
      const message = `Hi, I'm interested in the ${params.packageType} package for ${params.serviceName} ($${params.price}).`;
      openIntercomWithMessage(message);
    } catch (error) {
      console.error("Error creating service order:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return { createOrderAndContact };
}
