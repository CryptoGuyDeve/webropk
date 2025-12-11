"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { useScroll, motion } from "motion/react";
import { cn } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed inset-x-0 top-0 z-30 flex justify-center pt-3"
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-zinc-200/70 bg-background/70 px-4 shadow-sm backdrop-blur-xl transition-all duration-300 dark:border-zinc-800/70 dark:bg-zinc-950/70 lg:px-6",
            scrolled &&
              "border-zinc-200/80 bg-background/85 shadow-md dark:border-zinc-800/80 dark:bg-zinc-950/85"
          )}
        >
          <motion.div
            key={1}
            className={cn(
              "relative flex w-full flex-wrap items-center justify-between gap-6 py-2 duration-200 lg:gap-0 lg:py-3",
              scrolled && "lg:py-2"
            )}
          >
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              {/* Desktop Navigation */}
              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm items-center">
                  {/* Features */}
                  <li>
                    <Link
                      href="#features"
                      className="text-muted-foreground hover:text-accent-foreground duration-150"
                    >
                      Features
                    </Link>
                  </li>

                  {/* Solution → Pages Dropdown (Hover Enabled) */}
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
                        <button className="flex items-center gap-1 text-muted-foreground hover:text-accent-foreground duration-150">
                          Solution
                        </button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent className="mt-2 w-40" align="start">
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

                  {/* Pricing */}
                  <li>
                    <Link
                      href="#pricing"
                      className="text-muted-foreground hover:text-accent-foreground duration-150"
                    >
                      Pricing
                    </Link>
                  </li>

                  {/* About */}
                  <li>
                    <Link
                      href="#about"
                      className="text-muted-foreground hover:text-accent-foreground duration-150"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  <li>
                    <Link href="#features">Features</Link>
                  </li>
                  <li>
                    <Link href="#pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="#about">About</Link>
                  </li>
                </ul>
              </div>

              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild variant="outline" size="sm">
                  <Link href="/signin">Login</Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};
