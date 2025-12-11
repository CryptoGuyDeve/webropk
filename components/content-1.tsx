"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContentSection() {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">

      {/* 🌟 BACKGROUND BUBBLES */}
      <BubbleBackground />

      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl"
        >
          Headache? Stress? Confused?
          <br />We turn your digital problems into peace.
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative mb-6 sm:mb-0"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="aspect-76/59 relative rounded-2xl bg-gradient-to-br from-background to-background/20 p-px"
            >
              {/* Floating Parallax Effect */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/payments.png"
                  className="hidden rounded-[15px] dark:block"
                  alt="client stress illustration dark"
                  width={1207}
                  height={929}
                />
                <Image
                  src="https://media.istockphoto.com/id/511735934/photo/feeling-stressed.jpg?s=612x612&w=0&k=20&c=bRo19DzLWLIOuDwyBzkX56gdEYkphj7naBmv76DHJNs="
                  className="rounded-[15px] shadow dark:hidden"
                  alt="client stress illustration light"
                  width={1207}
                  height={929}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.22 },
              },
            }}
            className="relative space-y-4"
          >
            <FadeUp>
              <p className="text-muted-foreground">
                Running a business is already tough — websites breaking,
                marketing failing, zero leads, pressure everywhere.  
                <span className="text-accent-foreground font-bold">
                  {" "}WeBroPk takes that stress off your shoulders.
                </span>
              </p>
            </FadeUp>

            <FadeUp>
              <p className="text-muted-foreground">
                From website fixes to full brand makeovers, SEO, and marketing —
                we handle everything so you can focus on the only thing that
                matters:{" "}
                <span className="font-semibold text-accent-foreground">
                  growing your business peacefully.
                </span>
              </p>
            </FadeUp>

            {/* Testimonial */}
            <FadeUp className="pt-6">
              <blockquote className="border-l-4 pl-4">
                <p>
                  “Before WeBroPk, every day felt like a new problem — slow
                  website, clients not coming in, zero online presence.  
                  <span className="font-semibold">
                    {" "}They didn’t just fix my problems; they rebuilt my
                    confidence.
                  </span>
                  Their work feels like having a whole team behind me.”
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-medium">Hamza Khan — Dev</cite>
                  <img
                    className="h-5 dark:invert"
                    src="https://html.tailus.io/blocks/customers/openai.svg"
                    alt="OpenAI Logo"
                    height="20"
                  />
                </div>
              </blockquote>
            </FadeUp>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------- */
/* ✨ Small Fade-Up Component */
/* ---------------------------------------- */
const FadeUp = ({ children, className = "" }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 25 },
      show: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

/* ---------------------------------------- */
/* 🌈 Animated Bubble Background */
/* ---------------------------------------- */
const BubbleBackground = () => {
  const bubbles = [
    { size: 180, x: "-10%", y: "20%", duration: 12, blur: 40, opacity: 0.4 },
    { size: 250, x: "60%", y: "10%", duration: 16, blur: 60, opacity: 0.35 },
    { size: 200, x: "20%", y: "70%", duration: 14, blur: 50, opacity: 0.4 },
    { size: 160, x: "80%", y: "60%", duration: 18, blur: 45, opacity: 0.3 },
  ];

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          initial={{ y: 0 }}
          animate={{ y: [-20, 20, -20] }}
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
              "radial-gradient(circle, rgba(99,102,241,0.70), rgba(99,102,241,0.10))",
          }}
        />
      ))}

      {/* Extra subtle gradient shapes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(200,200,255,0.12),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_bottom,rgba(66,66,120,0.12),transparent_70%)]" />
    </div>
  );
};
