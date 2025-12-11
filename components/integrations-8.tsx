"use client";

import {
  Gemini,
  Replit,
  GooglePaLM,
  MagicUI,
  VSCodium,
  MediaWiki,
} from "@/components/logos";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function IntegrationsSection() {
  return (
    <section>
      <div className="bg-zinc-50 dark:bg-background py-24 md:py-32">
        <div className="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-last mt-6 flex flex-col gap-12 md:order-first"
          >
            <div className="space-y-6">
              <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl">
                Tools & Technologies Our Team Relies On
              </h2>

              <p className="text-muted-foreground">
                At{" "}
                <span className="font-semibold text-accent-foreground">
                  WeBroPk
                </span>
                , we use industry-leading software, frameworks, and design tools
                to deliver fast, secure, and high-quality results — every single
                time.
              </p>

              <Button variant="outline" size="sm" asChild>
                <Link href="#">See Full Tech Stack</Link>
              </Button>
            </div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mt-auto grid grid-cols-[auto_1fr] gap-3"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-background flex aspect-square items-center justify-center rounded-full border p-3 shadow-sm"
              >
                <MediaWiki className="size-9 opacity-80" />
              </motion.div>

              <blockquote>
                <p>
                  “The WeBroPk team works like a powerhouse. Their speed,
                  expertise, and attention to detail made our brand
                  transformation seamless. They know exactly which tools to use
                  and when.”
                </p>

                <div className="mt-2 flex gap-2 text-sm">
                  <cite>Usman Ali</cite>
                  <p className="text-muted-foreground">CEO, SoftCraft</p>
                </div>
              </blockquote>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="-mx-6 px-6 sm:mx-auto sm:max-w-md md:-mx-6 md:ml-auto md:mr-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-background dark:bg-muted/50 rounded-2xl border p-3 shadow-lg md:pb-12"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 },
                  },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-2"
              >
                <Integration
                  icon={<Gemini />}
                  name="Figma & Adobe AI"
                  description="For UI/UX, branding, mockups, and high-end creative design."
                />

                <Integration
                  icon={<Replit />}
                  name="Next.js / React.js"
                  description="Modern web development with fast, scalable frontend architecture."
                />

                <Integration
                  icon={<GooglePaLM />}
                  name="SEO Tools"
                  description="SurferSEO, Ahrefs, Semrush & Google Search Console."
                />

                <Integration
                  icon={<MagicUI />}
                  name="Marketing Tools"
                  description="Meta Ads, Google Ads, Canva, Notion, and automation systems."
                />

                <Integration
                  icon={<VSCodium />}
                  name="Dev Tools"
                  description="VSCode, GitHub, Docker, Cloudflare & API integrations."
                />

                <Integration
                  icon={<MediaWiki />}
                  name="Content Systems"
                  description="WordPress, Shopify, Webflow, and custom CMS setups."
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------- */
/* Integration Box With Motion */
const Integration = ({
  icon,
  name,
  description,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="hover:bg-muted dark:hover:bg-muted/50 space-y-4 rounded-lg border p-4 transition-colors shadow-sm"
    >
      {/* Floating Icon */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="flex size-fit items-center justify-center"
      >
        {icon}
      </motion.div>

      <div className="space-y-1">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-muted-foreground line-clamp-1 text-sm md:line-clamp-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
