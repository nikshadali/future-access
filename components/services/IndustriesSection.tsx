"use client"

import { InfiniteSlider } from "../motion-primitives/infinite-slider"
import ScrollHighlightTitle from "../ui/ScrollHighlightTitle"

export default function IndustriesSection({ industries }: any) {
  return (
    <section className="py-20 px-6 bg-slate-100">
 <div className="mb-10 text-center">
            <ScrollHighlightTitle text={industries?.title} />
          </div>
      <div className="max-w-6xl mx-auto text-center">

        <div className="flex flex-wrap justify-center gap-4">
 <InfiniteSlider speedOnHover={20} gap={24}>
          {industries?.industriesArr.map((industry: string) => (
            <span
              key={industry}
              className="px-5 py-2 border rounded-full bg-white text-sm"
            >
              {industry}
            </span>
          ))}
</InfiniteSlider>
        </div>

      </div>

    </section>
  )
}