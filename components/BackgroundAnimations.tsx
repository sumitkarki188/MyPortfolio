'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const STAR_COUNT = 70;
  const STAR_SIZE = [1.5, 3.5];
  const LINE_DISTANCE = 120;
  const SPEED = 0.3;

  // Star type
  type Star = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    // Create stars
    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      size: Math.random() * (STAR_SIZE[1] - STAR_SIZE[0]) + STAR_SIZE[0],
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      // Draw lines
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DISTANCE) {
            ctx.save();
            ctx.globalAlpha = 0.15 + 0.25 * (1 - dist / LINE_DISTANCE);
            ctx.strokeStyle = '#a78bfa'; // purple-400
            ctx.lineWidth = 1.1;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      // Draw stars
      for (const star of stars) {
        ctx.save();
        ctx.globalAlpha = 0.7;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.shadowColor = '#a78bfa';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }
    }

    function animate() {
      for (const star of stars) {
        star.x += star.vx;
        star.y += star.vy;
        // Bounce off edges
        if (star.x < 0 || star.x > width) star.vx *= -1;
        if (star.y < 0 || star.y > height) star.vy *= -1;
      }
      draw();
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      style={{ display: 'block', background: 'transparent' }}
    />
  );
}

export function FloatingShapes() {
  const shapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 150 + 80,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 8,
  }));

  console.log('FloatingShapes: Rendering', shapes.length, 'shapes');

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Test element to verify rendering */}
      <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full z-50"></div>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full bg-gradient-to-br from-purple-500/40 to-blue-500/40 blur-xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.3, 0.7, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function GridBackground() {
  return (
    <div className="absolute inset-0 grid-pattern opacity-30 z-0" />
  );
}

export function MeshGradient() {
  return (
    <div className="absolute inset-0 mesh-gradient opacity-50 z-0" />
  );
}