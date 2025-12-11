"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FileQuestion, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="text-center max-w-xl mx-auto">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="bg-red-50 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <FileQuestion className="w-16 h-16 text-red-500" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-black text-zinc-900 mb-4 tracking-tighter">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4">
            Page not found
          </h2>
          <p className="text-zinc-500 text-lg mb-10 leading-relaxed">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-zinc-900 hover:bg-zinc-800 text-white"
            >
              <Link href="/">
                <Home className="w-4 h-4 mr-2" /> Back Home
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8"
            >
              <Link href="/contact">
                <ArrowLeft className="w-4 h-4 mr-2" /> Contact Support
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Decoration */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden opacity-50">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-100 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[100px]" />
        </div>
      </div>
    </div>
  );
}
