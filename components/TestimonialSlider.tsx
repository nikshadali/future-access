"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";
import TestimonialTrust from "./TestimonialTrust";
import ScrollHighlightTitle from "./ui/ScrollHighlightTitle";
import Description from "./ui/Description";
import Speration from "./ui/Speration";
import { Container } from "./Container";
import Section from "./ui/section";
import { TextEffectWithExit } from "./ui/TextEffectWithExit";

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  img: string;
  text: string;
  trusted: string[];
}

const testimonials: Testimonial[] = [
  {
    name: "Jamia R.",
    role: "Startup Founder",
    rating: 4.9,
    img: "/t2-author-5.webp",
    text: "From start to finish, the communication was seamless and the design blew us away. They really know how to bring a brand to life!",
    trusted: ["impact", "greenly", "growl"],
  },
  {
    name: "Alex G.",
    role: "Product Designer",
    rating: 5.0,
    img: "/testimonial-02.webp",
    text: "An incredible experience! The team delivered beyond our expectations with stunning visuals and a clear strategy.",
    trusted: ["impact", "growl"],
  },
  {
    name: "Sophia M.",
    role: "Marketing Lead",
    rating: 4.8,
    img: "/testimonial-03.webp",
    text: "They made our brand shine. The collaboration process was smooth and super creative!",
    trusted: ["greenly", "growl"],
  },
];

export default function TestimonialSlider(): React.ReactElement {
  const [index, setIndex] = useState<number>(0);

  const testimonialRef = useRef<HTMLDivElement | null>(null);
  const imgContainerRef = useRef<HTMLDivElement | null>(null);
  const imgContentRef = useRef<HTMLDivElement | null>(null);

  const testimonial = testimonials[index];

  const handleNext = (): void => {
    const newIndex = (index + 1) % testimonials.length;
    crossfadeChange(newIndex);
  };

  const handlePrev = (): void => {
    const newIndex = (index - 1 + testimonials.length) % testimonials.length;
    crossfadeChange(newIndex);
  };

  const crossfadeChange = (newIndex: number): void => {
    if (newIndex === index) return;
    if (!imgContainerRef.current) return;

    const container = imgContainerRef.current;

    const newImg = document.createElement("img");
    newImg.src = testimonials[newIndex].img;
    newImg.alt = testimonials[newIndex].name;
    newImg.className =
      "absolute inset-0 w-full h-full object-cover opacity-0";

    container.appendChild(newImg);

    gsap.to(newImg, { opacity: 1, duration: 0.6, ease: "power2.out" });

    const firstChild = container.children[0] as HTMLElement;

    gsap.to(firstChild, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => {
        if (container.children.length > 1) {
          container.children[0].remove();
        }
        setIndex(newIndex);
      },
    });

    if (testimonialRef.current) {
      gsap.fromTo(
        testimonialRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }

    if (imgContentRef.current) {
      gsap.from(imgContentRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    if (!testimonialRef.current) return;

    gsap.fromTo(
      testimonialRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  return (
    <Container>
    
     
<Section>
  <Section.Title>
    <ScrollHighlightTitle text="The best reviews from clients" />
  </Section.Title>

  <Section.Description>
    <TextEffectWithExit>
      Don’t just take our word for it see what our clients think.
    </TextEffectWithExit>
  </Section.Description>
</Section>
      <div className="bg-[#032940] text-white mx-auto flex flex-col gap-8 md:flex-row items-center rounded-3xl overflow-hidden shadow-lg w-full max-w-6xl">
        {/* Left Image Card */}
        <Card className="bg-[#032940] p-0 border-0 relative text-white rounded-3xl overflow-hidden w-full md:w-[40%]">
          <CardContent className="relative p-0">
            <div
              ref={imgContainerRef}
              className="img-slider-single relative h-137.5 overflow-hidden"
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div
              ref={imgContentRef}
              className="py-4 border-2 pb-10 flex items-end justify-between border-white absolute bottom-10 rounded-3xl right-10 w-[80%] h-[85%]"
            >
              <div className="pl-4">
                <h3 className="text-[30px] font-semibold">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {testimonial.role}
                </p>
              </div>
              <div>
                <span className="bg-gray-800 px-2 py-1 rounded-md text-[24px] font-semibold">
                  ⭐ {testimonial.rating}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Section */}
        <div className="w-full md:w-[60%] px-4 md:px-0">
          <div className="flex text-yellow-400">★★★★★</div>

          <Speration />

          <div
            className="my-8 relative min-h-25"
            ref={testimonialRef}
          >
            <p className="text-[20px] italic leading-relaxed">
              “{testimonial.text}”
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrev}
              className="rounded-full border border-gray-700"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-3">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => crossfadeChange(i)}
                  className={`relative w-12 h-12 rounded-full overflow-hidden border-2 transition-all ${
                    i === index
                      ? "scale-110"
                      : "border-transparent opacity-60"
                  }`}
                >
                  <Image
                    src={t.img}
                    alt={t.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="rounded-full border border-gray-700"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <Speration />

          <div className="mt-8 text-gray-400 text-sm">
            <p>Trusted brands:</p>
            <TestimonialTrust />
          </div>
        </div>
      </div>
    
    </Container>
  );
}