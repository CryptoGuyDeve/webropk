"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Store,
  Settings,
  Megaphone,
  Video,
  Heart,
  Palette,
  Globe,
  Crown,
  CheckCircle2,
  Zap,
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

const ALL_SERVICES = [
  {
    title: "Shopify Store Creation",
    description:
      "Launch a high-converting automated dropshipping or brand store.",
    icon: <Store className="w-10 h-10 text-green-500" />,
    price: "$100",
    link: "/shopify-store-creation",
    features: ["Premium Theme Setup", "Product Research", "Payment Gateway"],
    color: "bg-green-500/10 border-green-200",
  },
  {
    title: "Shopify Management",
    description:
      "Hands-off store operations, fulfillment, and inventory syncing.",
    icon: <Settings className="w-10 h-10 text-emerald-500" />,
    price: "$200",
    link: "/shopify-store-managing",
    features: [
      "Daily Order Fulfillment",
      "Inventory Management",
      "Customer Support",
    ],
    color: "bg-emerald-500/10 border-emerald-200",
  },
  {
    title: "Meta Ads (FB & IG)",
    description:
      "Scalable acquisition campaigns powered by data-driven targeting.",
    icon: <Megaphone className="w-10 h-10 text-blue-600" />,
    price: "$300",
    link: "/meta-ads-and-campaigns",
    features: ["Audience Testing", "Retargeting Setup", "Creative Strategy"],
    color: "bg-blue-600/10 border-blue-200",
  },
  {
    title: "TikTok Ads",
    description:
      "Viral creative strategies and UGC ads to capture Gen Z attention.",
    icon: <Video className="w-10 h-10 text-pink-500" />,
    price: "$350",
    link: "/tiktok-ads-and-campaigns",
    features: ["UGC Content Creation", "Spark Ads", "Trend Hacking"],
    color: "bg-pink-500/10 border-pink-200",
  },
  {
    title: "Social Media Manager",
    description: "Organic growth and community building across all platforms.",
    icon: <Heart className="w-10 h-10 text-purple-500" />,
    price: "$250",
    link: "/social-media-manager",
    features: ["Content Calendar", "Daily Engagement", "Post Design"],
    color: "bg-purple-500/10 border-purple-200",
  },
  {
    title: "GFX Design",
    description: "World-class branding, logos, and visual identity design.",
    icon: <Palette className="w-10 h-10 text-rose-500" />,
    price: "$150",
    link: "/gfx-design",
    features: ["Logo Design", "Brand Kit", "Social Assets"],
    color: "bg-rose-500/10 border-rose-200",
  },
  {
    title: "Digital Marketing",
    description: "Complete 360° growth including SEO, Email, and PR.",
    icon: <Globe className="w-10 h-10 text-indigo-600" />,
    price: "$400",
    link: "/digital-marketing",
    features: ["SEO Audit", "Email Flows", "Blog Content"],
    color: "bg-indigo-600/10 border-indigo-200",
  },
  {
    title: "Full Business Marketing",
    description: "Your outsourced CMO team handling absolutely everything.",
    icon: <Crown className="w-10 h-10 text-yellow-500" />,
    price: "$2000",
    link: "/full-business-marketing",
    features: ["Dedicated CMO", "Full Dev Team", "Omni-Channel"],
    color: "bg-yellow-500/10 border-yellow-200",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-gradient-to-b from-blue-100/40 to-transparent blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-gradient-to-t from-purple-100/40 to-transparent blur-[120px] rounded-full opacity-50" />

        <div className="container px-4 mx-auto text-center z-10 relative">
          <Badge
            variant="outline"
            className="mb-6 px-4 py-1 border-primary/20 bg-primary/5 backdrop-blur-sm rounded-full mx-auto w-fit"
          >
            <Zap className="w-3 h-3 mr-2 text-yellow-500 fill-yellow-500" />
            Level Up Your Business
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            World-Class Services for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Modern Brands
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            From launching your first store to scaling to 7-figures, we have the
            exact tools and teams you need. No fluff, just results.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ALL_SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                className={`h-full border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 group bg-card/50 backdrop-blur-sm`}
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 min-h-[40px]">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-3 h-3 mr-2 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-sm text-muted-foreground mb-1">
                      Starts at
                    </span>
                    <span className="text-2xl font-bold">{service.price}</span>
                    <span className="text-xs text-muted-foreground mb-1">
                      /mo
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild variant="secondary">
                    <Link href={service.link}>
                      View Details <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="container px-4 mx-auto mt-24">
        <div className="bg-zinc-950 text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Not sure where to start?
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-lg">
              Book a free 15-minute consultation with our lead strategist. We'll
              audit your business and tell you exactly what you need.
            </p>
            <Button
              size="lg"
              className="h-14 px-10 text-lg bg-white text-black hover:bg-zinc-200 rounded-full"
            >
              Book Free Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
