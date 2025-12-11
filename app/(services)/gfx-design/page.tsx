"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Palette,
  PenTool,
  Layers,
  Image as ImageIcon,
  Layout,
  Figma,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function GFXDesignPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-rose-100 selection:text-rose-900">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-gradient-to-b from-rose-200/20 to-transparent blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-gradient-to-t from-orange-100/20 to-transparent blur-[120px] rounded-full opacity-50" />

        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <motion.div
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="outline"
                className="mb-6 px-4 py-1 border-rose-500/50 text-rose-700 bg-rose-50/50 backdrop-blur-sm rounded-full"
              >
                <Palette className="w-3 h-3 mr-2 animate-pulse" />
                Premium Branding
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Design That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">
                  Demands Attention.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Your brand's visual identity is your first impression. We craft
                logos, graphics, and UI deliverables that make you
                unforgettable.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="h-12 px-8 text-base bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white shadow-lg shadow-rose-500/25 transition-all hover:scale-105"
                >
                  View Portfolio
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 text-base border-2 hover:bg-secondary/50"
                >
                  Design Process
                </Button>
              </div>
            </motion.div>

            {/* Right Graphic */}
            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative mx-auto w-full max-w-[500px] aspect-square">
                {/* Animation blobs */}
                <motion.div
                  className="absolute top-10 right-10 w-40 h-40 bg-rose-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60"
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-10 left-10 w-48 h-48 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
                  transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                />

                <div className="relative z-10 w-full h-full bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 flex flex-col items-center justify-center">
                  {/* Layer Stacking Animation */}
                  <div className="relative w-48 h-48">
                    <motion.div
                      className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700 flex items-center justify-center"
                      animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Layout className="w-16 h-16 text-rose-500" />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700 flex items-center justify-center"
                      animate={{ y: [0, -25, 0], rotate: [0, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}
                      style={{ opacity: 0.8, scale: 0.95, zIndex: -1 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700 flex items-center justify-center"
                      animate={{ y: [0, -40, 0], rotate: [0, 10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 0.4 }}
                      style={{ opacity: 0.6, scale: 0.9, zIndex: -2 }}
                    />
                  </div>

                  <div className="mt-8 text-center">
                    <h3 className="font-bold text-xl">Pixel Perfect</h3>
                    <p className="text-sm text-muted-foreground">
                      Logos • UI • Social
                    </p>
                  </div>

                  {/* Floating Tools */}
                  <motion.div
                    className="absolute top-6 left-6 bg-[#F24E1E] p-2 rounded-lg shadow-lg"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Figma className="text-white w-6 h-6" />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-6 right-6 bg-[#001E36] p-2 rounded-lg shadow-lg"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    <PenTool className="text-[#31A8FF] w-6 h-6" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Creative Process</h2>
            <p className="text-muted-foreground">
              From a blank canvas to a masterpiece.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Layers className="w-6 h-6" />,
                title: "Discovery",
                desc: "Understanding your brand vision and target audience vibe.",
              },
              {
                icon: <PenTool className="w-6 h-6" />,
                title: "Sketching",
                desc: "Developing initial concepts and exploring different directions.",
              },
              {
                icon: <Palette className="w-6 h-6" />,
                title: "Drafting",
                desc: "Digitizing concepts with color palettes and typography.",
              },
              {
                icon: <Layout className="w-6 h-6" />,
                title: "Refining",
                desc: "Polishing the chosen concept based on your feedback.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="bg-background p-6 rounded-2xl border hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 text-rose-600 rounded-xl flex items-center justify-center mb-4 text-xl font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== REQUIREMENTS ==================== */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Briefing Essentials</h2>
              <div className="space-y-4">
                {[
                  "Brand Name & Slogan",
                  "Description of Busines/Service",
                  "Preferred Color Palette (or examples)",
                  "Logos you like (for inspiration)",
                  "Target Audience Details",
                ].map((req, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-secondary/20 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle2 className="text-rose-500 w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{req}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-rose-50 to-orange-50 dark:from-zinc-900 dark:to-zinc-800 p-8 rounded-3xl border border-rose-100 dark:border-zinc-700">
              <h3 className="text-xl font-bold mb-4">Unlimited Revisions?</h3>
              <p className="text-muted-foreground mb-6">
                We work until you're happy. While we aim for perfection on the
                first draft, our packages include extensive revision rounds to
                ensure the final output matches your dream.
              </p>
              <Button variant="outline" className="w-full">
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PACKAGES ==================== */}
      <section className="py-20 bg-secondary/30" id="packages">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Design Packages</h2>
            <p className="text-muted-foreground">
              High-quality assets for every need.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* BASIC */}
            <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Identity</CardTitle>
                <CardDescription>Just the essentials.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$150</span>
                  <span className="text-muted-foreground">/one-time</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Professional Logo Design",
                    "Secondary Mark/Icon",
                    "Color Palette Hex Codes",
                    "Typography Selection",
                    "High-Res Exports (PNG/JPG)",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gray-400" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Select Identity
                </Button>
              </CardFooter>
            </Card>

            {/* STANDARD */}
            <Card className="border-rose-400 shadow-xl relative scale-105 z-10 bg-white dark:bg-zinc-900">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-rose-600">
                  Brand Kit
                </CardTitle>
                <CardDescription>Complete visual system.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$300</span>
                  <span className="text-muted-foreground">/one-time</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Everything in Identity",
                    "Vector Source Files (Ai/EPS)",
                    "Social Media Profile Kit",
                    "Business Card Design",
                    "Brand Guidelines PDF",
                    "3D Mockups",
                  ].map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-rose-500" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">
                  Select Brand Kit
                </Button>
              </CardFooter>
            </Card>

            {/* PREMIUM */}
            <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Full Stack</CardTitle>
                <CardDescription>Web & print ready.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$600</span>
                  <span className="text-muted-foreground">/one-time</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Everything in Brand Kit",
                    "Web UI Kit (Homepage Design)",
                    "Email Signature",
                    "Letterhead & Envelope",
                    "Social Media Templates (5)",
                    "Priority Delivery",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gray-400" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Select Full Stack
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 bg-zinc-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100"></div>
        <div className="container px-4 mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Create Magic
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-lg">
            Great design pays for itself. Elevate your brand today.
          </p>
          <Button
            size="lg"
            className="h-14 px-10 text-lg bg-white text-black hover:bg-zinc-200 rounded-full"
          >
            Commission a Project <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
