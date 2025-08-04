'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  texts: string[];
  className?: string;
  typingDelay?: number;
  deletingDelay?: number;
  pauseDelay?: number;
}

export default function Typewriter({
  texts,
  className,
  typingDelay = 100,
  deletingDelay = 50,
  pauseDelay = 2000,
}: TypewriterProps) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[loopNum % texts.length];
      if (isDeleting) {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 1) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      } else {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex === currentText.length -1) {
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      }
    };

    const typingTimeout = setTimeout(
      handleTyping,
      isDeleting ? deletingDelay : typingDelay
    );

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopNum, texts, charIndex, typingDelay, deletingDelay, pauseDelay]);

  return (
    <span className={cn(className, 'relative')}>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
