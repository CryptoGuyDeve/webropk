"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Globe,
  Search,
  Mail,
  BarChart,
  Lightbulb,
  TrendingUp,
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

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-indigo-100 selection:text-indigo-900">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-gradient-to-b from-indigo-200/20 to-transparent blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-gradient-to-t from-violet-100/20 to-transparent blur-[120px] rounded-full opacity-50" />

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
                className="mb-6 px-4 py-1 border-indigo-500/50 text-indigo-700 bg-indigo-50/50 backdrop-blur-sm rounded-full"
              >
                <Globe className="w-3 h-3 mr-2 animate-spin-slow" />
                360° Digital Growth
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Be Found.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
                  Everywhere.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                SEO, Email, Content, and PR. We build the complete ecosystem
                that drives organic traffic and long-term customer value.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="h-12 px-8 text-base bg-gradient-to-r from-indigo-600 to-violet-500 hover:from-indigo-700 hover:to-violet-600 text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105"
                >
                  See Packages
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 text-base border-2 hover:bg-secondary/50"
                >
                  Growth Strategy
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
                  className="absolute top-10 right-20 w-32 h-32 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60"
                  animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-10 left-10 w-48 h-48 bg-violet-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60"
                  animate={{ scale: [1, 1.1, 1], x: [0, -20, 0] }}
                  transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                />

                <div className="relative z-10 w-full h-full bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center">
                  <Globe className="w-20 h-20 text-indigo-600 mb-4" />
                  <h3 className="text-2xl font-bold">Market Dominance</h3>

                  {/* Search Bar Animation */}
                  <motion.div
                    className="w-full bg-white dark:bg-zinc-800 p-3 rounded-full shadow-lg mt-6 flex items-center gap-3"
                    initial={{ width: "80%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <Search className="w-5 h-4 text-gray-400" />
                    <div className="h-2 w-1/2 bg-gray-200 dark:bg-zinc-700 rounded-full" />
                  </motion.div>

                  {/* Floating Badges */}
                  <motion.div
                    className="absolute top-4 left-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold shadow-md"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    SEO #1
                  </motion.div>

                  <motion.div
                    className="absolute bottom-10 right-4 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold shadow-md"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    Open Rate 45%
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
            <h2 className="text-3xl font-bold mb-4">The Growth Engine</h2>
            <p className="text-muted-foreground">
              Connecting the dots between traffic and revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="w-6 h-6" />,
                title: "SEO",
                desc: "Ranking your site for high-intent keywords that drive sales.",
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email",
                desc: "Nurturing leads and recovering abandoned carts automatically.",
              },
              {
                icon: <Lightbulb className="w-6 h-6" />,
                title: "Content",
                desc: "Creating blogs and guides that establish authority.",
              },
              {
                icon: <BarChart className="w-6 h-6" />,
                title: "Analytics",
                desc: "Tracking every click to understand user behavior.",
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
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-xl flex items-center justify-center mb-4 text-xl font-bold">
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
              <h2 className="text-3xl font-bold mb-6">Kickoff Needs</h2>
              <div className="space-y-4">
                {[
                  "Website Access (CMS/Shopify)",
                  "Google Analytics & Search Console",
                  "Email List (if existing)",
                  "Competitor List",
                  "Access to Blog/News Section",
                ].map((req, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-secondary/20 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle2 className="text-indigo-500 w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{req}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-zinc-900 dark:to-zinc-800 p-8 rounded-3xl border border-indigo-100 dark:border-zinc-700">
              <h3 className="text-xl font-bold mb-4">Traffic VS Quality</h3>
              <p className="text-muted-foreground mb-6">
                We don't just send bots to your site. We target humans who are
                looking for exactly what you sell. Quality traffic converts;
                vanity metrics don't.
              </p>
              <Button variant="outline" className="w-full">
                Get Free Strategy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PACKAGES ==================== */}
      <section className="py-20 bg-secondary/30" id="packages">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Growth Packages</h2>
            <p className="text-muted-foreground">Long-term value building.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* BASIC */}
            <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Foundation</CardTitle>
                <CardDescription>SEO Essentials.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$400</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Technical SEO Audit",
                    "On-Page Optimization",
                    "Keyword Research",
                    "Google Business Profile Optimization",
                    "Monthly Ranking Report",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gray-400" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Select Foundation
                </Button>
              </CardFooter>
            </Card>

            {/* STANDARD */}
            <Card className="border-indigo-400 shadow-xl relative scale-105 z-10 bg-white dark:bg-zinc-900">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-indigo-600">
                  Expansion
                </CardTitle>
                <CardDescription>SEO + Retention.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$800</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Everything in Foundation",
                    "Email Marketing Setup (Klaviyo/Mailchimp)",
                    "4 Automated Flows (Welcome/Abandoned Cart)",
                    "Weekly Blog Post (SEO Optimized)",
                    "Backlink Building",
                  ].map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-500" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">
                  Select Expansion
                </Button>
              </CardFooter>
            </Card>

            {/* PREMIUM */}
            <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Authority</CardTitle>
                <CardDescription>Market leadership.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$1500</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Complete Content Strategy",
                    "8 Blog Posts/Mo",
                    "PR Outreach",
                    "Advanced Email Segmentation",
                    "Conversion Rate Optimization (CRO)",
                    "Competitor Spy Reports",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gray-400" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Select Authority
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
            Own Your Niche
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-lg">
            Stop chasing shortcuts. Build a brand that lasts.
          </p>
          <Button
            size="lg"
            className="h-14 px-10 text-lg bg-white text-black hover:bg-zinc-200 rounded-full"
          >
            Build My Growth Plan <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
