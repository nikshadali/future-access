import { services } from "@/data/services"
import { notFound } from "next/navigation"
import HeroSection from "@/components/services/HeroSection"
import SocialProofSection from "@/components/services/SocialProofSection"
import ServicesGridSection from "@/components/services/ServicesGridSection"
import ProcessSection from "@/components/services/ProcessSection"
import FeaturesSection from "@/components/services/FeaturesSection"
import IndustriesSection from "@/components/services/IndustriesSection"
import TestimonialsSection from "@/components/services/TestimonialsSection"
import FAQSection from "@/components/services/FAQSection"
import CTASection from "@/components/services/CTASection"
import { TechStackSection } from "@/components/services/TechStackSection"
import { IntegrationsSection } from "@/components/services/IntegrationsSection"
import { UseCasesSection } from "@/components/services/UseCasesSection"
import ServiceCTASection from "@/components/services/CTASection"

type Props = {
  params: Promise<{ slug: string }>
}


export default async function ServicePage({ params }: Props) {

  const { slug } = await params

  const service = services.find((s) => s.slug === slug)

  if (!service) return notFound()

  return (
    <div >

      {service.sections.includes("hero") && (
        <HeroSection service={service} />
      )}

      {/* {service.sections.includes("socialProof") && (
        <SocialProofSection />
      )} */}

      {service.sections.includes("services") && service.services && (
        <ServicesGridSection services={service.services} />
      )}
{service.sections.includes("integrations") && service.integrations && (
  <IntegrationsSection integrations={service.integrations} />
)}
{service.sections.includes("useCases") && service.useCases && (
  <UseCasesSection useCases={service.useCases} />
)}
 {service.sections.includes("process") && service.steps && (
        <ProcessSection steps={service.steps} />
      )}
      {service.sections.includes("techStack") && (
        <TechStackSection techStack={service.techStack} />
      )}
     

      {service.sections.includes("features") && service.features && (
        <FeaturesSection features={service.features} />
      )}

      {service.sections.includes("industries") && service.industries && (
        <IndustriesSection industries={service.industries} />
      )}

      {service.sections.includes("testimonials") && (
        <TestimonialsSection />
      )}

      {service.sections.includes("faq") && service.faq && (
  <FAQSection
    title={service.faq.title}
    faqs={service.faq.faqs}
  />
)}

      {service.sections.includes("cta") && (
        <ServiceCTASection />
      )}

    </div>
  )
}