"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  BarChart3,
  RefreshCcw,
  Settings,
  ShieldCheck,
  TrendingUp,
  Package,
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

export default function ShopifyStoreManaging() {
  return (
    <div className="min-h-screen bg-background selection:bg-green-100 selection:text-green-900">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-gradient-to-b from-green-200/20 to-transparent blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-gradient-to-t from-teal-100/20 to-transparent blur-[120px] rounded-full opacity-50" />

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
                className="mb-6 px-4 py-1 border-green-500/50 text-green-700 bg-green-50/50 backdrop-blur-sm rounded-full"
              >
                <Settings className="w-3 h-3 mr-2 animate-spin-slow" />
                Store Management
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                We Manage.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">
                  You Scale.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Stop worrying about inventory, order fulfillment, and tech
                issues. We handle the day-to-day operations so you can focus on
                profits.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="h-12 px-8 text-base bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white shadow-lg shadow-green-500/25 transition-all hover:scale-105"
                >
                  View Management Plans
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 text-base border-2 hover:bg-secondary/50"
                >
                  Our Process
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
                  className="absolute top-10 right-10 w-40 h-40 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-10 left-10 w-48 h-48 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                />

                <div className="relative z-10 w-full h-full bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 flex flex-col items-center justify-center">
                  <BarChart3 className="w-24 h-24 text-green-600 mb-4" />
                  <h3 className="text-2xl font-bold">Store Optimization</h3>
                  <p className="text-muted-foreground">Running Smoothly</p>

                  {/* Floating stats */}
                  <motion.div
                    className="absolute top-6 left-6 bg-white dark:bg-zinc-800 p-3 rounded-xl shadow-lg flex gap-3 items-center"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Package className="text-blue-500 w-8 h-8 p-1 bg-blue-100 rounded-lg" />
                    <div>
                      <p className="text-xs text-muted-foreground">Orders</p>
                      <p className="font-bold">Fulfilled</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-6 right-6 bg-white dark:bg-zinc-800 p-3 rounded-xl shadow-lg flex gap-3 items-center"
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  >
                    <ShieldCheck className="text-green-500 w-8 h-8 p-1 bg-green-100 rounded-lg" />
                    <div>
                      <p className="text-xs text-muted-foreground">Health</p>
                      <p className="font-bold">100%</p>
                    </div>
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
            <h2 className="text-3xl font-bold mb-4">
              Daily Management Routine
            </h2>
            <p className="text-muted-foreground">
              We keep watch so you don't have to.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <RefreshCcw className="w-6 h-6" />,
                title: "Audit & Fix",
                desc: "Daily health checks for broken links and speed issues.",
              },
              {
                icon: <Package className="w-6 h-6" />,
                title: "Fulfillment",
                desc: "Processing orders and syncing tracking numbers.",
              },
              {
                icon: <RefreshCcw className="w-6 h-6" />,
                title: "Inventory",
                desc: "Syncing stock levels preventing overselling.",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Reporting",
                desc: "Weekly growth and performance breakdown.",
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
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-xl flex items-center justify-center mb-4 text-xl font-bold">
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
              <h2 className="text-3xl font-bold mb-6">
                Onboarding Requirements
              </h2>
              <div className="space-y-4">
                {[
                  "Shopify Admin Staff Access",
                  "Supplier/Vendor Details",
                  "Customer Support Guidelines (if any)",
                  "Social Media Access (for integration)",
                  "Brand Assets for Banners/Updates",
                ].map((req, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-secondary/20 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{req}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-green-50 to-teal-50 dark:from-zinc-900 dark:to-zinc-800 p-8 rounded-3xl border border-green-100 dark:border-zinc-700">
              <h3 className="text-xl font-bold mb-4">Peace of Mind</h3>
              <p className="text-muted-foreground mb-6">
                Your store is your asset. We treat it like our own. Never miss
                an order, never ignore a customer inquiry (optional add-on), and
                never let a bug kill your sales.
              </p>
              <Button variant="outline" className="w-full">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PACKAGES ==================== */}
      <section className="py-20 bg-secondary/30" id="packages">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Monthly Management Plans
            </h2>
            <p className="text-muted-foreground">
              Recurring services to keep your business growing.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* BASIC */}
            <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Maintenance</CardTitle>
                <CardDescription>Keep the lights on.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$200</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Weekly Health Check",
                    "Link Monitoring",
                    "Basic Product Updates (5/mo)",
                    "Monthly Report",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gray-400" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Select Maintenance
                </Button>
              </CardFooter>
            </Card>

            {/* STANDARD */}
            <Card className="border-green-400 shadow-xl relative scale-105 z-10 bg-white dark:bg-zinc-900">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                Best Value
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">
                  Growth
                </CardTitle>
                <CardDescription>Daily operations handling.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$500</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Daily Order Fulfillment",
                    "Inventory Sync",
                    "Product Updates (20/mo)",
                    "Conversion Audit",
                    "Speed Optimization",
                  ].map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Select Growth
                </Button>
              </CardFooter>
            </Card>

            {/* PREMIUM */}
            <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>Full automation & scaling.</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$1000</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Dedicated Manager",
                    "Unlimited Product Updates",
                    "App Configuration",
                    "Advanced Reporting",
                    "24/7 Priority Support",
                    "Supplier Coordination",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gray-400" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Select Enterprise
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
            Automate Your Success
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-lg">
            You built the business. Now let us run it. Secure your dedicated
            manager today.
          </p>
          <Button
            size="lg"
            className="h-14 px-10 text-lg bg-white text-black hover:bg-zinc-200 rounded-full"
          >
            Contact Us Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
