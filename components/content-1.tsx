"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Award, Briefcase, ExternalLink, Mail, Globe } from "lucide-react";
import Link from "next/link";

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Skull, Ali",
    role: "CEO & Founder",
    image: "/",
    description: "Visionary leader driving innovation and excellence in digital solutions.",
    details: {
      experience: "10+ years in tech leadership",
      expertise: ["Business Strategy", "Digital Transformation", "Team Leadership"],
      location: "Pakistan",
      email: "ali@webropk.com",
    }
  },
  {
    id: 2,
    name: "FaizuRrehman",
    role: "Web Developer",
    image: "/crypto.jpg",
    description: "Young prodigy crafting cutting-edge web experiences with modern technologies.",
    details: {
      age: "16",
      location: "Pakistan",
      education: "In Matric",
      expertise: ["Next.js", "React", "TypeScript", "Full-Stack Development"],
      portfolio: "https://faizurrehman.vercel.app/",
    }
  },
  {
    id: 3,
    name: "Mohsin",
    role: "Marketing Specialist",
    image: "/team/mohsin.jpg",
    description: "Strategic marketer driving growth through innovative campaigns and data-driven insights.",
    details: {
      experience: "5+ years in digital marketing",
      expertise: ["SEO", "Social Media Marketing", "Content Strategy", "Analytics"],
      location: "Pakistan",
      email: "mohsin@webropk.com",
    }
  },
  {
    id: 4,
    name: "Saad Malik",
    role: "Graphic Designer",
    image: "/saadmalik.jpeg",
    description: "Professional designer creating stunning visuals and engaging video content.",
    details: {
      specialization: "Professional Graphic Design & Video Editing",
      expertise: ["Adobe Creative Suite", "Motion Graphics", "Brand Identity", "Video Production"],
      location: "Pakistan",
      email: "saad@webropk.com",
    }
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-background/95">

      {/* 🌟 BACKGROUND EFFECTS */}
      <BubbleBackground />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary"
          >
            Meet Our Team
          </motion.div>

          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            The Creative Minds Behind
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"> WeBroPk</span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate team of innovators, designers, and developers dedicated to transforming your digital vision into reality.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="rounded-3xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm md:p-12">
            <h3 className="text-2xl font-bold md:text-3xl">Want to Join Our Team?</h3>
            <p className="mt-4 text-muted-foreground">
              We're always looking for talented individuals to join our growing team.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
            >
              <Mail className="h-4 w-4" />
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------------------- */
/* 👤 Team Card Component with Hover Dropdown */
/* ---------------------------------------- */
function TeamCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card - Landscape Design */}
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">

        <div className="flex flex-col sm:flex-row">
          {/* Image Section */}
          <div className="relative h-64 sm:h-auto sm:w-2/5 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback gradient if image fails to load
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent sm:bg-gradient-to-r" />
            </motion.div>

            {/* Floating Role Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-auto sm:top-4 sm:left-4 sm:right-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                viewport={{ once: true }}
                className="inline-block rounded-full bg-primary/90 px-4 py-1.5 text-xs font-semibold text-primary-foreground backdrop-blur-sm"
              >
                {member.role}
              </motion.div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
              {member.name}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {member.description}
            </p>

            {/* Quick Info Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {member.details.location && (
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <MapPin className="h-3 w-3" />
                  {member.details.location}
                </span>
              )}
              {member.details.age && (
                <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400">
                  <Award className="h-3 w-3" />
                  Age {member.details.age}
                </span>
              )}
              {member.details.education && (
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                  <Briefcase className="h-3 w-3" />
                  {member.details.education}
                </span>
              )}
            </div>

            {/* Hover Indicator */}
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span>Hover for more details</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Panel - Appears on Hover */}
      <motion.div
        initial={false}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : -10,
          scale: isHovered ? 1 : 0.98,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`absolute left-0 right-0 top-full z-50 mt-3 ${isHovered ? "pointer-events-auto" : "pointer-events-none"
          }`}
      >
        <div className="rounded-2xl border border-border/50 bg-card/98 p-6 shadow-2xl backdrop-blur-xl">

          {/* Expertise Section */}
          <div className="mb-4">
            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              <Award className="h-4 w-4 text-primary" />
              Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {member.details.expertise?.map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded-lg bg-gradient-to-r from-primary/10 to-purple-500/10 px-3 py-1.5 text-xs font-medium text-foreground transition-all duration-300 hover:from-primary/20 hover:to-purple-500/20 hover:shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-2 border-t border-border/50 pt-4">
            {member.details.experience && (
              <div className="flex items-center gap-2 text-sm">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Experience:</span>
                <span className="font-semibold text-foreground">{member.details.experience}</span>
              </div>
            )}

            {member.details.specialization && (
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Specialization:</span>
                <span className="font-semibold text-foreground">{member.details.specialization}</span>
              </div>
            )}

            {member.details.email && (
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href={`mailto:${member.details.email}`}
                  className="font-medium text-primary transition-colors hover:text-primary/80"
                >
                  {member.details.email}
                </a>
              </div>
            )}

            {member.details.portfolio && (
              <Link
                href={member.details.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              >
                <Globe className="h-4 w-4" />
                View Portfolio
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ---------------------------------------- */
/* 🌈 Animated Bubble Background */
/* ---------------------------------------- */
const BubbleBackground = () => {
  const bubbles = [
    { size: 200, x: "-5%", y: "15%", duration: 14, blur: 50, opacity: 0.3 },
    { size: 280, x: "70%", y: "5%", duration: 18, blur: 70, opacity: 0.25 },
    { size: 220, x: "15%", y: "75%", duration: 16, blur: 55, opacity: 0.3 },
    { size: 180, x: "85%", y: "65%", duration: 20, blur: 48, opacity: 0.25 },
    { size: 150, x: "50%", y: "50%", duration: 22, blur: 40, opacity: 0.2 },
  ];

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, x: 0 }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
            filter: `blur(${b.blur}px)`,
            opacity: b.opacity,
            background:
              "radial-gradient(circle, rgba(139,92,246,0.70), rgba(99,102,241,0.10))",
          }}
        />
      ))}

      {/* Extra gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.10),transparent_60%)]" />
    </div>
  );
};
