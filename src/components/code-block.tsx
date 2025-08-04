'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Check, Clipboard } from 'lucide-react';
import { useState } from 'react';

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

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[#0D1117] rounded-lg border border-border overflow-hidden shadow-lg mt-12 font-code"
    >
      <div className="flex items-center justify-between px-4 py-2 bg-secondary/50 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </div>
        <Button variant="ghost" size="icon" onClick={handleCopy} className="text-muted-foreground hover:text-foreground">
          {hasCopied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
          <span className="sr-only">Copy code</span>
        </Button>
      </div>
      <div className="p-4 text-sm overflow-x-auto">
        <pre>
          <code>{codeSnippet.trim()}</code>
        </pre>
      </div>
    </motion.div>
  );
}
