"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Info, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* ================= HERO SECTION (Light Theme) ================= */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1 border-emerald-200 bg-emerald-50 text-emerald-700 rounded-full mx-auto w-fit"
            >
              Simple Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-900">
              Invest In Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">
                Growth
              </span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Transparent pricing. No hidden fees. Choose the plan that fits
              your business stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= PRICING CARDS ================= */}
      <section className="container px-4 mx-auto mt-10">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* STARTER */}
          <Card className="border-2 border-zinc-100 shadow-lg hover:border-emerald-200 transition-all flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Launch</CardTitle>
              <CardDescription>Perfect for new startups.</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$1,500</span>
                <span className="text-zinc-500">/mo</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                {[
                  "Basic Social Media Management",
                  "1 Ad Platform Management",
                  "Monthly Reporting",
                  "Email Support",
                  "Basic Graphic Design",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-zinc-600"
                  >
                    <Check className="w-4 h-4 text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* GROWTH (Popular) */}
          <Card className="border-2 border-emerald-500 shadow-2xl scale-105 relative flex flex-col bg-zinc-900 text-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white border-none px-4 py-1">
                Most Popular
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Growth</CardTitle>
              <CardDescription className="text-zinc-400">
                For scaling businesses.
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$3,500</span>
                <span className="text-zinc-400">/mo</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                {[
                  "Full Social Media Suite",
                  "Multi-Platform Ads (FB/IG/TikTok)",
                  "Weekly Strategy Calls",
                  "Content Creation Team",
                  "Advanced SEO",
                  "24/7 Slack Support",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-emerald-100"
                  >
                    <Check className="w-4 h-4 text-emerald-400" /> {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold">
                Scale Now
              </Button>
            </CardFooter>
          </Card>

          {/* ENTERPRISE */}
          <Card className="border-2 border-zinc-100 shadow-lg hover:border-emerald-200 transition-all flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Dominance</CardTitle>
              <CardDescription>For market leaders.</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$7,000+</span>
                <span className="text-zinc-500">/mo</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                {[
                  "Dedicated CMO & Dev Team",
                  "Unlimited Ad Spend Mgmt",
                  "PR & Influencer Campaigns",
                  "Custom Web Development",
                  "Revenue Share Options",
                  "Priority 1-Hour Support",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-zinc-600"
                  >
                    <Check className="w-4 h-4 text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Contact Sales
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* ================= CUSTOM QUOTE ================= */}
      <section className="container px-4 mx-auto mt-20">
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-emerald-900 mb-2 flex items-center gap-2">
              <Info className="w-5 h-5 text-emerald-600" /> Need a project-based
              quote?
            </h3>
            <p className="text-emerald-700">
              We also offer one-time services like Website Revamps and Logo
              Design starting from $150.
            </p>
          </div>
          <Button className="shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white">
            View All Services
          </Button>
        </div>
      </section>
    </div>
  );
}
