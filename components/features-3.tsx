import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Settings2,
  Sparkles,
  ShoppingBag,
  Megaphone,
  PlayCircle,
  Palette,
  BriefcaseBusiness,
  TrendingUp,
  Globe,
} from "lucide-react";
import { ReactNode } from "react";
import Link from "next/link";

const SERVICES = [
  {
    icon: <ShoppingBag className="size-6" />,
    title: "Shopify Store Creation",
    desc: "Launch your brand with a high-converting, professionally designed Shopify store tailored to your niche.",
    slug: "shopify-store-creation",
  },
  {
    icon: <Settings2 className="size-6" />,
    title: "Shopify Store Managing",
    desc: "Comprehensive store management including inventory, order fulfillment, and performance optimization.",
    slug: "shopify-store-managing",
  },
  {
    icon: <Megaphone className="size-6" />,
    title: "Meta Ads & Campaigns",
    desc: "Targeted Facebook and Instagram ad campaigns strategies to scale your reach and maximize ROI.",
    slug: "meta-ads-and-campaigns",
  },
  {
    icon: <PlayCircle className="size-6" />,
    title: "TikTok Ads & Campaigns",
    desc: "Viral video marketing strategies to capture attention and drive traffic from TikTok's massive user base.",
    slug: "tiktok-ads-and-campaigns",
  },
  {
    icon: <Palette className="size-6" />,
    title: "GFX Design",
    desc: "Premium graphic design services for your brand identity, social media posts, and marketing materials.",
    slug: "gfx-design",
  },
  {
    icon: <Sparkles className="size-6" />,
    title: "Social Media Account Manager",
    desc: "Dedicated management of your social profiles to engage your audience and grow your community organically.",
    slug: "social-media-manager",
  },
  {
    icon: <Globe className="size-6" />,
    title: "Digital Marketing",
    desc: "Holistic digital strategies including SEO, email marketing, and content planning to boost online presence.",
    slug: "digital-marketing",
  },
  {
    icon: <TrendingUp className="size-6" />,
    title: "Full Business Marketing",
    desc: "End-to-end marketing solutions covering every channel to drive sustainable business growth and leads.",
    slug: "full-business-marketing",
  },
];

export default function Features() {
  return (
    <section className="relative z-20 py-16 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(circle_at_top,rgba(0,0,0,0.06),transparent_55%),radial-gradient(circle_at_bottom,rgba(0,0,0,0.04),transparent_50%)] dark:opacity-80" />

      <div className="@container mx-auto max-w-5xl px-6">
        {/* Heading block */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            FEATURES
          </p>

          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight lg:text-5xl">
            Services Built for Modern Businesses
          </h2>

          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            From branding to full-stack development, we deliver everything your
            business needs to grow, scale, and stand out in today’s digital
            landscape.
          </p>
        </div>

        {/* Feature cards */}
        <Card className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-10 grid max-w-sm divide-y overflow-hidden border-zinc-200/80 bg-background/80 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm *:text-left md:mt-16">
          {SERVICES.map((service, index) => (
            <FeatureCard key={index} {...service} />
          ))}
        </Card>
      </div>
    </section>
  );
}

const FeatureCard = ({
  icon,
  title,
  desc,
  slug,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  slug: string;
}) => (
  <div className="group relative overflow-hidden bg-gradient-to-b from-background to-background/80 transition-colors duration-300 hover:bg-background">
    <CardHeader className="pb-3">
      <CardDecorator>{icon}</CardDecorator>
      <h3 className="mt-6 font-medium">{title}</h3>
    </CardHeader>

    <CardContent>
      <p className="mt-3 text-sm text-muted-foreground">{desc}</p>

      {/* 🟡 View Service Button linked to slug */}
      <Link
        href={`/${slug}`}
        className="
          mt-4 inline-flex items-center gap-2 text-sm font-semibold 
          text-yellow-600 group-hover:text-yellow-700 transition-all
          relative
        "
      >
        View Service
        <span
          className="
            inline-block transition-transform duration-300 
            group-hover:translate-x-1
          "
        >
          →
        </span>
        {/* Underline */}
        <span
          className="
            absolute left-0 bottom-0 h-[1.5px] w-0 
            bg-yellow-400 transition-all duration-300
            group-hover:w-full
          "
        />
      </Link>
    </CardContent>
  </div>
);

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-16 rounded-full border border-zinc-200/70 bg-gradient-to-br from-background to-muted/40 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 dark:border-zinc-800/70 dark:from-zinc-900 dark:to-zinc-900/40">
    <div
      aria-hidden
      className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.12),transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_65%)]"
    />
    <div className="relative flex size-full items-center justify-center text-foreground/80">
      {children}
    </div>
  </div>
);
