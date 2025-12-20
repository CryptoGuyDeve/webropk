import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "./header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { ChevronRight } from "lucide-react";
import { LatestBlogs } from "@/components/home/latest-blogs";

// Sliding banner images - replace these paths with your actual images
const bannerImages = [
  "/fiverr.png",
  "/truststartup.PNG",
  "/truststartup.PNG",
  "/truststartup.PNG",
];

// Company projects data - replace with your actual project data
const companyProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    logo: "/project-logo-1.png",
    description: "Modern shopping experience",
  },
  {
    id: 2,
    title: "FinTech Solution",
    logo: "/project-logo-2.png",
    description: "Secure payment processing",
  },
  {
    id: 3,
    title: "Healthcare App",
    logo: "/project-logo-3.png",
    description: "Patient care management",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    logo: "/project-logo-4.png",
    description: "Real-time data insights",
  },
  {
    id: 5,
    title: "Social Network",
    logo: "/project-logo-5.png",
    description: "Connect and collaborate",
  },
];

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section className="relative">
          {/* Curved Sliding Banner Background */}
          <div className="absolute top-24 bottom-0 left-0 right-0 z-0 px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem]">
              <div className="animate-slide-banner flex h-full">
                {[...bannerImages, ...bannerImages].map((image, index) => (
                  <div
                    key={index}
                    className="h-full min-w-full flex-shrink-0"
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="h-full w-full bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 py-24 md:pb-32 lg:pb-36 lg:pt-72">
            <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
              {/* Semi-transparent backdrop for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-transparent rounded-3xl backdrop-blur-sm -z-10" />

              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] md:text-6xl lg:mt-16 xl:text-7xl">
                  Transform Your Vision Into Reality
                </h1>
                <p className="mt-8 max-w-2xl text-balance text-lg text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  We're a creative digital agency specializing in web
                  development, design, and innovative solutions that help
                  businesses grow and succeed online.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-full pl-5 pr-3 text-base"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Get Started</span>
                      <ChevronRight className="ml-1" />
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-12 rounded-full px-5 text-base text-white hover:bg-white/10 hover:text-white"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">View Our Work</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
              <video
                autoPlay
                loop
                muted
                className="size-full object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
                src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
              ></video>
            </div>
          </div>
        </section>

        {/* Company Logos Section */}
        <section className="bg-background pb-2">
          <div className="group relative m-auto max-w-7xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">Powering the best teams</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nvidia.svg"
                      alt="Nvidia Logo"
                      height="20"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/column.svg"
                      alt="Column Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/github.svg"
                      alt="GitHub Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nike.svg"
                      alt="Nike Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                      alt="Lemon Squeezy Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/laravel.svg"
                      alt="Laravel Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-7 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/lilly.svg"
                      alt="Lilly Logo"
                      height="28"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-6 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/openai.svg"
                      alt="OpenAI Logo"
                      height="24"
                      width="auto"
                    />
                  </div>
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Company Projects Section */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Our Projects</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Innovative solutions we've built
              </p>
            </div>

            <div className="relative overflow-hidden py-8">
              <InfiniteSlider speedOnHover={15} speed={30} gap={48}>
                {companyProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group flex min-w-[280px] flex-col items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-lg"
                  >
                    <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 p-1 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/20">
                      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-background">
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
                          className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </InfiniteSlider>

              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-24"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-24"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </section>

        {/* Latest Blogs Section */}
        <LatestBlogs />
      </main>

      <style jsx>{`
        @keyframes slide-banner {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide-banner {
          animation: slide-banner 30s linear infinite;
        }
      `}</style>
    </>
  );
}
