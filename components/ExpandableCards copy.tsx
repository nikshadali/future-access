"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Card } from "@/components/ui/card"
import { Container } from "./Container"
import { CircleArrowLeft, CircleArrowRight, CirclePlus } from "lucide-react"

const services = [
  {
    title: "Overview",
    description: "Transform Your Business with AI-Powered ERP, Accounting & Data Solutions",
    image:
      "https://bayforward.com/us/wp-content/uploads/2026/01/Frame-2147228923.jpg",
  },
  {
    title: "ERP Services",
    description: "We transform your ERP, optimizing workflows across Sales, Operations, Finance, and HR for seamless integration, better efficiency with business knowledge and the power of AI.",
    image:
      "https://bayforward.com/us/wp-content/uploads/2026/01/2.webp",
  },
  {
    title: "Accounting",
    description: "Professional accounting services for growing companies.",
    image:
      "https://bayforward.com/us/wp-content/uploads/2026/01/3.webp",
  },
  {
    title: "Digital Growth",
    description: "Drive digital transformation and online presence.",
    image:
      "https://bayforward.com/us/wp-content/uploads/2026/01/4.webp",
  },
  {
    title: "Digital Growth",
    description: "Drive digital transformation and online presence.",
    image:
      "https://bayforward.com/us/wp-content/uploads/2026/01/5.webp",
  },
]

export function ExpandableCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.set(cardsRef.current, {
      flex: "1 1 0%",
      flexGrow: 0.6,
    })

    gsap.set(cardsRef.current[0], {
      flexGrow: 4,
    })

    // First card expanded state
    const firstCard = cardsRef.current[0]
    gsap.set(firstCard.querySelector(".rotated-title"), {
      opacity: 0,
    })
    gsap.set(firstCard.querySelector(".top-title"), {
      opacity: 1,
    })
    gsap.set(".content-wrapper", {
  opacity: 0,
  y: 30,
})
  }, containerRef)

  return () => ctx.revert()
}, [])


const handleClick = (index: number) => {
  cardsRef.current.forEach((card, i) => {
    const rotated = card.querySelector(".rotated-title")
    const topTitle = card.querySelector(".top-title")

    if (i === index) {
      // Expand flex
      gsap.to(card, {
        flexGrow: 4,
        duration: 0.6,
        ease: "power3.inOut",
      })

      // Hide rotated title
      gsap.to(rotated, {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
      })
    

      // Show top-right title
      gsap.to(topTitle, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.2,
      })
// show content
gsap.to(card.querySelector(".content-wrapper"), {
  opacity: 1,
  y: 0,
  duration: 0.6,
  delay: 0.2,
})
 gsap.to(card.querySelector(".plus-icon"), {
  opacity: 0,
 
  duration: 0.4,
})
    } else {
      // Collapse others
      gsap.to(card, {
        flexGrow: 0.6,
        duration: 0.6,
        ease: "power3.inOut",
      })

      // Show rotated title
      gsap.to(rotated, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
      })

      // Hide top-right title
      gsap.to(topTitle, {
        opacity: 0,
        y: -10,
        duration: 0.3,
      })
      // hide content
      gsap.to(card.querySelector(".content-wrapper"), {
  opacity: 0,
  y: 30,
  duration: 0.4,
})
      gsap.to(card.querySelector(".plus-icon"), {
  opacity: 1,
  
  duration: 0.4,
})
    }
  })
}
   return (
    <Container>
      <div
        ref={containerRef}
        className="flex w-full h-125 gap-4 mt-25 pb-10"
      >
        {services.map((item, index) => (
          <div
  key={index}
  ref={(el) => {
    if (el) cardsRef.current[index] = el
  }}
  onClick={() => handleClick(index)}
  className="relative cursor-pointer overflow-hidden rounded-2xl"
  style={{ flex: "1 1 0%" }}
>
  <Card className="h-full w-full rounded-sm relative overflow-hidden text-white">

   <div
    className="bg-image absolute inset-0 bg-cover bg-center z-0"
    style={{ backgroundImage: `url(${item.image})` }}
  />

  {/* 2️⃣ Overlay */}
  <div className="absolute inset-0 bg-black/40 z-10" />

  {/* Rotated Title (Collapsed) */}
  <div className="rotated-title absolute inset-0 flex items-center justify-center z-10">
    <h2 className="text-xl font-semibold -rotate-90 tracking-wide whitespace-nowrap">
      {item.title}
    </h2>

  </div>
<div className="plus-icon absolute bottom-8 opacity-0 left-0 w-full flex items-center justify-center  z-1000">
    <CirclePlus size={30} color="white" />
    </div>
  
  <div className="top-title absolute top-6 right-6 opacity-0 z-10">
    <h2 className="text-2xl font-semibold">
      {item.title}
    </h2>
  </div>
  {/* Content Wrapper */}
<div className="content-wrapper absolute bottom-0 left-0 w-full p-6 z-20 flex justify-between items-end">

  {/* LEFT SIDE */}
  <div className="left-content max-w-md">
    <h2 className="text-2xl font-semibold mb-2">
      {item.title}
    </h2>
    <p className="text-sm text-white/80">
      {item.description}
    </p>
  </div>

  {/* RIGHT SIDE (Navigation) */}
  <div className="right-controls flex gap-3">
    {/* <button className="nav-btn h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition">
      ◀
    </button> */}
    <CircleArrowLeft size={30} />
    <CircleArrowRight size={30} />
    {/* <button className="nav-btn h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition">
      ▶
    </button> */}
  </div>

</div>

</Card>
</div>
        ))}
      </div>
      </Container>
    )
  
}