// 'use client'

// import React, { useRef } from "react"
// import gsap from "gsap"
// import { useGSAP } from "@gsap/react"
// import { Briefcase, Landmark, HeartPulse, Factory, ShoppingCart } from "lucide-react"
// import Description from "./ui/Description"
// import ScrollHighlightTitle from "./ui/ScrollHighlightTitle"
// import { Container } from "./Container"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import Section from "./ui/section"
// import { TextEffectWithExit } from "./ui/TextEffectWithExit"

// gsap.registerPlugin(useGSAP, ScrollTrigger)

// interface Industry {
//   title: string
//   description: string
//   icon: React.ReactNode
// }


// const industries: Industry[] = [
//   {
//     title: "Finance & Banking",
//     description:
//       "AI-driven ERP and compliance automation for financial institutions and fintech innovators.",
//     icon: <Landmark size={40} />,
//   },
//   {
//     title: "Healthcare",
//     description:
//       "Secure, scalable systems designed for patient management, accounting, and regulatory workflows.",
//     icon: <HeartPulse size={40} />,
//   },
//   {
//     title: "Manufacturing",
//     description:
//       "Operational intelligence and ERP systems to optimize supply chain and production cycles.",
//     icon: <Factory size={40} />,
//   },
//   {
//     title: "Retail & eCommerce",
//     description:
//       "Data-powered growth strategies and financial control for omnichannel brands.",
//     icon: <ShoppingCart size={40} />,
//   },
//   {
//     title: "Professional Services",
//     description:
//       "End-to-end ERP, CRM, and accounting automation for consulting & enterprise teams.",
//     icon: <Briefcase size={40} />,
//   },
// ]

// export default function IndustriesSectionMain() {
//   const containerRef = useRef<HTMLDivElement | null>(null)

//   useGSAP(() => {
//   const ctx = gsap.context(() => {
 
//     gsap.from(".industry-card", {
//       y: 80,
//       opacity: 0,
//       scale: 0.95,
//       duration: 1,
//       stagger: 0.2,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top 75%",
//         toggleActions: "play none none reverse",
//       }
//     });

//   }, containerRef);

//   return () => ctx.revert();
// }, []);

//   return (
//     <Container>
    
//       {/* Section Header */}
      
// <Section>
//   <Section.Title>
//     <ScrollHighlightTitle text="Empowering Industries with Intelligent Systems" />
//   </Section.Title>

//   <Section.Description>
//     <TextEffectWithExit>
//       Empowering diverse industries with AI-powered ERP, accounting,
//           and digital transformation solutions.
//     </TextEffectWithExit>
//   </Section.Description>
// </Section>
// <section
//       ref={containerRef}
//       className=" text-white py-8"
//     >
//       {/* Cards */}
//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {industries.map((industry, index) => (
//           <div
//             key={index}
//             className="industry-card group relative bg-[#021f33] border border-[#0196f4]/20 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#0196f4]"
//           >
//             {/* Accent Glow */}
//             <div className="absolute inset-0 rounded-2xl bg-[#0196f4]/5 opacity-0 group-hover:opacity-100 transition duration-500" />

//             <div className="relative z-10">
//               <div className="text-[#0196f4] mb-6">
//                 {industry.icon}
//               </div>

//               <h3 className="text-2xl font-semibold mb-4">
//                 {industry.title}
//               </h3>

//               <p className="text-white/70 leading-relaxed">
//                 {industry.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//     </Container>
//   )
// }

'use client'

import React from "react"
import { Briefcase, Landmark, HeartPulse, Factory, ShoppingCart } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Container } from "./Container"
import Section from "./ui/section"
import ScrollHighlightTitle from "./ui/ScrollHighlightTitle"
import { TextEffectWithExit } from "./ui/TextEffectWithExit"

interface Industry {
  title: string
  description: string
  icon: React.ElementType
}

const industries: Industry[] = [
  {
    title: "Finance & Banking",
    description:
      "AI-driven ERP and compliance automation for financial institutions and fintech innovators.",
    icon: Landmark,
  },
  {
    title: "Healthcare",
    description:
      "Secure, scalable systems designed for patient management, accounting, and regulatory workflows.",
    icon: HeartPulse,
  },
  {
    title: "Manufacturing",
    description:
      "Operational intelligence and ERP systems to optimize supply chain and production cycles.",
    icon: Factory,
  },
  {
    title: "Retail & eCommerce",
    description:
      "Data-powered growth strategies and financial control for omnichannel brands.",
    icon: ShoppingCart,
  },
  {
    title: "Professional Services",
    description:
      "End-to-end ERP, CRM, and accounting automation for consulting & enterprise teams.",
    icon: Briefcase,
  },
]

export default function IndustriesSectionMain() {
  return (
    <Container>
      {/* Section Header */}
      <Section>
        <Section.Title>
          <ScrollHighlightTitle text="Empowering Industries with Intelligent Systems" />
        </Section.Title>

        <Section.Description>
          <TextEffectWithExit>
            Empowering diverse industries with AI-powered ERP, accounting,
            and digital transformation solutions.
          </TextEffectWithExit>
        </Section.Description>
      </Section>

      {/* Cards Section */}
      <section className="py-8">
        <div className="grid md:grid-cols-3 gap-6 mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon

            return (
              <Card
                key={index}
                // className="hover:shadow-lg hover:border-accent/40 transition-all duration-300 py-8 bg-[#021f33] text-white"
             className="hover:shadow-lg hover:border-accent/40 transition-all duration-300 py-8"
             >
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>

                  <CardTitle className="text-[18px]">
                    {industry.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p 
                  // className="text-white/70 text-[16px]"
                  className="text-muted-foreground text-[16px]"
                  >
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </Container>
  )
}