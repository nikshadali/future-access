import type { Metadata } from "next";
import AboutPageClient from "./components/AboutPageClient";

// Example team and stats data


// SEO Metadata
export const metadata: Metadata = {
  title: "About Us | AI ERP & Business Solutions",
  description:
    "Learn about our team, values, and mission. We provide AI-driven ERP, business automation, and CFO solutions for growing businesses.",
  keywords: [
    "About Us",
    "AI ERP solutions",
    "business automation",
    "CFO services",
    "technology solutions",
  ],
  openGraph: {
    title: "About Us | AI ERP & Business Solutions",
    description: "Meet our team and explore our mission to empower businesses with modern technology.",
    url: "https://yourdomain.com/about",
    siteName: "Your Brand",
    images: [
      { url: "/og-about.png", width: 1200, height: 630 },
    ],
    type: "website",
  },
  alternates: { canonical: "https://yourdomain.com/about" },
};

export default function AboutPage() {
  

  return (
    <AboutPageClient />
  );
}