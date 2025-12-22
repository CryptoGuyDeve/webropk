"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Rocket,
  Target,
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Zap,
  Heart,
  Star
} from "lucide-react";

// Our Journey Milestones
const milestones = [
  {
    icon: Lightbulb,
    title: "The Vision",
    description: "Started with a simple idea: make digital transformation accessible to everyone.",
    year: "2020",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Building the Team",
    description: "Assembled a passionate team of designers, developers, and marketers.",
    year: "2021",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Rocket,
    title: "First Launch",
    description: "Delivered our first major project and received overwhelming positive feedback.",
    year: "2022",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "Rapid Growth",
    description: "Expanded services, grew client base, and established market presence.",
    year: "2023",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Recognized for excellence in digital solutions and client satisfaction.",
    year: "2024",
    color: "from-red-500 to-rose-500"
  },
];

// How We Work Process
const workProcess = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into understanding your business goals, target audience, and unique challenges.",
    icon: Target,
    features: ["Market Research", "Competitor Analysis", "Goal Setting"]
  },
  {
    step: "02",
    title: "Design & Planning",
    description: "Crafting beautiful, user-centric designs that align with your brand identity and vision.",
    icon: Sparkles,
    features: ["UI/UX Design", "Wireframing", "Brand Guidelines"]
  },
  {
    step: "03",
    title: "Development & Build",
    description: "Bringing designs to life with clean code, modern technologies, and best practices.",
    icon: Zap,
    features: ["Frontend Development", "Backend Integration", "Quality Assurance"]
  },
  {
    step: "04",
    title: "Launch & Optimize",
    description: "Deploying your project and continuously optimizing for peak performance and growth.",
    icon: Rocket,
    features: ["Deployment", "Performance Tuning", "Ongoing Support"]
  },
];

// Core Values
const coreValues = [
  {
    icon: Heart,
    title: "Client-Focused",
    description: "Your success is our success. We prioritize your needs above all."
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We never settle for good enough. Every project gets our best work."
  },
  {
    icon: CheckCircle2,
    title: "Reliability",
    description: "On-time delivery and consistent quality you can count on."
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Staying ahead with cutting-edge technologies and creative solutions."
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 py-24 md:py-32">

      {/* Animated Background */}
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 px-4 py-1.5 text-sm font-semibold text-primary"
          >
            Our Journey & Process
          </motion.div>

          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            How We Built{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              WeBroPk
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            From a small idea to a trusted digital partner — discover our journey, our process,
            and the values that drive us to deliver exceptional results every single time.
          </p>
        </motion.div>

        {/* Our Journey Timeline */}
        <div className="mb-32">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold md:text-4xl"
          >
            Our Journey to Success
          </motion.h3>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-purple-500 to-pink-500 md:block" />

            <div className="space-y-12 md:space-y-20">
              {milestones.map((milestone, index) => (
                <TimelineItem
                  key={index}
                  milestone={milestone}
                  index={index}
                  isEven={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>

        {/* How We Work Process */}
        <div className="mb-32">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold md:text-4xl"
          >
            How We Work
          </motion.h3>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {workProcess.map((process, index) => (
              <ProcessCard key={index} process={process} index={index} />
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold md:text-4xl"
          >
            Our Core Values
          </motion.h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => (
              <ValueCard key={index} value={value} index={index} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 p-12 backdrop-blur-sm">
            {/* Decorative Elements */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold md:text-4xl">
                Ready to Start Your Journey?
              </h3>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's transform your vision into reality. Join hundreds of satisfied clients
                who trusted us with their digital success.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="group h-12 rounded-full px-8 text-base shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                >
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full px-8 text-base"
                >
                  <Link href="/projects">
                    View Our Work
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------------------- */
/* Timeline Item Component */
/* ---------------------------------------- */
function TimelineItem({
  milestone,
  index,
  isEven
}: {
  milestone: typeof milestones[0];
  index: number;
  isEven: boolean;
}) {
  const Icon = milestone.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex flex-col md:flex-row md:items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"
        }`}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="group rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
        >
          <div className={`mb-3 flex items-center gap-3 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
            <span className={`bg-gradient-to-r ${milestone.color} bg-clip-text text-2xl font-bold text-transparent`}>
              {milestone.year}
            </span>
          </div>

          <h4 className="mb-2 text-xl font-bold">{milestone.title}</h4>
          <p className="text-sm text-muted-foreground">{milestone.description}</p>
        </motion.div>
      </div>

      {/* Center Icon - Hidden on mobile */}
      <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          viewport={{ once: true }}
          className={`flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br ${milestone.color} shadow-lg`}
        >
          <Icon className="h-7 w-7 text-white" />
        </motion.div>
      </div>

      {/* Mobile Icon */}
      <div className="mb-4 md:hidden">
        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${milestone.color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden flex-1 md:block" />
    </motion.div>
  );
}

/* ---------------------------------------- */
/* Process Card Component */
/* ---------------------------------------- */
function ProcessCard({
  process,
  index
}: {
  process: typeof workProcess[0];
  index: number;
}) {
  const Icon = process.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
    >
      {/* Background Gradient */}
      <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-primary/10 to-transparent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      {/* Step Number */}
      <div className="mb-4 text-6xl font-bold text-primary/10 transition-colors group-hover:text-primary/20">
        {process.step}
      </div>

      {/* Icon */}
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-7 w-7" />
      </div>

      {/* Content */}
      <h4 className="mb-3 text-2xl font-bold">{process.title}</h4>
      <p className="mb-6 text-muted-foreground">{process.description}</p>

      {/* Features */}
      <ul className="space-y-2">
        {process.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ---------------------------------------- */
/* Value Card Component */
/* ---------------------------------------- */
function ValueCard({
  value,
  index
}: {
  value: typeof coreValues[0];
  index: number;
}) {
  const Icon = value.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group rounded-2xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 text-primary transition-all duration-300 group-hover:scale-110 group-hover:from-primary group-hover:to-purple-500 group-hover:text-white">
        <Icon className="h-8 w-8" />
      </div>

      <h4 className="mb-2 text-lg font-bold">{value.title}</h4>
      <p className="text-sm text-muted-foreground">{value.description}</p>
    </motion.div>
  );
}

/* ---------------------------------------- */
/* Animated Background */
/* ---------------------------------------- */
function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-1/3 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
    </div>
  );
}
