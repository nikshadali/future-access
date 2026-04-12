"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import ScrollHighlightTitle from "../ui/ScrollHighlightTitle"
import { icons, IconName } from "@/lib/icons"

type IntegrationItem =
  | string
  | {
      name: string
      icon?: IconName
      desc?: string
    }

type Props = {
  integrations: {
    title: string
    items: IntegrationItem[]
  }
}

export function IntegrationsSection({ integrations }: Props) {
  const items = integrations?.items || []

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="mb-12 text-center">
        <ScrollHighlightTitle text={integrations?.title} />
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Seamlessly connect with your existing tools and platforms.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {items.map((item, i) => {
         
          if (typeof item === "string") {
            return (
              <div
                key={i}
                className="group border rounded-2xl bg-white p-6 text-center"
              >
                <p className="text-sm font-semibold">{item}</p>
              </div>
            )
          }

          const Icon = item.icon ? icons[item.icon] : null
         

        //   return (
        //     <div
        //       key={i}
        //       className="group border rounded-2xl bg-white p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition"
        //     >
        //       {Icon && (
        //         <div className="mb-3 text-primary">
        //           <Icon size={28} />
        //         </div>
        //       )}

        //       <p className="text-sm font-semibold">{item.name}</p>

        //       {item.desc && (
        //         <p className="text-xs text-gray-500 mt-1">
        //           {item.desc}
        //         </p>
        //       )}
        //     </div>
        //   )
        // })}
        return (
            <Card
  key={i}
  className="group flex gap-1.5 flex-col items-center text-center justify-center hover:shadow-lg transition-shadow duration-300 bg-white"
>
  {Icon && (
    <CardHeader className="px-0 flex items-center justify-center">
      <CardTitle className="text-primary flex justify-center items-center">
        <Icon size={28} />
      </CardTitle>
    </CardHeader>
  )}

  <CardContent className="font-semibold text-[16px]">
    {item.name}
  </CardContent>

  {item.desc && (
    <p className="text-xs text-gray-500 mt-1">
      {item.desc}
    </p>
  )}
</Card>
          )
        })}
      </div>
    </section>
  )
}