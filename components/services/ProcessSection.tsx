"use client";

import {
  Briefcase,
  MapPin,
  FileText,
  ClipboardCheck,
 
} from "lucide-react";

import ScrollHighlightTitle from "../ui/ScrollHighlightTitle";
import { icons } from "@/lib/icons";

// const stepsElement = [
//   {
//     color: "#0D6EFD",
//     icon: <Briefcase />,
//     title: "Choose Activity",
//     desc: "Define the business activity commercial, professional or industrial.",
//   },
//   {
//     color: "#6710F5",
//     icon: <MapPin />,
//     title: "Pick Jurisdiction",
//     desc: "Select Mainland, Free Zone, or Offshore based on needs.",
//   },
//   {
//     color: "#6F42C1",
//     icon: <FileText />,
//     title: "Reserve Name",
//     desc: "Reserve a trade name compliant with UAE regulations.",
//   },
//   {
//     color: "#D63384",
//     icon: <ClipboardCheck />,
//     title: "Docs & Approvals",
//     desc: "Prepare documents and secure approvals.",
//   },
// ];

export default function ProcessSection({ steps }: any) {
  return (
    <section className="timeline-section bg-background py-10">
      <div className="mb-10 text-center">
        <ScrollHighlightTitle text={steps?.title} />
      </div>

      <ol>
        {steps?.stepsArr?.map((step: any, index: number) => {
          const Icon = icons[step.icon as keyof typeof icons];

          return (
            <li
              key={index}
              className="step-list"
              style={{ "--accent-color": step.color } as React.CSSProperties}
            >
              <div className="icon">{Icon && <Icon />}</div>

              <div className="title">{step.title}</div>

              <div className="descr">{step.desc}</div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
