"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Speration = () => {
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
    <div className="w-full flex justify-center py-6 ">
      <div
        className="h-px w-full relative"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 15%, rgba(255,255,255,0.3) 85%, rgba(255,255,255,0) 100%)",
        }}
      >
        
      </div>
    </div>
  );
};

export default Speration;
