"use client";

import React from "react";
import Link from "next/link";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";
import Image from "next/image";
import { AnimatedGlow } from "../components/AnimatedGlow";

export default function Footer(): React.JSX.Element {
  return (
    <footer className=" bg-background text-foreground relative overflow-hidden">
      <AnimatedGlow/>
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-primary" />

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

        {/* Brand Column */}
        <div className="space-y-6">
          {/* <h2 className="text-3xl font-bold">
            YourCompany<span className="text-[#0196f4]">.</span>
          </h2> */}
          <Image src="/future-axis-logo.png" alt="Logo" width={200} height={100} />
          <p className="text-foreground/60 leading-relaxed">
            Empowering industries with AI-powered ERP, accounting,
            and intelligent digital transformation solutions.
          </p>

          <div className="flex gap-4 pt-4">
            <SocialIcon icon={<Linkedin size={20} />} />
            <SocialIcon icon={<Twitter size={20} />} />
            <SocialIcon icon={<Github size={20} />} />
          </div>
        </div>

        {/* Services */}
        <FooterColumn
          title="Services"
          links={[
            "ERP Solutions",
            "Accounting Automation",
            "Digital Transformation",
            "AI Integration",
            "Consulting",
          ]}
        />

        {/* Company */}
        <FooterColumn
          title="Company"
          links={[
            "About Us",
            "Industries",
            "Careers",
            "Blog",
            "Contact",
          ]}
        />

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Stay Updated</h3>
          <p className="text-forground/60 mb-6">
            Get insights, updates, and industry trends directly to your inbox.
          </p>

          <div className="relative">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-primary/70 border border-primary rounded-full px-5 py-3 pr-14 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-[#0196f4] transition"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0196f4] p-2 rounded-full hover:scale-105 transition">
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-foreground/50 text-sm">
        © {new Date().getFullYear()} futureaxis. All rights reserved.
      </div>
    </footer>
  );
}

/* ---------- Reusable Components ---------- */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href="#"
              className="text-foreground/60 hover:text-[#0196f4] transition duration-300"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-full bg-primary border border-primary/20 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white dark:hover:text-black transition duration-300">
      {icon}
    </div>
  );
}