'use client';

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(useGSAP);

interface AnimatedButtonProps {
  type?: "button" | "submit" | "reset";
  label?: string;
  form?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  isDarkblue?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  type = "button",
  label = "Get in Touch",
  form,
  onClick,
  isDarkblue = false,
  className = "",
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useGSAP(
    () => {
      const button = buttonRef.current;
      if (!button) return;

      const text = button.querySelector(".text");
      const arrowInner = button.querySelector(".arrow-inner");
      const arrowInnerTwo = button.querySelector(".arrow-inner-two");

      const tl = gsap.timeline({ paused: true });

      // 🟢 Text animation (bottom → top)
      tl.to(text, { duration: 0.2, yPercent: -150, ease: "power2.in" })
        .set(text, { yPercent: 150 })
        .to(text, { duration: 0.2, yPercent: 0 }, 0.2);

      // 🟡 Arrow animation (left → right)
      tl.to(
        arrowInner,
        { duration: 0.2, xPercent: 150, ease: "power2.in" },
        0
      ).to(
        arrowInnerTwo,
        { duration: 0.2, xPercent: 180, autoAlpha: 1, ease: "power2.out" },
        0.2
      );

      // hover handlers
      const handleEnter = () => tl.restart();
      button.addEventListener("mouseenter", handleEnter);

      return () => {
        button.removeEventListener("mouseenter", handleEnter);
      };
    },
    { scope: buttonRef } // this is the magic part ✨
  );

   return (
    <button
      ref={buttonRef}
      type={type}
      form={form}
      onClick={onClick}
      className={`button cursor-pointer flex items-center gap-3.75 border-none rounded-full px-1.5 pr-7.5 py-1.5 font-semibold text-[20px] text-white ${isDarkblue ? "bg-[#02293f]" : "bg-[#0196f4]"}  overflow-hidden`}
    >
      {/* Arrow */}
      <span className={`arrow ${isDarkblue ? " bg-[#0196f4]" : "bg-[#02293f]"}  w-10 h-10 rounded-full flex justify-center items-center text-white font-semibold text-[18px] relative overflow-hidden`}>
        <span className="arrow-inner text-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* → */}
          <MoveRight color="#ffffff" strokeWidth={2.25} />
        </span>
        <span className="arrow-inner-two absolute top-1/2 -translate-x-[180%] -translate-y-1/2"><MoveRight color="#ffffff" strokeWidth={2.25} /></span>
      </span>

      {/* Text */}
      <span className="text block text-[14px]">{label}</span>
    </button>
  );
};

export default AnimatedButton;