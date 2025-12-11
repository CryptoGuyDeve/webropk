"use client";

import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FAQS = [
  {
    question: "How long does a typical Shopify store creation take?",
    answer:
      "For our standard packages, we typically deliver within 5-7 business days. Custom enterprise solutions may take 14-21 days depending on complexity.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We have a strictly defined refund policy. If we fail to deliver the agreed-upon scope, we offer full refunds. However, once the work is approved and delivered, payments are non-refundable.",
  },
  {
    question: "Can I upgrade my marketing package later?",
    answer:
      "Absolutely. You can start with our 'Accelerator' package and upgrade to 'Scale Up' or 'Partner' tiers at any time as your business grows.",
  },
  {
    question: "Who will manage my ads?",
    answer:
      "Your ads will be managed by our certified experts, led by Mohsin (our Head of Ads). We don't outsource to junior interns.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes! All our packages come with post-launch support. Our monthly retainer packages include daily management and weekly reporting.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We have deep expertise in E-commerce (Fashion, Beauty, Tech Gadgets) and B2B Lead Generation. Check our portfolio for case studies.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* ================= HERO SECTION (Light Theme) ================= */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1 border-indigo-200 bg-indigo-50 text-indigo-700 rounded-full mx-auto w-fit"
            >
              <HelpCircle className="w-3 h-3 mr-2" />
              Support Center
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-900">
              Frequently Asked <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                Questions
              </span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Got questions? We've got answers. If you can't find what you're
              looking for, our team is just a click away.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= ACCORDION SECTION ================= */}
      <section className="container px-4 mx-auto max-w-3xl mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-zinc-100"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b-zinc-100"
              >
                <AccordionTrigger className="text-lg font-semibold text-zinc-800 hover:text-indigo-600 py-4 hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-500 leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </section>

      {/* ================= STILL HAVE QUESTIONS CTA ================= */}
      <section className="container px-4 mx-auto max-w-3xl mt-20 text-center">
        <div className="bg-zinc-900 text-white rounded-3xl p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 blur-[100px] opacity-30"></div>
          <div className="relative z-10">
            <MessageCircle className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto">
              Can't find the answer you're looking for? Chat with our friendly
              team.
            </p>
            <Button
              size="lg"
              className="bg-white text-indigo-900 hover:bg-zinc-100"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
