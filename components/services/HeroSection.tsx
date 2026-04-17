import { Service } from "@/types/services";
import { Button } from "../ui/button";
import { Rocket } from "lucide-react";
import AnimatedButton from "../ui/AnimatedButton";
import Link from "next/link";
import Hero from "../Hero";


export default function HeroSection({ service }: { service: Service }) {
  return (
    // <section className="py-20 px-6 bg-accent">
    //   <div className="max-w-7xl mx-auto text-center">

    //     <h1 className="text-[60px] md:text-5xl font-extrabold text-accent-foreground">
    //       {service.hero.title}
    //     </h1>

    //     <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
    //       {service.hero.description}
    //     </p>

    //   </div>
    // </section>

    //  <section className="py-20 px-6 bg-accent">
    //     <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    //       <div className="space-y-6">
    //         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-accent-foreground">
    //           {service.hero.title}
    //         </h1>

    //         <p className="text-lg text-accent-foreground/80">
    //           {service.hero.description}
    //         </p>

    //         <div className="flex gap-4">
    //           {/* <Button size="lg">Start Your Business</Button> */}
    //           <Link href="/contact">
    //           <AnimatedButton label="Start Your Business" isDarkblue={true}/>
    //          </Link>
    //          <Link href="/contact">
    //           <AnimatedButton label="Free Consultation" isDarkblue={true}/>
    //          </Link>
    //           {/* <Button size="lg" variant="outline">
    //             Free Consultation
    //           </Button> */}
    //         </div>

    //         <div className="flex gap-6 pt-4 text-sm text-accent-foreground">
    //           <span>✔ 500+ Businesses</span>
    //           <span>✔ 10+ Years Experience</span>
    //           <span>✔ 15+ Countries</span>
    //         </div>
    //       </div>

    //       <div className="flex justify-center">
    //         <Rocket className="w-64 h-64 text-primary opacity-80" />
    //       </div>
    //     </div>
    //   </section>

       <Hero
        badge="Business & Financial Consulting"
        title= {service.hero.title}
        highlight={service.hero.highlight}
        description={service.hero.description}
        primaryAction="Start Your Business"
        secondaryAction="Free Consultation"
        stats={[
          { value: "500+", label: "Businesses Supported" },
          { value: "10+", label: "Industries Served" },
          { value: "98%", label: "Client Satisfaction" },
        ]}
        
      />
  )
}

