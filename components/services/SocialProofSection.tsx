"use client"

import { useEffect, useState } from "react";
import { AnimatedNumber } from "../motion-primitives/animated-number"
import { AnimatedNumberBasic } from "../AnimatedNumberBasic";

export default function SocialProofSection({isBgGray= false}: any) {
 
  return (
    <section className={`py-16 px-6 bg-background`}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-3xl flex justify-center font-bold">
              <AnimatedNumberBasic
        
        number={100}
      />
      +
            </h3>
            <p className="text-muted-foreground">Businesses Registered</p>
          </div>

          <div>
            <h3 className="text-3xl flex justify-center font-bold"><AnimatedNumberBasic
        
        number={10} />+</h3>
            <p className="text-muted-foreground">Years Experience</p>
          </div>

          <div>
            <h3 className="text-3xl flex justify-center font-bold"> <AnimatedNumberBasic
        
        number={3} />+</h3>
            <p className="text-muted-foreground">Countries Served</p>
          </div>

          <div>
            <h3 className="text-3xl flex justify-center font-bold"><AnimatedNumberBasic
        
        number={98} />%</h3>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
        </div>
      </section>
  )
}