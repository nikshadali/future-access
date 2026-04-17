"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import ScrollHighlightTitle from "../ui/ScrollHighlightTitle";
import { Section } from "@/layout/Section";
import { Heading } from "../typography/Heading";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "E-commerce Founder",
    text: "The team made the registration process simple and stress-free.",
  },
  {
    name: "Sarah Johnson",
    role: "Tech Startup Founder",
    text: "Professional service and excellent guidance.",
  },
  {
    name: "Ali Raza",
    role: "Digital Agency Owner",
    text: "Highly recommended for entrepreneurs.",
  },
];

export default function TestimonialsSection() {
  return (
    <Section>
      <Heading>
        <ScrollHighlightTitle text="What Our Clients Say" />
      </Heading>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Card key={i}>
            <CardContent className="pt-6 space-y-4">
              <div className="flex text-yellow-500">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>

              <p className="text-muted-foreground">"{t.text}"</p>

              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
