"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypeWriterProps {
  texts: string[];
  className?: string;
}

export function TypeWriter({ texts, className = "" }: TypeWriterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) => currentText.slice(0, prev.length + 1));
      }, 80);
    }

    // Switch states
    if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts]);

  return (
    <div className={`min-h-[60px] flex items-center ${className}`}>
      <span className="relative">
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="inline-block w-1 h-6 bg-purple-400 ml-1"
        />
      </span>
    </div>
  );
}
