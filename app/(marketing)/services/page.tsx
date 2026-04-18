"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Briefcase,
  LineChart,
  Users,
  Calculator,
  Bot,
  Globe,
  MessageSquare,
  Settings,
} from "lucide-react";
import Link from "next/link";
import Section from "@/components/ui/section";
import ScrollHighlightTitle from "@/components/ui/ScrollHighlightTitle";
import { TextEffectWithExit } from "@/components/ui/TextEffectWithExit";
import { Particles } from "@/components/ui/particles";
import CustomBadge from "@/components/CustomBadge";
import { AnimatedButton } from "@/components/FinanceButton";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";

export default function ServicesPage() {
  const businessServices = [
    {
      title: "Business Setup",
      slug: "business-setup",
      description:
        "Complete support for launching your business from legal structure to operational setup.",
      icon: Briefcase,
    },
    {
      title: "Business Feasibility",
      slug: "business-feasibility",
      description:
        "Validate your idea with market research, competitor analysis, and financial projections.",
      icon: LineChart,
    },
    {
      title: "Staff Support Services",
      slug: "staff-support-services",
      description:
        "Access skilled professionals and operational support without hiring full-time staff.",
      icon: Users,
    },
  ];

  const financeServices = [
    {
      title: "Bookkeeping",
      slug: "bookkeeping",
      description:
        "Accurate financial record keeping that keeps your business organized and audit-ready.",
      icon: Calculator,
    },
    {
      title: "Fractional CFO",
      slug: "fractional-cfo",
      description:
        "Strategic financial leadership and growth planning without the cost of a full-time CFO.",
      icon: LineChart,
    },
    {
      title: "Taxation & VAT",
      slug: "taxation-vat",
      description:
        "Ensure compliance and optimize tax strategy with professional VAT and tax services.",
      icon: Calculator,
    },
  ];

  const techServices = [
    {
      title: "WhatsApp Automation",
      slug: "whatsapp-automation",
      description:
        "Automate customer communication, lead generation, and support via WhatsApp.",
      icon: MessageSquare,
    },
    {
      title: "AI Chat Bots",
      slug: "ai-chatbot",
      description:
        "Smart AI-powered chatbots that provide instant customer support 24/7.",
      icon: Bot,
    },
    {
      title: "Web Development",
      slug: "website-development",
      description:
        "Modern, scalable websites and applications designed for performance and growth.",
      icon: Globe,
    },
    {
      title: "Application Support Services",
      slug: "application-support-services",
      description:
        "Ongoing support, maintenance, and optimization for your applications.",
      icon: Settings,
    },
  ];

  return (
    <div className="bg-background">
      {/* HERO */}

      {/* <section className="max-w-7xl relative mx-auto px-6 py-24 text-center">
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color="#000000"
          refresh
        />
        <CustomBadge title ="Our Services"/>
       
        <h1 className="text-4xl md:text-6xl leading-15 max-w-4xl mx-auto font-extrabold">
          Empowering Businesses with Strategy, Finance & Technology
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          From business setup to AI automation, we provide the expertise and
          technology solutions to help your company scale faster and operate
          smarter.
        </p>

        <div className="mt-8 flex justify-center gap-4">
         
          <Link href="/contact">
          <AnimatedButton label="Get Free Consultation" />
          </Link>
          <Link href="/services/business-setup">
          <AnimatedButton label="Explore Services"  />
          </Link>
         
        </div>
      </section> */}

       <Hero
        badge="Business & Financial Consulting"
        title="Empowering Businesses with Strategy"
        highlight="Finance & Technology"
        description="From business setup to AI automation, we provide the expertise and
          technology solutions to help your company scale faster and operate
          smarter."
        primaryAction="Get Free Consultation"
        secondaryAction="Explore Services"
        // stats={[
        //   { value: "500+", label: "Businesses Supported" },
        //   { value: "10+", label: "Industries Served" },
        //   { value: "98%", label: "Client Satisfaction" },
        // ]}
        
      />

      {/* BUSINESS SERVICES */}

      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* <div className="text-center mb-12">

          <h2 className="text-3xl font-bold">
            Business Growth Services
          </h2>

          <p className="text-muted-foreground mt-3">
            Build a strong foundation and scale your business with expert
            support.
          </p>

        </div> */}
        <Section>
          <Section.Title>
            <ScrollHighlightTitle text="Business Growth Services" />
          </Section.Title>

          <Section.Description>
            <TextEffectWithExit>
              Build a strong foundation and scale your business with expert
              support.
            </TextEffectWithExit>
          </Section.Description>
        </Section>

        <div className="grid md:grid-cols-3 gap-6">
          {businessServices.map((service, i) => {
            const Icon = service.icon;

            return (
              <Link key={i} href={`/services/${service.slug}`}>
                <Card className="hover:shadow-lg hover:border-accent/40 transition-all duration-300 py-8">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>

                    <CardTitle className="text-[18px]">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground text-[16px]">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FINANCE SERVICES */}

      <section className=" py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Section>
            <Section.Title>
              <ScrollHighlightTitle text="Finance Services" />
            </Section.Title>

            <Section.Description>
              <TextEffectWithExit>
                Manage finances, maintain compliance, and plan for growth.
              </TextEffectWithExit>
            </Section.Description>
          </Section>
          <div className="grid md:grid-cols-3 gap-6">
            {financeServices.map((service, i) => {
              const Icon = service.icon;

              return (
                <Link key={i} href={`/services/${service.slug}`}>
                  <Card className="hover:shadow-lg hover:border-accent/40 transition-all duration-300 py-8">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>

                      <CardTitle className="text-[18px]">
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground text-[16px]">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}

      <section className="max-w-7xl mx-auto px-6 py-16">
        <Section>
          <Section.Title>
            <ScrollHighlightTitle text="Technology Solutions" />
          </Section.Title>

          <Section.Description>
            <TextEffectWithExit>
              Automate operations and scale with modern digital technologies.
            </TextEffectWithExit>
          </Section.Description>
        </Section>

        <div className="grid md:grid-cols-4 gap-6">
          {techServices.map((service, i) => {
            const Icon = service.icon;

            return (
              <Link
                key={i}
                href={`/services/${service.slug}`}
                className="h-full"
              >
                <Card className="h-full flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-accent/40 transition-all duration-300 py-8">
                  <CardHeader className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 rounded-xl bg-accent/10">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>

                    <CardTitle className="text-[18px]">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="text-center flex-1">
                    <p className="text-muted-foreground text-[16px]">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}

      <section className="bg-background py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Process</h2>

            <p className="text-muted-foreground mt-3">
              A simple and proven approach to help your business grow.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {["Consultation", "Strategy", "Implementation", "Growth"].map(
              (step, i) => (
                <div key={i}>
                  <div className="w-12 h-12 mx-auto rounded-full bg-accent text-white flex items-center justify-center font-semibold">
                    {i + 1}
                  </div>

                  <h3 className="font-semibold text-lg mt-4">{step}</h3>

                  <p className="text-muted-foreground mt-2 text-sm">
                    Professional guidance and execution to help your business
                    scale.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA */}

      {/* <section className="py-24 text-center bg-primary text-primary-foreground">
        <h2 className="text-3xl font-bold">Ready to Grow Your Business?</h2>

        <p className="mt-4 max-w-xl mx-auto opacity-90">
          Let our experts handle your business, finance, and technology
          challenges while you focus on growth.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/contact">
          <AnimatedButton label=" Schedule Consultation" />
          </Link>
          
        </div>
      </section> */}
      <CTASection
              title="Ready to Grow Your Business?"
              description="Let our experts handle your business, finance, and technology
          challenges while you focus on growth."
              primaryAction="Schedule Consultation"
              trustPoints={["Free consultation", "No obligation", "Fast response"]}
            />
    </div>
  );
}
