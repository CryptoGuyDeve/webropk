"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShoppingBag,
  Rocket,
  Settings,
  CreditCard,
  Layers,
  Zap,
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

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ShopifyStoreCreation() {
  return (
    <div className="min-h-screen bg-background selection:bg-yellow-100 selection:text-yellow-900">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-gradient-to-b from-yellow-200/20 to-transparent blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-gradient-to-t from-blue-100/20 to-transparent blur-[120px] rounded-full opacity-50" />

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
                className="mb-6 px-4 py-1 border-yellow-500/50 text-yellow-700 bg-yellow-50/50 backdrop-blur-sm rounded-full"
              >
                <Settings className="w-3 h-3 mr-2 animate-spin-slow" />
                Professional Shopify Development
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Build a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">
                  High-Converting
                </span>{" "}
                Shopify Store
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Launch your brand with a premium, speed-optimized, and fully
                automated Shopify store designed to turn visitors into loyal
                customers.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="h-12 px-8 text-base bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white shadow-lg shadow-yellow-500/25 transition-all hover:scale-105"
                >
                  View Packages
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 text-base border-2 hover:bg-secondary/50"
                >
                  How it Works
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
                {/* Abstract Blobs */}
                <motion.div
                  className="absolute top-0 right-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                  animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 7, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-10 left-10 w-44 h-44 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                  animate={{ y: [0, -40, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                />

                {/* Main Card Graphic */}
                <div className="relative z-10 w-full h-full bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 flex items-center justify-center">
                  <img
                    src="https://cdn.shopify.com/assets/images/logos/shopify-bag.png"
                    alt="Shopify"
                    className="w-32 h-32 object-contain drop-shadow-2xl"
                  />

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-6 -left-6 bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <Zap size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Speed Score
                      </p>
                      <p className="font-bold text-sm">98/100</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-6 -right-6 bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <ShoppingBag size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Sales Ready
                      </p>
                      <p className="font-bold text-sm">Automated</p>
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
            <h2 className="text-3xl font-bold mb-4">How We Build Your Store</h2>
            <p className="text-muted-foreground">
              A streamlined process to get your business up and running in no
              time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Settings className="w-6 h-6" />,
                title: "Discovery",
                desc: "We analyze your niche, competitors, and requirements.",
              },
              {
                icon: <Layers className="w-6 h-6" />,
                title: "Design",
                desc: "We create a premium, branded UI/UX tailored to your identity.",
              },
              {
                icon: <CheckCircle2 className="w-6 h-6" />,
                title: "Development",
                desc: "Product upload, app integration, and payment gateway setup.",
              },
              {
                icon: <Rocket className="w-6 h-6" />,
                title: "Launch",
                desc: "Final testing, speed optimization, and handover to you.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="relative bg-background p-6 rounded-2xl border hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded-xl flex items-center justify-center mb-4 text-xl font-bold">
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
              <h2 className="text-3xl font-bold mb-6">What We Need From You</h2>
              <div className="space-y-4">
                {[
                  "Brand Logo (PNG/Transparent)",
                  "List of Products (Images, Prices, Descriptions)",
                  "Shopify Login Access (or we create one for you)",
                  "Domain Name (if purchased)",
                  "Content for Pages (About Us, Contact, Policy preferences)",
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
            <div className="md:w-1/2 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-zinc-900 dark:to-zinc-800 p-8 rounded-3xl border border-yellow-100 dark:border-zinc-700">
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <p className="text-muted-foreground mb-6">
                We don't just build stores; we build brands. Our stores are
                optimized for conversion, SEO, and mobile speed to ensure you
                get the best start possible.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center gap-2 font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" /> 99% Speed
                  Score
                </li>
                <li className="flex items-center gap-2 font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" /> SEO
                  Optimized
                </li>
                <li className="flex items-center gap-2 font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" /> Mobile
                  Responsive
                </li>
                <li className="flex items-center gap-2 font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" /> 24/7
                  Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PACKAGES ==================== */}
      <section className="py-20 bg-secondary/30" id="packages">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Choose Your Package</h2>
            <p className="text-muted-foreground">
              Transparent pricing. No hidden fees.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* BASIC */}
            <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-all relative">
              <CardHeader>
                <CardTitle className="text-2xl">Basic</CardTitle>
                <CardDescription>
                  Perfect for testing a new product.
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$100</span>
                  <span className="text-muted-foreground">/one-time</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Shopify Setup",
                    "Free Theme Customization",
                    "Upload 5 Products",
                    "Basic SEO",
                    "Mobile Responsive",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gray-400" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Select Basic
                </Button>
              </CardFooter>
            </Card>

            {/* STANDARD */}
            <Card className="border-yellow-400 shadow-xl relative scale-105 z-10 bg-white dark:bg-zinc-900">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-600">
                  Standard
                </CardTitle>
                <CardDescription>
                  For serious brands ready to scale.
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$250</span>
                  <span className="text-muted-foreground">/one-time</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Everything in Basic",
                    "Premium Theme Setup",
                    "Upload 20 Products",
                    "Advanced SEO",
                    "Payment Gateway Setup",
                    "5 Plugins Configured",
                    "Social Media Integration",
                  ].map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-yellow-500" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                  Select Standard
                </Button>
              </CardFooter>
            </Card>

            {/* PREMIUM */}
            <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Premium</CardTitle>
                <CardDescription>
                  Full-scale automated dropshipping store.
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$500</span>
                  <span className="text-muted-foreground">/one-time</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Everything in Standard",
                    "Upload 50+ Products",
                    "Logo Design Included",
                    "Win Product Research",
                    "Email Marketing Setup",
                    "Dropshipping Automation",
                    "1 Month Support",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gray-400" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Select Premium
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
            Ready to Start Your Journey?
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-lg">
            Stop waiting and start selling. We build stores that change lives.
            Let's create your success story today.
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
