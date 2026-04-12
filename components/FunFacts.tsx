"use client"


import { NumberTicker } from "./ui/number-ticker"
import AnimatedButton from "./ui/AnimatedButton"
import Link from "next/link"


const stats = [
  {
    value: 100,
    label: "Businesses Registered",
  },
  {
    value: 10,
    label: "Years Experience",
  },
  {
    value: 3,
    label: "Country We Serve",
  },
  {
    value: 98,
    label: "Client Satisfaction",
    suffix: "%", // 👈 only here
  },
]

export default function FunFacts() {
  return (
    <section
      className="relative w-full bg-cover bg-center "
      style={{
        backgroundImage: "url('/funfact.png')",
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-blue-950/80" /> */}

      <div className="relative max-w-7xl mx-auto px-6 py-24 text-white">
        {/* Heading */}
        <div className="max-w-xl space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Leading Your <br />
            Digital Journey To Success
          </h2>

          {/* <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Let's Work Together
          </Button> */}
          <Link href="/contact" >
          <AnimatedButton label="Let's Work Together" />
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 items-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start md:border-l md:border-white/30 md:pl-10 first:border-none first:pl-0"
            >
             <NumberTicker
      value={item.value}
      suffix={item.suffix}
      className="text-8xl font-medium tracking-tighter whitespace-pre-wrap text-white dark:text-white"
    />
              <span className="text-sm opacity-80 mt-2">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}