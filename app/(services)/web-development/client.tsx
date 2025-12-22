"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    Code2,
    Rocket,
    Layers,
    Database,
    Palette,
    ArrowRight,
    Star,
    Quote,
    Sparkles,
    MessageCircle,
    Users,
    Award,
    TrendingUp,
    Zap,
    Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useServiceOrder } from "@/hooks/use-service-order";
import { useSession } from "next-auth/react";
import { useIntercom } from "@/hooks/use-intercom";

const reviews = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechStart Inc",
        avatar: "SJ",
        rating: 5,
        text: "The team delivered an exceptional full-stack application that exceeded our expectations. Their attention to detail and modern tech stack choices were impressive.",
    },
    {
        name: "Michael Chen",
        role: "Founder, E-Commerce Plus",
        avatar: "MC",
        rating: 5,
        text: "From concept to deployment, the process was seamless. Our new platform handles 10x more traffic than before. Highly recommended!",
    },
    {
        name: "Emily Rodriguez",
        role: "CTO, FinanceFlow",
        avatar: "ER",
        rating: 5,
        text: "Outstanding backend architecture! The API is blazing fast and scales effortlessly. Best investment we've made for our infrastructure.",
    },
];

const techStack = [
    { name: "React/Next.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "AWS/Vercel", category: "Hosting" },
];

const features = [
    {
        icon: Rocket,
        title: "Lightning Fast",
        description: "Optimized performance with 95+ Lighthouse scores",
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-level security with encryption and compliance",
    },
    {
        icon: Layers,
        title: "Scalable Architecture",
        description: "Built to handle millions of users effortlessly",
    },
    {
        icon: Zap,
        title: "Modern Tech Stack",
        description: "Latest technologies for future-proof solutions",
    },
];

export default function WebDevelopmentPage() {
    const { createOrderAndContact } = useServiceOrder();
    const { data: session } = useSession();
    const { openIntercom } = useIntercom();

    return (
        <div className="min-h-screen bg-background selection:bg-blue-100 selection:text-blue-900">
            {/* ==================== HERO SECTION ==================== */}
            <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] bg-gradient-to-b from-blue-200/30 to-transparent blur-[120px] rounded-full opacity-60" />
                <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] bg-gradient-to-t from-purple-100/30 to-transparent blur-[120px] rounded-full opacity-60" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

                <div className="container px-4 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Left Content */}
                        <motion.div
                            className="lg:w-1/2 text-center lg:text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Badge
                                variant="outline"
                                className="mb-6 px-4 py-1 border-blue-500/50 text-blue-700 bg-blue-50/50 backdrop-blur-sm rounded-full"
                            >
                                <Code2 className="w-3 h-3 mr-2" />
                                Premium Web Development
                            </Badge>

                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                                Build Your{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                    Digital Empire
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                From stunning frontends to robust backends, we craft scalable,
                                high-performance web applications that drive business growth and
                                delight users.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Button
                                    size="lg"
                                    onClick={() => {
                                        const element = document.getElementById("pricing");
                                        element?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="h-12 px-8 text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
                                >
                                    View Pricing
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={openIntercom}
                                    className="h-12 px-8 text-base border-2 hover:bg-secondary/50 gap-2"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Talk to Expert
                                </Button>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto lg:mx-0">
                                <div className="text-center lg:text-left">
                                    <div className="text-3xl font-bold text-blue-600">500+</div>
                                    <div className="text-sm text-muted-foreground">Projects</div>
                                </div>
                                <div className="text-center lg:text-left">
                                    <div className="text-3xl font-bold text-purple-600">98%</div>
                                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                                </div>
                                <div className="text-center lg:text-left">
                                    <div className="text-3xl font-bold text-blue-600">24/7</div>
                                    <div className="text-sm text-muted-foreground">Support</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Visual */}
                        <motion.div
                            className="lg:w-1/2 relative"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="relative mx-auto w-full max-w-[500px] aspect-square">
                                {/* Floating Code Blocks */}
                                <motion.div
                                    className="absolute top-10 left-10 bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-800"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <code className="text-xs text-blue-600 dark:text-blue-400">
                                        const app = () =&gt; &#123;
                                        <br />
                                        &nbsp;&nbsp;return &lt;Magic /&gt;
                                        <br />
                                        &#125;
                                    </code>
                                </motion.div>

                                <motion.div
                                    className="absolute bottom-10 right-10 bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-2xl shadow-2xl text-white"
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                >
                                    <TrendingUp className="w-8 h-8 mb-2" />
                                    <div className="text-2xl font-bold">99.9%</div>
                                    <div className="text-xs opacity-90">Uptime</div>
                                </motion.div>

                                {/* Center Glow */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ==================== FEATURES ==================== */}
            <section className="py-20 bg-secondary/30">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
                        <p className="text-muted-foreground">
                            We don't just write code. We build experiences that scale.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="h-full border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all hover:-translate-y-1">
                                    <CardHeader>
                                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4">
                                            <feature.icon className="w-6 h-6" />
                                        </div>
                                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== OUR STORY ==================== */}
            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
                                <Sparkles className="w-3 h-3 mr-2" />
                                Our Story
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Crafting Digital Excellence Since 2018
                            </h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    What started as a passion project in a small garage has evolved
                                    into a full-fledged web development powerhouse. We've helped
                                    over 500 businesses transform their digital presence.
                                </p>
                                <p>
                                    Our team of expert developers, designers, and strategists work
                                    tirelessly to deliver solutions that don't just meet
                                    expectations—they exceed them. Every line of code we write is
                                    crafted with precision, scalability, and user experience in
                                    mind.
                                </p>
                                <p>
                                    From startups to enterprises, we've built everything from
                                    simple landing pages to complex SaaS platforms handling
                                    millions of users. Our secret? We treat every project as if
                                    it's our own.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="flex items-center gap-3">
                                    <Award className="w-10 h-10 text-blue-600" />
                                    <div>
                                        <div className="font-bold">50+</div>
                                        <div className="text-sm text-muted-foreground">Awards Won</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Users className="w-10 h-10 text-purple-600" />
                                    <div>
                                        <div className="font-bold">25+</div>
                                        <div className="text-sm text-muted-foreground">Team Members</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                                <div className="w-full h-full rounded-3xl bg-white dark:bg-zinc-900 p-8 flex items-center justify-center">
                                    <div className="text-center">
                                        <Code2 className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold mb-2">500+ Projects</h3>
                                        <p className="text-muted-foreground">Delivered with ❤️</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                className="absolute -top-6 -right-6 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-xl"
                                animate={{ rotate: [0, 5, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ==================== TECH STACK ==================== */}
            <section className="py-20 bg-secondary/30">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4">Modern Tech Stack</h2>
                        <p className="text-muted-foreground">
                            We use cutting-edge technologies to build future-proof applications
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {techStack.map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="px-6 py-3 bg-white dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold">{tech.name}</span>
                                    <Badge variant="secondary" className="text-xs">
                                        {tech.category}
                                    </Badge>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== PRICING ==================== */}
            <section className="py-20" id="pricing">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Flexible Pricing Plans</h2>
                        <p className="text-muted-foreground">
                            Choose the perfect package for your project needs
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Frontend Package */}
                        <Card className="border-zinc-200 shadow-sm hover:shadow-xl transition-all">
                            <CardHeader>
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                    <Palette className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-2xl">Frontend</CardTitle>
                                <CardDescription>Perfect for stunning UIs</CardDescription>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold">$2,500</span>
                                    <span className="text-muted-foreground">/project</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {[
                                        "React/Next.js Development",
                                        "Responsive Design",
                                        "Tailwind CSS Styling",
                                        "Component Library",
                                        "Performance Optimization",
                                        "SEO Best Practices",
                                        "2 Weeks Delivery",
                                    ].map((f, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-blue-500" /> {f}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className="w-full"
                                    variant="outline"
                                    onClick={() =>
                                        createOrderAndContact(
                                            {
                                                serviceName: "Web Development",
                                                packageType: "Frontend Package",
                                                price: "2500",
                                            },
                                            session?.user?.email,
                                            session?.user?.name
                                        )
                                    }
                                >
                                    Get Started
                                </Button>
                            </CardFooter>
                        </Card>

                        {/* Full Stack Package - POPULAR */}
                        <Card className="border-blue-400 shadow-xl relative scale-105 z-10 bg-white dark:bg-zinc-900">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                Most Popular
                            </div>
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl flex items-center justify-center mb-4">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-2xl text-blue-600">
                                    Full Stack
                                </CardTitle>
                                <CardDescription>Complete web solution</CardDescription>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold">$5,500</span>
                                    <span className="text-muted-foreground">/project</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {[
                                        "Frontend + Backend Development",
                                        "Database Design & Setup",
                                        "RESTful API Development",
                                        "Authentication & Authorization",
                                        "Payment Integration",
                                        "Admin Dashboard",
                                        "Cloud Deployment",
                                        "4 Weeks Delivery",
                                    ].map((f, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-2 text-sm font-medium"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-blue-500" /> {f}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                                    onClick={() =>
                                        createOrderAndContact(
                                            {
                                                serviceName: "Web Development",
                                                packageType: "Full Stack Package",
                                                price: "5500",
                                            },
                                            session?.user?.email,
                                            session?.user?.name
                                        )
                                    }
                                >
                                    Get Started
                                </Button>
                            </CardFooter>
                        </Card>

                        {/* Backend Package */}
                        <Card className="border-zinc-200 shadow-sm hover:shadow-xl transition-all">
                            <CardHeader>
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                                    <Database className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-2xl">Backend</CardTitle>
                                <CardDescription>Robust server solutions</CardDescription>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold">$3,500</span>
                                    <span className="text-muted-foreground">/project</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {[
                                        "Node.js/Express Setup",
                                        "PostgreSQL/MongoDB",
                                        "RESTful API Design",
                                        "Authentication System",
                                        "File Upload & Storage",
                                        "Email Integration",
                                        "API Documentation",
                                        "3 Weeks Delivery",
                                    ].map((f, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-purple-500" /> {f}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className="w-full"
                                    variant="outline"
                                    onClick={() =>
                                        createOrderAndContact(
                                            {
                                                serviceName: "Web Development",
                                                packageType: "Backend Package",
                                                price: "3500",
                                            },
                                            session?.user?.email,
                                            session?.user?.name
                                        )
                                    }
                                >
                                    Get Started
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>

            {/* ==================== REVIEWS ==================== */}
            <section className="py-20 bg-secondary/30">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
                        <p className="text-muted-foreground">
                            Don't just take our word for it
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {reviews.map((review, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="h-full border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all">
                                    <CardHeader>
                                        <div className="flex items-center gap-4">
                                            <Avatar className="h-12 w-12">
                                                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                                                    {review.avatar}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="font-semibold">{review.name}</div>
                                                <div className="text-sm text-muted-foreground">
                                                    {review.role}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-1 mt-2">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-4 h-4 text-yellow-500 fill-yellow-500"
                                                />
                                            ))}
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <Quote className="w-8 h-8 text-blue-200 dark:text-blue-900 mb-2" />
                                        <p className="text-muted-foreground italic">{review.text}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== CTA ==================== */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100"></div>
                <div className="container px-4 mx-auto relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Ready to Build Something Amazing?
                    </h2>
                    <p className="text-blue-100 max-w-xl mx-auto mb-8 text-lg">
                        Let's turn your vision into reality. Get a free consultation and
                        project estimate today.
                    </p>
                    <Button
                        size="lg"
                        className="h-14 px-10 text-lg bg-white text-blue-600 hover:bg-blue-50 rounded-full shadow-xl"
                        onClick={openIntercom}
                    >
                        Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </section>
        </div>
    );
}
