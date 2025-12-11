"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full bg-white text-black mt-40 overflow-hidden">
      {/* ===================== CTA SECTION ===================== */}
      <div className="relative z-10 w-full px-4 md:px-8">
        {/* Yellow Glow (Subtle for white bg) */}
        <div className="absolute inset-0 -z-10 opacity-30 blur-[160px] bg-yellow-400/40" />

        {/* Floating Yellow Particles */}
        <ParticleLayer />

        {/* CTA BLOCK (Upgraded with gradient borders + glow) */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
    relative max-w-5xl mx-auto
    bg-black text-white
    rounded-3xl py-20 px-6 text-center
    shadow-[0_40px_120px_-20px_rgba(255,215,0,0.35)]
    overflow-hidden
  "
        >
          {/* ⭐ Outer Border Glow */}
          <div
            className="
    absolute inset-0 
    rounded-3xl 
    pointer-events-none 
    ring-2 ring-yellow-400/40
    shadow-[0_0_50px_15px_rgba(255,215,0,0.25)]
  "
          />

          {/* ⭐ Neon Yellow Pulse Borders */}
          <div
            className="
    absolute inset-0 
    rounded-3xl 
    border border-yellow-300/30
    animate-pulse-slow
  "
          />

          {/* ⭐ Top Gradient Line */}
          <div
            className="
    absolute top-0 left-0 w-full h-[2px]
    bg-gradient-to-r from-transparent via-white/70 to-transparent
  "
          />

          {/* ⭐ Bottom Gradient Line */}
          <div
            className="
    absolute bottom-0 left-0 w-full h-[2px]
    bg-gradient-to-r from-transparent via-white/70 to-transparent
  "
          />

          {/* ⭐ Corner Glow Streaks */}
          <div
            className="
    absolute top-0 left-0 w-[160px] h-[160px]
    bg-yellow-300/20 blur-[90px]
  "
          />
          <div
            className="
    absolute bottom-0 right-0 w-[160px] h-[160px]
    bg-yellow-300/20 blur-[90px]
  "
          />

          {/* ⭐ Inner Radial Shine */}
          <div
            className="
    absolute inset-0 
    bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]
  "
          />

          {/* ✨ Shine sweep */}
          <ShineEffect />

          {/* ✨ CTA TEXT */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative text-4xl md:text-5xl font-extrabold leading-tight z-10"
          >
            Let’s Build Something Powerful.
            <br /> Book Your Free Consultation Today!
          </motion.h2>

          {/* ✨ CTA BUTTON */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-10 z-10 relative"
          >
            <Link
              href="/contact"
              className="
        bg-yellow-400 text-black font-bold py-4 px-10 rounded-full
        shadow-[0_0_30px_rgba(255,215,0,0.6)]
        hover:shadow-[0_0_40px_rgba(255,215,0,0.9)]
        transition-all
      "
            >
              Schedule Call
            </Link>
          </motion.div>
        </motion.div>

        {/* Pulse animation */}
        <style>{`
  @keyframes pulse-slow {
    0% { opacity: 0.3; }
    50% { opacity: 0.6; }
    100% { opacity: 0.3; }
  }
  .animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
  }
`}</style>
      </div>

      {/* ===================== MAIN FOOTER (WHITE BG) ===================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto px-6 mt-24 pb-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* LOGO + ABOUT */}
          <div>
            <h1 className="text-3xl font-extrabold flex items-center gap-2">
              <span className="text-yellow-500">WeBro</span>Pk
            </h1>
            <p className="mt-4 text-sm text-black/70 leading-relaxed">
              We craft high-performance websites, brands, and systems designed
              to grow your business.
            </p>
          </div>

          {/* COLUMN 1 */}
          <FooterColumn title="Company">
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/services">Our Services</FooterLink>
            <FooterLink href="/portfolio">Portfolio</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterColumn>

          {/* COLUMN 2 */}
          <FooterColumn title="Contact">
            <span className="text-black/70">+92 300 1234567</span>
            <span className="text-black/70">contact@webropk.com</span>
            <span className="text-black/70">Lahore, Pakistan</span>
          </FooterColumn>

          {/* COLUMN 3 */}
          <FooterColumn title="Stay Updated">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="
                flex bg-white rounded-full overflow-hidden border border-black/20 shadow-sm
              "
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 w-full bg-transparent text-black outline-none placeholder:text-black/40"
              />
              <button className="bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-300 transition">
                Join
              </button>
            </motion.div>
          </FooterColumn>
        </div>
      </motion.div>
    </footer>
  );
}

/* ============================================================
   Footer Column Component
============================================================ */
const FooterColumn = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-black">{title}</h3>
    <ul className="space-y-3 text-sm">{children}</ul>
  </div>
);

const FooterLink = ({ href, children }) => (
  <li>
    <Link
      href={href}
      className="text-black/70 hover:text-yellow-500 transition-all"
    >
      {children}
    </Link>
  </li>
);

/* ============================================================
   Shine Effect
============================================================ */
function ShineEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
      <div className="shine absolute inset-0 opacity-0 group-hover:opacity-20"></div>
      <style>{`
        .shine {
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255,255,255,0.5) 50%,
            transparent 100%
          );
          transform: translateX(-100%);
          animation: shineMove 2.8s infinite linear;
        }
        @keyframes shineMove {
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </div>
  );
}

/* ============================================================
   Particle Background
============================================================ */
function ParticleLayer() {
  const particles = Array.from({ length: 15 }, () => ({
    size: Math.random() * 10 + 6,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 6 + 3,
  }));

  return (
    <div className="absolute inset-0 -z-20 pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute bg-yellow-400/40 blur-xl rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{ y: ["0px", "-25px", "0px"], opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
