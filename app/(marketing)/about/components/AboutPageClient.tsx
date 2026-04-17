'use client';
import Footer from '@/layout/Footer'
import SocialProofSection from '@/components/services/SocialProofSection'

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Particles } from '@/components/ui/particles'
import ScrollHighlightTitle from '@/components/ui/ScrollHighlightTitle'
import Script from 'next/script'
import React from 'react'
import { AnimatedGlow } from '@/components/AnimatedGlow';
import CustomBadge from '@/components/CustomBadge';
import { AnimatedButton } from '@/components/FinanceButton';
import CTASection from '@/components/CTASection';

const stats = [
  { label: "Projects Completed", value: "250+" },
  { label: "Happy Clients", value: "180+" },
  { label: "Awards Won", value: "15+" },
];

const values = [
  { title: "Innovation", desc: "We embrace cutting-edge technology and creative solutions." },
  { title: "Integrity", desc: "Transparency and honesty are at our core." },
  { title: "Excellence", desc: "Delivering best-in-class results is our standard." },
];

const team = [
  { name: "Alex Johnson", role: "CEO & Founder", img: "/team/alex.jpg" },
  { name: "Sophia Lee", role: "CTO", img: "/team/sophia.jpg" },
  { name: "Michael Chen", role: "Head of Design", img: "/team/michael.jpg" },
];

const AboutPageClient = () => {
    const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Your Brand",
    url: "https://bftconsultants.com/",
    logo: "https://bftconsultants.com/logo.png",
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
   <div>
      {/* JSON-LD Structured Data */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="relative py-32 px-6 text-center">
        <Particles className="absolute inset-0 z-0" quantity={100} ease={80} color="#000000" refresh />
      <AnimatedGlow/>
      <CustomBadge title="About Us" />
       
        <h1 className="mt-4 text-4xl md:text-6xl max-w-4xl mx-auto font-extrabold">
          We Build Modern Solutions for Growing Businesses
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          From startups to enterprises, we deliver technology and business solutions that scale and innovate.
        </p>
      </section>

      {/* Stats Section */}
      <SocialProofSection isBgGray={true} />

      {/* Our Values */}
      <section className="py-20 max-w-6xl mx-auto">
        <ScrollHighlightTitle text="Our Core Values" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <Card key={i} className="hover:shadow-xl transition">
              <CardHeader>
                <Badge variant="secondary">{i + 1}</Badge>
                <CardTitle className="mt-4">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>{value.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      {/* <section className="py-32 px-6 bg-background text-white text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold">Our Mission</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
          Empower businesses with modern technology, seamless processes, and data-driven solutions.
        </p>
        <div className="flex justify-center mt-10">
          <AnimatedButton label="Get in Touch" />
        </div>
      </section> */}

       <CTASection
    title="Our Mission"
    description=" Empower businesses with modern technology, seamless processes, and data-driven solutions."
    primaryAction="Get in Touch"
    secondaryAction="alk to an Expert"
    trustPoints={["No commitment", "Confidential", "Trusted by growing businesses"]}
  />

      
    </div>
  )
}

export default AboutPageClient
