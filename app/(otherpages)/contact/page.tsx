"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* ================= HERO SECTION (Light Theme) ================= */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-orange-50/50 to-white">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1 border-orange-200 bg-orange-50 text-orange-700 rounded-full mx-auto w-fit"
            >
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-900">
              Let's Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Extraordinary
              </span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Have a project in mind? Looking for a partnership? Just want to
              say hi? We're all ears.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="container px-4 mx-auto mt-10">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <Card className="p-6 flex items-start space-x-4 border-l-4 border-l-orange-500 bg-white/50 backdrop-blur-sm">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-zinc-500">contact@webropk.com</p>
                    <p className="text-zinc-500">support@webropk.com</p>
                  </div>
                </Card>

                <Card className="p-6 flex items-start space-x-4 border-l-4 border-l-blue-500 bg-white/50 backdrop-blur-sm">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-zinc-500">+92 300 1234567</p>
                    <p className="text-zinc-500">Mon-Fri from 9am to 6pm</p>
                  </div>
                </Card>

                <Card className="p-6 flex items-start space-x-4 border-l-4 border-l-green-500 bg-white/50 backdrop-blur-sm">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Live Chat</h3>
                    <p className="text-zinc-500">
                      Available on WhatsApp & Telegram
                    </p>
                    <p className="text-green-600 font-medium">Online Now</p>
                  </div>
                </Card>
              </div>
            </div>

            <div className="bg-zinc-900 text-white p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 blur-[80px] opacity-40"></div>
              <h3 className="text-xl font-bold mb-2">Office Headquarters</h3>
              <p className="text-zinc-400 mb-6">
                123 Tech Avenue, Innovation Park,
                <br />
                Lahore, Pakistan
              </p>
              <Button variant="secondary" className="w-full">
                <MapPin className="mr-2 w-4 h-4" /> View Map
              </Button>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-8 shadow-xl border-t-8 border-t-zinc-900">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input
                      placeholder="John"
                      className="bg-zinc-50 border-zinc-200 focus:ring-orange-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input
                      placeholder="Doe"
                      className="bg-zinc-50 border-zinc-200 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input
                    placeholder="john@example.com"
                    type="email"
                    className="bg-zinc-50 border-zinc-200 focus:ring-orange-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Service Interested In
                  </label>
                  <select className="flex h-10 w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>Select a service...</option>
                    <option>Shopify Store Creation</option>
                    <option>Marketing Campaigns</option>
                    <option>Web Development</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    className="min-h-[150px] bg-zinc-50 border-zinc-200 focus:ring-orange-500"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-zinc-900 hover:bg-zinc-800 text-white"
                >
                  Send Message <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
