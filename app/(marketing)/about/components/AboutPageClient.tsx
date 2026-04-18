'use client';
import Footer from '@/layout/LightFooter'
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
import Hero from '@/components/Hero';
import { Section } from '@/layout/Section';

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
     
        <Hero
          badge="About Us"
          title="We Build Modern Solutions for "
          highlight="Growing Businesses"
          description="From startups to enterprises, we deliver technology and business solutions that scale and innovate."
          primaryAction="Get Free Consultation"
          secondaryAction="View Services"
          stats={[
            { value: "500+", label: "Businesses Supported" },
            { value: "10+", label: "Industries Served" },
            { value: "98%", label: "Client Satisfaction" },
          ]}
          
        />
      {/* Stats Section */}
     

      {/* Our Values */}
      <Section >
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
      </Section>

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
