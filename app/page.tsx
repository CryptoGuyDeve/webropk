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
import { Sparkles } from "lucide-react";

/* ============================================================================
   HOME PAGE — MASTER LAYOUT
   The root of your site. Every section in perfect order.
   Clean. Predictable. Elegant.
=============================================================================== */
export default function Home() {
  return (
    <>
      {/* 01 + 02 — Hero + Features (shared background) */}
      <section className="relative overflow-x-hidden bg-white dark:bg-black">
        {/* 01 — Hero section (Top Fold) */}
        <HeroSection />

        {/* 02 — Main Features */}
        <Features />
        {/* 03 — Content / About */}
        <ContentSection />

        {/* 04 — Tools & Integrations */}
        <IntegrationsSection />

        {/* 05 — Animated Stripes Banner */}
        <StripesAnim />

        {/* 06 — Portfolio Showcase (Carousel) */}
        <CarouselDemo />

        <Pricing />

        <WallOfLoveSection />

        <Footer />
      </section>
    </>
  );
}

/* ============================================================================
   CAROUSEL SECTION — "OUR WORK"
   – Ultra-clean display of previous work
   – Professional heading
   – Dark/Light mode adaptive
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
    <div className="relative overflow-hidden w-full h-full py-20 bg-white dark:bg-black">

      {/* ======= SECTION HEADING ======= */}
      <div className="text-center mb-12 space-y-3">
        <h2
          className="
            text-4xl md:text-5xl font-extrabold tracking-tight
          "
        >
          Our Work
        </h2>

        <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
          A showcase of the brands, businesses, and creators we’ve helped grow.
        </p>
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
=============================================================================== */
function StripesAnim() {
  return (
    <div className="relative w-full overflow-hidden h-[330px] bg-white dark:bg-black">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        
        {/* Lower black stripe (unchanged) */}
        <div className="absolute rotate-[6deg] translate-y-[25px]">
          <Stripe bg="black" text="white" speed={55} />
        </div>

        {/* Upper stripe — CHANGED to yellow + blurred glow */}
        <div className="absolute rotate-[-6deg] translate-y-[-25px]">
          <div className="relative">
            {/* Blurred Glow */}
            <div className="absolute inset-0 -z-10 blur-3xl bg-yellow-400/40 rounded-xl" />
            
            {/* The actual stripe */}
            <Stripe bg="#facc15" text="black" speed={65} />
          </div>
        </div>

      </div>
    </div>
  );
}


/* ============================================================================
   SINGLE STRIPE COMPONENT — reusable
=============================================================================== */
function Stripe({
  bg,
  text,
  speed,
}: {
  bg: string;
  text: string;
  speed: number;
}) {
  return (
    <div
      className="
        w-[180%] py-6 px-10
        overflow-hidden whitespace-nowrap
        rounded-xl shadow-xl
      "
      style={{ backgroundColor: bg }}
    >
      <motion.div
        className="flex gap-10 text-2xl font-bold uppercase tracking-wide"
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
            <span key={i} className="flex items-center gap-4">
              <Sparkles className="size-5" /> Mobile App Development
              <Sparkles className="size-5" /> Product Consulting
              <Sparkles className="size-5" /> Web Design
              <Sparkles className="size-5" /> Graphic Design
              <Sparkles className="size-5" /> SEO
            </span>
          ))}
      </motion.div>
    </div>
  );
}
