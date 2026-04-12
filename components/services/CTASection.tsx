"use client";
import AnimatedButton from "../ui/AnimatedButton";

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-primary text-white text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">Ready to Launch Your Business?</h2>

        <p>
          Let our experts handle the legal process while you focus on growing
          your business.
        </p>
 <div className="mt-8 flex justify-center gap-4">
        <AnimatedButton label="  Book Free Consultation" />
        </div>
      </div>
    </section>
  );
}
