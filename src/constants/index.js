// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I build custom web applications with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Authentication, Business Logic)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, TypeScript, Interactive & Responsive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL, Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "Performance & Optimization",
    description:
      "Fast and smooth experiences keep users engaged. I optimize web apps to ensure high performance, reduced load times, and scalability for growing businesses.",
    items: [
      {
        title: "Performance Tuning",
        description: "(Caching, Code Splitting, Lighthouse 90+ Scores)",
      },
      {
        title: "SEO Optimization",
        description: "(SSR, Metadata, Structured Data)",
      },
      {
        title: "Code Quality",
        description: "(Refactoring, Tech Debt Cleanup, Best Practices)",
      },
    ],
  },
  {
    title: "Security & Reliability",
    description:
      "Secure applications build trust. I implement modern security practices, protect against vulnerabilities, and ensure your app runs safely and reliably.",
    items: [
      {
        title: "Authentication & Authorization",
        description: "(JWT, OAuth, Role-Based Access)",
      },
      {
        title: "App Security",
        description: "(XSS/SQL Injection Protection, HTTPS, Validation)",
      },
      {
        title: "Testing & Debugging",
        description: "(Unit/Integration Tests, Bug Fixes)",
      },
    ],
  },
  {
    title: "Custom Web Solutions",
    description:
      "Every business has unique needs. I develop tailored solutions—from e-commerce platforms to dashboards—ensuring seamless functionality and great user experience.",
    items: [
      {
        title: "E-Commerce Development",
        description: "(Checkout Flows, Payment Integration, Inventory APIs)",
      },
      {
        title: "Progressive Web Apps",
        description: "(Offline Mode, Push Notifications)",
      },
      {
        title: "Business Dashboards",
        description: "(Admin Panels, Analytics, Real-Time Data)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Converso (AI Voice Tutoring Platform)",
    description:
      "An AI-powered voice tutoring platform where learners can practice conversations in real-time with an intelligent tutor. Built with Next.js, Supabase, and Vapi, it provides seamless authentication via Clerk and a modern UI styled with Tailwind CSS.",
    href: "https://converso-jet.vercel.app/",
    image: "/assets/projects/converso.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Supabase" },
      { id: 3, name: "Vapi" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Hired (Job Portal)",
    description:
      "A modern job portal platform designed to connect job seekers with recruiters. It features secure authentication, real-time data with Supabase, and an elegant UI built using React, Tailwind CSS, and Shadcn UI components.",
    href: "https://hirrd-blond.vercel.app/",
    image: "/assets/projects/hired.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "Supabase" },
    ],
  },
];

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/sayantan.exe/" },

  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sayantan-bera-b11300202/",
  },
  { name: "GitHub", href: "https://github.com/sayantan-025" },
];
