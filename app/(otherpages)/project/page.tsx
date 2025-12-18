"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Mic,
  ArrowRight,
  Star,
  Globe,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const PROJECTS = [
  {
    title: "WeBro Collection",
    category: "E-Commerce Brand",
    description:
      "An exclusive premium apparel line defining the modern digital aesthetic. From streetwear to luxury accessories, WeBro Collection embodies the spirit of the hustle.",
    icon: <ShoppingBag className="w-12 h-12 text-yellow-500" />,
    stats: ["Top Rated", "Global Shipping", "Limited Edition"],
    gradient: "from-yellow-500/20 to-orange-500/20",
    border: "group-hover:border-yellow-500/50",
    buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-black",
    link: "#",
  },
  {
    title: "Bro's Digital Talks",
    category: "Media & Podcast",
    description:
      "The premier digital broadcast for agency owners, developers, and entrepreneurs. Unfiltered conversations about scaling, tech, and the future of business.",
    icon: <Mic className="w-12 h-12 text-yellow-500" />,
    stats: ["Weekly Episodes", "Industry Leaders", "Tech Insights"],
    gradient: "from-yellow-500/20 to-amber-500/20",
    border: "group-hover:border-yellow-500/50",
    buttonColor:
      "bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-black",
    link: "#",
  },
];

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-background pb-20 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-yellow-50/50 to-white text-zinc-900">
        {/* Yellow/Gold Premium Gradients */}
        <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] bg-gradient-to-b from-yellow-200/40 to-transparent blur-[120px] rounded-full opacity-60" />
        <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] bg-gradient-to-t from-orange-100/40 to-transparent blur-[120px] rounded-full opacity-60" />

        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1 border-yellow-500/50 text-yellow-700 bg-yellow-100/50 backdrop-blur-sm rounded-full mx-auto w-fit"
            >
              <Star className="w-3 h-3 mr-2 text-yellow-500 fill-yellow-500" />
              Our Ventures
            </Badge>

            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">
              Beyond <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-600">
                Client Work
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              We don't just build for others; we build for ourselves. Explore
              the internal companies and brands powered by the WeBroPk engine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= COMPANY PROJECTS GRID ================= */}
      <section className="container px-4 mx-auto -mt-16 z-20 relative">
        <div className="grid lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div
                className={`group relative bg-white dark:bg-zinc-900 rounded-[2rem] p-1 border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 h-full flex flex-col`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]`}
                ></div>

                <div className="relative bg-background rounded-[1.8rem] p-8 md:p-12 h-full flex flex-col border border-transparent transition-colors duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center border border-zinc-100 dark:border-zinc-700 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <Button variant="ghost" className="rounded-full" asChild>
                      <a href={project.link}>
                        <ExternalLink className="w-6 h-6 text-zinc-400 group-hover:text-yellow-500 transition-colors" />
                      </a>
                    </Button>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <Badge className="mb-4 bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 hover:bg-zinc-200 border-none">
                      {project.category}
                    </Badge>
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Stats/Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.stats.map((stat, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold uppercase tracking-wider text-zinc-500 border border-zinc-200 dark:border-zinc-800 px-3 py-1 rounded-full"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-8 border-t border-zinc-100 dark:border-zinc-800">
                    <Button
                      size="lg"
                      className={`w-full rounded-xl h-12 text-base font-bold ${project.buttonColor}`}
                    >
                      Explore Project <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= VISION SECTION ================= */}
      <section className="container px-4 mx-auto mt-24 md:mt-32">
        <div className="bg-yellow-50/50 dark:bg-yellow-900/5 border border-yellow-100 dark:border-yellow-900/20 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
          <Globe className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            More Than Just Code
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            WeBroPk is an ecosystem. Whether it's fashion, media, or technology,
            our goal is to build brands that leave a dent in the universe. We
            are constantly experimenting, launching, and scaling.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              className="border-yellow-200 text-yellow-700 hover:bg-yellow-100"
            >
              Read Our Philosophy
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
