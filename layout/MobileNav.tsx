"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { Button } from "../ui/button";

interface NavItem {
  title: string;
  url?: string;
  items?: { title: string; url: string }[];
}

export function MobileNav({ navItems, onLinkClick }: { navItems: NavItem[]; onLinkClick?: () => void }) {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (title: string) => {
    setOpen(open === title ? null : title);
  };

  return (
    <div className="lg:hidden border-t border-white/10 px-5 py-6">
      <div className="flex flex-col space-y-1">
        {navItems.map((item) =>
          item.items ? (
            <div key={item.title} className="py-1">
              <button
                onClick={() => toggle(item.title)}
                className="flex items-center justify-between w-full text-white text-base font-medium py-2 hover:text-primary transition-colors"
              >
                {item.title}
                <ChevronDown
                  className={`w-4 h-4 text-white/50 transition-transform duration-300 ${
                    open === item.title ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === item.title ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col gap-1 pl-4 pb-2 border-l border-white/10">
                  {item.items.map((sub) => (
                    <Link
                      key={sub.title}
                      href={sub.url}
                      onClick={onLinkClick}
                      className="text-white/70 text-sm py-1.5 hover:text-primary transition-colors"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Link
              key={item.title}
              href={item.url!}
              onClick={onLinkClick}
              className="text-white text-base font-medium py-2 hover:text-primary transition-colors"
            >
              {item.title}
            </Link>
          )
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
        <LanguageSwitcher />
        <Button size="sm" className="flex-1">
          Get Started <ArrowRight className="size-3.5 ml-1" />
        </Button>
      </div>
    </div>
  );
}
