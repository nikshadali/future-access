// "use client"

// import {
//   Accordion,
//   AccordionItem,
//   AccordionTrigger,
//   AccordionContent,
// } from "@/components/ui/accordion"
// import ScrollHighlightTitle from "../ui/ScrollHighlightTitle"

// export default function FAQSection() {
//   return (
//     <section className="py-20 px-6 bg-mauve-50">
// <div className="mb-10 text-center">
//             <ScrollHighlightTitle text="Frequently Asked Questions" />
//           </div>
//       <div className="max-w-4xl mx-auto">

//         <Accordion type="single" collapsible>

//           <AccordionItem value="1">
//             <AccordionTrigger>
//               How long does business registration take?
//             </AccordionTrigger>
//             <AccordionContent>
//               Usually between 3–10 working days.
//             </AccordionContent>
//           </AccordionItem>

//           <AccordionItem value="2">
//             <AccordionTrigger>
//               What documents are required?
//             </AccordionTrigger>
//             <AccordionContent>
//               Identification, business name and ownership details.
//             </AccordionContent>
//           </AccordionItem>

//           <AccordionItem value="3">
//             <AccordionTrigger>
//               Can foreigners start a company?
//             </AccordionTrigger>
//             <AccordionContent>
//               Yes, foreign investors can register businesses.
//             </AccordionContent>
//           </AccordionItem>

//         </Accordion>

//       </div>

//     </section>
//   )
// }

"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import ScrollHighlightTitle from "../ui/ScrollHighlightTitle";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Section } from "@/layout/Section";
import { Heading } from "../typography/Heading";

type FAQ = {
  question: string;
  answer: string;
};

interface Props {
  title?: string;
  faqs: FAQ[];
}

export default function FAQSection({ title, faqs }: Props) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  if (!faqs?.length) return null;

  return (
    <Section>
      <Heading>
        <ScrollHighlightTitle text={title || "Frequently Asked Questions"} />
      </Heading>

      <div className="max-w-4xl mx-auto">
        <Accordion
          type="single"
          collapsible
          className=" flex flex-col gap-5 "
          onValueChange={(value) => setOpenItem(value)}
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="group bg-primary rounded-4xl  border-0"
              style={{}}
            >
              <AccordionTrigger
                className={`font-bold w-full rounded-none text-white py-6 text-[20px] hover:no-underline group-hover:text-white/80 [&>svg]:hidden px-5 ${openItem === `item-${index}` ? "border-b border-accent-foreground/50 text-accent" : ""}`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`${openItem === `item-${index}` ? "text-accent" : "text-accent-foreground/50"} group-hover:text-accent`}
                  >
                    {index + 1}
                  </span>
                  {faq.question}
                </div>

                <span
                  className={`ml-4 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
                    openItem === `item-${index}`
                      ? "bg-accent rotate-45"
                      : "bg-accent/70 rotate-0"
                  }`}
                >
                  <Plus
                    size={22}
                    className="text-white transition-transform duration-300"
                  />
                </span>
              </AccordionTrigger>

              <AccordionContent
                className={`text-accent-foreground/90 text-[18px] px-5  py-6 `}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
