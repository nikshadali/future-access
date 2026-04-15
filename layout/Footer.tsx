"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { AnimatedGlow } from "@/components/ui/AnimatedGlow";

const socialLinks = [
  {
    href: "https://www.facebook.com/wepaygex.ae",
    label: "Facebook",
    icon: (
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    ),
  },
  {
    href: "https://www.instagram.com/paygex.ae/",
    label: "Instagram",
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    ),
  },
  {
    href: "https://www.linkedin.com/company/wepaygex/",
    label: "LinkedIn",
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    href: "https://x.com/paygex_ae?mx=2",
    label: "X (Twitter)",
    icon: (
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    ),
  },
  {
    href: "https://youtube.com/@wepaygex",
    label: "YouTube",
    icon: (
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    ),
  },
];

const quickLinks = [
  { label: "Pay by Links", href: "/#global-reach-section" },
  { label: "Pay with QR", href: "/#global-reach-section" },
  { label: "Auto Invoice", href: "/#global-reach-section" },
  { label: "Local Payments", href: "/#global-reach-section" },
  {
    label: "Dashboard",
    href: "https://business.paygex.ae/login",
    external: true,
  },
  { label: "APIs", href: "/developers" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Contact us", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  {
    label: "Careers",
    href: "https://www.linkedin.com/company/wepaygex/jobs/",
    external: true,
  },
  { label: "Blogs", href: "/blog" },
  { label: "News", href: "/news" },
];

function FooterLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const className =
    "relative text-white/50 hover:text-primary transition-colors duration-300 text-sm leading-7";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#141210] overflow-hidden">
      <AnimatedGlow />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative z-10 px-6 md:px-[8%]">
        <div className="py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/paygex-logo.png"
                  alt="PAYGEX Logo"
                  width={111}
                  height={47}
                  className="h-10 w-auto"
                />
                <div className="w-px h-8 bg-white/10" />
                <Image
                  src="/PCI-DSS-White.png"
                  alt="PCI DSS"
                  width={60}
                  height={47}
                  className="h-12 w-auto"
                />
              </div>

              <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8">
                Powering the future of payments with scalable, secure, and
                borderless solutions. Wherever business happens, Paygex makes it
                seamless.
              </p>

              <div className="flex items-center gap-3 mb-8">
                {["visa", "mastercard", "apple-pay", "google-pay"].map(
                  (item) => (
                    <div
                      key={item}
                      className="bg-white/[0.06] rounded-md px-2.5 py-1.5"
                    >
                      <Image
                        src={`/footer/supported-methods/${item}.svg`}
                        alt={item}
                        width={40}
                        height={25}
                        className="h-5 w-auto opacity-70"
                      />
                    </div>
                  )
                )}
              </div>

              <div className="flex gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 bg-white/[0.04] hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 text-white/40 group-hover:text-primary"
                      fill="currentColor"
                    >
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
                Quick Links
              </h3>
              <div className="flex flex-col">
                {quickLinks.map((link) => (
                  <FooterLink
                    key={link.label}
                    href={link.href}
                    external={link.external}
                  >
                    {link.label}
                  </FooterLink>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
                Company
              </h3>
              <div className="flex flex-col">
                {companyLinks.map((link) => (
                  <FooterLink
                    key={link.label}
                    href={link.href}
                    external={link.external}
                  >
                    {link.label}
                  </FooterLink>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/[0.06] mt-14 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/30 text-sm">
                &copy; 2026 Paygex. All rights reserved.
              </div>

              <div className="flex items-center gap-6">
                <Link
                  href="/terms-and-conditions"
                  className="text-white/30 text-sm hover:text-primary transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-white/30 text-sm hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>

                <button
                  onClick={scrollToTop}
                  className="w-9 h-9 bg-white/[0.04] hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 group cursor-pointer"
                  aria-label="Back to top"
                >
                  <ArrowUp className="w-4 h-4 text-white/40 group-hover:text-primary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
