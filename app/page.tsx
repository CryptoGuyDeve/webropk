"use client";

/* ============================================================================
   IMPORT ZONE — (All Dependencies Centralized for Clarity)
   A true engineer keeps imports clean, predictable, and structured.
=============================================================================== */
import ContentSection from "@/components/content-1";
import Features from "@/components/features-3";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-8";
import Pricing from "@/components/pricing";
import WallOfLoveSection from "@/components/testimonials";

import Carousel from "@/components/ui/carousel";

// Motion engine & icons
import { motion } from "framer-motion";
import { Sparkles, Zap, Rocket } from "lucide-react";

/* ============================================================================
   HOME PAGE — MASTER LAYOUT
   The root of your site. Every section in perfect order.
   Clean. Predictable. Elegant. Seamless.
=============================================================================== */
export default function Home() {
  return (
    <>
      {/* Seamless sections with smooth transitions */}
      <div className="relative overflow-x-hidden bg-white dark:bg-black">

        {/* 01 — Hero section (Top Fold) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeroSection />
        </motion.div>

        {/* Smooth Transition Gradient */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        {/* 02 — Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <ContentSection />
        </motion.div>

        {/* Smooth Transition Gradient */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

        {/* 03 — How We Work & Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <IntegrationsSection />
        </motion.div>

        {/* 04 — Animated Stripes Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <StripesAnim />
        </motion.div>

        {/* 05 — Portfolio Showcase (Carousel) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Decorative top gradient */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/50 to-transparent pointer-events-none -z-10" />
          <CarouselDemo />
        </motion.div>

        {/* Smooth Transition Gradient */}
        <div className="h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />

        {/* 06 — Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <WallOfLoveSection />
        </motion.div>

        {/* 07 — Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Footer />
        </motion.div>
      </div>
    </>
  );
}

/* ============================================================================
   CAROUSEL SECTION — "OUR WORK"
   – Ultra-clean display of previous work
   – Professional heading with animations
   – Dark/Light mode adaptive
   – Reduced padding for seamless flow
=============================================================================== */
export function CarouselDemo() {
  const slideData = [
    {
      title: "Premium Website Designs",
      button: "View Project",
      src: "https://images.unsplash.com/photo-1521133573892-e44906baee46?q=80&w=3540&auto=format&fit=crop",
    },
    {
      title: "Branding & Creative Identity",
      button: "View Project",
      src: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=3540&auto=format&fit=crop",
    },
    {
      title: "Shopify & Ecommerce Stores",
      button: "View Project",
      src: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=3540&auto=format&fit=crop",
    },
    {
      title: "Ad Creatives & Marketing Assets",
      button: "View Project",
      src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=3540&auto=format&fit=crop",
    },
    {
      title: "Mobile UI/UX Design",
      button: "View Project",
      src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=3540&auto=format&fit=crop",
    },
    {
      title: "Social Media Visuals",
      button: "View Project",
      src: "https://images.unsplash.com/photo-1508898578281-774ac4893c0c?q=80&w=3540&auto=format&fit=crop",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-12 md:py-16 bg-white dark:bg-black">

      {/* Subtle animated background glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
      />

      {/* ======= SECTION HEADING ======= */}
      <div className="relative z-10 text-center mb-12 space-y-3 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Work
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-sm md:text-base max-w-md mx-auto"
        >
          A showcase of the brands, businesses, and creators we've helped grow.
        </motion.p>
      </div>

      {/* ======= REUSABLE CAROUSEL COMPONENT ======= */}
      <Carousel slides={slideData} />
    </div>
  );
}


/* ============================================================================
   STRIPES ANIMATION — (Eye-Candy Banner)
   – Modern, animated diagonal stripes
   – Smooth parallax scrolling illusion
   – Compact design with dynamic icons
=============================================================================== */
function StripesAnim() {
  return (
    <div className="relative w-full overflow-hidden h-[240px] md:h-[280px] bg-white dark:bg-black">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        {/* Lower black stripe (unchanged) */}
        <div className="absolute rotate-[6deg] translate-y-[20px]">
          <Stripe bg="black" text="white" speed={55} iconType="sparkles" />
        </div>

        {/* Upper stripe — CHANGED to yellow + blurred glow */}
        <div className="absolute rotate-[-6deg] translate-y-[-20px]">
          <div className="relative">
            {/* Blurred Glow */}
            <div className="absolute inset-0 -z-10 blur-3xl bg-yellow-400/40 rounded-xl" />

            {/* The actual stripe */}
            <Stripe bg="#facc15" text="black" speed={65} iconType="mixed" />
          </div>
        </div>

      </div>
    </div>
  );
}


/* ============================================================================
   SINGLE STRIPE COMPONENT — reusable with dynamic icons
=============================================================================== */
function Stripe({
  bg,
  text,
  speed,
  iconType = "sparkles",
}: {
  bg: string;
  text: string;
  speed: number;
  iconType?: "sparkles" | "mixed";
}) {
  const services = [
    { icon: Sparkles, text: "Mobile App Development" },
    { icon: Rocket, text: "Product Consulting" },
    { icon: Zap, text: "Web Design" },
    { icon: Sparkles, text: "Graphic Design" },
    { icon: Rocket, text: "SEO & Marketing" },
  ];

  return (
    <div
      className="
        w-[180%] py-5 md:py-6 px-10
        overflow-hidden whitespace-nowrap
        rounded-xl shadow-xl
      "
      style={{ backgroundColor: bg }}
    >
      <motion.div
        className="flex gap-8 md:gap-10 text-xl md:text-2xl font-bold uppercase tracking-wide"
        style={{ color: text }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="flex items-center gap-3 md:gap-4">
              {services.map((service, idx) => {
                const Icon = iconType === "mixed" ? service.icon : Sparkles;
                return (
                  <span key={idx} className="flex items-center gap-2 md:gap-3">
                    <Icon className="size-4 md:size-5" />
                    {service.text}
                  </span>
                );
              })}
            </span>
          ))}
      </motion.div>
    </div>
  );
}
