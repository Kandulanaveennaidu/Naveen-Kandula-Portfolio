import React from "react";

const CAPABILITIES = [
  "FULL STACK",
  "AI INTEGRATION",
  "REACT.JS",
  "NODE.JS",
  "PYTHON",
  "POSTGRESQL",
  "API DEVELOPMENT",
  "REAL-TIME SYSTEMS",
];

export default function CapabilityStrip() {
  return (
    <div className="w-full border-y border-border-subtle bg-bg-secondary/80 backdrop-blur-md py-4 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6">
          {CAPABILITIES.map((cap, idx) => (
            <div key={cap} className="flex items-center gap-3">
              <span className="text-xs font-mono tracking-widest text-text-secondary uppercase hover:text-accent-cyan transition-colors">
                {cap}
              </span>
              {idx < CAPABILITIES.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-accent-primary/60 hidden lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
