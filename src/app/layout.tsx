import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import { profileData } from "@/data/profile";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profileData.name} | Full Stack Developer & AI Integration Engineer`,
  description: `${profileData.name} is a Full Stack Developer & AI Integration Engineer with ~4 years of experience building modern web applications (React, Node.js, Python, PostgreSQL) and production AI-powered digital products.`,
  keywords: [
    "Naveen Kandula",
    "Full Stack Developer",
    "AI Integration Engineer",
    "Freelance Software Developer",
    "React Developer",
    "Node.js Engineer",
    "Python Developer",
    "PostgreSQL",
    "LLM Integration",
    "Web Application Development"
  ],
  authors: [{ name: profileData.name }],
  creator: profileData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naveenkandula.dev",
    title: `${profileData.name} | Full Stack Developer & AI Integration Engineer`,
    description: "Building digital products that move businesses forward. Modern web applications, scalable backend systems, and production AI integrations.",
    siteName: `${profileData.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} | Full Stack Developer & AI Integration Engineer`,
    description: "Building digital products that move businesses forward. Full Stack Development × AI Integration.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: profileData.role,
    description: profileData.bio.subhero,
    url: "https://naveenkandula.dev",
    knowsAbout: [
      "React.js",
      "Node.js",
      "Python",
      "TypeScript",
      "PostgreSQL",
      "REST APIs",
      "AI Integration",
      "Full Stack Development"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased selection:bg-accent-primary/30 selection:text-white relative min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
