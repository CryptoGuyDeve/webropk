"use client";

export const useIntercom = () => {
  const openIntercom = () => {
    if (typeof window !== "undefined" && (window as any).Intercom) {
      (window as any).Intercom("show");
    } else {
      console.warn("Intercom is not initialized");
    }
  };

  const openIntercomWithMessage = (message: string) => {
    if (typeof window !== "undefined" && (window as any).Intercom) {
      (window as any).Intercom("show");
      (window as any).Intercom("showNewMessage", message);
    }
  };

  return { openIntercom, openIntercomWithMessage };
};
