// export default function CTASection() {
//   return (
//     <section className="relative py-24 overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

//       <div className="relative max-w-6xl mx-auto px-6">
//         <div className="rounded-3xl bg-card border border-border shadow-xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">

//           {/* LEFT CONTENT */}
//           <div className="space-y-6">
//             <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
//               Take Control of Your Financial Future
//             </h2>

//             <p className="text-muted-foreground text-lg">
//               Automate tracking, optimize spending, and gain real-time insights
//               into your finances — all in one powerful platform.
//             </p>

//             <ul className="space-y-3 text-sm">
//               <li className="flex items-center gap-2">
//                 ✅ Bank-level security
//               </li>
//               <li className="flex items-center gap-2">
//                 ✅ Real-time analytics dashboard
//               </li>
//               <li className="flex items-center gap-2">
//                 ✅ No hidden fees
//               </li>
//             </ul>
//           </div>

//           {/* RIGHT CTA */}
//           <div className="flex flex-col items-start md:items-end gap-4">
//             <button className="w-full md:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
//               Get Started Free
//             </button>

//             <button className="text-sm text-muted-foreground hover:text-foreground transition">
//               Book a Demo →
//             </button>

//             {/* Trust Row */}
//             <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
//               <span>🔒 Secure</span>
//               <span>•</span>
//               <span>No credit card required</span>
//               <span>•</span>
//               <span>Cancel anytime</span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { AnimatedButton } from "./FinanceButton";

type CTAProps = {
  title: string;
  description: string;
  primaryAction: string;
  secondaryAction?: string;
  trustPoints?: string[];
};

export default function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  trustPoints = [],
}: CTAProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-3xl bg-card border border-border shadow-xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center"
        >
          {/* LEFT */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-semibold leading-tight"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg"
            >
              {description}
            </motion.p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start md:items-end gap-4">
            {/* Primary CTA */}
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="relative w-full md:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-lg shadow-lg overflow-hidden"
            >
              
              <motion.span
                className="absolute inset-0 rounded-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(var(--glow-primary),0.4), transparent 70%)",
                }}
              />
              <span className="relative z-10">{primaryAction}</span>
            </motion.button> */}

             <AnimatedButton label={primaryAction} />

            {/* Secondary CTA */}
            {secondaryAction && (
              <motion.button
                whileHover={{ x: 5 }}
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                {secondaryAction} →
              </motion.button>
             
            )}

            {/* Trust Points */}
            {trustPoints.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.1 },
                  },
                }}
                className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground pt-2"
              >
                {trustPoints.map((point, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="flex items-center gap-1"
                  >
                    🔒 {point}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}