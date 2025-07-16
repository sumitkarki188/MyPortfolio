"use client";
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronDown, Code, Palette, Zap, Github, Linkedin, Mail } from 'lucide-react';
import { FloatingText } from '../scenes/FloatingText';
import { ParticleBackground, FloatingShapes } from './BackgroundAnimations';
import { TypeWriter } from './TypeWriter';
import { LetterAssembly } from './LetterAssembly';

export default function Hero() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isNameVisible, setIsNameVisible] = useState(true);

  // Fix: Memoize the texts array for TypeWriter
  const typewriterTexts = [
    "CSE Undergrad",
    "Web Developer",
    "Competitive Programmer"
  ];

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  // Scroll detection to hide name as soon as user starts scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Hide name if scrolled more than 50px (very sensitive)
      if (scrollY > 50) {
        setIsNameVisible(false);
      } else {
        setIsNameVisible(true);
      }
    };

    // Add event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <ParticleBackground />
      <FloatingShapes />
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <FloatingText />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 z-10" />

      {/* Content */}
      <div ref={containerRef} className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20">
          
          {/* Left Side - Photo Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative glass-card glow-effect mesh-gradient p-2 rounded-full">
              {/* Photo Frame with Glow Effect */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                {/* Outer Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse" />
                {/* Frame */}
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <motion.img
                    src="/pic.jpg"
                    alt="Sumit Karki"
                    className="w-full h-full object-cover rounded-full border-4 border-white/30 shadow-xl"
                    initial={{ scale: 1.05, opacity: 0, rotate: 0 }}
                    animate={{
                      scale: [1.05, 1.1, 1.05],
                      y: [0, -10, 0],
                      boxShadow: [
                        "0 0 40px 10px rgba(139,92,246,0.4)",
                        "0 0 60px 20px rgba(139,92,246,0.7)",
                        "0 0 40px 10px rgba(139,92,246,0.4)"
                      ],
                      opacity: 1
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut"
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotateX: 10,
                      rotateY: -10,
                      boxShadow: "0 0 80px 30px rgba(139,92,246,0.8)"
                    }}
                  />
                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"
                    whileHover={{ opacity: 1 }}
                  />
                </div>
                {/* Floating Elements around Photo */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500/30 rounded-full blur-sm"
                />
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-6 -right-6 w-12 h-12 bg-blue-500/30 rounded-full blur-sm"
                />
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 -right-8 w-6 h-6 bg-pink-500/30 rounded-full blur-sm"
                />
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    x: [0, -10, 0],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/4 -left-6 w-10 h-10 bg-cyan-500/30 rounded-full blur-sm"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-4"
            >
              <span className="text-purple-400 text-lg font-medium">Hello, I'm</span>
            </motion.div>

            {/* Name with Letter Assembly Animation - Only visible on home page */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isNameVisible ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
              style={{ display: isNameVisible ? 'block' : 'none' }}
            >
              <LetterAssembly
                text="Sumit"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white block mb-2"
                delay={0.8}
              />
              <LetterAssembly
                text="Karki"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent block"
                delay={1.4}
              />
            </motion.div>

           
            {/* Animated Slogan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.2 }}
              className="mb-6"
            >
              <div className="text-center lg:text-left">
                <div className="relative inline-block">
                  {/* Background Glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-xl rounded-lg"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Main Container */}
                  <motion.div
                    className="relative bg-black/40 backdrop-blur-sm border border-purple-400/50 rounded-lg px-6 py-3 shadow-lg"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 3.4 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
                      animate={{
                        background: [
                          "linear-gradient(90deg, #a855f7, #ec4899, #3b82f6)",
                          "linear-gradient(90deg, #3b82f6, #a855f7, #ec4899)",
                          "linear-gradient(90deg, #ec4899, #3b82f6, #a855f7)",
                          "linear-gradient(90deg, #a855f7, #ec4899, #3b82f6)",
                        ]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        maskComposite: "exclude",
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor"
                      }}
                    />
                    
                    {/* Slogan Text */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4">
                      {["Learn", "Code", "Grow"].map((word, index) => (
                        <motion.div
                          key={word}
                          initial={{ opacity: 0, y: 20, rotateX: -90 }}
                          animate={{ opacity: 1, y: 0, rotateX: 0 }}
                          transition={{
                            duration: 0.8,
                            delay: 3.6 + index * 0.2,
                            type: "spring",
                            stiffness: 100,
                            damping: 10
                          }}
                          className="relative group"
                        >
                          {/* Text Glow Effect */}
                          <motion.div
                            className="absolute inset-0 text-purple-400 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={{
                              opacity: [0, 0.3, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.5
                            }}
                          >
                            {word}
                          </motion.div>
                          
                          {/* Main Text */}
                          <span className="relative text-lg sm:text-xl font-bold text-white tracking-wider group-hover:text-purple-300 transition-colors duration-300">
                            {word}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Animated Dots */}
                    <div className="flex justify-center lg:justify-start gap-1 mt-2">
                      {[0, 1, 2, 3].map((dot) => (
                        <motion.div
                          key={dot}
                          className="w-1.5 h-1.5 bg-purple-400 rounded-full"
                          animate={{
                            scale: [0.8, 1.5, 0.8],
                            opacity: [0.3, 1, 0.3],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: dot * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.7 }}
              className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Full Stack Developer turning ideas into seamless digital solutions using modern technologies. Dedicated to building scalable, impactful applications that solve real-world problems.
            </motion.p>

            {/* Feature highlights */}
            {/* Removed Clean Code, Creative Design, Performance buttons from Home section */}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-purple-400 text-purple-400 font-medium rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.5 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div> */}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.button
          onClick={scrollToNext}
          className="flex flex-col items-center text-white/60 hover:text-white/100 transition-colors group"
          whileHover={{ y: -5 }}
        >
          <span className="text-sm mb-2 font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-current rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-current rounded-full mt-2"
            />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}