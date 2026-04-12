"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface ScrollHighlightBrandTitleProps {
  text: string;
  className?: string;
}

export default function ScrollHighlightBrandTitle({
  text,
  className = "",
}: ScrollHighlightBrandTitleProps) {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      if (!titleRef.current) return;

      const split = new SplitText(titleRef.current, {
        type: "lines",
      });

      split.lines.forEach((line) => {
        if (!(line instanceof HTMLElement)) return;

        line.style.display = "inline-block";

        // 🔥 Brand Gradient: Muted → Accent Blue
        line.style.backgroundImage =
          "linear-gradient(to right, rgba(255,255,255,0.15) 50%, #0196f4 50%)";

        line.style.backgroundSize = "200% 100%";
        line.style.backgroundPositionX = "100%";

        line.style.webkitTextFillColor = "transparent";
        line.style.backgroundClip = "text";
        line.style.webkitBackgroundClip = "text";

        gsap.to(line, {
          backgroundPositionX: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
            end: "bottom 15%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => {
        split.revert();
      };
    },
    { scope: titleRef }
  );

  return (
    <h2
      ref={titleRef}
      className={`text-[2.5rem] md:text-6xl font-extrabold leading-tight ${className}`}
    >
      {text}
    </h2>
  );
}