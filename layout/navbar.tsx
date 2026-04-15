"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { MobileNav } from "./MobileNav";

interface NavItem {
  title: string;
  url?: string;
  items?: { title: string; url: string }[];
}

const navItems: NavItem[] = [
  {
    title: "Solutions",
    items: [
      { title: "Apple Pay Business", url: "/apple-pay-business" },
      { title: "Google Pay Business", url: "/google-pay-business" },
      { title: "Merchant Account UAE", url: "/merchant-account-uae" },
      { title: "Payment Links", url: "/payment-links" },
      { title: "QR Code Payments", url: "/qr-code-payments" },
      { title: "Payment Gateway", url: "/payment-gateway" },
      { title: "Payment API", url: "/payment-api" },
    ],
  },
  {
    title: "Developers",
    url: "/developers",
  },
  {
    title: "Media",
    items: [
      { title: "Blog", url: "/blog" },
      { title: "News", url: "/news" },
    ],
  },
  { title: "Contact Us", url: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_24px_rgba(0,0,0,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-4 lg:py-5 px-6 md:px-[8%]">
        <Link href="/" className="relative z-10 shrink-0">
          <img
            src="/paygex-logo.png"
            className="h-9 md:h-11 w-auto"
            alt="Paygex"
          />
        </Link>

        <nav className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navItems.map((item) =>
                item.items ? (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent className="text-white py-2 rounded-md">
                      {item.items.map((sub) => (
                        <NavigationMenuLink
                          key={sub.title}
                          render={(props) => (
                            <Link
                              href={sub.url!}
                              onClick={props.onClick}
                              className="block font-normal px-4 text-sm py-2.5 hover:bg-white/5 hover:text-primary rounded transition-colors"
                            >
                              {sub.title}
                            </Link>
                          )}
                        />
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      render={() => (
                        <Link
                          href={item.url!}
                          className="relative px-4 py-2 text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium"
                        >
                          {item.title}
                        </Link>
                      )}
                    />
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />

          <Button variant="outlineNav" size="sm">
            Login
          </Button>

          <Button size="sm">
            Get Started
            <ArrowRight className="size-3.5 ml-1" />
          </Button>
        </div>

        <div className="lg:hidden flex items-center gap-2.5">
          <Button size="sm">
            Login
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={(props) => (
                <Button {...props} variant="outlineNav" size="icon">
                  <Menu />
                </Button>
              )}
            />
            <SheetContent side="top">
              <MobileNav navItems={navItems} onLinkClick={() => setMobileOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
