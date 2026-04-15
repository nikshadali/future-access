// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// function GlowOrbs() {
//   return (
//     <>
//       <motion.div
//         className="absolute top-[10%] left-[40%] w-[600px] h-[600px] rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(var(--glow-primary),0.18) 0%, transparent 70%)",
//           filter: "blur(80px)",
//         }}
//         animate={{
//           x: [0, 80, -40, 0],
//           y: [0, -50, 30, 0],
//           scale: [1, 1.1, 0.95, 1],
//         }}
//         transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <motion.div
//         className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(var(--glow-accent),0.12) 0%, transparent 70%)",
//           filter: "blur(100px)",
//         }}
//         animate={{
//           x: [0, -60, 40, 0],
//           y: [0, 40, -30, 0],
//           scale: [1, 0.95, 1.08, 1],
//         }}
//         transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <motion.div
//         className="absolute -top-[5%] right-[30%] w-[400px] h-[400px] rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(var(--glow-primary),0.08) 0%, transparent 70%)",
//           filter: "blur(60px)",
//         }}
//         animate={{
//           x: [0, 40, -20, 0],
//           y: [0, 20, -10, 0],
//         }}
//         transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//       />
//     </>
//   );
// }

// export function AnimatedGlow() {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {mounted && <GlowOrbs />}
//     </div>
//   );
// }

// function CardGlowOrbs() {
//   return (
//     <>
//       <motion.div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full"
//         style={{
//           background:
//             "radial-gradient(ellipse, rgba(var(--glow-primary),0.13) 0%, rgba(var(--glow-primary),0.04) 50%, transparent 80%)",
//           filter: "blur(40px)",
//         }}
//         animate={{
//           x: ["-50%", "-45%", "-55%", "-50%"],
//           y: ["-50%", "-55%", "-45%", "-50%"],
//           scale: [1, 1.06, 0.96, 1],
//         }}
//         transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <motion.div
//         className="absolute top-[30%] left-[20%] w-[70%] h-[70%] rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(var(--glow-accent),0.09) 0%, transparent 70%)",
//           filter: "blur(50px)",
//         }}
//         animate={{
//           x: [0, 30, -20, 0],
//           y: [0, -20, 15, 0],
//           scale: [1, 0.94, 1.08, 1],
//         }}
//         transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <motion.div
//         className="absolute top-[10%] right-[10%] w-[50%] h-[50%] rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(var(--glow-primary),0.07) 0%, transparent 70%)",
//           filter: "blur(35px)",
//         }}
//         animate={{
//           x: [0, -25, 15, 0],
//           y: [0, 15, -10, 0],
//         }}
//         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//       />
//     </>
//   );
// }

// export function CardGlow() {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
//       {mounted && <CardGlowOrbs />}
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function GlowOrbs() {
  return (
    <>
      <motion.div
        className="absolute top-[10%] left-[40%] w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30,145,202,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(58, 167, 222,0.12) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.95, 1.08, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -top-[5%] right-[30%] w-[400px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(58, 167, 222,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, 20, -10, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

export function AnimatedGlow() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {mounted && <GlowOrbs />}
    </div>
  );
}

function CardGlowOrbs() {
  return (
    <>
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(58, 167, 222,0.13) 0%, rgba(255,122,0,0.04) 50%, transparent 80%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: ["-50%", "-45%", "-55%", "-50%"],
          y: ["-50%", "-55%", "-45%", "-50%"],
          scale: [1, 1.06, 0.96, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[30%] left-[20%] w-[70%] h-[70%] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,194,71,0.09) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 15, 0],
          scale: [1, 0.94, 1.08, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[10%] right-[10%] w-[50%] h-[50%] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,122,0,0.07) 0%, transparent 70%)",
          filter: "blur(35px)",
        }}
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 15, -10, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

export function CardGlow() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
      {mounted && <CardGlowOrbs />}
    </div>
  );
}
