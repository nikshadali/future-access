"use client";

import { motion, useInView } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/motion-variants";
import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatedGlow } from "./AnimatedGlow";
import { Section } from "@/layout/Section";
import { Container } from "@/layout/Container";
import ScrollHighlightTitle from "./ui/ScrollHighlightTitle";


type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { value: 500, suffix: "+", label: "Businesses Supported" },
  { value: 10, suffix: "+", label: "Industries Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isDecimal = value % 1 !== 0;
  const [displayed, setDisplayed] = useState("0");

  const format = useCallback(
    (v: number) => (isDecimal ? v.toFixed(1) : Math.floor(v).toLocaleString()),
    [isDecimal]
  );

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    let start: number | null = null;
    let raf: number;

    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = easeOutQuart(progress);
      setDisplayed(format(eased * value));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value, format]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayed}
      {suffix}
    </span>
  );
}

export function GrowConfidanceSection() {
  return (
    <Section  className="relative overflow-hidden  bg-transparent">
      <AnimatedGlow />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14"
        >
         <ScrollHighlightTitle text="Leading Your Digital Journey To Success" />
         
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i + 2}
              className={`text-center px-8 ${
                i < stats.length - 1
                  ? "md:border-r md:border-primary/20"
                  : ""
              }`}
            >
              <div className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-forground mb-3">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/50 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
