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

export default function ContactPage() {
  return (
    <div className="flex flex-col">

      {/* 1. HERO */}
      <section className="py-20 text-center max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Let’s Talk About Your Business
        </h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Whether you're starting, scaling, or optimizing — our experts are here to help.
        </p>

        {/* Trust badge */}
        <p className="mt-4 text-sm text-muted-foreground">
          🔒 100% confidential • No commitment required
        </p>
      </section>

      {/* 2. FORM */}
      <GetInTouch />

     

      {/* 4. TRUST SECTION */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-semibold">
          Trusted by Growing Businesses
        </h2>
        <p className="text-muted-foreground mt-2">
          Helping startups and enterprises streamline operations and scale faster.
        </p>
      </section>

      

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