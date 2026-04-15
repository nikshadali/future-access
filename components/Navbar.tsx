"use client"

import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import { gsap } from "gsap"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler"


export function Navbar() {
  const navRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const lastScroll = useRef(0)
  const [isOpen, setIsOpen] = useState(false)

  // -----------------------------
  // Initial Animation
  // -----------------------------
  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
  }, [])

  // -----------------------------
  // Scroll Hide / Reveal
  // -----------------------------
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (!navRef.current) return

      if (currentScroll > lastScroll.current && currentScroll > 100) {
        // Scroll down → hide
        gsap.to(navRef.current, {
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        })
      } else {
        // Scroll up → show
        gsap.to(navRef.current, {
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        })
      }

      lastScroll.current = currentScroll
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // -----------------------------
  // Mobile Menu Animation
  // -----------------------------
  // useEffect(() => {
  //   if (!mobileMenuRef.current) return

  //   if (isOpen) {
  //     gsap.fromTo(
  //       mobileMenuRef.current,
  //       { y: -20, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
  //     )
  //   } else {
  //     gsap.to(mobileMenuRef.current, {
  //       y: -20,
  //       opacity: 0,
  //       duration: 0.3,
  //     })
  //   }
  // }, [isOpen])
useEffect(() => {
  if (!mobileMenuRef.current) return

  if (isOpen) {
    gsap.to(mobileMenuRef.current, {
      height: "auto",
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
    })
  } else {
    gsap.to(mobileMenuRef.current, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    })
  }
}, [isOpen])
  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary tracking-tight">
         <Image 
         src="/future-axis-logo.png"
          alt="Logo" 
          width={200} 
          height={60} 
          priority
           />
        </Link>

        {/* Desktop Menu */}
       <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
  <Link className="hover:text-accent transition-colors" href="/services">Services</Link>
  <Link className="hover:text-accent transition-colors" href="/about">About</Link>
  <Link className="hover:text-accent transition-colors" href="/contact">Contact</Link>
</nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <AnimatedThemeToggler />
          <Button>Get Started</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* <div
        ref={mobileMenuRef}
        className={cn(
          "md:hidden overflow-hidden bg-background border-t",
          !isOpen && "pointer-events-none"
        )}
      > */}
      <div
  ref={mobileMenuRef}
  className="md:hidden overflow-hidden bg-background border-t border-border"
  style={{ height: 0, opacity: 0 }}
>
        <div className="flex flex-col px-6 py-6 gap-6 text-base">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          
          <Button className="mt-4 w-full">Get Started</Button>
        </div>
      </div>
    </header>
  )
}