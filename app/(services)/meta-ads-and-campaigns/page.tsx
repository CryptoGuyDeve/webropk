"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Megaphone,
  Target,
  Users,
  BarChart2,
  Zap,
  Trophy,
  ArrowRight,
  Rocket,
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

export default function MetaAdsPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-blue-100 selection:text-blue-900">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-gradient-to-b from-blue-200/20 to-transparent blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-gradient-to-t from-indigo-100/20 to-transparent blur-[120px] rounded-full opacity-50" />

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
                className="mb-6 px-4 py-1 border-blue-500/50 text-blue-700 bg-blue-50/50 backdrop-blur-sm rounded-full"
              >
                <Target className="w-3 h-3 mr-2" />
                Meta Ads Experts (FB & IG)
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Turn Clicks Into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                  Customers
                </span>
                .
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Stop burning budget on guessing. We build data-driven Facebook &
                Instagram campaigns that scale your ROI and sales.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="h-12 px-8 text-base bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
                >
                  Launch Campaign
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 text-base border-2 hover:bg-secondary/50"
                >
                  See Results
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
                  className="absolute top-10 right-20 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60"
                  animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-10 left-10 w-48 h-48 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60"
                  animate={{ scale: [1, 1.1, 1], x: [0, -20, 0] }}
                  transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                />

                <div className="relative z-10 w-full h-full bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">
                        ROAS
                      </p>
                      <h3 className="text-4xl font-bold text-green-600">
                        4.8x
                      </h3>
                    </div>
                    <Trophy className="text-yellow-500 w-10 h-10" />
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white dark:bg-zinc-800 p-3 rounded-lg shadow-sm flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                          f
                        </div>
                        <div>
                          <p className="text-sm font-bold">Retargeting</p>
                          <p className="text-xs text-muted-foreground">
                            Active
                          </p>
                        </div>
                      </div>
                      <span className="text-green-600 font-bold text-sm">
                        +240%
                      </span>
                    </div>
                    <div className="bg-white dark:bg-zinc-800 p-3 rounded-lg shadow-sm flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold">
                          IG
                        </div>
                        <div>
                          <p className="text-sm font-bold">Reels Ad</p>
                          <p className="text-xs text-muted-foreground">
                            Learning
                          </p>
                        </div>
                      </div>
                      <span className="text-green-600 font-bold text-sm">
                        Testing
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
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">The Meta Strategy</h2>
            <p className="text-muted-foreground">
              It's not just boosting posts. It's engineering success.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "Audience Deep-Dive",
                desc: "We identify your perfect customer avatar and interests.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Creative & Copy",
                desc: "Design high-converting visuals and hooks that stop the scroll.",
              },
              {
                icon: <Rocket className="w-6 h-6" />,
                title: "Launch & Test",
                desc: "A/B testing multiple angles to find the winning formula.",
              },
              {
                icon: <BarChart2 className="w-6 h-6" />,
                title: "Scale & Optimize",
                desc: "Killing losers, doubling budget on winners.",
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
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center mb-4 text-xl font-bold">
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
              <h2 className="text-3xl font-bold mb-6">Prerequisites</h2>
              <div className="space-y-4">
                {[
                  "Facebook Business Manager Access",
                  "Ad Account & Pixel Setup (We can help)",
                  "Creative Assets (Images/Videos)",
                  "Budget for Ad Spend (Daily Budget)",
                  "Website/Landing Page URL",
                ].map((req, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-secondary/20 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{req}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-900 dark:to-zinc-800 p-8 rounded-3xl border border-blue-100 dark:border-zinc-700">
              <h3 className="text-xl font-bold mb-4">No More Burning Cash</h3>
              <p className="text-muted-foreground mb-6">
                We monitor your campaigns daily. If an ad isn't performing, we
                kill it. If it is, we scale it. Our goal is strictly ROAS
                (Return on Ad Spend).
              </p>
              <Button variant="outline" className="w-full">
                Get a Free Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PACKAGES ==================== */}
      <section className="py-20 bg-secondary/30" id="packages">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ad Management Packages</h2>
            <p className="text-muted-foreground">
              Does not include ad spend budget.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* BASIC */}
            <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Tester</CardTitle>
                <CardDescription>Single campaign testing.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$300</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "1 Campaign Setup",
                    "3 Ad Sets",
                    "Audience Research",
                    "Monthly Report",
                    "Pixel Check",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gray-400" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Select Tester
                </Button>
              </CardFooter>
            </Card>

            {/* STANDARD */}
            <Card className="border-blue-400 shadow-xl relative scale-105 z-10 bg-white dark:bg-zinc-900">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Scaler</CardTitle>
                <CardDescription>Multi-campaign growth.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$600</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "3 Campaigns (Cold/Retargeting)",
                    "10 Ad Sets",
                    "Weekly Optimization",
                    "Creative Recommendations",
                    "Custom Reporting",
                  ].map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Select Scaler
                </Button>
              </CardFooter>
            </Card>

            {/* PREMIUM */}
            <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Dominator</CardTitle>
                <CardDescription>Aggressive scaling.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$1200</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Unlimited Campaigns",
                    "CAPI Setup (Server-side)",
                    "Dedicated Strategist",
                    "Copywriting Included",
                    "Bi-Weekly Calls",
                    "Cross-Platform Strategy",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gray-400" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Select Dominator
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
            Ready to Scale?
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-lg">
            The algorithm is waiting. Let's feed it the right data and watch
            your sales explode.
          </p>
          <Button
            size="lg"
            className="h-14 px-10 text-lg bg-white text-black hover:bg-zinc-200 rounded-full"
          >
            Start Campaigns Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
