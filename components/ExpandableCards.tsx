// "use client"

// import { use, useEffect, useRef, useState } from "react"
// import gsap from "gsap"
// import { Card } from "@/components/ui/card"
// import { Container } from "./Container"
// import { CircleArrowLeft, CircleArrowRight, CirclePlus } from "lucide-react"
// import useMobile from "@/hooks/useMobile"

// const services = [
//   {
//     title: "Overview",
//     description: "Transform Your Business with AI-Powered ERP, Accounting & Data Solutions",
//     image:
//       "https://bayforward.com/us/wp-content/uploads/2026/01/Frame-2147228923.jpg",
//   },
//   {
//     title: "ERP Services",
//     description: "We transform your ERP, optimizing workflows across Sales, Operations, Finance, and HR for seamless integration, better efficiency with business knowledge and the power of AI.",
//     image:
//       "https://bayforward.com/us/wp-content/uploads/2026/01/2.webp",
//   },
//   {
//     title: "Accounting",
//     description: "Professional accounting services for growing companies.",
//     image:
//       "https://bayforward.com/us/wp-content/uploads/2026/01/3.webp",
//   },
//   {
//     title: "Digital Growth",
//     description: "Drive digital transformation and online presence.",
//     image:
//       "https://bayforward.com/us/wp-content/uploads/2026/01/4.webp",
//   },
//   {
//     title: "Digital Growth",
//     description: "Drive digital transformation and online presence.",
//     image:
//       "https://bayforward.com/us/wp-content/uploads/2026/01/5.webp",
//   },
// ]

// export function ExpandableCards() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const cardsRef = useRef<HTMLDivElement[]>([])
//   const [activeIndex, setActiveIndex] = useState(0)
//   const isMobile = useMobile()

//   useEffect(() => {
//   if (!cardsRef.current.length) return

//   cardsRef.current.forEach((card, i) => {
//     const rotated = card.querySelector(".rotated-title")
//     const topTitle = card.querySelector(".top-title")
//     const content = card.querySelector(".content-wrapper")
//     const plus = card.querySelector(".plus-icon")

//     if (i === activeIndex) {
//       gsap.to(card, {
//         flexGrow: 4,
//         duration: 0.6,
//         ease: "power3.inOut",
//       })

//       gsap.to(rotated, { opacity: 0, scale: 0.8, duration: 0.4 })
//       gsap.to(topTitle, { opacity: 1, y: 0, duration: 0.5, delay: 0.2 })
//       gsap.to(content, { opacity: 1, y: 0, duration: 0.6, delay: 0.2 })
//       gsap.to(plus, { opacity: 0, duration: 0.4 })
//     } else {
//       gsap.to(card, {
//         flexGrow: 0.6,
//         duration: 0.6,
//         ease: "power3.inOut",
//       })

//       gsap.to(rotated, { opacity: 1, scale: 1, duration: 0.4 })
//       gsap.to(topTitle, { opacity: 0, y: -10, duration: 0.3 })
//       gsap.to(content, { opacity: 0, y: 30, duration: 0.4 })
//       gsap.to(plus, { opacity: 1, duration: 0.4 })
//     }
//   })
// }, [activeIndex])

// console.log(activeIndex)
// const expandCard = (index: number) => {
//   setActiveIndex(index)
// }
//    return (
//     <Container>
//       <div
//         ref={containerRef}
//         className="flex w-full h-125 gap-4 mt-25 pb-10"
//       >
//         {services.map((item, index) => {
//   if (isMobile && index !== activeIndex) return null
//         return (
// <div
//   key={index}
//   ref={(el) => {
//     if (el) cardsRef.current[index] = el
//   }}
//   onClick={() => expandCard(index)}
//   className="relative cursor-pointer overflow-hidden rounded-2xl"
//   style={{ flex: "1 1 0%" }}
// >
//   <Card className="h-full w-full rounded-sm relative overflow-hidden text-white">

//    <div
//     className="bg-image absolute inset-0 bg-cover bg-center z-0"
//     style={{ backgroundImage: `url(${item.image})` }}
//   />

//   {/* 2️⃣ Overlay */}
//   <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

//   {/* Rotated Title (Collapsed) */}
//   <div className="rotated-title absolute inset-0 flex items-center justify-center z-10">
//     <h2 className="text-xl font-semibold -rotate-90 tracking-wide whitespace-nowrap">
//       {item.title}
//     </h2>

//   </div>
// <div className="plus-icon absolute bottom-8 opacity-0 left-0 w-full flex items-center justify-center  z-1000 pointer-events-none">
//     <CirclePlus size={30} color="white" />
//     </div>
  
//   <div className="top-title absolute top-6 right-6 opacity-0 z-10">
//     <h2 className="text-2xl font-semibold">
//       {item.title}
//     </h2>
//   </div>
//   {/* Content Wrapper */}
// <div className="content-wrapper absolute bottom-0 left-0 w-full p-6 z-20 flex justify-between items-end">

//   {/* LEFT SIDE */}
//   <div className="left-content max-w-md">
//     <h2 className="text-2xl font-semibold mb-2">
//       {item.title}
//     </h2>
//     <p className="text-sm text-white/80">
//       {item.description}
//     </p>
//   </div>

//   {/* RIGHT SIDE (Navigation) */}
//   <div className="right-controls flex gap-3">
   
//    <CircleArrowLeft
//   size={30}
//   className="cursor-pointer"
//   onClick={(e) => {
//     e.stopPropagation()
//     if (activeIndex > 0) {
//       expandCard(activeIndex - 1)
//     }
//   }}
// />

// <CircleArrowRight
//   size={30}
//   className="cursor-pointer"
//   onClick={(e) => {
//     e.stopPropagation()
//     if (activeIndex < services.length - 1) {
//       expandCard(activeIndex + 1)
//     }
//   }}
// />
    
//   </div>

// </div>

// </Card>
// </div>
         
//         )
//       })}
//       </div>
//       </Container>
//     )
  
// }

"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { Card } from "@/components/ui/card"
import { Container } from "./Container"
import {
  CircleArrowLeft,
  CircleArrowRight,
  CirclePlus,
} from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Overview",
    description:
      "Empowering businesses with intelligent, AI-driven ERP, accounting, and data solutions to streamline operations, enhance decision-making, and accelerate sustainable growth.",
    image: "/overview.png",
  },
  {
    title: "Business Growth",
    description:
      "Optimize and scale your operations with integrated ERP solutions that unify Sales, Operations, Finance, and HR—driving efficiency, visibility, and long-term business growth.",
    image: "/business-growth.png",
  },
  {
    title: "Finance Services",
    description:
      "Comprehensive financial management solutions, including accounting, reporting, and compliance, designed to ensure accuracy, transparency, and strategic financial control.",
    image: "/fincance-services.png",
  },
  {
    title: "Technology Solutions",
    description:
      "Innovative technology solutions that enable digital transformation, enhance system performance, and build a strong, scalable online presence for modern businesses.",
    image: "/tech-solution.png",
  },
]

export function ExpandableCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // -----------------------------
  // Detect screen size
  // -----------------------------
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // -----------------------------
  // Initial Setup (Desktop only)
  // -----------------------------
  useEffect(() => {
    if (isMobile) return

    const ctx = gsap.context(() => {
      gsap.set(cardsRef.current, {
        flex: "1 1 0%",
        flexGrow: 0.6,
      })

      gsap.set(cardsRef.current[0], {
        flexGrow: 4,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [isMobile])

  // -----------------------------
  // Animation on activeIndex change
  // -----------------------------
  useEffect(() => {
    if (!cardsRef.current.length) return

    cardsRef.current.forEach((card, i) => {
      const rotated = card.querySelector(".rotated-title")
      const topTitle = card.querySelector(".top-title")
      const content = card.querySelector(".content-wrapper")
      const plus = card.querySelector(".plus-icon")

      gsap.killTweensOf(card)

      if (isMobile) {
        // Mobile fade animation
        if (i === activeIndex) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4 }
          )
        }
        return
      }

      // Desktop accordion animation
      if (i === activeIndex) {
        gsap.to(card, {
          flexGrow: 4,
          duration: 0.6,
          ease: "power3.inOut",
        })

        gsap.to(rotated, { opacity: 0, duration: 0.3 })
        gsap.to(topTitle, { opacity: 1, y: 0, duration: 0.4 })
        gsap.to(content, { opacity: 1, y: 0, duration: 0.5 })
        gsap.to(plus, { opacity: 0, duration: 0.3 })
      } else {
        gsap.to(card, {
          flexGrow: 0.6,
          duration: 0.6,
          ease: "power3.inOut",
        })

        gsap.to(rotated, { opacity: 1, duration: 0.3 })
        gsap.to(topTitle, { opacity: 0, y: -10, duration: 0.3 })
        gsap.to(content, { opacity: 0, y: 20, duration: 0.3 })
        gsap.to(plus, { opacity: 1, duration: 0.3 })
      }
    })
  }, [activeIndex, isMobile])

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }
  }

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (activeIndex < services.length - 1) {
      setActiveIndex(activeIndex + 1)
    }
  }

  return (
    <Container>
      <div
        ref={containerRef}
        className="flex w-full h-125 gap-4 mt-20 pb-10"
      >
        {services.map((item, index) => {
          if (isMobile && index !== activeIndex) return null

          return (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative cursor-pointer overflow-hidden rounded-2xl flex-1",
                isMobile && "w-full"
              )}
            >
              <Card className="h-full w-full relative overflow-hidden text-white">

                {/* Background */}
                <div
  className="absolute inset-0 bg-cover bg-center z-0"
  style={{ backgroundImage: `url('${item.image}')` }}
/>

                {/* Overlay (FIXED) */}
                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

                {/* Rotated Title */}
                {!isMobile && (
                  <div className="rotated-title absolute inset-0 flex items-center justify-center z-20">
                    <h2 className="text-xl font-semibold -rotate-90 whitespace-nowrap">
                      {item.title}
                    </h2>
                  </div>
                )}

                {/* Plus Icon */}
                {!isMobile && (
                  <div className="plus-icon absolute bottom-8 left-0 w-full flex justify-center z-30">
                    <CirclePlus size={30} />
                  </div>
                )}

                {/* Top Title */}
                <div className="top-title absolute top-6 right-6 z-30">
                  <h2 className="text-2xl font-semibold">
                    {item.title}
                  </h2>
                </div>

                {/* Content */}
                <div className="content-wrapper absolute bottom-0 left-0 w-full p-6 z-30 flex justify-between items-end">
                  <div className="max-w-md">
                    <h2 className="text-2xl font-semibold mb-2">
                      {item.title}
                    </h2>
                    <p className="text-sm text-white/80">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <CircleArrowLeft
                      size={30}
                      className={cn(
                        "cursor-pointer transition",
                        activeIndex === 0 &&
                          "opacity-30 pointer-events-none"
                      )}
                      onClick={goPrev}
                    />
                    <CircleArrowRight
                      size={30}
                      className={cn(
                        "cursor-pointer transition",
                        activeIndex === services.length - 1 &&
                          "opacity-30 pointer-events-none"
                      )}
                      onClick={goNext}
                    />
                  </div>
                </div>

              </Card>
            </div>
          )
        })}
      </div>
    </Container>
  )
}