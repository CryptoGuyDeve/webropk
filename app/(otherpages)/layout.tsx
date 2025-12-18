"use client";

import React from "react";
import { HeroHeader } from "@/components/header";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/logo";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

// --- Theme Definition ---
// Primary Accent Color: Eye-Soothing Gold/Ochre
// This color is less saturated and darker than the original pure yellow.
const PRIMARY_GOLD = "hsl(40, 80%, 55%)"; // **A deep, rich gold (Ochre)**
const DARK_MODE_ACCENT = "hsl(45, 90%, 65%)"; // **A softer, visible yellow for dark mode contrast**

// Tailwind CSS Utility Classes for the Gold/Yellow Accent
// Using explicit hex values for these revised HSL colors.
// PRIMARY_GOLD is roughly #ccaa33
// DARK_MODE_ACCENT is roughly #ffd666
const GOLD_HEX = "#CCAA33";
const LIGHT_YELLOW_HEX = "#FFD666";

const YELLOW_TEXT = `text-[${GOLD_HEX}] dark:text-[${LIGHT_YELLOW_HEX}]`;
const YELLOW_BG = `bg-[${GOLD_HEX}] dark:bg-[${LIGHT_YELLOW_HEX}]`;
const YELLOW_HOVER_BG = "hover:bg-yellow-600/90 dark:hover:bg-yellow-400/90";
const YELLOW_BORDER = `border-[${GOLD_HEX}] dark:border-[${LIGHT_YELLOW_HEX}]`;
const YELLOW_RING = `focus-visible:ring-offset-background focus-visible:ring-yellow-500`;
// --- End Theme Definition ---

const layout = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession(); // Get session data
  const [menuState, setMenuState] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  return (
    <>
      <header>
        <nav
          data-state={menuState && "active"}
          // Professional Nav: White/Black background with subtle blur. Border is a light gray/dark gray.
          className="fixed z-20 w-full border-b border-zinc-200/70 bg-white/90 backdrop-blur-sm md:relative dark:border-zinc-800/70 dark:bg-zinc-950/90 lg:dark:bg-transparent"
        >
          <div className="m-auto max-w-5xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center space-x-2"
                >
                  {/* Logo color is now black/white/yellow */}
                  <Logo className="h-6 w-auto" />
                </Link>

                {/* Mobile Menu Toggle - Black/White icons */}
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden text-black dark:text-white"
                >
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>

              {/* Navigation */}
              <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-zinc-200 p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent dark:border-zinc-800">
                <div className="lg:pr-4">
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                    {/* Standard Links - Default muted color, hover black/white */}
                    <li>
                      <Link
                        href="#"
                        className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white block duration-150"
                      >
                        Features
                      </Link>
                    </li>
                    <li
                      className="relative"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <DropdownMenu
                        open={dropdownOpen}
                        onOpenChange={setDropdownOpen}
                      >
                        <DropdownMenuTrigger asChild>
                          <button className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white duration-150">
                            Pages
                            <ChevronDown className="h-4 w-4" />
                          </button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                          align="start"
                          className="mt-2 w-40"
                        >
                          <DropdownMenuItem asChild>
                            <Link href="/about">About</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/team">Team</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/contact">Contact</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/pricing">Pricing</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/faq">FAQ</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/404">404</Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </li>
                    <li>
                      <Link
                        href="/service"
                        className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white block duration-150"
                      >
                        Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/project"
                        className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white block duration-150"
                      >
                        Project
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white block duration-150"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Buttons - Outline (Black/White), Solid (Yellow) */}
                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6 border-zinc-200 dark:border-zinc-800">
                  {session ? (
                    <Button
                      asChild
                      size="sm"
                      className={cn(
                        YELLOW_BG,
                        YELLOW_HOVER_BG,
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
                  ) : (
                    <>
                      {/* Login Button (Outline) */}
                      <Button asChild variant="outline" size="sm">
                        <Link href="/signin">Login</Link>
                      </Button>
                      {/* Sign Up Button (Solid Yellow) - Using Tailwind's primary for custom styling */}
                      <Button
                        asChild
                        size="sm"
                        className={cn(
                          YELLOW_BG,
                          YELLOW_HOVER_BG,
                          "text-black",
                          YELLOW_RING
                        )}
                      >
                        <Link href="/signup">Sign Up</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {children}
      <Footer />
    </>
  );
};

export default layout;
