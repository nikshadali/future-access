"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ScrollHighlightTitle from "../ui/ScrollHighlightTitle"
import { TextEffectWithExit } from "../ui/TextEffectWithExit"
import { icons, IconName } from "@/lib/icons"


type ServiceCard = {
  title: string
  description?: string
  icon: IconName
}

type Props = {
  services: {
    title: string
    description: string
    servicesCard?: ServiceCard[]
  }
}
export default function ServicesGridSection({ services }: Props) {

  return (
    <section className="py-20 px-6">
      <div className="text-center mb-12 max-w-4xl mx-auto">
            {/* <h2 className="text-3xl font-bold">
              Everything You Need to Launch Your Business
              </h2> */}
            <ScrollHighlightTitle text={services?.title} />
            {/* <p className="text-muted-foreground mt-2">
              We handle the entire process from registration to compliance.
              </p> */}
            <div className="pt-5">
              <TextEffectWithExit>
               {services?.description}
              </TextEffectWithExit>
            </div>
            </div>
              <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {services?.servicesCard?.map((item, i: number) => {

          const Icon = item.icon && icons[item.icon]

          return (
            <Card key={i} className="hover:shadow-lg transition-shadow duration-300">

              <CardHeader className="flex items-center gap-3">

                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>

                <CardTitle className="text-[18px]">
                  {item.title}
                </CardTitle>

              </CardHeader>

              <CardContent className="text-muted-foreground text-[16px]">
                {item.description}
              </CardContent>

            </Card>
          )
        })}

      </div>
    </section>
  )
}


