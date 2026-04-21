"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Mail, Phone, MapPin } from "lucide-react";
import ScrollHighlightTitle from "./ui/ScrollHighlightTitle";
import { Container } from "./Container";
import { Card, CardContent } from "./ui/card";
import { TextEffectWithExit } from "./ui/TextEffectWithExit";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatedButton } from "./FinanceButton";
import Section from "./ui/section";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const inputStyle =
  "w-full border border-primary/50 rounded-xl px-4 py-3  placeholder:text-gray-400 focus:outline-none focus:border-[#0196f4] transition";
export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export default function GetInTouch() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-animate", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        alert("Message sent successfully!");
        reset();
      } else {
        alert(result.error || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message");
    }
  };

  return (
    <Container>
      <section
        ref={sectionRef}
        className="py-12 sm:py-16 lg:py-24 relative overflow-hidden"
      >
        {/* Accent Glow */}
        <div className="absolute inset-0 bg-primary/5 blur-3xl opacity-30 pointer-events-none" />
        <Section>
          <Section.Title>
            <ScrollHighlightTitle text="Let’s Build Something Powerful" />
          </Section.Title>

          <Section.Description>
            <TextEffectWithExit>
              Whether you're looking to transform your ERP, optimize accounting,
              or unlock AI-driven insights our team is ready to help.
            </TextEffectWithExit>
          </Section.Description>
        </Section>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
          {/* Left Side */}
          <div className="contact-animate space-y-6">
            <div className="space-y-4 pt-6">
              <ContactItem
                icon={<Mail size={20} />}
                name="Email"
                text="contact@futureaxis.ae"
              />
              {/* <ContactItem
                icon={<Phone size={20} />}
                name="Phone"
                text="+971541806929"
              /> */}
              <ContactItem
                icon={<MapPin size={20} />}
                name="Address"
                text="Shams Free Zone, Sharjah, UAE"
              />
            </div>
          </div>

          {/* Right Side Form */}
          <div className="contact-animate p-10 rounded-md border border-primary/50 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <input
                  {...register("name")}
                  placeholder="Full Name"
                  className={inputStyle}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  {...register("email")}
                  placeholder="Email Address"
                  className={inputStyle}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Company */}
              <input
                {...register("company")}
                placeholder="Company Name"
                className={inputStyle}
              />

              {/* Message */}
              <div>
                <textarea
                  {...register("message")}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className={inputStyle}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <AnimatedButton
                label={isSubmitting ? "Sending..." : "Send Message"}
                type="submit"
              />
            </form>
          </div>
        </div>
      </section>
    </Container>
  );
}

function ContactItem({
  icon,
  text,
  name,
}: {
  icon: React.ReactNode;
  text: string;
  name: string;
}) {
  return (
    <Card className="group border border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg">
      <CardContent className="flex items-center gap-4 px-5 py-2">
        {/* Icon */}
        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300">
          {icon}
        </div>

        {/* Text */}
        <div className="text-foreground/80 font-semibold group-hover:text-foreground transition-colors duration-300">
          {name}
          <p className="text-sm font-normal">{text}</p>
        </div>
      </CardContent>
    </Card>
  );
}
