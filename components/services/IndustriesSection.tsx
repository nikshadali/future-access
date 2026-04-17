"use client";

import { Section } from "@/layout/Section";
import { InfiniteSlider } from "../motion-primitives/infinite-slider";
import ScrollHighlightTitle from "../ui/ScrollHighlightTitle";
import { Heading } from "../typography/Heading";

export default function IndustriesSection({ industries }: any) {
  return (
    <Section>
      <Heading>
        <ScrollHighlightTitle text={industries?.title} />
      </Heading>
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <InfiniteSlider speedOnHover={20} gap={24}>
            {industries?.industriesArr.map((industry: string) => (
              <span
                key={industry}
                className="px-5 py-2 border rounded-full bg-foreground text-sm"
              >
                {industry}
              </span>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </Section>
  );
}
