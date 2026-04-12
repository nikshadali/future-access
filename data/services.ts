import { Service } from "@/types/services";

export const services: Service[] = [
  {
    slug: "business-setup",
    title: "Business Setup",
    category: "Business Growth",

    hero: {
      title: "Start Your Business Legally Fast, Simple and Stress-Free",
      description:
        "We help entrepreneurs and investors launch companies quickly with full compliance.",
    },
    services:{
      title:" We handle the entire process from registration to compliance.",
      description:"We provide a comprehensive suite of legal services to help you launch your business and meet compliance requirements.",
  servicesCard: [
      {
        title: "Company Registration",
        description: "Register your company legally with the right structure and documentation.",
        icon: "Building2",
      },
      {
        title: "Business License",
        description: "Get the licenses and permits required to operate legally.",
        icon: "FileCheck",
      },
      {
        title: "Tax & VAT Registration",
        description: "Ensure your business meets tax compliance requirements.",
        icon: "Landmark",
      },
    ],
    },
   

    steps:{ 
      title:"Start Your Business in 4 Simple Steps",
     stepsArr: [
  {
    color: "#0D6EFD",
    icon: "Users",
    title: "Free Consultation",
    desc: "Understand your business goals.",
  },
  {
    color: "#6710F5",
    icon: "Building2",
    title: "Choose Structure",
    desc: "Select legal structure.",
  },
  {
    color: "#6F42C1",
    icon: "FileText",
    title: "Prepare Documents",
    desc: "We prepare all required documents and applications.",
  },
  {
    color: "#D63384",
    icon: "Rocket",
    title: "Launch Business",
    desc: "Your company is registered and ready to operate.",
  },
]
  },
    features: {
      title:"Why Entrepreneurs Choose Us",
    
    featuresArr : [
      "Expert consultants with deep industry knowledge",
      "Fast and efficient business registration process",
      "Transparent pricing with no hidden fees",
      "100% compliance with legal regulations",
      "Dedicated support throughout the process",
      "Trusted by businesses worldwide"
    ],
  },
    industries:{ 
      title:"Industries We Support",
     industriesArr : [
      "E-commerce",
      "Tech Startups",
      "Consulting Firms",
      "Retail Businesses",
      "Digital Agencies",
      "Freelancers",
    ],
  },
  faq: {
  title: "Frequently Asked Questions",
  faqs: [
    {
      question: "How long does business registration take?",
      answer: "Usually between 3–10 working days depending on the jurisdiction."
    },
    {
      question: "What documents are required?",
      answer: "Identification documents, business name, ownership details, and address information."
    },
    {
      question: "Can foreigners start a company?",
      answer: "Yes. Foreign investors can register companies depending on local regulations."
    },
    {
      question: "Do you help with tax registration?",
      answer: "Yes. We assist with tax ID, VAT registration, and compliance setup."
    }
  ]
},
    sections: [
      "hero",
      "socialProof",
      "services",
      "process",
      "features",
      "industries",
      "testimonials",
      "faq",
      "cta",
    ],
  },
  {
  slug: "business-feasibility",
  title: "Business Feasibility",
  category: "Business Growth",

  hero: {
    title: "Validate Your Business Idea Before You Invest",
    description:
      "Our feasibility studies help entrepreneurs evaluate the viability, risks, and profitability of their business ideas before launching.",
  },

  services: {
    title: "Comprehensive Feasibility Analysis",
    description:
      "We provide detailed market, financial, and operational analysis to determine whether your business idea is viable and profitable.",
    servicesCard: [
      {
        title: "Market Research",
        description:
          "Analyze market demand, customer behavior, and industry trends.",
        icon: "Users",
      },
      {
        title: "Competitor Analysis",
        description:
          "Evaluate competitors, their strategies, and market positioning.",
        icon: "Briefcase",
      },
      {
        title: "Financial Forecasting",
        description:
          "Project revenue, costs, and profitability for your business idea.",
        icon: "Landmark",
      },
      {
        title: "Risk Assessment",
        description:
          "Identify potential risks and operational challenges.",
        icon: "ShieldCheck",
      },
      {
        title: "Business Model Evaluation",
        description:
          "Review pricing strategy, revenue model, and operational feasibility.",
        icon: "CheckCircle",
      },
      {
        title: "Feasibility Report",
        description:
          "Receive a detailed report with strategic recommendations.",
        icon: "FileCheck",
      },
    ],
  },

  steps: {
    title: "Our Feasibility Study Process",
   stepsArr: [
  {
    color: "#0D6EFD",
    icon: "Users",
    title: "Initial Consultation",
    desc: "Understand your business idea and objectives.",
  },
  {
    color: "#6710F5",
    icon: "Search",
    title: "Market & Industry Research",
    desc: "Conduct research on industry trends and demand.",
  },
  {
    color: "#6F42C1",
    icon: "BarChart3",
    title: "Financial & Risk Analysis",
    desc: "Evaluate financial viability and potential risks.",
  },
  {
    color: "#D63384",
    icon: "FileText",
    title: "Feasibility Report Delivery",
    desc: "Provide a complete report with strategic insights.",
  },
]
  },

  features: {
    title: "Why Businesses Trust Our Feasibility Studies",
    featuresArr: [
      "Comprehensive market research and analysis",
      "Detailed competitor benchmarking",
      "Accurate financial feasibility projections",
      "Risk and opportunity assessment",
      "Strategic recommendations for growth",
      "Data-driven decision support",
    ],
  },

  industries: {
    title: "Industries We Analyze",
    industriesArr: [
      "Startups",
      "E-commerce",
      "Retail",
      "Technology",
      "Consulting",
      "Manufacturing",
    ],
  },
faq: {
  title: "Frequently Asked Questions",
  faqs: [
    {
      question: "How long does business registration take?",
      answer: "Usually between 3–10 working days depending on the jurisdiction."
    },
    {
      question: "What documents are required?",
      answer: "Identification documents, business name, ownership details, and address information."
    },
    {
      question: "Can foreigners start a company?",
      answer: "Yes. Foreign investors can register companies depending on local regulations."
    },
    {
      question: "Do you help with tax registration?",
      answer: "Yes. We assist with tax ID, VAT registration, and compliance setup."
    }
  ]
},
  sections: [
    "hero",
    "services",
    "process",
    "features",
    "industries",
    "testimonials",
    "faq",
    "cta",
  ],
},
{
  slug: "staff-support-services",
  title: "Staff Support Services",
  category: "Business Growth",

  hero: {
    title: "Reliable Staff Support to Help Your Business Scale",
    description:
      "We provide skilled professionals and operational support to help businesses manage workload, improve efficiency, and focus on growth.",
  },

  services: {
    title: "Flexible Staffing & Business Support Solutions",
    description:
      "Our staff support services help businesses access skilled professionals for administrative, operational, and technical roles without the complexity of full-time hiring.",
    servicesCard: [
      {
        title: "Administrative Support",
        description:
          "Professional administrative staff to manage daily office tasks and operations.",
        icon: "Users",
      },
      {
        title: "Customer Support Staff",
        description:
          "Dedicated customer support professionals to handle client inquiries and service requests.",
        icon: "Headset",
      },
      {
        title: "Virtual Assistants",
        description:
          "Remote assistants to support scheduling, communication, and business coordination.",
        icon: "Laptop",
      },
      {
        title: "Operational Support",
        description:
          "Skilled staff to support operational workflows and business processes.",
        icon: "Briefcase",
      },
      {
        title: "Project Support",
        description:
          "Temporary staff to assist with short-term projects and workload spikes.",
        icon: "ClipboardCheck",
      },
      {
        title: "Back Office Support",
        description:
          "Reliable staff to handle documentation, reporting, and internal processes.",
        icon: "FileCheck",
      },
    ],
  },

  steps: {
    title: "Our Staff Support Process",
    stepsArr: [
  {
    color: "#0D6EFD",
    icon: "Users",
    title: "Understand Your Needs",
    desc: "We assess your staffing requirements and business goals.",
  },
  {
    color: "#6710F5",
    icon: "UserCheck",
    title: "Talent Matching",
    desc: "We identify skilled professionals suitable for your business.",
  },
  {
    color: "#6F42C1",
    icon: "ClipboardCheck",
    title: "Onboarding & Integration",
    desc: "Selected staff are onboarded and aligned with your workflow.",
  },
  {
    color: "#D63384",
    icon: "Headset",
    title: "Ongoing Support",
    desc: "We provide continuous management and performance monitoring.",
  },
]
  },

  features: {
    title: "Why Businesses Choose Our Staff Support",
    featuresArr: [
      "Access to experienced and skilled professionals",
      "Flexible staffing solutions for growing businesses",
      "Reduced hiring and HR management overhead",
      "Scalable support for projects and operations",
      "Reliable and efficient workforce solutions",
      "Dedicated support for business productivity",
    ],
  },

  industries: {
    title: "Industries We Support",
    industriesArr: [
      "E-commerce",
      "Technology Startups",
      "Consulting Firms",
      "Retail Businesses",
      "Digital Agencies",
      "Professional Services",
    ],
  },

  faq: {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "What are staff support services?",
        answer:
          "Staff support services provide businesses with skilled professionals who assist with administrative, operational, and support tasks.",
      },
      {
        question: "Can staff support be temporary?",
        answer:
          "Yes. Businesses can hire staff for short-term projects, seasonal workloads, or ongoing operational support.",
      },
      {
        question: "Do you provide remote staff?",
        answer:
          "Yes. We offer both remote and on-site staff depending on your business requirements.",
      },
      {
        question: "How quickly can staff be deployed?",
        answer:
          "Depending on the role, staff can usually be matched and deployed within a few days.",
      },
    ],
  },

  sections: [
    "hero",
    "services",
    "process",
    "features",
    "industries",
    "faq",
    "cta",
  ],
},
{
  slug: "fractional-cfo",
  title: "Fractional CFO",
  category: "Finance",

  hero: {
    title: "Strategic CFO Expertise Without the Full-Time Cost",
    description:
      "Get experienced financial leadership to guide your business decisions, improve cash flow, and drive sustainable growth.",
  },

  services: {
    title: "Financial Leadership for Growing Businesses",
    description:
      "Our Fractional CFO services provide strategic financial planning, reporting, and advisory support to help businesses make smarter financial decisions.",
    servicesCard: [
      {
        title: "Financial Strategy & Planning",
        description:
          "Develop long-term financial strategies aligned with your business goals.",
        icon: "Landmark",
      },
      {
        title: "Cash Flow Management",
        description:
          "Monitor and optimize cash flow to maintain financial stability.",
        icon: "TrendingUp",
      },
      {
        title: "Financial Reporting & Insights",
        description:
          "Receive clear financial reports and actionable business insights.",
        icon: "BarChart3",
      },
      {
        title: "Budgeting & Forecasting",
        description:
          "Create budgets and financial forecasts to guide business growth.",
        icon: "Calculator",
      },
      {
        title: "Fundraising & Investor Support",
        description:
          "Prepare financial models and reports for investors and funding rounds.",
        icon: "Briefcase",
      },
      {
        title: "Profitability Optimization",
        description:
          "Analyze costs and revenue streams to improve business profitability.",
        icon: "LineChart",
      },
    ],
  },

  steps: {
    title: "Our Fractional CFO Engagement Process",
   stepsArr: [
  {
    color: "#0D6EFD",
    icon: "BarChart3",
    title: "Financial Assessment",
    desc: "Analyze your current financial health, reports, and processes.",
  },
  {
    color: "#6710F5",
    icon: "Target",
    title: "Strategy Development",
    desc: "Create a financial strategy aligned with your business goals.",
  },
  {
    color: "#6F42C1",
    icon: "Settings",
    title: "Implementation & Monitoring",
    desc: "Implement financial systems, KPIs, and performance tracking.",
  },
  {
    color: "#D63384",
    icon: "TrendingUp",
    title: "Ongoing CFO Advisory",
    desc: "Provide continuous strategic guidance and financial oversight.",
  },
]
  },

  features: {
    title: "Why Businesses Choose Our CFO Services",
    featuresArr: [
      "Experienced CFO-level financial leadership",
      "Strategic financial planning and forecasting",
      "Improved cash flow management",
      "Clear financial reporting and insights",
      "Investor-ready financial models",
      "Cost-effective alternative to hiring a full-time CFO",
    ],
  },

  industries: {
    title: "Industries We Support",
    industriesArr: [
      "Startups",
      "SaaS Companies",
      "E-commerce",
      "Consulting Firms",
      "Digital Agencies",
      "Technology Companies",
    ],
  },

  faq: {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is a Fractional CFO?",
        answer:
          "A Fractional CFO is an experienced financial executive who provides part-time strategic financial leadership to businesses.",
      },
      {
        question: "When should a business hire a Fractional CFO?",
        answer:
          "Businesses typically hire a Fractional CFO when they need financial strategy, forecasting, or investor reporting but don't require a full-time CFO.",
      },
      {
        question: "Is a Fractional CFO suitable for startups?",
        answer:
          "Yes. Startups benefit greatly from CFO-level financial planning without the high cost of a full-time executive.",
      },
      {
        question: "Do you help with fundraising preparation?",
        answer:
          "Yes. We prepare financial models, investor reports, and financial strategies to support fundraising efforts.",
      },
    ],
  },

  sections: [
    "hero",
    "services",
    "process",
    "features",
    "industries",
    "faq",
    "cta",
  ],
},
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    category: "Finance",

    hero: {
      title: "Accurate Bookkeeping for Growing Businesses",
      description:
        "Keep your financial records organized and compliant.",
    },

    services:{
       title:" We handle the entire process from registration to compliance.",
      description:"We provide a comprehensive suite of legal services to help you launch your business and meet compliance requirements.",
  servicesCard:
     [
      {
        title: "Transaction Recording",
        description: "Track every financial transaction.",
        icon: "FileCheck",
      },
      {
        title: "Financial Statements",
        description: "Monthly financial reports.",
        icon: "Landmark",
      },
    ],
  },

    features: {
      title:"Why Entrepreneurs Choose Us",
    featuresArr :[
      "Accurate records",
      "Monthly reports",
      "Tax-ready books",
    ],
  },
  faq: {
  title: "Frequently Asked Questions",
  faqs: [
    {
      question: "How long does business registration take?",
      answer: "Usually between 3–10 working days depending on the jurisdiction."
    },
    {
      question: "What documents are required?",
      answer: "Identification documents, business name, ownership details, and address information."
    },
    {
      question: "Can foreigners start a company?",
      answer: "Yes. Foreign investors can register companies depending on local regulations."
    },
    {
      question: "Do you help with tax registration?",
      answer: "Yes. We assist with tax ID, VAT registration, and compliance setup."
    }
  ]
},
    sections: [
      "hero",
      "services",
      "features",
      "cta",
    ],
  },
  {
  slug: "taxation-vat",
  title: "Taxation & VAT",
  category: "Finance",

  hero: {
    title: "Professional Tax & VAT Services for Modern Businesses",
    description:
      "Stay compliant with tax regulations while optimizing your financial operations with expert VAT and taxation support.",
  },

  services: {
    title: "Comprehensive Tax & VAT Solutions",
    description:
      "We help businesses manage tax obligations, VAT registration, filing, and compliance to avoid penalties and maintain financial transparency.",
    servicesCard: [
      {
        title: "VAT Registration",
        description:
          "Register your business for VAT and ensure compliance with regulatory requirements.",
        icon: "FileCheck",
      },
      {
        title: "VAT Return Filing",
        description:
          "Prepare and submit accurate VAT returns on time to avoid penalties.",
        icon: "ClipboardCheck",
      },
      {
        title: "Corporate Tax Advisory",
        description:
          "Professional guidance on corporate tax planning and compliance.",
        icon: "Landmark",
      },
      {
        title: "Tax Compliance",
        description:
          "Ensure your business meets all tax regulations and legal obligations.",
        icon: "ShieldCheck",
      },
      {
        title: "Tax Planning",
        description:
          "Optimize tax structures and strategies to improve financial efficiency.",
        icon: "BarChart3",
      },
      {
        title: "Audit Support",
        description:
          "Professional support and documentation preparation for tax audits.",
        icon: "Search",
      },
    ],
  },

  steps: {
    title: "Our Tax & VAT Process",
    stepsArr: [
      {
        color: "#0D6EFD",
        icon: "Users",
        title: "Initial Consultation",
        desc: "Understand your business activities and tax obligations.",
      },
      {
        color: "#6710F5",
        icon: "FileText",
        title: "Tax Assessment",
        desc: "Analyze your financial data and determine applicable tax requirements.",
      },
      {
        color: "#6F42C1",
        icon: "Calculator",
        title: "VAT Registration & Setup",
        desc: "Register your business for VAT and implement proper tax processes.",
      },
      {
        color: "#D63384",
        icon: "ClipboardCheck",
        title: "Ongoing Compliance",
        desc: "Handle VAT returns, tax filings, and regulatory compliance.",
      },
    ],
  },

  features: {
    title: "Why Businesses Trust Our Tax Experts",
    featuresArr: [
      "Expert tax consultants with regulatory knowledge",
      "Accurate VAT registration and return filing",
      "Reduced risk of tax penalties",
      "Efficient financial compliance processes",
      "Strategic tax planning for business growth",
      "Dedicated advisory and ongoing support",
    ],
  },

  industries: {
    title: "Industries We Support",
    industriesArr: [
      "E-commerce",
      "Technology Startups",
      "Consulting Firms",
      "Retail Businesses",
      "Manufacturing",
      "Professional Services",
    ],
  },

  faq: {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "Who needs to register for VAT?",
        answer:
          "Businesses exceeding the VAT threshold or involved in taxable activities must register for VAT according to local regulations.",
      },
      {
        question: "How often are VAT returns filed?",
        answer:
          "VAT returns are typically filed quarterly, but this may vary depending on jurisdiction.",
      },
      {
        question: "Can you help with VAT penalties or issues?",
        answer:
          "Yes. We assist businesses in resolving VAT issues and ensuring proper compliance going forward.",
      },
      {
        question: "Do you provide ongoing tax support?",
        answer:
          "Yes. We provide continuous tax advisory, filing assistance, and compliance monitoring.",
      },
    ],
  },

  sections: [
    "hero",
    "socialProof",
    "services",
    "process",
    "features",
    "industries",
    "testimonials",
    "faq",
    "cta",
  ],
},
{
  slug: "whatsapp-automation",
  title: "WhatsApp Automation",
  category: "Technology",

  hero: {
    title: "Automate Customer Conversations with WhatsApp",
    description:
      "Engage, convert, and support customers 24/7 using intelligent WhatsApp automation and chatbot solutions.",
  },

  services: {
    title: "Powerful WhatsApp Automation Solutions",
    description:
      "We build scalable WhatsApp automation systems to streamline communication, improve response time, and increase conversions.",
    servicesCard: [
      {
        title: "WhatsApp Chatbots",
        description:
          "Automate customer interactions with AI-powered chatbots.",
        icon: "MessageCircle",
      },
      {
        title: "Broadcast Messaging",
        description:
          "Send bulk messages, promotions, and updates instantly.",
        icon: "Send",
      },
      {
        title: "CRM Integration",
        description:
          "Connect WhatsApp with your CRM to manage leads efficiently.",
        icon: "Database",
      },
      {
        title: "Auto Replies & Workflows",
        description:
          "Set automated responses and workflows for customer queries.",
        icon: "Workflow",
      },
      {
        title: "Lead Generation Funnels",
        description:
          "Capture and qualify leads directly through WhatsApp.",
        icon: "UserPlus",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Track performance and optimize engagement strategies.",
        icon: "BarChart3",
      },
    ],
  },

  // ✅ NEW SECTION (Technology specific)
  techStack: {
    title: "Technology Stack We Use",
    stack: [
      { name: "WhatsApp Business API", icon: "MessageCircle" },
      { name: "Node.js", icon: "Server" },
      { name: "React", icon: "Code2" },
      { name: "Firebase", icon: "Database" },
      { name: "Webhook APIs", icon: "Webhook" },
      { name: "AI/NLP Bots", icon: "Cpu" },
    ],
  },

  // ✅ NEW SECTION
  integrations: {
  title: "Integrations",
  items: [
    {
      name: "HubSpot",
      icon: "Database",
      desc: "CRM integration for lead management",
    },
    {
      name: "Salesforce",
      icon: "Database",
    },
    {
      name: "Shopify",
      icon: "ShoppingCart",
    },
    {
      name: "WooCommerce",
      icon: "ShoppingBag",
    },
    {
      name: "Zapier",
      icon: "Zap",
    },
    {
      name: "Custom APIs",
      icon: "Webhook",
    },
  ],
},

  // ✅ NEW SECTION
  useCases: {
  title: "Use Cases",
  cases: [
    {
      title: "Customer Support Automation",
      desc: "Handle FAQs and support queries instantly with automated responses.",
      icon: "Headset",
    },
    {
      title: "Lead Qualification",
      desc: "Automatically capture and qualify leads through chat flows.",
      icon: "UserCheck",
    },
    {
      title: "Order Notifications",
      desc: "Send real-time order updates and delivery notifications.",
      icon: "ShoppingCart",
    },
    {
      title: "Appointment Booking",
      desc: "Allow users to schedule appointments directly via WhatsApp.",
      icon: "Calendar",
    },
    {
      title: "Marketing Campaigns",
      desc: "Run targeted promotional campaigns with broadcast messaging.",
      icon: "TrendingUp",
    },
    {
      title: "Abandoned Cart Recovery",
      desc: "Recover lost sales with automated follow-up messages.",
      icon: "Zap",
    },
  ],
},

  steps: {
    title: "Our Automation Process",
    stepsArr: [
      {
        color: "#0D6EFD",
        icon: "Users",
        title: "Requirement Analysis",
        desc: "Understand your business workflows and communication needs.",
      },
      {
        color: "#6710F5",
        icon: "GitBranch",
        title: "Workflow Design",
        desc: "Design chatbot flows and automation logic.",
      },
      {
        color: "#6F42C1",
        icon: "Code2",
        title: "Development & Integration",
        desc: "Build and integrate WhatsApp APIs with your systems.",
      },
      {
        color: "#D63384",
        icon: "Rocket",
        title: "Launch & Optimization",
        desc: "Deploy automation and continuously optimize performance.",
      },
    ],
  },

  features: {
    title: "Why Choose Our Automation Solutions",
    featuresArr: [
      "Official WhatsApp API integration",
      "Scalable automation workflows",
      "Seamless CRM integrations",
      "Improved customer engagement",
      "Real-time analytics and insights",
      "Secure and reliable infrastructure",
    ],
  },

  industries: {
    title: "Industries We Support",
    industriesArr: [
      "E-commerce",
      "Healthcare",
      "Real Estate",
      "Education",
      "Travel & Hospitality",
      "Financial Services",
    ],
  },

  faq: {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "Do I need WhatsApp Business API?",
        answer:
          "Yes, automation requires WhatsApp Business API which we help you set up.",
      },
      {
        question: "Can chatbots handle real customers?",
        answer:
          "Yes, bots can handle FAQs, lead qualification, and route complex queries to humans.",
      },
      {
        question: "Is WhatsApp automation secure?",
        answer:
          "Yes, we use secure APIs and follow best practices for data protection.",
      },
      {
        question: "Can it integrate with my CRM?",
        answer:
          "Yes, we support integrations with major CRMs and custom systems.",
      },
    ],
  },

  sections: [
    "hero",
    "socialProof",
    "services",
    "techStack",      // ✅ new
    "useCases",       // ✅ new
    "integrations",   // ✅ new
    "process",
    "features",
    "testimonials",
    "faq",
    "cta",
  ],
},
{
  slug: "ai-chatbot",
  title: "AI Chatbot Solutions",
  category: "Technology",

  hero: {
    title: "Automate Conversations with Intelligent AI Chatbots",
    description:
      "Deliver instant, personalized, and scalable customer interactions using AI-powered chatbot solutions across multiple platforms.",
  },

  services: {
    title: "End-to-End AI Chatbot Development",
    description:
      "We design, build, and deploy intelligent chatbots that automate customer engagement, support, and business workflows.",
    servicesCard: [
      {
        title: "Custom AI Chatbots",
        description:
          "Build tailored chatbot solutions aligned with your business goals.",
        icon: "MessageCircle",
      },
      {
        title: "Multi-Platform Integration",
        description:
          "Deploy chatbots across WhatsApp, websites, and messaging platforms.",
        icon: "Share2",
      },
      {
        title: "NLP & AI Training",
        description:
          "Train bots using natural language processing for human-like conversations.",
        icon: "Brain",
      },
      {
        title: "Lead Generation Bots",
        description:
          "Capture and qualify leads automatically through conversational flows.",
        icon: "UserPlus",
      },
      {
        title: "Customer Support Automation",
        description:
          "Resolve queries instantly with 24/7 automated support.",
        icon: "Headset",
      },
      {
        title: "Analytics & Optimization",
        description:
          "Track performance and continuously improve chatbot responses.",
        icon: "BarChart3",
      },
    ],
  },

  steps: {
    title: "Our AI Chatbot Development Process",
    stepsArr: [
      {
        color: "#0D6EFD",
        icon: "Users",
        title: "Discovery & Planning",
        desc: "Understand business needs, use cases, and target audience.",
      },
      {
        color: "#6610F2",
        icon: "Brain",
        title: "Conversation Design",
        desc: "Design intelligent conversational flows and user journeys.",
      },
      {
        color: "#6F42C1",
        icon: "Code",
        title: "Development & Training",
        desc: "Develop chatbot logic and train AI models for accuracy.",
      },
      {
        color: "#D63384",
        icon: "Rocket",
        title: "Deployment & Optimization",
        desc: "Launch chatbot and continuously optimize performance.",
      },
    ],
  },

  useCases: {
    title: "AI Chatbot Use Cases",
    cases: [
      {
        title: "Customer Support Automation",
        desc: "Handle FAQs and resolve customer queries instantly.",
        icon: "Headset",
      },
      {
        title: "Lead Generation",
        desc: "Capture and qualify leads through interactive conversations.",
        icon: "UserCheck",
      },
      {
        title: "E-commerce Assistance",
        desc: "Guide users in product selection and purchasing decisions.",
        icon: "ShoppingCart",
      },
      {
        title: "Appointment Booking",
        desc: "Automate scheduling and confirmations for appointments.",
        icon: "Calendar",
      },
      {
        title: "Onboarding Automation",
        desc: "Assist new users with guided onboarding experiences.",
        icon: "UserPlus",
      },
      {
        title: "Feedback Collection",
        desc: "Collect customer feedback and insights in real-time.",
        icon: "MessageSquare",
      },
    ],
  },

  integrations: {
    title: "Integrations",
    items: [
      { name: "WhatsApp", icon: "MessageCircle" },
      { name: "Slack", icon: "Slack" },
      { name: "Shopify", icon: "ShoppingCart" },
      { name: "HubSpot", icon: "Database" },
      { name: "Zapier", icon: "Workflow" },
      { name: "Websites", icon: "Globe" },
    ],
  },

  features: {
    title: "Why Choose Our AI Chatbots",
    featuresArr: [
      "AI-powered natural conversations",
      "24/7 automated customer support",
      "Multi-platform deployment",
      "Scalable and customizable solutions",
      "Real-time analytics and insights",
      "Seamless CRM and API integrations",
    ],
  },

  industries: {
    title: "Industries We Serve",
    industriesArr: [
      "E-commerce",
      "Healthcare",
      "Finance",
      "Education",
      "Real Estate",
      "Customer Support Services",
    ],
  },

  faq: {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "What platforms can AI chatbots work on?",
        answer:
          "AI chatbots can be deployed on websites, WhatsApp, Messenger, Slack, and other messaging platforms.",
      },
      {
        question: "Can chatbots handle complex queries?",
        answer:
          "Yes. With proper AI training and integrations, chatbots can handle complex workflows and queries.",
      },
      {
        question: "Do chatbots require maintenance?",
        answer:
          "Yes. Continuous optimization and updates improve accuracy and performance.",
      },
      {
        question: "Can chatbots integrate with CRM systems?",
        answer:
          "Yes. Chatbots can be integrated with CRM, ERP, and other business tools.",
      },
    ],
  },

  sections: [
    "hero",
    "socialProof",
    "services",
    "process",
    "useCases",
    "integrations",
    "features",
    "industries",
    "testimonials",
    "faq",
    "cta",
  ],
}
]