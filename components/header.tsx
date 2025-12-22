"use client";

import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useScroll, motion } from "motion/react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

/* ---------- GOLD THEME ---------- */
const GOLD_HEX = "#CCAA33";
const LIGHT_YELLOW_HEX = "#FFD666";

const YELLOW_BG = `bg-[${GOLD_HEX}] dark:bg-[${LIGHT_YELLOW_HEX}]`;
const YELLOW_HOVER = "hover:bg-yellow-600/90 dark:hover:bg-yellow-400/90";
const YELLOW_RING =
  "focus-visible:ring-offset-background focus-visible:ring-yellow-500";
/* -------------------------------- */

export const HeroHeader = () => {
  const { data: session } = useSession();

  const [menuState, setMenuState] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    return scrollYProgress.on("change", (v) => setScrolled(v > 0.05));
  }, [scrollYProgress]);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed inset-x-0 top-0 z-30 flex justify-center pt-3"
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-zinc-200/70 bg-white/80 px-4 backdrop-blur-xl transition-all duration-300 dark:border-zinc-800/70 dark:bg-zinc-950/80 lg:px-6",
            scrolled &&
            "bg-white/90 shadow-md dark:bg-zinc-950/90"
          )}
        >
          <motion.div
            className={cn(
              "relative flex w-full flex-wrap items-center justify-between gap-6 py-2 lg:gap-0 lg:py-3",
              scrolled && "lg:py-2"
            )}
          >
            {/* LEFT */}
            <div className="flex w-full items-center justify-between lg:w-auto">
              <Link href="/" className="flex items-center gap-2">
                <Logo className="h-6 w-auto" />
              </Link>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label="Toggle menu"
                className="relative z-20 -m-2.5 -mr-4 block p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 size-6 duration-200" />
                <X className="absolute inset-0 m-auto size-6 scale-0 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100" />
              </button>
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-8 text-sm">
              <Link
                href="#features"
                className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                Features
              </Link>

              {/* Pages Dropdown */}
              <div
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <DropdownMenu
                  open={dropdownOpen}
                  onOpenChange={setDropdownOpen}
                >
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
                      Pages <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="start" className="w-40">
                    {[
                      ["About", "/about"],
                      ["Team", "/team"],
                      ["Contact", "/contact"],
                      ["Pricing", "/pricing"],
                      ["FAQ", "/faq"],
                    ].map(([label, href]) => (
                      <DropdownMenuItem key={href} asChild>
                        <Link href={href}>{label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <Link
                href="/service"
                className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                Service
              </Link>

              <Link
                href="/blog"
                className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                Blog
              </Link>
            </div>

            {/* RIGHT BUTTONS */}
            <div className="hidden lg:flex items-center gap-3">
              {session ? (
                <>
                  <Button
                    asChild
                    size="sm"
                    className={cn(
                      YELLOW_BG,
                      YELLOW_HOVER,
                      "text-black",
                      YELLOW_RING
                    )}
                  >
                    <Link
                      href={`/dashboard/${(
                        session.user?.name || "me"
                      ).toLowerCase()}`}
                    >
                      Dashboard
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => signOut({ callbackUrl: "/" })}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/signin">Login</Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className={cn(
                      YELLOW_BG,
                      YELLOW_HOVER,
                      "text-black",
                      YELLOW_RING
                    )}
                  >
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>

            {/* MOBILE MENU */}
            <div className="bg-background in-data-[state=active]:block lg:hidden hidden w-full rounded-3xl border p-6 mt-4 space-y-6">
              <Link href="/features">Features</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/about">About</Link>

              <div className="flex flex-col gap-3 pt-4">
                {session ? (
                  <>
                    <Button asChild className={cn(YELLOW_BG, "text-black")}>
                      <Link
                        href={`/dashboard/${(
                          session.user?.name || "me"
                        ).toLowerCase()}`}
                      >
                        Dashboard
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => signOut({ callbackUrl: "/" })}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button asChild variant="outline">
                      <Link href="/signin">Login</Link>
                    </Button>
                    <Button asChild className={cn(YELLOW_BG, "text-black")}>
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};
