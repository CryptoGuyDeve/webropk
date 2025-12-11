"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Music2,
  PlayCircle,
  TrendingUp,
  Zap,
  Smartphone,
  Video,
  ArrowRight,
  BarChart2,
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

export default function TikTokAdsPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-pink-100 selection:text-pink-900">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-gradient-to-b from-pink-200/20 to-transparent blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-gradient-to-t from-cyan-100/20 to-transparent blur-[120px] rounded-full opacity-50" />

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
                className="mb-6 px-4 py-1 border-pink-500/50 text-pink-700 bg-pink-50/50 backdrop-blur-sm rounded-full"
              >
                <Music2 className="w-3 h-3 mr-2 animate-bounce" />
                TikTok Ads Partners
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Go Viral.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
                  Sell Out.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Capture the attention of millions. We create high-energy,
                scroll-stopping TikTok campaigns that drive massive traffic and
                conversions.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="h-12 px-8 text-base bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white shadow-lg shadow-pink-500/25 transition-all hover:scale-105"
                >
                  Start Trending
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 text-base border-2 hover:bg-secondary/50"
                >
                  See Examples
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
                  className="absolute top-10 right-10 w-40 h-40 bg-cyan-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60"
                  animate={{ scale: [1, 1.1, 1], y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-10 left-10 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60"
                  animate={{ scale: [1, 1.2, 1], y: [0, 20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                />

                {/* Phone Frame */}
                <div className="relative z-10 w-[240px] mx-auto h-[480px] bg-black rounded-[40px] border-8 border-gray-900 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white/80 animate-pulse" />
                  </div>

                  {/* UI Overlay */}
                  <div className="absolute top-4 left-0 w-full flex justify-center space-x-1 px-8">
                    <div className="w-full h-1 bg-white/30 rounded-full" />
                    <div className="w-full h-1 bg-white/30 rounded-full" />
                  </div>

                  <div className="absolute right-4 bottom-24 flex flex-col items-center gap-4 text-white">
                    <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="text-center text-xs">2.4M</div>
                    <div className="text-center text-xs">500k</div>
                  </div>

                  <div className="absolute bottom-6 left-4 right-4">
                    <p className="text-white text-sm font-semibold mb-2">
                      @yourbrand
                    </p>
                    <p className="text-white/80 text-xs leading-relaxed">
                      Wait for the end! 😲 This product changed my life...
                      #musthave #fyp
                    </p>
                    <div className="mt-3 bg-red-500 text-white text-center py-2 rounded-lg font-bold text-sm">
                      Shop Now
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-1/2 -right-4 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-xl flex items-center gap-3"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <TrendingUp className="text-cyan-500 w-8 h-8" />
                  <div>
                    <p className="text-xs text-muted-foreground">CTR</p>
                    <p className="font-bold text-lg">3.5%</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">The Viral Formula</h2>
            <p className="text-muted-foreground">
              We decode the trends so you don't have to dance.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Trend Spotting",
                desc: "Identifying rising sounds and formats relevant to your niche.",
              },
              {
                icon: <Video className="w-6 h-6" />,
                title: "UGC Creation",
                desc: "Generating authentic content that looks native to the platform.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Spark Ads",
                desc: "Boosting organic posts to targeted audiences for high intent.",
              },
              {
                icon: <BarChart2 className="w-6 h-6" />,
                title: "Scaling",
                desc: "Aggressively scaling winning creatives to max out volume.",
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
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 text-pink-500 rounded-xl flex items-center justify-center mb-4 text-xl font-bold">
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
                  "TikTok Ad Account Access",
                  "Product Samples (for UGC creation)",
                  "Brand Guidelines (Vibe check)",
                  "List of Competitors",
                  "Target Audience Demographics",
                ].map((req, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-secondary/20 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle2 className="text-cyan-500 w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{req}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-pink-50 to-cyan-50 dark:from-zinc-900 dark:to-zinc-800 p-8 rounded-3xl border border-pink-100 dark:border-zinc-700">
              <h3 className="text-xl font-bold mb-4">Native is King</h3>
              <p className="text-muted-foreground mb-6">
                TikTok users hate "ads". They love stories, reviews, and trends.
                We make ads that don't look like ads, resulting in 3x higher
                engagement rates.
              </p>
              <Button variant="outline" className="w-full">
                Get Viral Strategy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PACKAGES ==================== */}
      <section className="py-20 bg-secondary/30" id="packages">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">TikTok Growth Packages</h2>
            <p className="text-muted-foreground">
              Includes creative strategy and ad buying.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* BASIC */}
            <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>Test the waters.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$350</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "1 Campaign Setup",
                    "3 Creative Briefs",
                    "Audience Targeting",
                    "Basic Reporting",
                    "Pixel Setup",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gray-400" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Select Starter
                </Button>
              </CardFooter>
            </Card>

            {/* STANDARD */}
            <Card className="border-cyan-400 shadow-xl relative scale-105 z-10 bg-white dark:bg-zinc-900">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-600">Viral</CardTitle>
                <CardDescription>Scale with UGC.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$700</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "3 Campaigns",
                    "2 UGC Videos Included",
                    "Creator Outreach",
                    "Weekly Optimization",
                    "Spark Ads Strategy",
                  ].map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-500" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                  Select Viral
                </Button>
              </CardFooter>
            </Card>

            {/* PREMIUM */}
            <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Influencer</CardTitle>
                <CardDescription>Full brand domination.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$1400</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Unlimited Campaigns",
                    "5 UGC Videos/Mo",
                    "Influencer Coordination",
                    "Dedicated Creative Director",
                    "Cross-Platform Re-purposing",
                    "24/7 Support",
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
            Don't Be Boring.
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-lg">
            Your customers are scrolling right now. Give them something to stop
            for.
          </p>
          <Button
            size="lg"
            className="h-14 px-10 text-lg bg-white text-black hover:bg-zinc-200 rounded-full"
          >
            Create Campaign <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
