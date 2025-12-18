"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Globe, Zap, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

// Initialize EmailJS with Public Key
// NOTE: Ideally this should be in useEffect, but we can access it during send just fine.
// Make sure keys are prefixed with NEXT_PUBLIC_ in .env.local

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Check for Service/Template IDs
    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      toast.error("Configuration Error: Missing EmailJS keys in .env.local");
      console.error("Missing keys. Please add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent successfully! We'll get back to you soon.");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-yellow-200 overflow-hidden relative">

      {/* ================= BACKGROUND ELEMENTS ================= */}
      {/* Subtle Yellow Glow */}
      <div className="absolute top-[-5%] right-[-5%] w-[30%] h-[30%] bg-yellow-100/40 blur-[100px] rounded-full -z-10" />

      {/* --- Header Section --- */}
      <header className="relative pt-24 pb-12 border-b border-zinc-100">
        <div className="container px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Badge className="mb-6 px-3 py-1 border-black bg-yellow-400 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none font-bold uppercase tracking-tighter">
              <Zap className="w-3 h-3 mr-2 fill-black" />
              Let's Work Together
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
              Ready to <br />
              <span className="text-white bg-black px-2">Ignite</span> your brand?
            </h1>
            <p className="mt-8 text-xl text-zinc-500 max-w-xl leading-relaxed font-medium">
              We specialize in high-performance digital solutions. Drop a message below to start the engine.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="container px-6 mx-auto py-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* --- Left: Contact Info (Bold Minimalism) --- */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="lg:col-span-4 space-y-12"
          >
            <motion.section variants={fadeInUp}>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 mb-8">Contact Details</h2>
              <div className="space-y-8">
                <div className="group cursor-pointer">
                  <p className="text-xs font-bold text-yellow-500 uppercase mb-1">Email</p>
                  <p className="text-2xl font-bold group-hover:underline decoration-yellow-400 underline-offset-4 transition-all">hello@webropk.com</p>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-xs font-bold text-yellow-500 uppercase mb-1">Phone</p>
                  <p className="text-2xl font-bold group-hover:underline decoration-yellow-400 underline-offset-4 transition-all">+92 300 1234567</p>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeInUp} className="p-8 bg-yellow-400 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative group">
              <Globe className="w-10 h-10 mb-6 text-black" />
              <h3 className="text-xl font-black uppercase mb-2">Our Studio</h3>
              <p className="text-black/80 font-medium mb-6">
                123 Innovation Park,<br />
                Lahore, Pakistan
              </p>
              <Button variant="outline" className="w-full border-black bg-transparent hover:bg-black hover:text-white rounded-none font-bold uppercase transition-all">
                Find Us on Maps
              </Button>
            </motion.section>
          </motion.div>

          {/* --- Right: The Professional Form --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="p-8 md:p-14 bg-white border border-zinc-200 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] rounded-3xl relative">
              <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">

                <div className="space-y-2 group">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-400 group-focus-within:text-black transition-colors">Name</label>
                  <Input
                    name="from_name"
                    required
                    placeholder="Your Name"
                    className="border-0 border-b-2 border-zinc-100 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-yellow-400 transition-all placeholder:text-zinc-300 text-lg py-6 bg-transparent font-bold"
                  />
                </div>

                <div className="space-y-2 group">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-400 group-focus-within:text-black transition-colors">Email Address</label>
                  <Input
                    name="from_email"
                    required
                    type="email"
                    placeholder="email@example.com"
                    className="border-0 border-b-2 border-zinc-100 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-yellow-400 transition-all placeholder:text-zinc-300 text-lg py-6 bg-transparent font-bold"
                  />
                </div>

                <div className="md:col-span-2 space-y-2 group">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-400 group-focus-within:text-black transition-colors">Interest</label>
                  <select
                    name="interest"
                    className="w-full border-0 border-b-2 border-zinc-100 rounded-none px-0 py-6 bg-transparent focus:outline-none focus:border-yellow-400 transition-all text-zinc-600 text-lg font-bold appearance-none cursor-pointer"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Marketing Strategy">Marketing Strategy</option>
                  </select>
                </div>

                <div className="md:col-span-2 space-y-2 group">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-400 group-focus-within:text-black transition-colors">Project Brief</label>
                  <Textarea
                    name="message"
                    required
                    placeholder="Tell us about your goals..."
                    className="min-h-[120px] border-0 border-b-2 border-zinc-100 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-yellow-400 transition-all resize-none placeholder:text-zinc-300 text-lg py-4 bg-transparent font-bold"
                  />
                </div>

                <div className="md:col-span-2 pt-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-16 px-12 bg-black text-white rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 group shadow-lg text-lg font-black uppercase tracking-tighter w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          Sending... <Loader2 className="ml-3 w-5 h-5 animate-spin" />
                        </>
                      ) : (
                        <>
                          Fire Message <Send className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}