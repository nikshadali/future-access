// import GetInTouch from '@/components/GetInTouch'


// const ContactPage = () => {
//   return (
//     <div>
//       <GetInTouch/>
      
//     </div>
//   )
// }

// export default ContactPage
import GetInTouch from "@/components/GetInTouch";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import { Section } from "@/layout/Section";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <Hero
        badge="Free Consultation"
        title="Let’s Talk About"
        highlight="Your Business"
        description="Whether you're starting, scaling, or optimizing — our experts"
        primaryAction="Get Free Consultation"
        secondaryAction="View Services"
        stats={[
          { value: "500+", label: "Businesses Supported" },
          { value: "10+", label: "Industries Served" },
          { value: "98%", label: "Client Satisfaction" },
        ]}
       
      />

      {/* 2. FORM */}
      <GetInTouch />

     

      {/* 4. TRUST SECTION */}
      <Section className="text-center" >
        <h2 className="text-2xl font-semibold">
          Trusted by Growing Businesses
        </h2>
        <p className="text-muted-foreground mt-2">
          Helping startups and enterprises streamline operations and scale faster.
        </p>
      </Section>

      

      {/* 6. FINAL CTA */}
      <CTASection
        title="Still Have Questions?"
        description="Our team is ready to help you make the right decision."
        primaryAction="Book a Call"
        trustPoints={["Free consultation", "No obligation", "Fast response"]}
      />

    </div>
  );
}


function ContactCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-card text-center">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{value}</p>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="p-4 border border-border rounded-xl">
      <p className="font-medium">{q}</p>
      <p className="text-muted-foreground text-sm mt-1">{a}</p>
    </div>
  );
}