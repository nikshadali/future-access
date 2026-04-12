'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const companyLogo: string[] = [
  "Metropolitan Premium Properties",
  "Lounge 17",
  "NSTYLE BEAUTY LOUNGE",
  "Breaking Bread",
  "Binghatti Developers",
  "BLACKOAK REAL ESTATE"
]

const TestimonialTrust: React.FC = () => {
  const marqueeRef = useRef<HTMLUListElement | null>(null)

  useGSAP(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const totalWidth = marquee.scrollWidth / 2 // duplicated list

    const tween = gsap.to(marquee, {
      x: `-=${totalWidth}`,
      duration: 20,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: (x: string) => `${parseFloat(x) % totalWidth}px`
      }
    })

    return () => {
      tween.kill() // cleanup for safety
    }
  }, [])

  return (
    <div className="w-full py-6 overflow-hidden">
      <div className="container flex items-center gap-6">
        <div className="overflow-hidden relative w-full">
          <ul
            ref={marqueeRef}
            className="flex gap-10 whitespace-nowrap"
          >
            {[...companyLogo, ...companyLogo].map((item, index) => (
              <li
                key={index}
                className="text-white text-lg font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TestimonialTrust