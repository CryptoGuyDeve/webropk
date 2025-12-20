import { config } from "dotenv";
config({ path: ".env" });
config({ path: ".env.local" });
import { db } from "@/lib/db";
import { services } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

const SERVICES_DATA = [
  {
    slug: "meta-ads-and-campaigns",
    heroTitle: "Stop Burning Money on Ads.",
    heroSubtitle:
      "We build high-converting Meta advertising funnels that turn strangers into loyal customers. No fluff, just ROAS.",
    packages: [
      {
        name: "Starter",
        price: "$300",
        description: "Perfect for testing waters.",
        features: [
          "1 Campaign Setup",
          "3 Ad Creatives",
          "Weekly Reporting",
          "Audience Research",
          "Pixel Setup",
        ],
      },
      {
        name: "Growth",
        price: "$600",
        description: "Scale your revenue.",
        features: [
          "3 Campaigns",
          "5 Ad Creatives",
          "Bi-Weekly Strategy Calls",
          "Retargeting Setup",
          "A/B Testing",
        ],
        isPopular: true,
      },
      {
        name: "Dominance",
        price: "$1200",
        description: "Full market takeover.",
        features: [
          "Unlimited Campaigns",
          "Unlimited Creatives",
          "24/7 Support",
          "dedicated Account Manager",
          "Cross-Platform Strategy",
          "CRO Audit",
        ],
      },
    ],
  },
  {
    slug: "tiktok-ads-and-campaigns",
    heroTitle: "Go Viral. Get Sales.",
    heroSubtitle:
      "Harness the power of TikTok with UGC-style creatives that don't look like ads but convert like crazy.",
    packages: [
      {
        name: "Starter",
        price: "$350",
        description: "Test the waters.",
        features: [
          "1 Campaign Setup",
          "3 Creative Briefs",
          "Audience Targeting",
          "Basic Reporting",
          "Pixel Setup",
        ],
      },
      {
        name: "Viral",
        price: "$700",
        description: "Scale with UGC.",
        features: [
          "3 Campaigns",
          "2 UGC Videos Included",
          "Creator Outreach",
          "Weekly Optimization",
          "Spark Ads Strategy",
        ],
        isPopular: true,
      },
      {
        name: "Influencer",
        price: "$1400",
        description: "Full brand domination.",
        features: [
          "Unlimited Campaigns",
          "5 UGC Videos/Mo",
          "Influencer Coordination",
          "Dedicated Creative Director",
          "Cross-Platform Re-purposing",
          "24/7 Support",
        ],
      },
    ],
  },
  {
    slug: "social-media-manager",
    heroTitle: "Your Brand, On Autopilot.",
    heroSubtitle:
      "Consistency builds trust. We curate, design, and post content that builds a community around your brand.",
    packages: [
      {
        name: "Essential",
        price: "$250",
        description: "Maintenance mode.",
        features: [
          "3 Posts per Week",
          "Caption Writing",
          "Hashtag Research",
          "Monthly Content Calendar",
          "1 Platform",
        ],
      },
      {
        name: "Active",
        price: "$450",
        description: "Building real growth.",
        features: [
          "5 Posts per Week",
          "2 Platforms (e.g. FB & IG)",
          "Story Updates (3/week)",
          "Community Management",
          "Monthly Strategy Call",
        ],
        isPopular: true,
      },
      {
        name: "Influencer",
        price: "$800",
        description: "Total domination.",
        features: [
          "Daily Posting (7/week)",
          "3 Platforms",
          "Reels/TikTok Editing",
          "Influencer Outreach",
          "Priority Support",
          "Quarterly Analytics Deep Dive",
        ],
      },
    ],
  },
  {
    slug: "gfx-design",
    heroTitle: "Design That Sells.",
    heroSubtitle:
      "First impressions matter. We create world-class visuals that elevate your brand perception instantly.",
    packages: [
      {
        name: "Identity",
        price: "$150",
        description: "Just the essentials.",
        features: [
          "Professional Logo Design",
          "Secondary Mark/Icon",
          "Color Palette Hex Codes",
          "Typography Selection",
          "High-Res Exports (PNG/JPG)",
        ],
      },
      {
        name: "Brand Kit",
        price: "$300",
        description: "Complete visual system.",
        features: [
          "Everything in Identity",
          "Vector Source Files (Ai/EPS)",
          "Social Media Profile Kit",
          "Business Card Design",
          "Brand Guidelines PDF",
          "3D Mockups",
        ],
        isPopular: true,
      },
      {
        name: "Full Stack",
        price: "$600",
        description: "Web & print ready.",
        features: [
          "Everything in Brand Kit",
          "Web UI Kit (Homepage Design)",
          "Email Signature",
          "Letterhead & Envelope",
          "Social Media Templates (5)",
          "Priority Delivery",
        ],
      },
    ],
  },
  {
    slug: "digital-marketing",
    heroTitle: "Be Found. Everywhere.",
    heroSubtitle:
      "SEO, Email, Content, and PR. We build the complete ecosystem that drives organic traffic and long-term customer value.",
    packages: [
      {
        name: "Foundation",
        price: "$400",
        description: "SEO Essentials.",
        features: [
          "Technical SEO Audit",
          "On-Page Optimization",
          "Keyword Research",
          "Google Business Profile Optimization",
          "Monthly Ranking Report",
        ],
      },
      {
        name: "Expansion",
        price: "$800",
        description: "SEO + Retention.",
        features: [
          "Everything in Foundation",
          "Email Marketing Setup (Klaviyo/Mailchimp)",
          "4 Automated Flows (Welcome/Abandoned Cart)",
          "Weekly Blog Post (SEO Optimized)",
          "Backlink Building",
        ],
        isPopular: true,
      },
      {
        name: "Authority",
        price: "$1500",
        description: "Market leadership.",
        features: [
          "Complete Content Strategy",
          "8 Blog Posts/Mo",
          "PR Outreach",
          "Advanced Email Segmentation",
          "Conversion Rate Optimization (CRO)",
          "Competitor Spy Reports",
        ],
      },
    ],
  },
  {
    slug: "full-business-marketing",
    heroTitle: "We Are Your Marketing Dept.",
    heroSubtitle:
      "Forget hiring freelancers or multiple agencies. We handle everything: Strategy, Ads, Content, SEO, and Development. One team, one goal.",
    packages: [
      {
        name: "Accelerator",
        price: "$2000",
        description: "Paid acquisition focused.",
        features: [
          "Meta Ads Management",
          "Google Ads Management",
          "Social Media (3 posts/week)",
          "Monthly Strategy Call",
          "Live Dashboard",
        ],
      },
      {
        name: "Scale Up",
        price: "$3500",
        description: "Omni-channel marketing.",
        features: [
          "Everything in Accelerator",
          "Full SEO Package",
          "Email Marketing Automation",
          "Content Creation (Blogs/Videos)",
          "Weekly Strategy Calls",
          "Slack Support Channel",
        ],
        isPopular: true,
      },
      {
        name: "Partner",
        price: "$5000",
        description: "We run everything.",
        features: [
          "Dedicated CMO",
          "Full Dev Support (Website edits)",
          "Influencer Marketing",
          "PR & Media Buying",
          "Daily Reporting",
          "Revenue Share Options",
        ],
      },
    ],
  },
];

async function seed() {
  console.log("🌱 Seeding services...");

  for (const service of SERVICES_DATA) {
    const existing = await db
      .select()
      .from(services)
      .where(eq(services.slug, service.slug));

    if (existing.length === 0) {
      await db.insert(services).values({
        slug: service.slug,
        heroTitle: service.heroTitle,
        heroSubtitle: service.heroSubtitle,
        packages: service.packages,
        updatedAt: new Date(),
      });
      console.log(`✅ Created service: ${service.slug}`);
    } else {
      // Optional: Update existing to match defaults?
      // For now, let's just log that it exists so we don't overwrite user changes if any.
      // Uncomment below to force update:
      /*
        await db.update(services).set({
            heroTitle: service.heroTitle,
            heroSubtitle: service.heroSubtitle,
            packages: service.packages,
            updatedAt: new Date(),
        }).where(eq(services.slug, service.slug));
        console.log(`Updated service: ${service.slug}`);
        */
      console.log(`Values already exist for: ${service.slug}, skipping...`);
    }
  }

  console.log("🏁 Seeding complete.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
