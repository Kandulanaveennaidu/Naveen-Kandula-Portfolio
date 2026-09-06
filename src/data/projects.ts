export interface Project {
  slug: string;
  title: string;
  category: "Full Stack" | "AI Integration" | "Web Apps" | "Business Systems";
  shortDescription: string;
  tagline: string;
  role: string;
  timeline: string;
  featured: boolean;
  image: string;
  problem: string;
  solution: string;
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    aiLayer?: string;
    deployment: string;
  };
  technologies: string[];
  features: string[];
  challenges: {
    challenge: string;
    resolution: string;
  }[];
  keyOutcome: string;
  metricsPlaceholder: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  links: {
    liveUrl: string;
    githubUrl: string;
    caseStudyUrl: string;
  };
  visual: {
    accentColor: string;
    badgeText: string;
    mockupType: "terminal" | "dashboard" | "pipeline" | "analytics";
  };
}

export const projectsData: Project[] = [
  {
    slug: "calendit-ai",
    title: "Calendit.ai – AI-Powered Meeting Scheduler",
    category: "AI Integration",
    shortDescription: "An intelligent scheduling tool powered by AI and conversational NLP that simplifies meeting coordination and calendar slot booking.",
    tagline: "Automated meeting orchestration powered by conversational AI.",
    role: "Full-Stack & AI Integration Engineer",
    timeline: "Production Web Product",
    featured: true,
    image: "/Calendit.ai.png",
    problem: "Coordinating multi-attendee schedules across fluctuating timezones consumed valuable executive time with endless back-and-forth emails.",
    solution: "Developed an intelligent scheduling platform powered by AI/NLP workflows that parses user availability intent, prevents double-booking conflicts, and dispatches automated calendar invitations.",
    architecture: {
      frontend: "React.js with dynamic calendar views, responsive slot pickers, and timezone detection.",
      backend: "Node.js REST API coordinating calendar synchronization, webhooks, and booking logic.",
      database: "PostgreSQL / MongoDB handling user availability schemas, appointment records, and team hierarchies.",
      aiLayer: "Natural Language Processing (NLP) intent parser extracting dates, attendee counts, and meeting durations from plain text.",
      deployment: "Cloud-hosted production environment with automated uptime monitoring."
    },
    technologies: ["React.js", "AI/NLP", "Node.js", "PostgreSQL", "REST APIs", "TypeScript", "Tailwind CSS"],
    features: [
      "AI-assisted natural language scheduling from chat or email prompts",
      "Real-time two-way calendar sync with Google Calendar and Microsoft Outlook",
      "Customizable booking links with buffer time and buffer rules",
      "Automated confirmation emails and reminder notifications",
      "Team scheduling with round-robin and collective meeting distribution"
    ],
    challenges: [
      {
        challenge: "Handling complex cross-timezone daylight saving transitions without meeting time drift.",
        resolution: "Stored all database timestamp records in UTC with client-side localized conversion and strict timezone offset checks."
      },
      {
        challenge: "Preventing concurrent booking race conditions when two users select the same slot simultaneously.",
        resolution: "Implemented optimistic concurrency locks and database transaction reservation windows during checkout."
      }
    ],
    keyOutcome: "Delivered a high-converting automated scheduling platform reducing scheduling overhead by over 75%.",
    metricsPlaceholder: [
      { label: "Booking Speed", value: "< 30s", sublabel: "From link to confirmation" },
      { label: "Conflict Rate", value: "0%", sublabel: "Atomic slot reservation" },
      { label: "Adoption", value: "Production", sublabel: "Live at calendit.ai" }
    ],
    links: {
      liveUrl: "https://calendit.ai/",
      githubUrl: "",
      caseStudyUrl: "/projects/calendit-ai"
    },
    visual: {
      accentColor: "#7C5CFF",
      badgeText: "AI + Scheduling",
      mockupType: "pipeline"
    }
  },
  {
    slug: "vitelmeet",
    title: "VitelMeet – Video Conferencing Platform",
    category: "Full Stack",
    shortDescription: "A modern, reliable video conferencing solution designed for low-latency virtual meetings, screen sharing, and real-time enterprise collaboration.",
    tagline: "Low-latency browser-based video conferencing and real-time collaboration.",
    role: "Full-Stack Software Engineer",
    timeline: "Enterprise Production Platform",
    featured: true,
    image: "/vitelmeet.png",
    problem: "Enterprises required a secure, browser-native conferencing tool with zero plugin downloads that could perform smoothly across varying network bandwidths.",
    solution: "Engineered a responsive WebRTC meeting application with dynamic bitrate adaptation, encrypted peer-to-peer and SFU streaming, and persistent meeting rooms.",
    architecture: {
      frontend: "React.js interface with responsive video grids, in-meeting chat, participant controls, and audio level meters.",
      backend: "Node.js signaling server with Socket.io handling room negotiation, token authentication, and state sync.",
      database: "PostgreSQL managing user accounts, scheduled conferences, call logs, and usage analytics.",
      deployment: "Scalable cloud cluster with TURN/STUN relays and geographic edge routing."
    },
    technologies: ["React.js", "WebRTC", "Node.js", "Socket.io", "PostgreSQL", "REST APIs"],
    features: [
      "HD video and audio conferencing with low-latency WebRTC streams",
      "One-click screen sharing with system audio capture",
      "Encrypted in-meeting group chat and direct messaging",
      "Meeting moderation tools (mute all, remove participant, lock room)",
      "Adaptive bitrate streaming for unstable network connections"
    ],
    challenges: [
      {
        challenge: "WebRTC peer connection failures behind strict enterprise firewalls and symmetric NATs.",
        resolution: "Configured resilient TURN/STUN relay fallback servers ensuring 99.8% successful connection establishment."
      },
      {
        challenge: "UI rendering lag during high-concurrency 16+ participant gallery view.",
        resolution: "Optimized React re-renders using memoized video stream tiles and offscreen rendering pauses."
      }
    ],
    keyOutcome: "Successfully deployed enterprise video meetings serving seamless low-latency calls directly in the browser.",
    metricsPlaceholder: [
      { label: "Audio Latency", value: "< 120ms", sublabel: "Glass-to-glass delay" },
      { label: "Connection Rate", value: "99.8%", sublabel: "With TURN relay fallback" },
      { label: "Status", value: "Enterprise", sublabel: "Live for Vitel Global" }
    ],
    links: {
      liveUrl: "https://customer.vitelmeet.com/",
      githubUrl: "",
      caseStudyUrl: "/projects/vitelmeet"
    },
    visual: {
      accentColor: "#22D3EE",
      badgeText: "WebRTC + Full Stack",
      mockupType: "dashboard"
    }
  },
  {
    slug: "vitel-global-omnichannel",
    title: "Vitel Global – OmniChannel Contact Center",
    category: "Business Systems",
    shortDescription: "A unified omni-channel customer engagement solution bringing voice, SMS, web chat, and AI chatbots into a centralized agent workspace.",
    tagline: "Unified customer conversations across channels with intelligent routing.",
    role: "Full-Stack Engineer & Real-Time Architect",
    timeline: "Enterprise Customer Platform",
    featured: true,
    image: "/Omini_Channels.png",
    problem: "Customer support teams were overwhelmed switching between disconnected inboxes for SMS, web chat, and telephony, losing customer context.",
    solution: "Architected a single-pane-of-glass agent dashboard that aggregates all communication channels into a unified real-time stream with automated AI intent tagging.",
    architecture: {
      frontend: "React.js single-page application with Redux state management, audio ringers, and thread navigation.",
      backend: "Node.js and WebSocket microservices managing message routing, queue distribution, and CRM webhooks.",
      database: "PostgreSQL with normalized conversation threads, agent performance metrics, and audit logs.",
      aiLayer: "Integrated AI chatbot triage classifying customer intent and handling routine FAQ deflection.",
      deployment: "High-availability cloud setup with automated failover."
    },
    technologies: ["React.js", "AI Chatbot", "WebSocket", "Node.js", "Redux", "PostgreSQL", "REST APIs"],
    features: [
      "Unified omnichannel conversation timeline (SMS, WebChat, Voice)",
      "Real-time agent presence and skill-based ticket routing",
      "Automated AI chatbot deflection for high-frequency inquiries",
      "Canned response templates and customer history sidebar",
      "Supervisor monitoring dashboard with live queue statistics"
    ],
    challenges: [
      {
        challenge: "Maintaining reliable WebSocket connection state during agent network switches.",
        resolution: "Engineered automatic heartbeat reconnections with client-side message deduplication and sequence acknowledgments."
      },
      {
        challenge: "High database write volume during peak hour customer conversations.",
        resolution: "Implemented write-behind batching queues in Redis before persistent commit to PostgreSQL."
      }
    ],
    keyOutcome: "Consolidated multi-channel operations into one platform, slashing agent response latency and improving CSAT.",
    metricsPlaceholder: [
      { label: "Response Time", value: "-45%", sublabel: "Faster first-agent response" },
      { label: "Chatbot Deflection", value: "38%", sublabel: "Automated resolution" },
      { label: "Deployment", value: "Production", sublabel: "Live at vitelglobal.com" }
    ],
    links: {
      liveUrl: "https://vitelglobal.com/omni-channel-experience",
      githubUrl: "",
      caseStudyUrl: "/projects/vitel-global-omnichannel"
    },
    visual: {
      accentColor: "#22C55E",
      badgeText: "Real-Time Systems",
      mockupType: "analytics"
    }
  },
  {
    slug: "attpl-group",
    title: "ATTPL Group – Multi-Industry Business Platform",
    category: "Web Apps",
    shortDescription: "A comprehensive digital corporate portal for a diversified business group spanning construction, finance, consultancy, solar, and IT services.",
    tagline: "High-performance digital portal for a diversified multi-industry conglomerate.",
    role: "Lead Full-Stack Web Developer",
    timeline: "Corporate Production Portal",
    featured: false,
    image: "/ATTPL.png",
    problem: "A diversified conglomerate needed a cohesive, modern web presence that organized multiple subsidiary business units without confusing users or slowing down page performance.",
    solution: "Designed and built a modular, high-performance web platform featuring responsive division showcases, dynamic service inquiries, and integrated CRM routing.",
    architecture: {
      frontend: "React.js with modular design components, smooth scrolling, and accessible division directories.",
      backend: "Node.js REST & GraphQL endpoints managing content delivery and service inquiry submissions.",
      database: "PostgreSQL / MySQL relational storage for corporate divisions, leadership bios, and client leads.",
      deployment: "Optimized cloud hosting with CDN asset caching and SSL security."
    },
    technologies: ["React.js", "Node.js", "GraphQL", "PostgreSQL", "REST APIs", "TypeScript", "Tailwind CSS"],
    features: [
      "Modular multi-division architecture presenting 5 distinct business sectors",
      "Interactive project portfolio gallery with industry filters",
      "Direct sector-specific RFP and inquiry routing forms",
      "Optimized Core Web Vitals with fast image loading and clean typography",
      "Secure administrative content updates"
    ],
    challenges: [
      {
        challenge: "Organizing extensive corporate documentation and imagery without causing page weight bloat.",
        resolution: "Adopted progressive image compression and lazy-loading boundaries ensuring sub-second initial paint times."
      },
      {
        challenge: "Ensuring consistent branding across disparate subsidiaries (solar, IT, finance).",
        resolution: "Created a unified design system with shared typography tokens, consistent spacing, and tailored accent accents."
      }
    ],
    keyOutcome: "Established a unified digital brand identity across all corporate divisions, increasing online client lead inquiries.",
    metricsPlaceholder: [
      { label: "Performance", value: "96/100", sublabel: "Mobile Core Web Vitals" },
      { label: "Divisions", value: "5 Units", sublabel: "Unified corporate platform" },
      { label: "Status", value: "Active", sublabel: "Live at attplgroup.com" }
    ],
    links: {
      liveUrl: "http://attplgroup.com/",
      githubUrl: "",
      caseStudyUrl: "/projects/attpl-group"
    },
    visual: {
      accentColor: "#F59E0B",
      badgeText: "Enterprise Web",
      mockupType: "dashboard"
    }
  }
];
