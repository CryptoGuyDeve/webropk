"use client";

import { useRouter } from "next/navigation";
import { useEffect, use, useState } from "react";
import React from "react";
import { getUser } from "@/actions/user";
import {
  User,
  Mail,
  Briefcase,
  Settings,
  Plus,
  Activity,
  Zap,
  TrendingUp,
  CreditCard,
  Users,
  Calendar,
  MoreVertical,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

// --- Theme Definition ---
const PRIMARY_GOLD = "hsl(40, 80%, 55%)";
const GOLD_HEX = "#CCAA33";
const YELLOW_TEXT = `text-[${GOLD_HEX}] dark:text-[#FFD666]`;
const YELLOW_BG = `bg-[${GOLD_HEX}] dark:bg-[#FFD666]`;

interface DashboardPageProps {
  params: Promise<{
    username: string;
  }>;
}

interface UserProfile {
  name: string | null;
  username: string;
  email: string;
  skills: string | null;
}

export default function DashboardPage({ params }: DashboardPageProps) {
  const { username } = use(params);
  const router = useRouter();
  const [viewer, setViewer] = useState<UserProfile | null | undefined>(
    undefined
  );

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await getUser(username);
        setViewer(user);
      } catch (error) {
        console.error(error);
        setViewer(null);
      }
    }
    fetchUser();
  }, [username]);

  // Loading State
  if (viewer === undefined) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-zinc-50 dark:bg-zinc-950">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-zinc-200 border-t-[#CCAA33]"></div>
          <p className="text-zinc-500 animate-pulse">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Error/Not Found State
  if (viewer === null) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-zinc-50 dark:bg-zinc-950">
        <div className="rounded-full bg-red-100 p-4 dark:bg-red-900/20">
          <User className="h-8 w-8 text-red-600 dark:text-red-400" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          User Not Found
        </h2>
        <p className="text-zinc-500">
          The user "{username}" could not be found.
        </p>
        <Button onClick={() => router.push("/")} variant="outline">
          Go Back Home
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-zinc-50/50 dark:bg-zinc-950">
      {/* Top Decoration Background */}
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-zinc-200/50 to-transparent dark:from-zinc-900/50 -z-10" />

      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {/* Header Section */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
              Welcome back,{" "}
              <span className={cn(YELLOW_TEXT, "bg-clip-text")}>
                {viewer.name?.split(" ")[0] || viewer.username}
              </span>{" "}
              👋
            </h1>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400">
              Here's what's happening with your projects today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hidden sm:flex"
              onClick={() => router.push("/settings")}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button
              className={cn("text-black hover:bg-yellow-500/90", YELLOW_BG)}
            >
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Projects"
            value="12"
            icon={Briefcase}
            trend="+2.5%"
            description="from last month"
          />
          <StatsCard
            title="Active Tasks"
            value="24"
            icon={Activity}
            trend="+12%"
            description="completed this week"
          />
          <StatsCard
            title="Team Members"
            value="8"
            icon={Users}
            trend="+1"
            description="new invite pending"
          />
          <StatsCard
            title="Revenue"
            value="$4,250"
            icon={CreditCard}
            trend="+8%"
            description="this month"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column: Profile & Info */}
          <div className="space-y-8 lg:col-span-1">
            <Card className="overflow-hidden border-zinc-200/60 bg-white/70 shadow-sm backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-900/50">
              <div className="relative h-24 bg-gradient-to-r from-zinc-800 to-zinc-900 dark:from-black dark:to-zinc-900">
                <div className="absolute -bottom-10 left-6">
                  <Avatar className="h-20 w-20 border-4 border-white dark:border-zinc-900 shadow-md">
                    <AvatarImage
                      src={`https://avatar.vercel.sh/${viewer.username}`}
                    />
                    <AvatarFallback className="bg-zinc-100 dark:bg-zinc-800 text-lg">
                      {viewer.username.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <CardHeader className="pt-12">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">
                      {viewer.name || viewer.username}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <Mail className="h-3.5 w-3.5" />
                      {viewer.email}
                    </CardDescription>
                  </div>
                  {/* <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Settings className="h-4 w-4" />
                  </Button> */}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {viewer.skills ? (
                      viewer.skills.split(",").map((skill, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300"
                        >
                          {skill.trim()}
                        </Badge>
                      ))
                    ) : (
                      <span className="text-sm text-zinc-400 italic">
                        No skills listed
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-zinc-50/50 p-4 dark:bg-zinc-900/50 border-t border-zinc-100 dark:border-zinc-800">
                <Button variant="outline" className="w-full text-xs h-8">
                  Edit Profile
                </Button>
              </CardFooter>
            </Card>

            {/* Quick Tips or Announcements can go here */}
            <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-900/30 dark:bg-amber-900/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2 text-amber-800 dark:text-amber-500">
                  <Zap className="h-4 w-4 fill-amber-500 text-amber-500" /> Pro
                  Tip
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-amber-900/80 dark:text-amber-400/80">
                  Complete your profile to get better project recommendations!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Activity & Projects */}
          <div className="space-y-8 lg:col-span-2">
            {/* Recent Activity */}
            <Card className="border-zinc-200/60 bg-white/70 shadow-sm backdrop-blur-sm dark:border-zinc-800/60 dark:bg-zinc-900/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>
                      Latest updates from your team
                    </CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <ActivityItem
                    icon={Briefcase}
                    title="New Project Created"
                    desc="You started the 'Marketing Campaign' project"
                    time="2 hours ago"
                  />
                  <ActivityItem
                    icon={Users}
                    title="Team Meeting"
                    desc="Joined the weekly sync with Design team"
                    time="5 hours ago"
                  />
                  <ActivityItem
                    icon={CreditCard}
                    title="Subscription Updated"
                    desc="Upgraded to the Pro Plan successfully"
                    time="1 day ago"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Deadlines (Mock) */}
            <Card className="border-zinc-200/60 bg-white/70 shadow-sm backdrop-blur-sm dark:border-zinc-800/60 dark:bg-zinc-900/50">
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg border border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-100 text-red-600 dark:bg-red-900/20">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Website Redesign</p>
                        <p className="text-xs text-zinc-500">
                          Due tomorrow at 5:00 PM
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-red-600 border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800"
                    >
                      High
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg border border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-100 text-blue-600 dark:bg-blue-900/20">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          Q4 Report Analysis
                        </p>
                        <p className="text-xs text-zinc-500">Due in 3 days</p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-blue-600 border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800"
                    >
                      Medium
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// Subcomponents

function StatsCard({
  title,
  value,
  icon: Icon,
  trend,
  description,
}: {
  title: string;
  value: string;
  icon: any;
  trend: string;
  description: string;
}) {
  return (
    <Card className="border-zinc-200/60 bg-white/70 shadow-sm backdrop-blur-sm dark:border-zinc-800/60 dark:bg-zinc-900/50 hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-zinc-400" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
          <span className="text-emerald-500 font-medium">{trend}</span>{" "}
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

function ActivityItem({ icon: Icon, title, desc, time }: any) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
        <Icon className="h-4 w-4 text-zinc-500" />
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{desc}</p>
      </div>
      <div className="text-xs text-zinc-400">{time}</div>
    </div>
  );
}
