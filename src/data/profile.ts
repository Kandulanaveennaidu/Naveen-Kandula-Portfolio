export interface Profile {
  name: string;
  shortName: string;
  role: string;
  title: string;
  experienceYears: string;
  location: string;
  profileImage: string;
  availability: {
    status: "available" | "limited" | "booked";
    badgeText: string;
    notice: string;
  };
  bio: {
    hero: string;
    subhero: string;
    aboutLead: string;
    aboutStory: string[];
    operatingPrinciples: {
      title: string;
      description: string;
    }[];
  };
  contact: {
    email: string;
    github: string;
    githubUsername: string;
    linkedin: string;
    whatsapp: string;
    whatsappFormatted: string;
    locationNote: string;
  };
}

export const profileData: Profile = {
  name: "Naveen Kandula",
  shortName: "Naveen",
  role: "Full Stack Developer & AI Integration Engineer",
  title: "Building digital products that move businesses forward.",
  experienceYears: "4+",
  location: "Available Globally (Remote)",
  profileImage: "/images/naveen-profile.jpg",
  availability: {
    status: "available",
    badgeText: "Available for freelance projects",
    notice: "Currently accepting new client projects, full-stack product builds, and AI integrations."
  },
  bio: {
    hero: "Building digital products that move businesses forward.",
    subhero: "I'm Naveen Kandula, a Full Stack Developer and AI Integration Engineer focused on building modern web applications, backend systems, APIs, and AI-powered products.",
    aboutLead: "Engineering with product thinking.",
    aboutStory: [
      "I believe software should solve genuine business problems, not just demonstrate technical complexity. With 4+ years of hands-on engineering experience across the full development lifecycle, I help founders, startups, and established businesses bring robust digital products to life.",
      "My work spans modern React and TypeScript frontends, scalable Node.js and Python microservices, performant PostgreSQL database architectures, and production AI integrations. I don't treat AI as a gimmick—I embed language models and intelligent automation directly into business logic to make products noticeably faster, smarter, and more valuable.",
      "From initial architectural blueprint to production deployment and monitoring, I provide single-source technical ownership. That means fewer handoffs, faster shipping velocity, and a clean, maintainable codebase your team can scale with confidence."
    ],
    operatingPrinciples: [
      {
        title: "Full-Lifecycle Ownership",
        description: "From architecture to deployment, eliminating the friction of multi-vendor handoffs."
      },
      {
        title: "Product-Minded Engineering",
        description: "Every architectural choice is evaluated by user experience and business impact, not hype."
      },
      {
        title: "Production Rigor",
        description: "Type safety, resilient error boundaries, and defensive API design built in from day one."
      },
      {
        title: "Transparent Collaboration",
        description: "Clear communication, documented milestones, and predictable delivery cadences."
      }
    ]
  },
  contact: {
    email: "kandulanaveennaidu017@gmail.com",
    github: "https://github.com/Kandulanaveennaidu",
    githubUsername: "Kandulanaveennaidu",
    linkedin: "https://www.linkedin.com/in/kandulanaveen1/",
    whatsapp: "https://wa.me/919705627977",
    whatsappFormatted: "+91 9705627977",
    locationNote: "Open to international remote contracts & freelance engagements."
  }
};
