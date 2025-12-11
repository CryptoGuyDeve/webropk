"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Crown,
  Rocket,
  Users,
  Zap,
  Target,
  Globe,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-yellow-100 selection:text-yellow-900 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-zinc-950 text-white">
        {/* Luxury Gradients */}
        <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] bg-gradient-to-b from-yellow-600/20 to-transparent blur-[120px] rounded-full opacity-60" />
        <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] bg-gradient-to-t from-amber-900/40 to-transparent blur-[120px] rounded-full opacity-60" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay"></div>

        <div className="container px-4 mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1 border-yellow-500/50 text-yellow-500 bg-yellow-950/30 backdrop-blur-sm rounded-full mx-auto w-fit"
            >
              <Crown className="w-3 h-3 mr-2 text-yellow-500 fill-yellow-500" />
              The Gold Standard
            </Badge>

            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">
              Not Just An Agency. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-600">
                A Legacy.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              WeBroPk wasn't built to compete. It was built to dominate. We
              combine elite engineering with aggressive marketing to build
              digital empires.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= THE ORIGIN STORY ================= */}
      <section className="py-24 bg-background relative">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-yellow-500/30 rounded-tl-3xl"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-yellow-500/30 rounded-br-3xl"></div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  How It Started
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  It began with a simple observation:{" "}
                  <strong>Most agencies are average.</strong> They do the bare
                  minimum, take the check, and disappear.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Ali and Skull didn't want to be another "service provider."
                  They wanted to be partners in war. The war for attention. The
                  war for market share.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From a single laptop to a global team, WeBroPk was forged in
                  the fire of sleepless nights and relentless perfectionism. We
                  don't stop until we win.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-zinc-100 dark:bg-zinc-900 p-8 rounded-3xl aspect-square flex flex-col justify-center items-center text-center">
                <h3 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-2">
                  200+
                </h3>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                  Projects Killed
                </p>
              </div>
              <div className="bg-zinc-950 text-white p-8 rounded-3xl aspect-square flex flex-col justify-center items-center text-center">
                <h3 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">
                  98%
                </h3>
                <p className="text-sm text-zinc-400 uppercase tracking-widest font-bold">
                  Retention Rate
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= THE FOUNDERS ================= */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The Architects
            </h2>
            <p className="text-muted-foreground">
              The minds behind the machine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* ALI */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-zinc-900 p-2 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="h-64 bg-zinc-200 dark:bg-zinc-800 rounded-2xl mb-6 overflow-hidden relative">
                {/* Placeholder for Ali Image */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-bold text-6xl">
                  A
                </div>
              </div>
              <div className="px-6 pb-6 text-center">
                <h3 className="text-2xl font-bold mb-1">Ali</h3>
                <p className="text-sm text-blue-600 font-bold tracking-wider uppercase mb-4">
                  Founder & Visionary
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The strategist. Ali sees the chessboard five steps ahead.
                  Obsessed with clean code, scalable systems, and pixel-perfect
                  design.
                </p>
              </div>
            </motion.div>

            {/* SKULL */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative bg-zinc-950 text-white p-2 rounded-3xl shadow-xl border border-zinc-800"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-red-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="h-64 bg-zinc-900 rounded-2xl mb-6 overflow-hidden relative border border-zinc-800">
                {/* Placeholder for Skull Image */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-bold text-6xl">
                  S
                </div>
              </div>
              <div className="px-6 pb-6 text-center">
                <h3 className="text-2xl font-bold mb-1">Skull</h3>
                <p className="text-sm text-yellow-500 font-bold tracking-wider uppercase mb-4">
                  CEO & Founder
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  The executor. Skull ensures no deadline is missed and no
                  standard is lowered. Ruthless efficiency and business acumen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= WHY WE ARE DIFFERENT ================= */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 mix-blend-overlay"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why WeBroPk?
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              The industry is full of noise. We are the signal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-8 h-8 text-yellow-500" />,
                title: "Speed & Precision",
                desc: "We don't believe in month-long boardings. We launch fast, break things, fix them faster, and scale.",
              },
              {
                icon: <Target className="w-8 h-8 text-red-500" />,
                title: "ROI Obsessed",
                desc: "Vanity metrics (likes/views) don't pay bills. We focus on sales, leads, and actual revenue.",
              },
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: "We Are You",
                desc: "We treat your business like it's ours. We lose sleep over your bugs so you don't have to.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-yellow-500/50 transition-colors"
              >
                <div className="mb-6 bg-zinc-800/50 p-4 w-fit rounded-xl border border-white/5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 bg-background text-center">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-7xl font-bold mb-8">
              Ready To Build <br /> The Future?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              You've read our story. Now let's write yours.
            </p>
            <Button
              size="lg"
              className="h-16 px-12 text-xl bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black rounded-full shadow-2xl hover:scale-105 transition-transform"
            >
              Work With Us <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
