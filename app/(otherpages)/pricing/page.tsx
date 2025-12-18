"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

// Service Data
const services = [
  {
    id: "shopify",
    name: "Shopify Store Creation",
    price: "$250",
    period: "one-time",
    description: "Launch a high-converting automated dropshipping store.",
    features: [
      "Premium Theme Setup",
      "Upload 20 Products",
      "Payment Gateway Integration",
      "Mobile Responsive Design",
      "1 Month Support",
    ],
    popular: true,
  },
  {
    id: "marketing",
    name: "Digital Marketing Starter",
    price: "$400",
    period: "per month",
    description: "Essential SEO and content growth to build your foundation.",
    features: [
      "Technical SEO Audit",
      "Keyword Research",
      "Google My Business Opt.",
      "Monthly Ranking Report",
      "Basic On-Page Optimization",
    ],
  },
  {
    id: "social",
    name: "Social Media Management",
    price: "$500",
    period: "per month",
    description: "Engage your audience with consistent, high-quality content.",
    features: [
      "12 Posts Per Month",
      "Content Strategy",
      "Caption Copywriting",
      "Hashtag Research",
      "Community Engagement",
    ],
  },
  {
    id: "ads",
    name: "Meta Ads Management",
    price: "$600",
    period: "per month",
    description: "Scale your revenue with data-driven Facebook & Instagram ads.",
    features: [
      "Account Setup & Pixel",
      "3 Campaigns / 10 Ad Sets",
      "Weekly Optimization",
      "A/B Testing",
      "Custom Reporting",
    ],
  },
  {
    id: "gfx",
    name: "Brand Identity Kit",
    price: "$300",
    period: "one-time",
    description: "Complete visual branding to make you stand out.",
    features: [
      "Logo Design (3 Concepts)",
      "Color Palette & Typography",
      "Social Media Kit",
      "Business Card Design",
      "Brand Guidelines PDF",
    ],
  },
  {
    id: "fullstack",
    name: "Full Business Marketing",
    price: "$2,000",
    period: "per month",
    description: "Your entire marketing department in one subscription.",
    features: [
      "Dedicated CMO Strategy",
      "Full Ads Management (Meta/Google)",
      "SEO & Content Writing",
      "Social Media Management",
      "Unlimited Graphic Design",
    ],
  },
];

export default function PricingPage() {
  const [selectedServiceId, setSelectedServiceId] = useState("shopify");

  const selectedService = services.find((s) => s.id === selectedServiceId) || services[0];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-yellow-200 selection:text-black">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-100/50 rounded-full blur-[100px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] opacity-50" />
      </div>

      <div className="container px-4 mx-auto pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="mb-6 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
            Simple Pricing
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Choose Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-600">
              Growth Engine
            </span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            Select a service below to see your investment. Transparent pricing for every stage of business.
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto mb-12">
          <label className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3 text-center">
            Select Service to View Price
          </label>
          <Select
            value={selectedServiceId}
            onValueChange={setSelectedServiceId}
          >
            <SelectTrigger className="w-full h-16 text-lg bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm focus:ring-yellow-400 focus:border-yellow-400 transition-all font-semibold">
              <SelectValue placeholder="Select a service..." />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              {services.map((service) => (
                <SelectItem
                  key={service.id}
                  value={service.id}
                  className="py-3 text-base cursor-pointer"
                >
                  {service.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedServiceId}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-2xl bg-white dark:bg-zinc-900 rounded-[2rem] overflow-hidden relative">
                {selectedService.popular && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-black font-bold px-6 py-2 rounded-bl-2xl text-sm uppercase tracking-wider z-10">
                    <Star className="inline-block w-4 h-4 mr-1 -mt-0.5 fill-black" /> Popular
                  </div>
                )}

                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-12 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-100 dark:border-zinc-800">
                    <h2 className="text-2xl font-bold mb-2">{selectedService.name}</h2>
                    <p className="text-zinc-500 mb-8">{selectedService.description}</p>

                    <div className="mb-8">
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl md:text-6xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
                          {selectedService.price}
                        </span>
                        <span className="text-zinc-400 font-medium text-lg">
                          /{selectedService.period}
                        </span>
                      </div>
                    </div>

                    <Link href={`/contact?interest=${encodeURIComponent(selectedService.name)}`}>
                      <Button className="w-full h-14 text-lg bg-black dark:bg-white text-white dark:text-black hover:bg-yellow-500 hover:text-black dark:hover:bg-yellow-400 transition-all rounded-xl font-bold shadow-lg shadow-black/5">
                        Buy Now <Zap className="w-5 h-5 ml-2 fill-current" />
                      </Button>
                    </Link>
                    <p className="text-xs text-center text-zinc-400 mt-4">
                      Secure payment via Stripe or Bank Transfer
                    </p>
                  </div>

                  <div className="p-8 md:p-12 bg-white dark:bg-zinc-900">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">
                      What's Included
                    </h3>
                    <ul className="space-y-4">
                      {selectedService.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                          </div>
                          <span className="font-medium text-zinc-700 dark:text-zinc-300">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="mt-10 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-800">
                      <p className="text-sm text-zinc-500 italic">
                        "Investing in {selectedService.name} is the fastest way to verify your product and start generating revenue."
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
