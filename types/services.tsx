import { IconName } from "@/lib/icons"

export type ServiceSection =
  | "hero"
  | "socialProof"
  | "services"
  | "process"
  | "features"
  | "industries"
  | "testimonials"
  | "faq"
  | "cta"
  | "techStack"
  | "useCases"
  | "integrations"

  export type FAQItem = {
  question: string
  answer: string
}
export interface Service {
  slug: string
  title: string
  category: string

  hero: {
    title: string
    description: string
  }

  services?: {
    title: string
    description: string
   
    servicesCard?: {
      title: string
      description?: string
      icon: IconName
    }[]
  }

  steps?:{
    title: string
    
   stepsArr :{
    title: string
    desc: string
    color:string
    icon:React.ReactNode
  }[]
  }
  features?:{
    title: string
    featuresArr:string[]
  } 
industries?:{
    title: string
     industriesArr?: string[]
}
 
faq?: {
    title: string
    faqs: FAQItem[]
  }
  sections: ServiceSection[]

  techStack?: {
    title: string
    stack: {
      name: string
      icon: string
    }[]
  }
  integrations?: {
    title: string
    items: {
      name: string
      icon?: IconName
      desc?: string
    }[]
  }
  useCases?: {
    title: string
    cases: {
      title?: string
      desc?: string
      icon?: IconName
    }[]
  }
}