// // import { Button } from "@/components/ui/button";
// // import { ArrowRight } from "lucide-react";

// // export default function Hero() {
// //   return (
// //     <section className="relative overflow-hidden bg-background">
// //       {/* Background Gradient Accent */}
// //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1e91ca20,transparent_50%)]" />

// //       <div className="relative mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-16">
// //         {/* LEFT CONTENT */}
// //         <div className="max-w-xl">
// //           <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
// //             Business & Financial Consulting
// //           </span>

// //           <h1 className="mt-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
// //             Build, Scale & Optimize Your Business
// //             <span className="text-primary"> With Confidence</span>
// //           </h1>

// //           <p className="mt-6 text-lg text-muted-foreground">
// //             From company formation to financial strategy and automation, we help businesses launch faster, operate smarter, and grow sustainably.
// //           </p>

// //           {/* CTA */}
// //           <div className="mt-8 flex flex-wrap items-center gap-4">
// //             <Button className="rounded-xl px-6 py-3 text-base">
// //               Get Free Consultation
// //               <ArrowRight className="ml-2 h-4 w-4" />
// //             </Button>

// //             <Button
// //               variant="outline"
// //               className="rounded-xl px-6 py-3 text-base"
// //             >
// //               View Services
// //             </Button>
// //           </div>

// //           {/* TRUST INDICATORS */}
// //           <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
// //             <div>
// //               <p className="text-2xl font-semibold text-foreground">500+</p>
// //               <p>Businesses Supported</p>
// //             </div>
// //             <div>
// //               <p className="text-2xl font-semibold text-foreground">10+</p>
// //               <p>Industries Served</p>
// //             </div>
// //             <div>
// //               <p className="text-2xl font-semibold text-foreground">98%</p>
// //               <p>Client Satisfaction</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* RIGHT VISUAL */}
// //         <div className="relative mt-16 lg:mt-0 lg:flex-1">
// //           <div className="relative rounded-3xl border border-border bg-card p-6 shadow-xl">
// //             {/* Fake Dashboard UI */}
// //             <div className="space-y-4">
// //               <div className="h-4 w-32 rounded bg-muted" />
// //               <div className="h-4 w-48 rounded bg-muted" />

// //               <div className="mt-6 grid grid-cols-2 gap-4">
// //                 <div className="rounded-xl bg-muted p-4">
// //                   <p className="text-sm text-muted-foreground">Revenue</p>
// //                   <p className="text-xl font-semibold text-foreground">$120K</p>
// //                 </div>
// //                 <div className="rounded-xl bg-muted p-4">
// //                   <p className="text-sm text-muted-foreground">Growth</p>
// //                   <p className="text-xl font-semibold text-primary">+32%</p>
// //                 </div>
// //               </div>

// //               <div className="mt-4 h-24 rounded-xl bg-muted" />
// //             </div>
// //           </div>

// //           {/* Floating Card */}
// //           <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-lg lg:block">
// //             <p className="text-sm text-muted-foreground">Active Clients</p>
// //             <p className="text-lg font-semibold text-foreground">+250</p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";


// import { motion } from "framer-motion";
// import { Button } from "./ui/button";
// import { AnimatedGlow } from "./AnimatedGlow";
// import { AnimatedButton } from "./FinanceButton";


// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-background">
//       <AnimatedGlow />
//       {/* Premium layered background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(30,145,202,0.15),transparent_40%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.12),transparent_40%)]" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.5))]" />
//       </div>

//       <div className="mx-auto max-w-6xl px-6 py-28 text-center">
//         {/* Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="inline-flex items-center gap-2 rounded-full border border-primary dark:border-white/10 bg-white/5  px-4 py-1 text-sm text-primary backdrop-blur"
//         >
//           <span className="h-2 w-2 rounded-full bg-primary" />
//           Business & Financial Consulting
//         </motion.div>

//         {/* Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.1 }}
//           className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
//         >
//           Build, Scale & Optimize
//           <span className="block bg-linear-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
//             Your Business with Confidence
//           </span>
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
//         >
//           From company formation to financial strategy and automation — we help modern businesses move faster, operate smarter, and scale sustainably.
//         </motion.p>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           className="mt-10 flex flex-wrap justify-center gap-4"
//         >
//           {/* <Button >
//             Get Free Consultation
//             <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//           </Button> */}
// {/* <FinanceButton label="Get Free Consultation" /> */}
// <AnimatedButton label="Get Started" />
//           <Button
//             variant="outline"
//             className="rounded-xl px-6 py-3 text-base backdrop-blur"
//           >
//             View Services
//           </Button>
//         </motion.div>

//         {/* TRUST INDICATORS */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.4 }}
//           className="mx-auto mt-14 grid max-w-xl grid-cols-3 gap-6 text-sm"
//         >
//           {[
//             { label: "Businesses Supported", value: "500+" },
//             { label: "Industries Served", value: "10+" },
//             { label: "Client Satisfaction", value: "98%" },
//           ].map((item) => (
//             <div key={item.label}>
//               <p className="text-2xl font-semibold">{item.value}</p>
//               <p className="text-muted-foreground">{item.label}</p>
//             </div>
//           ))}
//         </motion.div>

//         {/* VISUAL (BOTTOM) */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           className="relative mt-20"
//         >
//           <div className="relative mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
//             <div className="space-y-4">
//               <div className="h-4 w-32 rounded bg-foreground/10" />
//               <div className="h-4 w-48 rounded bg-foreground/10" />

//               <div className="mt-6 grid grid-cols-2 gap-4">
//                 <div className="rounded-xl bg-foreground/5 p-4">
//                   <p className="text-sm text-muted-foreground">Revenue</p>
//                   <p className="text-xl font-semibold">$120K</p>
//                 </div>
//                 <div className="rounded-xl bg-foreground/5 p-4">
//                   <p className="text-sm text-muted-foreground">Growth</p>
//                   <p className="text-xl font-semibold text-primary">+32%</p>
//                 </div>
//               </div>

//               <div className="mt-4 h-24 rounded-xl bg-foreground/10" />
//             </div>
//           </div>

//           {/* Floating card */}
//           <div className="absolute -bottom-8 left-1/2 hidden -translate-x-1/2 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur lg:block">
//             <p className="text-sm text-muted-foreground">Active Clients</p>
//             <p className="text-lg font-semibold">+250</p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { AnimatedGlow } from "./AnimatedGlow";
import { AnimatedButton } from "./FinanceButton";
import { isBot } from "next/dist/server/web/spec-extension/user-agent";

/* ---------- TYPES ---------- */
type HeroProps = {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  primaryAction: string;
  secondaryAction?: string;
  stats?: { label: string; value: string }[];
  isBottom?: boolean;
};

/* ---------- ANIMATION VARIANTS ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function Hero({
  badge,
  title,
  highlight,
  description,
  primaryAction,
  secondaryAction,
  stats = [],
  isBottom = false,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-background">
      <AnimatedGlow />

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(30,145,202,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.5))]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-28 text-center">
        {/* Badge */}
        {badge && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-primary bg-white/5 px-4 py-1 text-sm text-primary backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            {badge}
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          {title}
          {highlight && (
            <span className="block bg-linear-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
              {highlight}
            </span>
          )}
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          {description}
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <AnimatedButton label={primaryAction} />

          {secondaryAction && (
            <Button
              variant="outline"
              className="rounded-xl px-6 py-3 text-base backdrop-blur"
            >
              {secondaryAction}
            </Button>
          )}
        </motion.div>

        {/* Stats */}
        {stats.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mx-auto mt-14 grid max-w-xl grid-cols-3 gap-6 text-sm"
          >
            {stats.map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-semibold">{item.value}</p>
                <p className="text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Visual */}
        {isBottom &&
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="relative mt-20"
        >
          <div className="relative mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="space-y-4">
              <div className="h-4 w-32 rounded bg-foreground/10" />
              <div className="h-4 w-48 rounded bg-foreground/10" />

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-foreground/5 p-4">
                  <p className="text-sm text-muted-foreground">Revenue</p>
                  <p className="text-xl font-semibold">$120K</p>
                </div>
                <div className="rounded-xl bg-foreground/5 p-4">
                  <p className="text-sm text-muted-foreground">Growth</p>
                  <p className="text-xl font-semibold text-primary">+32%</p>
                </div>
              </div>

              <div className="mt-4 h-24 rounded-xl bg-foreground/10" />
            </div>
          </div>
        </motion.div>
        }
      </div>
    </section>
  );
}