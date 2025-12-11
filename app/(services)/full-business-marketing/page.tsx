"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Briefcase,
  Target,
  Globe,
  TrendingUp,
  Users,
  Crown,
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
import { HeroHeader } from "@/components/header";
export default function FullBusinessMarketingPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-neutral-800 selection:text-white">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-gradient-to-b from-yellow-200/20 to-transparent blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-gradient-to-t from-orange-100/20 to-transparent blur-[120px] rounded-full opacity-50" />

        <div className="container px-4 mx-auto relative z-10">
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
                className="mb-6 px-4 py-1 border-yellow-500/50 text-yellow-700 bg-yellow-50/50 backdrop-blur-sm rounded-full"
              >
                <Crown className="w-3 h-3 mr-2 text-yellow-600" />
                CMO as a Service
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
                We Are Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-600">
                  Marketing Dept.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Forget hiring freelancers or multiple agencies. We handle
                everything: Strategy, Ads, Content, SEO, and Development. One
                team, one goal.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="h-12 px-8 text-base bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white shadow-lg shadow-yellow-500/25 transition-all hover:scale-105"
                >
                  Buy Service
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
                  className="absolute top-10 right-10 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60"
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-10 left-10 w-48 h-48 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
                  transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                />

                <div className="relative z-10 w-full h-full bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-border shadow-sm flex flex-col justify-center items-center">
                    <Target className="w-10 h-10 text-red-500 mb-2" />
                    <span className="font-bold">Ads</span>
                  </div>
                  <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-border shadow-sm flex flex-col justify-center items-center">
                    <Globe className="w-10 h-10 text-blue-500 mb-2" />
                    <span className="font-bold">SEO</span>
                  </div>
                  <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-border shadow-sm flex flex-col justify-center items-center">
                    <Users className="w-10 h-10 text-green-500 mb-2" />
                    <span className="font-bold">Social</span>
                  </div>
                  <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-border shadow-sm flex flex-col justify-center items-center">
                    <TrendingUp className="w-10 h-10 text-yellow-500 mb-2" />
                    <span className="font-bold">Sales</span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white dark:bg-zinc-900 px-6 py-3 rounded-full border border-border shadow-xl">
                      <span className="font-bold text-lg text-foreground">
                        Full Stack Marketing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Complete Business Integration
            </h2>
            <p className="text-muted-foreground">
              We don't act like an agency. We act like partners.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Blueprint",
                desc: "Creating a master strategy aligned with your revenue goals.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Team Assembly",
                desc: "Assigning specialists for every channel (Ads, Copy, Design).",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Execution",
                desc: "Simultaneous launch of omni-channel campaigns.",
              },
              {
                icon: <Crown className="w-6 h-6" />,
                title: "Domination",
                desc: "Aggressive scaling and market share acquisition.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white rounded-xl flex items-center justify-center mb-4 text-xl font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PACKAGES ==================== */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/20" id="packages">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Retainer Models</h2>
            <p className="text-muted-foreground">
              Hire a full team for less than the cost of one employee.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* BASIC */}
            <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Accelerator</CardTitle>
                <CardDescription>Paid acquisition focused.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$2000</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Meta Ads Management",
                    "Google Ads Management",
                    "Social Media (3 posts/week)",
                    "Monthly Strategy Call",
                    "Live Dashboard",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gray-400" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Select Accelerator
                </Button>
              </CardFooter>
            </Card>

            {/* STANDARD */}
            <Card className="border-black dark:border-white shadow-xl relative scale-105 z-10 bg-white dark:bg-zinc-900">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                Full Growth
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Scale Up
                </CardTitle>
                <CardDescription>Omni-channel marketing.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$3500</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Everything in Accelerator",
                    "Full SEO Package",
                    "Email Marketing Automation",
                    "Content Creation (Blogs/Videos)",
                    "Weekly Strategy Calls",
                    "Slack Support Channel",
                  ].map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-foreground" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-black hover:bg-zinc-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200">
                  Select Scale Up
                </Button>
              </CardFooter>
            </Card>

            {/* PREMIUM */}
            <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Partner</CardTitle>
                <CardDescription>We run everything.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$5000</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Dedicated CMO",
                    "Full Dev Support (Website edits)",
                    "Influencer Marketing",
                    "PR & Media Buying",
                    "Daily Reporting",
                    "Revenue Share Options",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gray-400" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Select Partner
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
            Scale Without Limits
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-lg">
            Stop playing small. Get the marketing team you deserve.
          </p>
          <Button
            size="lg"
            className="h-14 px-10 text-lg bg-white text-black hover:bg-zinc-200 rounded-full"
          >
            Apply for Partnership <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
