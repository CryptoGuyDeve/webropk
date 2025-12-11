"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Heart,
  MessageCircle,
  Share2,
  Calendar,
  PenTool,
  Image as ImageIcon,
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

export default function SocialMediaManagerPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-purple-100 selection:text-purple-900">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-gradient-to-b from-purple-200/20 to-transparent blur-[120px] rounded-full opacity-50" />
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
                className="mb-6 px-4 py-1 border-purple-500/50 text-purple-700 bg-purple-50/50 backdrop-blur-sm rounded-full"
              >
                <Heart className="w-3 h-3 mr-2 animate-pulse" />
                Community Growth
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                We Post.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
                  You Grow.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Consistent content, engaging captions, and real community
                building. We turn your social media followers into loyal fans.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="h-12 px-8 text-base bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-105"
                >
                  See Packages
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 text-base border-2 hover:bg-secondary/50"
                >
                  Our Portfolio
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
                  className="absolute top-10 right-20 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-10 left-10 w-48 h-48 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60"
                  animate={{ scale: [1, 1.1, 1], rotate: [0, -90, 0] }}
                  transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                />

                {/* Grid of Posts */}
                <div className="relative z-10 w-full h-full p-4 grid grid-cols-2 gap-4">
                  <motion.div
                    className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-2 flex flex-col gap-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="bg-gray-200 dark:bg-zinc-700 rounded-xl h-32 w-full animate-pulse" />
                    <div className="h-2 w-3/4 bg-gray-200 dark:bg-zinc-700 rounded-full" />
                    <div className="flex gap-2">
                      <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                      <span className="text-xs font-bold">1.2k</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-2 flex flex-col gap-2 mt-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="bg-gray-200 dark:bg-zinc-700 rounded-xl h-32 w-full animate-pulse" />
                    <div className="h-2 w-1/2 bg-gray-200 dark:bg-zinc-700 rounded-full" />
                    <div className="flex gap-2">
                      <Share2 className="w-4 h-4 text-blue-500" />
                      <span className="text-xs font-bold">450</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-2 flex flex-col gap-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="bg-gray-200 dark:bg-zinc-700 rounded-xl h-32 w-full animate-pulse" />
                    <div className="h-2 w-2/3 bg-gray-200 dark:bg-zinc-700 rounded-full" />
                    <div className="flex gap-2">
                      <MessageCircle className="w-4 h-4 text-purple-500" />
                      <span className="text-xs font-bold">89</span>
                    </div>
                  </motion.div>

                  {/* Floating Comment */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-900 border px-4 py-2 rounded-full shadow-xl flex items-center gap-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm font-semibold">Active Now</span>
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
            <h2 className="text-3xl font-bold mb-4">Our Consistency Engine</h2>
            <p className="text-muted-foreground">
              We plan, create, and schedule so you never miss a day.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Content Calendar",
                desc: "Planning posts a month in advance to align with your goals.",
              },
              {
                icon: <PenTool className="w-6 h-6" />,
                title: "Design & Copy",
                desc: "Creating on-brand graphics and engaging captions with hashtags.",
              },
              {
                icon: <MessageCircle className="w-6 h-6" />,
                title: "Engagement",
                desc: "Replying to comments and DMs to build community trust.",
              },
              {
                icon: <Share2 className="w-6 h-6" />,
                title: "Posting",
                desc: "Scheduling across all platforms at peak engagement times.",
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
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl flex items-center justify-center mb-4 text-xl font-bold">
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
              <h2 className="text-3xl font-bold mb-6">What We Need</h2>
              <div className="space-y-4">
                {[
                  "Access to Accounts (IG, FB, LinkedIn, etc.)",
                  "Brand Logo & Color Palette",
                  "Library of Photos/Videos (if available)",
                  "Tone of Voice Guidelines",
                  "Key Promotions/Events Calendar",
                ].map((req, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-secondary/20 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle2 className="text-purple-500 w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{req}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-purple-50 to-orange-50 dark:from-zinc-900 dark:to-zinc-800 p-8 rounded-3xl border border-purple-100 dark:border-zinc-700">
              <h3 className="text-xl font-bold mb-4">Why It Matters</h3>
              <p className="text-muted-foreground mb-6">
                An inactive page tells customers you're out of business. A
                thriving page tells them you're the leader in your industry.
              </p>
              <Button variant="outline" className="w-full">
                Audit My Socials
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PACKAGES ==================== */}
      <section className="py-20 bg-secondary/30" id="packages">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Management Plans</h2>
            <p className="text-muted-foreground">Keep your feed fresh.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* BASIC */}
            <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Essential</CardTitle>
                <CardDescription>Maintenance mode.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$250</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "3 Posts per Week",
                    "Caption Writing",
                    "Hashtag Research",
                    "Monthly Content Calendar",
                    "1 Platform",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gray-400" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Select Essential
                </Button>
              </CardFooter>
            </Card>

            {/* STANDARD */}
            <Card className="border-purple-400 shadow-xl relative scale-105 z-10 bg-white dark:bg-zinc-900">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">
                  Active
                </CardTitle>
                <CardDescription>Building real growth.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$450</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "5 Posts per Week",
                    "2 Platforms (e.g. FB & IG)",
                    "Story Updates (3/week)",
                    "Community Management",
                    "Monthly Strategy Call",
                  ].map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple-500" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  Select Active
                </Button>
              </CardFooter>
            </Card>

            {/* PREMIUM */}
            <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Influencer</CardTitle>
                <CardDescription>Total domination.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$800</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Daily Posting (7/week)",
                    "3 Platforms",
                    "Reels/TikTok Editing",
                    "Influencer Outreach",
                    "Priority Support",
                    "Quarterly Analytics Deep Dive",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gray-400" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Select Influencer
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
            Unleash Your Brand
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-lg">
            Don't let your profiles collect dust. Start the conversation today.
          </p>
          <Button
            size="lg"
            className="h-14 px-10 text-lg bg-white text-black hover:bg-zinc-200 rounded-full"
          >
            Boost My Socials <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
