// 'use client';
// import { useState, useEffect } from 'react';
// import { TextEffect } from './text-effect';


// export function TextEffectWithExit({children}: {children: string}) {
//   const [trigger, setTrigger] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTrigger((prev) => !prev);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);
//   const blurSlideVariants = {
//     container: {
//       hidden: { opacity: 0 },
//       visible: {
//         opacity: 1,
//         transition: { staggerChildren: 0.01 },
//       },
//       exit: {
//         transition: { staggerChildren: 0.01, staggerDirection: 1 },
//       },
//     },
//     item: {
//       hidden: {
//         opacity: 0,
//         filter: 'blur(10px) brightness(0%)',
//         y: 0,
//       },
//       visible: {
//         opacity: 1,
//         y: 0,
//         filter: 'blur(0px) brightness(100%)',
//         transition: {
//           duration: 0.4,
//         },
//       },
//       exit: {
//         opacity: 0,
//         y: -30,
//         filter: 'blur(10px) brightness(0%)',
//         transition: {
//           duration: 0.4,
//         },
//       },
//     },
//   };

//   return (
//     <TextEffect
//       className='inline-flex'
//       per='char'
//       variants={blurSlideVariants}
//       trigger={trigger}
//     >
//     {children}
//     </TextEffect>
//   );
// }


'use client';
import { useState, useEffect, useRef } from 'react';
import { TextEffect } from './text-effect';

export function TextEffectWithExit({ children }: { children: string }) {
  const [trigger, setTrigger] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTrigger(true);
          observer.disconnect(); // ✅ run only once
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const blurSlideVariants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.01 },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        filter: 'blur(10px) brightness(0%)',
        y: 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px) brightness(100%)',
        transition: { duration: 0.4 },
      },
    },
  };

  return (
    <div ref={ref}>
      <TextEffect
        className="block"
        per="char"
        variants={blurSlideVariants}
        trigger={trigger}
      >
        {children}
      </TextEffect>
    </div>
  );
}