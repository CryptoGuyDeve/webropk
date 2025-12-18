"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Youtube, ArrowUpRight, Zap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-black text-black dark:text-white pt-20 pb-10 border-t border-zinc-100 dark:border-zinc-900">

      {/* ===================== TOP CTA ===================== */}
      <div className="container px-6 mx-auto mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
              Ready to <br />
              <span className="text-zinc-400 dark:text-zinc-600">Scale Up?</span>
            </h2>
          </div>
          <Link href="/contact" className="group">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-black dark:bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
              <ArrowUpRight className="w-10 h-10 md:w-12 md:h-12 text-white dark:text-black transition-transform group-hover:rotate-45" />
            </div>
            <p className="mt-4 text-sm font-bold uppercase tracking-widest text-center">Let's Talk</p>
          </Link>
        </div>
      </div>

      <div className="container px-6 mx-auto">
        <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* BRAND COLUMN */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-black tracking-tighter uppercase flex items-center gap-2">
                <Zap className="fill-black dark:fill-white" />
                WebRoPK
              </h3>
            </Link>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm text-lg leading-relaxed">
              We build digital experiences that define the future. Strategic design, clean code, and unstoppable growth for ambitious brands.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Youtube className="w-5 h-5" />} />
            </div>
          </div>

          <div className="md:col-span-2"></div>

          {/* LINKS GRID */}
          <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-10">
            <FooterColumn title="Services">
              <FooterLink href="/digital-marketing">Digital Marketing</FooterLink>
              <FooterLink href="/shopify-store-creation">Shopify Dev</FooterLink>
              <FooterLink href="/gfx-design">Branding</FooterLink>
              <FooterLink href="/meta-ads-and-campaigns">Meta Ads</FooterLink>
            </FooterColumn>

            <FooterColumn title="Company">
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/portfolio">Work</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </FooterColumn>

            <FooterColumn title="Legal">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/cookies">Cookie Policy</FooterLink>
            </FooterColumn>
          </div>
        </div>

        <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800 mt-16 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-medium text-zinc-500 uppercase tracking-wider">
          <p>&copy; {currentYear} WebRoPK. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed in Lahore</p>
        </div>
      </div>
    </footer>
  );
}

const FooterColumn = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-6">
    <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400">{title}</h4>
    <ul className="space-y-4">{children}</ul>
  </div>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link
      href={href}
      className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors text-base font-medium"
    >
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <Link
    href={href}
    className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
  >
    {icon}
  </Link>
);
