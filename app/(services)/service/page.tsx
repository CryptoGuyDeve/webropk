"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  Sparkles,
  TrendingUp,
  Code2,
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
    icon: <Store className="w-10 h-10" />,
    price: "$100",
    link: "/shopify-store-creation",
    features: ["Premium Theme Setup", "Product Research", "Payment Gateway"],
    gradient: "from-green-400 to-emerald-600",
    iconColor: "text-green-500",
    glowColor: "shadow-green-500/50",
  },
  {
    title: "Shopify Management",
    description:
      "Hands-off store operations, fulfillment, and inventory syncing.",
    icon: <Settings className="w-10 h-10" />,
    price: "$200",
    link: "/shopify-store-managing",
    features: [
      "Daily Order Fulfillment",
      "Inventory Management",
      "Customer Support",
    ],
    gradient: "from-emerald-400 to-teal-600",
    iconColor: "text-emerald-500",
    glowColor: "shadow-emerald-500/50",
  },
  {
    title: "Meta Ads (FB & IG)",
    description:
      "Scalable acquisition campaigns powered by data-driven targeting.",
    icon: <Megaphone className="w-10 h-10" />,
    price: "$300",
    link: "/meta-ads-and-campaigns",
    features: ["Audience Testing", "Retargeting Setup", "Creative Strategy"],
    gradient: "from-blue-400 to-indigo-600",
    iconColor: "text-blue-600",
    glowColor: "shadow-blue-500/50",
  },
  {
    title: "TikTok Ads",
    description:
      "Viral creative strategies and UGC ads to capture Gen Z attention.",
    icon: <Video className="w-10 h-10" />,
    price: "$350",
    link: "/tiktok-ads-and-campaigns",
    features: ["UGC Content Creation", "Spark Ads", "Trend Hacking"],
    gradient: "from-pink-400 to-rose-600",
    iconColor: "text-pink-500",
    glowColor: "shadow-pink-500/50",
  },
  {
    title: "Social Media Manager",
    description: "Organic growth and community building across all platforms.",
    icon: <Heart className="w-10 h-10" />,
    price: "$250",
    link: "/social-media-manager",
    features: ["Content Calendar", "Daily Engagement", "Post Design"],
    gradient: "from-purple-400 to-violet-600",
    iconColor: "text-purple-500",
    glowColor: "shadow-purple-500/50",
  },
  {
    title: "GFX Design",
    description: "World-class branding, logos, and visual identity design.",
    icon: <Palette className="w-10 h-10" />,
    price: "$150",
    link: "/gfx-design",
    features: ["Logo Design", "Brand Kit", "Social Assets"],
    gradient: "from-rose-400 to-pink-600",
    iconColor: "text-rose-500",
    glowColor: "shadow-rose-500/50",
  },
  {
    title: "Web Development",
    description: "Custom web applications with modern tech stack and scalable architecture.",
    icon: <Code2 className="w-10 h-10" />,
    price: "$2,500",
    link: "/web-development",
    features: ["Full Stack Development", "Modern UI/UX", "Cloud Deployment"],
    gradient: "from-blue-500 to-purple-600",
    iconColor: "text-blue-600",
    glowColor: "shadow-blue-500/50",
  },
  {
    title: "Digital Marketing",
    description: "Complete 360° growth including SEO, Email, and PR.",
    icon: <Globe className="w-10 h-10" />,
    price: "$400",
    link: "/digital-marketing",
    features: ["SEO Audit", "Email Flows", "Blog Content"],
    gradient: "from-indigo-400 to-blue-600",
    iconColor: "text-indigo-600",
    glowColor: "shadow-indigo-500/50",
  },
  {
    title: "Full Business Marketing",
    description: "Your outsourced CMO team handling absolutely everything.",
    icon: <Crown className="w-10 h-10" />,
    price: "$2000",
    link: "/full-business-marketing",
    features: ["Dedicated CMO", "Full Dev Team", "Omni-Channel"],
    gradient: "from-yellow-400 to-orange-600",
    iconColor: "text-yellow-500",
    glowColor: "shadow-yellow-500/50",
    featured: true,
  },
];

const FloatingOrb = ({ delay = 0, className = "" }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 20, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

export default function ServicesPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      {/* Animated Background Orbs */}
      <FloatingOrb
        delay={0}
        className="top-20 right-20 h-96 w-96 bg-gradient-to-br from-blue-500 to-purple-500"
      />
      <FloatingOrb
        delay={2}
        className="bottom-40 left-20 h-80 w-80 bg-gradient-to-br from-pink-500 to-orange-500"
      />
      <FloatingOrb
        delay={4}
        className="top-1/2 left-1/2 h-72 w-72 bg-gradient-to-br from-green-500 to-teal-500"
      />

      {/* ================= HERO SECTION ================= */}
      <motion.section
        style={{ y, opacity }}
        className="relative px-4 pb-16 pt-24 md:pb-24 md:pt-32 lg:pt-40"
      >
        <div className="container relative z-10 mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-6 mx-auto w-fit rounded-full border-primary/30 bg-primary/5 px-5 py-2 backdrop-blur-xl"
            >
              <Sparkles className="mr-2 h-4 w-4 fill-yellow-500 text-yellow-500" />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text font-semibold text-transparent">
                Level Up Your Business
              </span>
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            World-Class Services for <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Modern Brands
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            From launching your first store to scaling to 7-figures, we have the
            exact tools and teams you need.{" "}
            <span className="font-semibold text-foreground">
              No fluff, just results.
            </span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mb-8 flex max-w-3xl flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {[
              { label: "Happy Clients", value: "500+" },
              { label: "Projects Delivered", value: "1,200+" },
              { label: "Success Rate", value: "98%" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="mb-1 text-3xl font-bold md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ================= SERVICES GRID ================= */}
      <section className="container relative z-10 mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ALL_SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute -right-2 -top-2 z-10">
                  <Badge className="animate-pulse bg-gradient-to-r from-yellow-500 to-orange-500 text-xs font-bold text-black shadow-lg">
                    <Crown className="mr-1 h-3 w-3" />
                    POPULAR
                  </Badge>
                </div>
              )}

              <Card
                className={`group relative h-full overflow-hidden border-2 border-border/50 bg-card/40 backdrop-blur-xl transition-all duration-500 hover:border-primary/50 hover:shadow-2xl ${service.glowColor} hover:shadow-2xl`}
              >
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                />

                <CardHeader className="relative">
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg transition-all duration-500 group-hover:shadow-xl ${service.glowColor}`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </motion.div>

                  <CardTitle className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="min-h-[48px] text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  {/* Features */}
                  <div className="mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle2
                          className={`mr-2 h-4 w-4 ${service.iconColor}`}
                        />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="mb-4 flex items-end gap-1">
                    <span className="mb-1 text-xs text-muted-foreground">
                      Starts at
                    </span>
                    <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-3xl font-bold text-transparent">
                      {service.price}
                    </span>
                    <span className="mb-1 text-xs text-muted-foreground">
                      /mo
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="relative">
                  <Button
                    className="group/btn w-full overflow-hidden bg-gradient-to-r from-primary to-primary/80 transition-all hover:shadow-lg hover:shadow-primary/50"
                    asChild
                  >
                    <Link
                      href={service.link}
                      className="flex items-center justify-center"
                    >
                      <span>View Details</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PREMIUM CTA SECTION ================= */}
      <section className="container relative z-10 mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-8 text-white shadow-2xl md:p-16"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

          {/* Gradient Orbs */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 opacity-20 blur-3xl" />

          <div className="relative z-10 text-center">
            {/* Icon */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl"
            >
              <TrendingUp className="h-8 w-8 text-white" />
            </motion.div>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Not sure where to start?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-zinc-300">
              Book a free 15-minute consultation with our lead strategist. We'll
              audit your business and tell you exactly what you need.
            </p>
            <Button
              size="lg"
              className="group h-14 rounded-full bg-white px-10 text-lg font-semibold text-black shadow-xl transition-all hover:scale-105 hover:bg-zinc-100 hover:shadow-2xl"
            >
              Book Free Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
