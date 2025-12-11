"use client";

import React, { useState, useTransition } from "react";
import { motion } from "framer-motion";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { register } from "@/actions/register";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    skills: "",
  });
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.skills
    ) {
      toast.error("Please fill all fields.");
      return;
    }

    startTransition(() => {
      register(formData)
        .then((data) => {
          if (data.error) {
            toast.error(data.error);
          } else {
            toast.success(data.success);
            router.push(`/dashboard/${formData.username}`);
          }
        })
        .catch(() => {
          toast.error("Something went wrong!");
        });
    });
  };

  return (
    <div className="relative flex min-h-screen bg-[#FDFDFD] overflow-hidden">
      {/* BACKGROUND BLOBS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute top-[-180px] left-[-180px] w-[420px] h-[420px] bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-300 blur-[160px] rounded-full"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-[-180px] right-[-180px] w-[450px] h-[450px] bg-gradient-to-tr from-yellow-500 to-amber-300 blur-[180px] rounded-full"
      />

      {/* LEFT SECTION TEXT */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="hidden lg:flex flex-col justify-center pl-24 w-1/2"
      >
        <h1 className="text-5xl font-bold text-black leading-tight mb-6">
          Create Your
          <span className="text-yellow-500"> Agency Account</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-md">
          Unlock access to premium tools, AI automations, campaign dashboards,
          and a fully optimized creative space.
        </p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "180px" }}
          transition={{ duration: 0.8 }}
          className="h-[4px] bg-yellow-500 mt-6 rounded-full"
        />
      </motion.div>

      {/* SIGNUP CARD */}
      <div className="flex items-center justify-center w-full lg:w-1/2 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="w-[90%] max-w-md bg-white border border-black/10 rounded-2xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
        >
          <h2 className="text-3xl font-bold text-black text-center mb-2">
            Join Us
          </h2>
          <p className="text-gray-600 text-center mb-7">
            Create your new account
          </p>

          {/* FORM */}
          <div className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="text-black text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                disabled={isPending}
                placeholder="Faiz ur Rehman"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full mt-1 px-4 py-3 bg-black/5 text-black rounded-xl
                   border border-black/20 focus:ring-2 focus:ring-yellow-400 outline-none transition"
              />
            </div>

            {/* Username */}
            <div>
              <label className="text-black text-sm font-medium">Username</label>
              <input
                type="text"
                disabled={isPending}
                placeholder="@faizdev"
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                className="w-full mt-1 px-4 py-3 bg-black/5 text-black rounded-xl
                   border border-black/20 focus:ring-2 focus:ring-yellow-400 outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-black text-sm font-medium">Email</label>
              <input
                type="email"
                disabled={isPending}
                placeholder="you@example.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full mt-1 px-4 py-3 bg-black/5 text-black rounded-xl
                   border border-black/20 focus:ring-2 focus:ring-yellow-400 outline-none transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-black text-sm font-medium">Password</label>
              <input
                type="password"
                disabled={isPending}
                placeholder="••••••••"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full mt-1 px-4 py-3 bg-black/5 text-black rounded-xl
                   border border-black/20 focus:ring-2 focus:ring-yellow-400 outline-none transition"
              />
            </div>

            {/* Skills Dropdown (shadcn Select) */}
            <div className="space-y-2">
              <label className="text-black text-sm font-medium">Skills</label>

              <Select
                disabled={isPending}
                onValueChange={(value) =>
                  setFormData({ ...formData, skills: value })
                }
              >
                <SelectTrigger className="w-full bg-black/5 border border-black/20 rounded-xl h-[48px] px-4">
                  <SelectValue placeholder="Select your skill" />
                </SelectTrigger>

                <SelectContent className="bg-white shadow-xl border border-black/10">
                  <SelectItem value="web-dev">Web Development</SelectItem>
                  <SelectItem value="graphic-design">Graphic Design</SelectItem>
                  <SelectItem value="video-editing">Video Editing</SelectItem>
                  <SelectItem value="shopify">Shopify</SelectItem>
                  <SelectItem value="ai-automation">AI Automation</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <Button
            disabled={isPending}
            className="w-full mt-8 py-3 text-lg font-semibold bg-yellow-500 text-black hover:bg-yellow-600 rounded-xl"
            onClick={handleSubmit}
          >
            {isPending ? "Creating Account..." : "Create Account"}
          </Button>

          {/* REDIRECT */}
          <p className="text-center text-gray-700 text-sm mt-5">
            Already have an account?{" "}
            <a
              href="/signin"
              className="font-semibold text-yellow-500 hover:underline"
            >
              Sign In
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
