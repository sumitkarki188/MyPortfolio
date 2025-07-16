"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypeWriterProps {
  texts: string[];
  className?: string;
}

export function TypeWriter({ texts, className = '' }: TypeWriterProps) {
  if (!texts || texts.length === 0) {
    return <div>No texts provided</div>;
  }
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[currentIndex];
    let timeout: NodeJS.Timeout;
    if (!isDeleting) {
      if (currentText.length < text.length) {
        timeout = setTimeout(() => {
          setCurrentText(text.slice(0, currentText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1000);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(text.slice(0, currentText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <div className={`min-h-[60px] flex items-center ${className}`}>
      <span className="relative">
        {currentText}
        <motion.span
          animate={{ opacity: [1, 1, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-1 h-8 bg-purple-400 ml-1"
        />
      </span>
    </div>
  );
}