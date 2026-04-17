"use client"

import { CheckCircle } from "lucide-react"
import ScrollHighlightTitle from "../ui/ScrollHighlightTitle"
import { Section } from "@/layout/Section"
import { Heading } from "../typography/Heading"

export default function FeaturesSection({ features }: any) {
  return (
    <Section>
 <Heading>
            <ScrollHighlightTitle text={features?.title} />
          </Heading>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

        {features?.featuresArr?.map((feature: string, i: number) => (

          <div key={i} className="flex items-center gap-3">
      <CheckCircle className="text-primary" />
      <p>{feature}</p>
    </div>

        ))}

      </div>

    </Section>
  )
}

//  <section className="py-20 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="mb-10 text-center">
//             <ScrollHighlightTitle text=" Why Entrepreneurs Choose Us" />
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <Feature text="Expert consultants with deep industry knowledge" />
//             <Feature text="Fast and efficient business registration process" />
//             <Feature text="Transparent pricing with no hidden fees" />
//             <Feature text="100% compliance with legal regulations" />
//             <Feature text="Dedicated support throughout the process" />
//             <Feature text="Trusted by businesses worldwide" />
//           </div>
//         </div>
//       </section>