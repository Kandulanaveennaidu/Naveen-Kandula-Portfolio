export interface ProfileCardItem {
  id: string;
  title: string;
  label: string;
  action: string;
  url: string;
  iconName: string;
  handle: string;
  description: string;
  isExternal: boolean;
}

export const professionalProfiles: ProfileCardItem[] = [
  {
    id: "github",
    title: "GitHub Profile",
    label: "Review Code",
    action: "View GitHub",
    url: "https://github.com/Kandulanaveennaidu",
    iconName: "Github",
    handle: "Kandulanaveennaidu",
    description: "Explore open-source repositories, full-stack architectures, and production-tested code samples.",
    isExternal: true,
  },
  {
    id: "linkedin",
    title: "LinkedIn Network",
    label: "Connect",
    action: "Connect on LinkedIn",
    url: "https://www.linkedin.com/in/kandulanaveen1/",
    iconName: "Linkedin",
    handle: "kandulanaveen1",
    description: "Connect for professional inquiries, software consulting, and freelance partnership opportunities.",
    isExternal: true,
  },
  {
    id: "whatsapp",
    title: "WhatsApp Messaging",
    label: "Message",
    action: "Chat on WhatsApp",
    url: "https://wa.me/919705627977",
    iconName: "MessageSquare",
    handle: "+91 9705627977",
    description: "Direct instant chat for urgent project discussions, scope scoping, and quick consultations.",
    isExternal: true,
  },
  {
    id: "email",
    title: "Email Inquiry",
    label: "Email",
    action: "Send Email",
    url: "mailto:kandulanaveennaidu017@gmail.com",
    iconName: "Mail",
    handle: "kandulanaveennaidu017@gmail.com",
    description: "Send project briefs, RFPs, and comprehensive technical requirements directly to my personal inbox.",
    isExternal: false,
  }
];
