"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Pricing() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">

      {/* ✨ Floating Particles (Background) */}
      <ParticleBg />

      {/* ✨ Yellow Glow Behind Section */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[420px] w-[420px] bg-yellow-400/25 blur-[160px] rounded-full" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-2xl space-y-6 text-center"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Transparent Pricing Built for Every Business
          </h1>
          <p className="text-muted-foreground">
            At <strong>WeBroPk</strong>, we build high-performance digital
            solutions designed to grow brands — no fluff, no hidden charges.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.18 } } }}
          className="mt-12 grid gap-10 md:mt-20 md:grid-cols-3"
        >
          {/* Starter */}
          <PremiumCard
            title="Starter"
            price="PKR 0 / Consultation"
            desc="Perfect for small businesses exploring digital growth."
            features={[
              "Free Business Consultation",
              "Website Audit Report",
              "Basic Strategy Roadmap",
            ]}
            button={<Button variant="outline" className="w-full">Book Free Call</Button>}
          />

          {/* Professional */}
          <PremiumCard
            highlight
            title="Professional"
            price="PKR 29,999+"
            desc="Ideal for businesses needing a modern website & branding."
            features={[
              "Custom Website Design",
              "Fast & Secure Development",
              "SEO Optimization",
              "Branding & Creative Assets",
              "Mobile Responsive Design",
              "Hosting + Speed Setup",
              "Analytics Setup",
              "3 Revisions",
              "Priority Support",
            ]}
            button={<Button className="w-full">Start Project</Button>}
          />

          {/* Business */}
          <PremiumCard
            title="Business"
            price="PKR 59,999+"
            desc="For scaling brands needing full digital transformation."
            features={[
              "Everything in Professional Plan",
              "Advanced SEO + Marketing Setup",
              "E-commerce / Lead Funnels",
              "Automations & Integrations",
              "Social Media Branding",
              "Monthly Growth Reports",
            ]}
            button={<Button variant="outline" className="w-full">Get Custom Quote</Button>}
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   PREMIUM 3D CARD (Tilt + Glow + Shine)
============================================================ */
const PremiumCard = ({
  title,
  price,
  desc,
  features,
  button,
  highlight = false,
}: any) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{
        scale: 1.03,
        rotateX: 6,
        rotateY: -6,
        transition: { duration: 0.3 },
      }}
      className="relative group"
    >
      {/* 🔥 Shine Animation */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div className="shine absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500"></div>
      </div>

      {/* ✨ Card Glow */}
      {highlight && (
        <div className="absolute -inset-4 bg-yellow-400/15 blur-3xl rounded-3xl -z-10" />
      )}

      {/* Tag */}
      {highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          Most Popular
        </span>
      )}

      {/* Card Content */}
      <Card className={`relative rounded-2xl p-[2px] backdrop-blur-xl shadow-xl 
        ${highlight
          ? "bg-gradient-to-br from-yellow-400/40 to-yellow-500/30"
          : "bg-white/10 dark:bg-zinc-900/10"
        }`}
      >
        <Card className="rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-zinc-950/80 border-none shadow-xl">
          <CardHeader>
            <CardTitle className="font-semibold">{title}</CardTitle>
            <span className="my-3 block text-2xl font-bold text-yellow-500">
              {price}
            </span>
            <CardDescription className="text-sm text-muted-foreground">
              {desc}
            </CardDescription>
            <div className="mt-4">{button}</div>
          </CardHeader>

          <CardContent className="space-y-4">
            <hr className="border-dashed" />

            <ul className="space-y-3 text-sm">
              {features.map((item: string, index: number) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="size-4 text-yellow-500 drop-shadow" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Card>
    </motion.div>
  );
};

/* ============================================================
   FLOATING PARTICLES (Premium Background Effects)
============================================================ */
function ParticleBg() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const arr = Array.from({ length: 18 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 8 + Math.random() * 12,
      duration: 4 + Math.random() * 6,
    }));
    setParticles(arr);
  }, []);

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute bg-yellow-400/30 rounded-full blur-xl"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ y: ["0px", "-20px", "0px"], opacity: [0.4, 0.7, 0.4] }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ============================================================
   SHINE EFFECT STYLE
============================================================ */
const shineStyle = `
.shine {
  background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%);
  transform: translateX(-100%);
  animation: shineMove 1.8s infinite;
}
@keyframes shineMove {
  100% {
    transform: translateX(200%);
  }
}
`;

if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = shineStyle;
  document.head.appendChild(style);
}
