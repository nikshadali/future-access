// "use client";

// import { useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, SplitText);

// interface ScrollHighlightTitleProps {
//   text: string;
//   className?: string;
// }

// export default function ScrollHighlightTitle({
//   text,
//   className = "",
// }: ScrollHighlightTitleProps) {
//   const titleRef = useRef<HTMLHeadingElement | null>(null);

//   useGSAP(
//     () => {
//       if (!titleRef.current) return;

//       const split = new SplitText(titleRef.current, {
//         type: "lines",
//       });

//       split.lines.forEach((line) => {
//         if (!(line instanceof HTMLElement)) return;

//         // Light mode base color (before reveal)
//         line.style.color = "#cbd5e1"; // subtle gray (Tailwind slate-300)
//         line.style.display = "inline-block";

//         // Brand gradient reveal
//         line.style.backgroundImage =
//           "linear-gradient(to right, #032841 50%, transparent 50%)";
//         line.style.backgroundSize = "200% 100%";
//         line.style.backgroundPositionX = "100%";
//         line.style.webkitTextFillColor = "transparent";
//         line.style.backgroundClip = "text";
//         line.style.webkitBackgroundClip = "text";

//         gsap.to(line, {
//           backgroundPositionX: "0%",
//           ease: "none",
//           scrollTrigger: {
//             trigger: line,
//             start: "top 85%",
//             end: "bottom 15%",
//             scrub: 1,
//             invalidateOnRefresh: true,
//           },
//         });
//       });

//       return () => {
//         split.revert();
//       };
//     },
//     { scope: titleRef }
//   );

//   return (
//     <h1
//       ref={titleRef}
//       className={`text-[2.5rem] md:text-6xl font-extrabold leading-none 
//       text-gray-300 dark:text-white ${className}`}
//     >
//       {text}
//     </h1>
//   );
// }

"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface ScrollHighlightTitleProps {
  text: string;
  className?: string;
}

export default function ScrollHighlightTitle({
  text,
  className = "",
}: ScrollHighlightTitleProps) {
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

        // 👇 Gradient: Brand Dark → Light Gray
        line.style.backgroundImage =
          "linear-gradient(to right, #032841 50%, #d1d5db 50%)"; // gray-300
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
    <h1
      ref={titleRef}
      className={`text-[2.5rem] md:text-6xl font-extrabold leading-none ${className}`}
    >
      {text}
    </h1>
  );
}