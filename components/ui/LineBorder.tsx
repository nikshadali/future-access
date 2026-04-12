"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const LineBorder = () => {
const star = useRef(null);
 useGSAP(() => {

  gsap.from(star.current, {
    translateX: 100,
    duration: 1.5,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  
  });
 })

  return (
    <div className="w-full flex justify-center py-6 bg-[#171619]">
      <div
        className="h-px w-[90%] relative"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 15%, rgba(255,255,255,0.3) 85%, rgba(255,255,255,0) 100%)",
        }}
      >
        <span className="absolute top-1/2 left-0 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF8040]"></span>
        <span ref={star} className="absolute top-1/2 left-1/2 transform -translate-y-1/2 text-[#FF8040]  text-[25px] rotate-45  ">+</span>
        <span className="absolute top-1/2 right-0 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF8040]"></span>
      </div>
    </div>
  );
};

export default LineBorder;
