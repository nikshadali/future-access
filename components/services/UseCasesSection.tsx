"use client";

import { Section } from "@/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import ScrollHighlightTitle from "../ui/ScrollHighlightTitle";
import { icons, IconName } from "@/lib/icons";
import { Heading } from "../typography/Heading";
import { TextEffectWithExit } from "../ui/TextEffectWithExit";

type UseCaseItem = {
  title?: string;
  desc?: string;
  icon?: IconName;
};

type Props = {
  useCases: {
    title: string;
    cases: UseCaseItem[];
  };
};

export function UseCasesSection({ useCases }: Props) {
  return (
    <Section>
      <Heading>
        <ScrollHighlightTitle text={useCases.title} />
        <TextEffectWithExit>
          Real-world applications of our solutions to drive business growth and
          efficiency.
        </TextEffectWithExit>
      </Heading>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.cases.map((item, i) => {
          const Icon = item.icon ? icons[item.icon] : null;

          return (
            <Card
              key={i}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>

                <CardTitle className="text-[18px]">{item.title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-[16px]">
                {item.desc}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
