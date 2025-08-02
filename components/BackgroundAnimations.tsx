'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Enhanced Particle Background with interactive elements
export function EnhancedParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  const PARTICLE_COUNT = 100;
  const PARTICLE_SIZE = [0.5, 2.5];
  const CONNECTION_DISTANCE = 150;
  const MOUSE_RADIUS = 200;
  const SPEED = 0.4;

  type Particle = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    color: string;
    originalVx: number;
    originalVy: number;
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

    // Colors for particles
    const colors = [
      '#a78bfa', // purple-400
      '#60a5fa', // blue-400
      '#34d399', // emerald-400
      '#f472b6', // pink-400
      '#fbbf24', // amber-400
    ];

    // Create particles
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      size: Math.random() * (PARTICLE_SIZE[1] - PARTICLE_SIZE[0]) + PARTICLE_SIZE[0],
      opacity: Math.random() * 0.6 + 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
      originalVx: 0,
      originalVy: 0,
    }));

    // Store original velocities
    particles.forEach(particle => {
      particle.originalVx = particle.vx;
      particle.originalVy = particle.vy;
    });

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    // Visibility change handler
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < CONNECTION_DISTANCE) {
            ctx.save();
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.3;
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = particles[i].color;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Draw particles
      particles.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
        ctx.fillStyle = particle.color;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      });
    }

    function animate() {
      if (!isVisible) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      particles.forEach(particle => {
        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          particle.vx += (dx / dist) * force * 0.01;
          particle.vy += (dy / dist) * force * 0.01;
        } else {
          // Return to original velocity
          particle.vx += (particle.originalVx - particle.vx) * 0.02;
          particle.vy += (particle.originalVy - particle.vy) * 0.02;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
          particle.originalVx *= -1;
        }
        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
          particle.originalVy *= -1;
        }

        // Pulsating effect
        particle.opacity = 0.4 + 0.4 * Math.sin(Date.now() * 0.002 + particle.x * 0.01);
      });

      draw();
      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isVisible]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      style={{ display: 'block', background: 'transparent' }}
    />
  );
}

// Advanced Floating Shapes with morphing effects
export function MorphingShapes() {
  const shapes = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 200 + 100,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 blur-2xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            x: [0, 150, -100, 50, 0],
            y: [0, -80, 120, -50, 0],
            scale: [1, 1.5, 0.8, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
            borderRadius: ['50%', '30%', '50%', '40%', '50%'],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated Grid with wave effect
export function AnimatedGrid() {
  return (
    <div className="absolute inset-0 opacity-10 z-0">
      <motion.div
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(167, 139, 250, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167, 139, 250, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

// Glowing Orbs with trailing effect
export function GlowingOrbs() {
  const orbs = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 60,
    duration: Math.random() * 25 + 20,
    delay: i * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full bg-gradient-radial from-purple-400/30 via-blue-400/20 to-transparent"
          style={{
            width: orb.size,
            height: orb.size,
            filter: 'blur(2px)',
          }}
          animate={{
            x: ['-10%', '110%'],
            y: [
              `${Math.random() * 20 + 10}%`,
              `${Math.random() * 20 + 30}%`,
              `${Math.random() * 20 + 50}%`,
              `${Math.random() * 20 + 70}%`,
            ],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Radial Gradient with pulsing effect
export function PulsingRadialGradient() {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      style={{
        background: `
          radial-gradient(circle at 25% 25%, rgba(167, 139, 250, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(96, 165, 250, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(244, 114, 182, 0.1) 0%, transparent 70%)
        `,
      }}
      animate={{
        opacity: [0.5, 0.8, 0.5],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Combined Background Animation
export function AttractiveBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <PulsingRadialGradient />
      <AnimatedGrid />
      <MorphingShapes />
      <GlowingOrbs />
      <EnhancedParticleBackground />
    </div>
  );
}

// Individual exports for flexibility
export {
  EnhancedParticleBackground as ParticleBackground,
  MorphingShapes as FloatingShapes,
  AnimatedGrid as GridBackground,
  PulsingRadialGradient as MeshGradient,
};