'use client'

import { Container } from './Container'
import ScrollHighlightTitle from './ui/ScrollHighlightTitle'
import ServiceList from './ServiceList'
import { BookOpen, Briefcase, Code2, Cpu, DollarSign, MessageSquare, Palette, PenTool, Rocket, ShoppingBag, TrendingUp } from 'lucide-react'
import { TextEffectWithExit } from './ui/TextEffectWithExit'
import Section from './ui/section'
import { url } from 'inspector'
const tabs = [
  {
    label: "Business Growth Services",
    heading: "Accelerating your brand’s impact —",
    description:
      "We help businesses grow by creating strong visual identities and strategic brand messaging that connect with your audience.",
    points: [
      "Logo & visual identity design",
      "Typography & color systems",
      "Brand guidelines",
      "Creative direction",
    ],
    image: "/list-01.png",
    icon: <TrendingUp size={40} />,
    url: "/services"
  },
  {
    label: "Finance Services",
    heading: "Smart solutions for financial growth —",
    description:
      "Our experts provide efficient financial services and technology-driven solutions to optimize your business operations and decision-making.",
    points: [
      "Accounting & bookkeeping",
      "Financial planning & analysis",
      "Tax advisory & compliance",
      "Investment strategy support",
    ],
    image: "/list-02.png",
    icon: <DollarSign size={40} />,
    url: "/services"
  },
  {
    label: "Technology Solutions",
    heading: "Innovative tech for modern businesses —",
    description:
      "We deliver technology solutions that streamline operations, improve user experience, and drive measurable results across platforms.",
    points: [
      "Custom software development",
      "Cloud & infrastructure solutions",
      "System integration",
      "Tech consulting & support",
    ],
    image: "/list-03.png",
    icon: <Cpu size={40} />,
    url: "/services"
  },
  {
    label: "Business Setup",
    heading: "Helping your business launch successfully —",
    description:
      "We provide end-to-end support for setting up your business, including legal, operational, and strategic guidance for sustainable growth.",
    points: [
      "Company registration",
      "Business planning & strategy",
      "Operational setup",
      "Compliance & licensing",
    ],
    image: "/list-04.png",
    icon: <Briefcase size={40} />,
    url: "/services/business-setup"
  },
  {
    label: "Bookkeeping",
    heading: "Accurate financial records made easy —",
    description:
      "We manage your bookkeeping needs efficiently, ensuring accurate records, timely reporting, and financial clarity for your business.",
    points: [
      "Expense & income tracking",
      "Bank reconciliation",
      "Invoice & payment management",
      "Financial reporting",
    ],
    image: "/list-05.png",
    icon: <BookOpen size={40} />,
    url: "/services/bookkeeping"
  },
  {
    label: "WhatsApp Automation",
    heading: "Automate your messaging workflow —",
    description:
      "We set up WhatsApp automation to streamline communication with customers, saving time and enhancing engagement for your business.",
    points: [
      "WhatsApp API integration",
      "Automated messaging campaigns",
      "Customer interaction tracking",
      "Broadcast & response automation",
    ],
    image: "/list-06.png",
    icon: <MessageSquare size={40} />,
    url: "/services/whatsapp-automation"
  },
];
const Services = () => {
  console.log(Section)
console.log(Section?.Title)
  return (
    <Container>
      
<Section>
  <Section.Title>
    <ScrollHighlightTitle text="We are offering the best solutions" />
  </Section.Title>

  <Section.Description>
    <TextEffectWithExit>
       We deliver cutting edge, AI powered solutions designed to streamline operations,
  boost efficiency, and accelerate your business growth in a competitive digital world.
    </TextEffectWithExit>
  </Section.Description>
</Section>
<ServiceList  tabs={tabs}/>
    </Container>
  )
}

export default Services
