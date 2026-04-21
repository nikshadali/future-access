import type { Metadata } from "next";
import Script from "next/script";
import { ExpandableCards } from "@/components/ExpandableCards";
import Footer from "@/layout/LightFooter";
import FunFacts from "@/components/FunFacts";
import GetInTouch from "@/components/GetInTouch";
import IndustriesSectionMain from "@/components/IndustriesSectionMain";
import Services from "@/components/Services";
import IndustriesSection from "@/components/services/IndustriesSection";
import Hero from "@/components/Hero";
import { GrowConfidanceSection } from "@/components/GrowConfidanceSection";

export const metadata: Metadata = {
   metadataBase: new URL("https://yourdomain.com"), 
  title: "AI ERP & Business Solutions | Accounting, CFO, Automation",
  description:
    "AI-driven ERP, accounting, CFO, and automation solutions to streamline operations, improve financial control, and scale your business.",
  keywords: [
    "ERP solutions",
    "AI automation",
    "accounting services",
    "fractional CFO",
    "business setup",
    "WhatsApp automation",
  ],
  openGraph: {
    title: "AI ERP & Business Solutions",
    description:
      "Streamline operations with AI-powered ERP, finance, and automation solutions.",
    url: "https://yourdomain.com",
    siteName: "Your Brand",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
};

// Data for IndustriesSection
const industries = {
  title: "Our Partners",
  industriesArr: [
    "E-commerce",
    "Tech Startups",
    "Consulting Firms",
    "Retail Businesses",
    "Digital Agencies",
    "Freelancers",
  ],
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Your Brand",
    url: "https://futureaxis.com/",
    logo: "https://futureaxis.com/logo.png",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-xxx",
      contactType: "customer service",
    },
    offers: [
      { "@type": "Service", name: "Business Setup" },
      { "@type": "Service", name: "Fractional CFO" },
      { "@type": "Service", name: "AI Chatbot Solutions" },
    ],
  };

  return (
    <>
      {/* JSON-LD for SEO */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Page Components */}
     <Hero
  badge="Business & Financial Consulting"
  title="Build, Scale & Optimize"
  highlight="Your Business with Confidence"
  description="From company formation to financial strategy and automation..."
  primaryAction="Get Free Consultation"
  secondaryAction="View Services"
  stats={[
    { value: "500+", label: "Businesses Supported" },
    { value: "10+", label: "Industries Served" },
    { value: "98%", label: "Client Satisfaction" },
  ]}
  isBottom={true}
/>
      <Services />
      <IndustriesSectionMain />
      {/* <IndustriesSection industries={industries} /> */}
      
      <GrowConfidanceSection/>
      <GetInTouch />
      
    </>
  );
}