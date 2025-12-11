"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TEAM_MEMBERS = [
  {
    name: "Ali",
    role: "CEO & Founder",
    image: "A",
    color: "bg-blue-100 text-blue-600",
    bio: "The visionary strategist ensuring every pixel and line of code meets world-class standards.",
    linkedin: "#",
  },
  {
    name: "Skull",
    role: "CEO & Founder",
    image: "S",
    color: "bg-yellow-100 text-yellow-600",
    bio: "The execution machine. Turning ambitious roadmaps into delivered reality.",
    linkedin: "#",
  },
  {
    name: "Mohsin",
    role: "Ads Manager",
    image: "M",
    color: "bg-rose-100 text-rose-600",
    bio: "Data-driven media buyer who scales campaigns to consistently hit high ROAS.",
    linkedin: "#",
  },
  {
    name: "FaizuRrehman",
    role: "Web Developer",
    image: "F",
    color: "bg-emerald-100 text-emerald-600",
    bio: "Full-stack wizard building the robust, lightning-fast infrastructure of your dreams.",
    linkedin: "#",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ================= HERO SECTION (Light Theme) ================= */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-gradient-to-b from-blue-200/20 to-transparent blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-gradient-to-t from-purple-200/20 to-transparent blur-[120px] rounded-full" />

        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1 border-blue-200 bg-blue-50 text-blue-700 rounded-full mx-auto w-fit"
            >
              The Dream Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-900">
              Meet The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                Builders
              </span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              We are a tight-knit team of obsessives. We don't just build; we
              craft digital experiences that last.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= TEAM GRID ================= */}
      <section className="py-20 md:py-32">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl bg-white border border-zinc-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Background Splash */}
                  <div
                    className={`absolute top-0 left-0 w-full h-32 ${member.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                  ></div>

                  {/* Avatar */}
                  <div className="relative pt-12 text-center">
                    <div
                      className={`w-32 h-32 mx-auto rounded-full ${member.color} flex items-center justify-center text-4xl font-bold border-4 border-white shadow-lg`}
                    >
                      {member.image}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-1 text-zinc-900">
                      {member.name}
                    </h3>
                    <p
                      className={`text-sm font-bold uppercase tracking-wider mb-4 ${
                        member.color.split(" ")[1]
                      }`}
                    >
                      {member.role}
                    </p>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6 min-h-[60px]">
                      {member.bio}
                    </p>

                    {/* Socials */}
                    <div className="flex justify-center gap-4">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full hover:bg-zinc-100 hover:text-blue-600"
                        asChild
                      >
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full hover:bg-zinc-100 hover:text-blue-400"
                      >
                        <Twitter className="w-5 h-5" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full hover:bg-zinc-100 hover:text-zinc-900"
                      >
                        <Globe className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HIRING CTA ================= */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-200">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Want to join us?</h2>
          <p className="text-zinc-500 max-w-xl mx-auto mb-8">
            We are always looking for exceptional talent. If you think you have
            what it takes, let's talk.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-zinc-300 hover:bg-zinc-100"
          >
            Open Positions <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
