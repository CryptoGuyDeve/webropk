"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Logo = ({
  className,
  uniColor,
}: {
  className?: string;
  uniColor?: boolean;
}) => {
  return (
    <motion.div
      className={cn("relative inline-block", className)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated Text Logo */}
      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1
          className={cn(
            "text-2xl font-black tracking-tight md:text-3xl",
            uniColor
              ? "text-foreground"
              : "bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent dark:from-white dark:via-zinc-300 dark:to-white"
          )}
        >
          <motion.span
            className="inline-block"
            whileHover={{
              letterSpacing: "0.05em",
            }}
            transition={{ duration: 0.3 }}
          >
            WeBro
          </motion.span>
          <motion.span
            className={cn(
              "inline-block font-black",
              uniColor
                ? ""
                : "bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 bg-clip-text text-transparent"
            )}
            whileHover={{
              scale: 1.1,
            }}
            transition={{ duration: 0.3 }}
          >
            Pk
          </motion.span>
        </h1>

        {/* Shimmer Effect */}
        {!uniColor && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            style={{
              transform: "skewX(-20deg)",
            }}
          />
        )}
      </motion.div>

      {/* Glow Effect on Hover */}
      {!uniColor && (
        <motion.div
          className="absolute -inset-1 -z-10 rounded-lg bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-yellow-500/20 opacity-0 blur-lg"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
};
