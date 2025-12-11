"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { getUserByEmail } from "@/actions/user";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Invalid credentials");
      } else {
        toast.success("Signed in successfully!");
        // Fetch username to redirect correctly
        try {
          const user = await getUserByEmail(email);
          if (user?.username) {
            router.push(`/dashboard/${user.username}`);
          } else {
            // Fallback if username not found found (should not happen if logged in)
            router.push("/dashboard/me");
          }
        } catch (e) {
          console.error("Failed to fetch user for redirect", e);
          router.push("/dashboard/me");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="relative flex min-h-screen bg-[#FDFDFD] overflow-hidden">
      {/* =====================================
                BACKGROUND ART
      ===================================== */}

      {/* Smooth Gradient Blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 1.3 }}
        className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full 
        bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-300 blur-[160px]"
      />

      {/* Gold Glow Bottom Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-[-200px] right-[-200px] w-[480px] h-[480px] 
        bg-gradient-to-tr from-yellow-500 to-amber-300 blur-[180px] rounded-full"
      />

      {/* Abstract SVG Curved Line */}
      <motion.svg
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.12 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute top-32 left-16 w-[340px]"
        fill="none"
        stroke="#F6C90E"
        strokeWidth="3"
      >
        <path d="M10 120 C 80 10, 250 10, 320 120" />
      </motion.svg>

      {/* Dotted Wave Line */}
      <motion.svg
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ delay: 0.6, duration: 1.4 }}
        className="absolute bottom-24 right-24 w-[260px]"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        strokeDasharray="6 10"
      >
        <path d="M0 40 Q 60 0, 120 40 T 240 40" />
      </motion.svg>

      {/* Organic Blob Shape */}
      <motion.div
        initial={{ rotate: -15, opacity: 0.1 }}
        animate={{ rotate: 0, opacity: 0.2 }}
        transition={{ duration: 1.6 }}
        className="absolute top-[40%] left-[50px] w-[140px] h-[140px] bg-amber-200 rounded-3xl blur-[50px]"
      />

      {/* Noise Texture Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* =====================================
              LEFT SIDE TEXT (Hero Area)
      ===================================== */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="hidden lg:flex flex-col justify-center pl-24 w-1/2 relative z-20"
      >
        <h1 className="text-6xl font-bold text-black leading-tight mb-6">
          Elevate Your
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r 
            from-yellow-600 via-yellow-500 to-yellow-400"
          >
            {" "}
            Creative Workflow
          </span>
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed max-w-md">
          Access your dashboard, manage clients, review campaigns, and
          collaborate with your creative team from a clean, modern and
          beautifully designed workspace.
        </p>

        {/* Yellow Underline Accent */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[5px] bg-gradient-to-r from-yellow-400 to-amber-400 mt-6 rounded-full"
        />
      </motion.div>

      {/* =====================================
                  SIGN-IN CARD AREA
      ===================================== */}
      <div className="flex items-center justify-center w-full lg:w-1/2 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="w-[90%] max-w-md bg-white border border-black/10 rounded-2xl 
            p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-md"
        >
          <h2 className="text-3xl font-semibold text-black mb-2 text-center">
            Welcome Back
          </h2>
          <p className="text-center text-gray-600 mb-7">Please sign in</p>

          {/* Inputs */}
          <div className="space-y-6">
            <div>
              <label className="text-black text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-4 py-3 bg-black/5 text-black rounded-xl 
                  border border-black/20 focus:ring-2 focus:ring-yellow-400 outline-none transition"
              />
            </div>

            <div>
              <label className="text-black text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-4 py-3 bg-black/5 text-black rounded-xl 
                  border border-black/20 focus:ring-2 focus:ring-yellow-400 outline-none transition"
              />
            </div>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleSignIn}
            className="w-full mt-8 py-3 rounded-xl font-semibold text-black 
              bg-gradient-to-r from-yellow-400 to-amber-300 hover:from-yellow-500 hover:to-amber-400 
              transition text-lg shadow-[0_10px_30px_rgba(234,179,8,0.35)]"
          >
            Sign In
          </motion.button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="h-[1px] bg-black/10 flex-1" />
            <span className="text-gray-500 text-sm">or</span>
            <div className="h-[1px] bg-black/10 flex-1" />
          </div>

          {/* Redirect */}
          <p className="text-center text-gray-700 text-sm">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="font-semibold text-yellow-500 hover:underline"
            >
              Create one
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;
