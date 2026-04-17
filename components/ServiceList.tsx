"use client";

import { useState, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import AnimatedButton from "./ui/AnimatedButton";
import Link from "next/link";
import { BlackAnimatedButton } from "./FinanceButton";

interface ServiceTab {
  label: string;
  heading: string;
  description: string;
  points: string[];
  image: string;
  icon?: ReactNode;
  url: string;
}

interface ServiceListProps {
  tabs: ServiceTab[];
  defaultIndex?: number;
}

export default function ServiceList({
  tabs,
  defaultIndex = 0,
}: ServiceListProps) {
  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!contentRef.current || !imageRef.current) return;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      });

      tl.fromTo(
        contentRef.current,
        { opacity: 0, rotateY: -90, transformOrigin: "left center" },
        { opacity: 1, rotateY: 0 }
      );

      tl.fromTo(
        imageRef.current,
        { opacity: 0, rotateY: -90, transformOrigin: "left center" },
        { opacity: 1, rotateY: 0 },
        "<0.2"
      );
    },
    { dependencies: [activeIndex] }
  );

  const activeTab = tabs[activeIndex];

  if (!activeTab) return null;

  return (
    <section className="text-white py-8 flex flex-col md:flex-row gap-2">
      
      {/* Left Tabs */}
      <div className="md:w-1/3 flex flex-col justify-between border-l-2 border-[#0196f4] pl-4 gap-4">
        {tabs.map((tab, index) => {
          const isActive = activeIndex === index;

          return (
            
            <button
              key={tab.label}
              onClick={() => setActiveIndex(index)}
              className={`text-left bg-primary cursor-pointer text-[22px] py-5 px-9.5 rounded-xl font-semibold transition-all duration-300
                ${
                  isActive
                    ? "bg-primary text-foreground"
                    : "text-foreground  hover:bg-primary/80"
                }
              `}
            >
              {`${index + 1}. ${tab.label}`}
            </button>
           
          );
        })}
      </div>

      {/* Center Card */}
      <div className="md:w-1/3" ref={contentRef}>
        <div className="bg-primary p-8 rounded-2xl shadow-lg min-h-125 flex flex-col justify-between">
          
          <div>
            {activeTab.icon && (
              <div className="text-foreground text-[80px] mb-4">
                {activeTab.icon}
              </div>
            )}

            <p className="text-foreground/60 leading-relaxed text-[18px]">
              <span className="font-semibold text-foreground">
                {activeTab.heading}
              </span>{" "}
              {activeTab.description}
            </p>
          </div>

          <ul className="text-[16px] font-semibold text-white mt-6 space-y-2">
            {activeTab.points.map((point, i) => (
              <li key={i} className="before:content-['✦'] before:mr-2 before:text-foreground/80">
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Link href="/services"  >
            <BlackAnimatedButton label="Read More" />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div
        className="md:w-1/3 flex justify-center "
        ref={imageRef}
      >
        <div className="w-full h-125 rounded-2xl overflow-hidden">
          <Image
            src={activeTab.image}
            alt={activeTab.label}
            width={500}
            height={500}
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
}