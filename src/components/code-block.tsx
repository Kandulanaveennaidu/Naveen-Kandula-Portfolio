"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Check, Clipboard } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const codeSnippet = `
const kandulaNaveen = {
  title: "Full Stack Developer",
  specialization: "AI-Driven Solutions",
  skills: ["React", "Node.js", "Python", "AI/ML"],
  contact: "hello@naveen.dev"
};

function createAwesomeStuff(developer) {
  // Logic to build amazing things...
  console.log(\`Starting project with \${developer.title}\`);
}

createAwesomeStuff(kandulaNaveen);
`;

export default function CodeBlock() {
  const [hasCopied, setHasCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // Only access theme on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  // Avoid hydration mismatch by returning a simple version during SSR
  // and only applying theme-dependent styles after mounting on the client
  if (!mounted) {
    return (
      <div className="rounded-lg border border-border overflow-hidden shadow-lg mt-12 font-code bg-[#0D1117]">
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-secondary/50">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            className="text-gray-300 hover:text-gray-100"
          >
            <Clipboard className="h-4 w-4" />
            <span className="sr-only">Copy code</span>
          </Button>
        </div>
        <div className="p-4 text-sm overflow-x-auto text-gray-100">
          <pre>
            <code className="text-gray-100">{codeSnippet.trim()}</code>
          </pre>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`rounded-lg border border-border overflow-hidden shadow-lg mt-12 font-code ${
        mounted && theme === "light" ? "bg-[#1E1E1E]" : "bg-[#0D1117]"
      }`}
    >
      <div
        className={`flex items-center justify-between px-4 py-2 border-b border-border ${
          mounted && theme === "light" ? "bg-gray-700/90" : "bg-secondary/50"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          className="text-gray-300 hover:text-gray-100"
        >
          {hasCopied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Clipboard className="h-4 w-4" />
          )}
          <span className="sr-only">Copy code</span>
        </Button>
      </div>
      <div className="p-4 text-sm overflow-x-auto text-gray-100">
        <pre>
          <code className="text-gray-100">{codeSnippet.trim()}</code>
        </pre>
      </div>
    </motion.div>
  );
}
