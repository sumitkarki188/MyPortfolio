import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface LetterAssemblyProps {
  text: string;
  className?: string;
  delay?: number;
}

export function LetterAssembly({ text, className = '', delay = 0 }: LetterAssemblyProps) {
  const [isAnimating, setIsAnimating] = useState(true);
  const [letterPositions, setLetterPositions] = useState<Array<{ x: number; y: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Check if this is a gradient text
  const isGradientText = className.includes('bg-gradient') && className.includes('bg-clip-text');
  
  // Split text into individual characters, preserving spaces
  const letters = text.split('').map((char, index) => ({
    char,
    index,
    isSpace: char === ' '
  }));

  useEffect(() => {
    // Calculate final positions for each letter relative to the container
    if (containerRef.current) {
      const container = containerRef.current;
      
      // Create temporary spans to measure letter positions
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.visibility = 'hidden';
      tempContainer.style.whiteSpace = 'nowrap';
      tempContainer.className = className;
      tempContainer.innerHTML = text;
      document.body.appendChild(tempContainer);
      
      const positions: Array<{ x: number; y: number }> = [];
      let currentX = 0;
      
      letters.forEach((letter, index) => {
        if (letter.isSpace) {
          // For spaces, calculate approximate width
          const spaceWidth = 16; // Approximate space width
          positions.push({
            x: currentX,
            y: 0
          });
          currentX += spaceWidth;
        } else {
          // Create a temporary span for each character to get its exact position
          const charSpan = document.createElement('span');
          charSpan.textContent = letter.char;
          charSpan.style.position = 'absolute';
          charSpan.style.left = currentX + 'px';
          tempContainer.appendChild(charSpan);
          
          const charRect = charSpan.getBoundingClientRect();
          positions.push({
            x: currentX,
            y: 0
          });
          currentX += charRect.width;
          
          tempContainer.removeChild(charSpan);
        }
      });
      
      document.body.removeChild(tempContainer);
      setLetterPositions(positions);
    }

    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, delay + 4000 + letters.length * 150);

    return () => clearTimeout(timer);
  }, [delay, letters.length, text, className]);

  // Generate random starting positions within a reasonable area around the container
  const getRandomStartPosition = () => {
    const containerWidth = 800; // Approximate container width
    const containerHeight = 600; // Approximate container height
    
    const edges = [
      { x: -300, y: Math.random() * containerHeight - 200 }, // Left edge
      { x: containerWidth + 300, y: Math.random() * containerHeight - 200 }, // Right edge
      { x: Math.random() * containerWidth, y: -300 }, // Top edge
      { x: Math.random() * containerWidth, y: containerHeight + 300 }, // Bottom edge
      // Add corner positions for more variety
      { x: -300, y: -300 }, // Top-left corner
      { x: containerWidth + 300, y: -300 }, // Top-right corner
      { x: -300, y: containerHeight + 300 }, // Bottom-left corner
      { x: containerWidth + 300, y: containerHeight + 300 }, // Bottom-right corner
    ];
    
    return edges[Math.floor(Math.random() * edges.length)];
  };

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ position: 'relative' }}>
      {/* Invisible placeholder to maintain layout */}
      <span className="invisible">{text}</span>
      
      {/* Animated letters - contained within this div */}
      <div className="absolute inset-0 overflow-hidden">
        {letters.map((letter, index) => {
          const startPos = getRandomStartPosition();
          const finalPos = letterPositions[index] || { x: 0, y: 0 };
          
          return (
            <motion.span
              key={index}
              className={`absolute ${letter.isSpace ? 'w-4' : ''} ${
                isGradientText 
                  ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent' 
                  : 'text-white'
              }`}
              initial={{
                left: startPos.x,
                top: startPos.y,
                opacity: 0,
                scale: 0.2,
                rotate: Math.random() * 720 - 360,
              }}
              animate={{
                left: finalPos.x,
                top: finalPos.y,
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 3.5,
                delay: delay + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 60,
                damping: 15,
                bounce: 0.3,
              }}
              onAnimationComplete={() => {
                if (index === letters.length - 1) {
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              style={{
                fontSize: 'inherit',
                fontWeight: 'inherit',
                lineHeight: 'inherit',
                position: 'absolute',
              }}
            >
              {letter.isSpace ? '\u00A0' : letter.char}
            </motion.span>
          );
        })}
      </div>
      
      {/* Final text that appears after animation */}
      {!isAnimating && (
        <span className={isGradientText 
          ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent' 
          : 'text-white'
        }>
          {text}
        </span>
      )}
    </div>
  );
}