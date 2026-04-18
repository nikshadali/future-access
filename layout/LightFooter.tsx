"use client";

import React from "react";
import Link from "next/link";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";
import Image from "next/image";
import { AnimatedGlow } from "../components/AnimatedGlow";

export default function LightFooter(): React.JSX.Element {
  return (
    <footer
      className="
        relative overflow-hidden
        text-white
        border-t border-white/10
        bg-[linear-gradient(180deg,#031521_0%,#020b12_100%)]
        dark:bg-background
      "
    >
      {/* Glow Layer */}
      <AnimatedGlow />

      {/* Subtle Accent Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(10,124,202,0.25),transparent_40%)] pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="space-y-6">
          <Image src="/future-axis-logo.png" alt="Logo" width={200} height={100} />

          <p className="text-white/70 leading-relaxed max-w-sm">
            Empowering industries with AI-powered ERP, accounting,
            and intelligent digital transformation solutions.
          </p>

          <div className="flex gap-4 pt-4">
            <SocialIcon icon={<Linkedin size={18} />} />
            <SocialIcon icon={<Twitter size={18} />} />
            <SocialIcon icon={<Github size={18} />} />
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
          <h3 className="text-lg font-semibold mb-4 text-white">
            Stay Updated
          </h3>

          <p className="text-white/60 mb-6 text-sm leading-relaxed">
            Get insights, updates, and industry trends directly to your inbox.
          </p>

          <div className="relative group">
            <input
              type="email"
              placeholder="Your email address"
              className="
                w-full rounded-full px-5 py-3 pr-14
                bg-white/10
                backdrop-blur-xl
                border border-white/20
                text-white
                placeholder:text-white/40
                focus:outline-none
                focus:ring-2 focus:ring-primary/50
                transition-all duration-300
              "
            />

            <button
              className="
                absolute right-2 top-1/2 -translate-y-1/2
                bg-primary text-white
                p-2 rounded-full
                shadow-lg shadow-primary/30
                hover:scale-105 hover:shadow-primary/50
                transition
              "
            >
              <Mail size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative border-t border-white/10 py-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} futureaxis. All rights reserved.
      </div>
    </footer>
  );
}

/* ---------- Components ---------- */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-5 text-white">{title}</h3>

      <ul className="space-y-3">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href="#"
              className="
                text-white/60
                hover:text-primary
                transition-colors duration-300
              "
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
    <div
      className="
        w-10 h-10 rounded-full
        bg-white/10
        border border-white/20
        flex items-center justify-center
        text-white
        backdrop-blur-md
        hover:bg-primary hover:text-white
        hover:shadow-lg hover:shadow-primary/30
        transition-all duration-300
        cursor-pointer
      "
    >
      {icon}
    </div>
  );
}