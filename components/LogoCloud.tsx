"use client"

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import { Container } from "./Container"
import Section from "./ui/section"
import ScrollHighlightTitle from "./ui/ScrollHighlightTitle"
import { TextEffectWithExit } from "./ui/TextEffectWithExit"

const logos = [
  "/logos/google.svg",
  "/logos/microsoft.svg",
  "/logos/amazon.svg",
  "/logos/spotify.svg",
  "/logos/slack.svg",
  "/logos/airbnb.svg",
]

export function LogoCloud() {
  const marqueeRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    const el = marqueeRef.current
    if (!el) return

    const animation = gsap.to(el, {
      xPercent: -50,
      duration: 20,
      ease: "none",
      repeat: -1,
    })

    el.addEventListener("mouseenter", () => animation.pause())
    el.addEventListener("mouseleave", () => animation.resume())
  }, [])

  return (
    <Container>
      <Section>
        <Section.Title>
          <ScrollHighlightTitle text="Trusted by innovative companies worldwide" />
        </Section.Title>

        <Section.Description>
          <TextEffectWithExit>
            Empowering organizations with powerful digital products and scalable systems.
          </TextEffectWithExit>
        </Section.Description>
      </Section>

      <section className="overflow-hidden py-12 relative">
        
        {/* Edge Fade */}
        {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#010b14] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#010b14] to-transparent z-10" /> */}

        {/* Marquee */}
        <div className="flex w-max gap-16" ref={marqueeRef}>
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center
              bg-[#021f33] border border-[#0196f4]/20
              rounded-xl px-10 py-6
              hover:border-[#0196f4]
              transition"
            >
              <Image
                src={logo}
                alt="client logo"
                width={120}
                height={40}
                className="opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </div>

      </section>
    </Container>
  )
}