"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { Logo } from "@/components/logo";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";

// --- Premium Theme Definition ---
const GOLD_HEX = "#CCAA33";
const LIGHT_YELLOW_HEX = "#FFD666";

const YELLOW_BG = `bg-gradient-to-r from-yellow-500 to-orange-500`;
const YELLOW_HOVER = "hover:from-yellow-600 hover:to-orange-600";
const YELLOW_RING =
  "focus-visible:ring-offset-background focus-visible:ring-yellow-500";
// --- End Theme Definition ---

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const [menuState, setMenuState] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 100], [0, -10]);
  const headerOpacity = useTransform(scrollY, [0, 50], [0.9, 1]);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        style={{ y: headerY, opacity: headerOpacity }}
        className="fixed top-0 z-50 w-full"
      >
        <nav
          data-state={menuState && "active"}
          className={cn(
            "relative transition-all duration-300",
            scrolled
              ? "bg-white/80 shadow-lg shadow-black/5 backdrop-blur-2xl dark:bg-zinc-950/80"
              : "bg-white/60 backdrop-blur-xl dark:bg-zinc-950/60"
          )}
        >
          {/* Gradient Border */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4 lg:py-5">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link href="/" className="flex items-center space-x-2">
                  <Logo className="h-7 w-auto" />
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="hidden lg:flex lg:items-center lg:gap-8"
              >
                <ul className="flex items-center gap-8 text-sm font-medium">
                  <li>
                    <Link
                      href="#"
                      className="group relative text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                    >
                      Features
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-yellow-500 to-orange-500 transition-all group-hover:w-full" />
                    </Link>
                  </li>

                  {/* Pages Dropdown */}
                  <li
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <DropdownMenu
                      open={dropdownOpen}
                      onOpenChange={setDropdownOpen}
                    >
                      <DropdownMenuTrigger asChild>
                        <button className="group flex items-center gap-1 text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white">
                          Pages
                          <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                        </button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        align="start"
                        className="w-48 border-zinc-200/50 bg-white/90 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-950/90"
                      >
                        {[
                          ["About", "/about"],
                          ["Team", "/team"],
                          ["Contact", "/contact"],
                          ["Pricing", "/pricing"],
                          ["FAQ", "/faq"],
                        ].map(([label, href]) => (
                          <DropdownMenuItem key={href} asChild>
                            <Link
                              href={href}
                              className="cursor-pointer transition-colors hover:bg-gradient-to-r hover:from-yellow-500/10 hover:to-orange-500/10"
                            >
                              {label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>

                  <li>
                    <Link
                      href="/service"
                      className="group relative text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                    >
                      Service
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-yellow-500 to-orange-500 transition-all group-hover:w-full" />
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/project"
                      className="group relative text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                    >
                      Project
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-yellow-500 to-orange-500 transition-all group-hover:w-full" />
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/blog"
                      className="group relative text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                    >
                      Blog
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-yellow-500 to-orange-500 transition-all group-hover:w-full" />
                    </Link>
                  </li>
                </ul>

                {/* Auth Buttons */}
                <div className="flex items-center gap-3">
                  {session ? (
                    <Button
                      asChild
                      size="sm"
                      className={cn(
                        YELLOW_BG,
                        YELLOW_HOVER,
                        "shadow-lg shadow-yellow-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/40",
                        YELLOW_RING
                      )}
                    >
                      <Link
                        href={`/dashboard/${(
                          session.user?.name || "me"
                        ).toLowerCase()}`}
                        className="flex items-center gap-2 font-semibold text-white"
                      >
                        <Sparkles className="h-4 w-4" />
                        Dashboard
                      </Link>
                    </Button>
                  ) : (
                    <>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      >
                        <Link href="/signin">Login</Link>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        className={cn(
                          YELLOW_BG,
                          YELLOW_HOVER,
                          "shadow-lg shadow-yellow-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/40",
                          YELLOW_RING
                        )}
                      >
                        <Link
                          href="/signup"
                          className="font-semibold text-white"
                        >
                          Sign Up
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
              </motion.div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 block p-2.5 text-black transition-colors hover:text-yellow-600 dark:text-white dark:hover:text-yellow-400 lg:hidden"
              >
                <Menu
                  className={cn(
                    "size-6 transition-all duration-200",
                    menuState && "rotate-180 scale-0 opacity-0"
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 transition-all duration-200",
                    menuState && "rotate-0 scale-100 opacity-100"
                  )}
                />
              </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
              initial={false}
              animate={{
                height: menuState ? "auto" : 0,
                opacity: menuState ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="space-y-4 pb-6">
                <ul className="space-y-3 text-base font-medium">
                  <li>
                    <Link
                      href="#"
                      className="block rounded-lg px-4 py-2 text-zinc-700 transition-colors hover:bg-yellow-500/10 hover:text-yellow-600 dark:text-zinc-300 dark:hover:text-yellow-400"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service"
                      className="block rounded-lg px-4 py-2 text-zinc-700 transition-colors hover:bg-yellow-500/10 hover:text-yellow-600 dark:text-zinc-300 dark:hover:text-yellow-400"
                    >
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/project"
                      className="block rounded-lg px-4 py-2 text-zinc-700 transition-colors hover:bg-yellow-500/10 hover:text-yellow-600 dark:text-zinc-300 dark:hover:text-yellow-400"
                    >
                      Project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="block rounded-lg px-4 py-2 text-zinc-700 transition-colors hover:bg-yellow-500/10 hover:text-yellow-600 dark:text-zinc-300 dark:hover:text-yellow-400"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>

                <div className="flex flex-col gap-3 pt-4">
                  {session ? (
                    <Button
                      asChild
                      className={cn(
                        YELLOW_BG,
                        YELLOW_HOVER,
                        "shadow-lg shadow-yellow-500/30"
                      )}
                    >
                      <Link
                        href={`/dashboard/${(
                          session.user?.name || "me"
                        ).toLowerCase()}`}
                        className="font-semibold text-white"
                      >
                        Dashboard
                      </Link>
                    </Button>
                  ) : (
                    <>
                      <Button asChild variant="outline">
                        <Link href="/signin">Login</Link>
                      </Button>
                      <Button asChild className={cn(YELLOW_BG, YELLOW_HOVER)}>
                        <Link
                          href="/signup"
                          className="font-semibold text-white"
                        >
                          Sign Up
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </nav>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-20 lg:h-24" />

      {children}
    </>
  );
};

export default Layout;
