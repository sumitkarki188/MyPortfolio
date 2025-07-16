"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Star,
  Users,
  Calendar,
} from "lucide-react";
import { Project } from "@/types";
import { MeshGradient } from "@/components/BackgroundAnimations";

const projects: Project[] = [
  {
    id: "osimulate",
    title: "🧠 Virtual Memory Manager (VMM) with Paging & TLB Visualizer",
    description: [
      "A web-based simulator visualizing virtual memory translation with paging, page tables, and TLBs, supporting page replacement algorithms and performance analytics.",
      "Interactive visualization of virtual-to-physical address translation with support for TLBs and multi-level page tables.",
      "Simulations of page replacement algorithms like FIFO, LRU, and Optimal.",
      "Backend logic implemented in C/C++ and JavaScript for accurate low-level OS behavior.",
      "Frontend developed using React + Vite for fast rendering and a modular UI architecture.",
      "Adopted by faculty and students at Graphic Era Hill University as a learning aid.",
    ],
    technologies: [
      "React.js 15",
      "JavaScript",
      "Tailwind CSS",
      "C/C++",
      "Bootstrap",
    ],
    liveUrl: "https://sumitkarki188.github.io/React-VirtualMemoryManagement//",
    githubUrl: "https://github.com/sumitkarki188/virtual-memory-management",
    imageUrl: "/Vmm.png",
    featured: true,
    stats: { stars: 20, users: "Faculty & Students", date: "2025" },
  },
  {
    id: "formcraft",
    title: "🛡️ Ai Powered Code Quality Evaluator",
    description: [
      "An AI-powered web application that analyzes C, C++, Python, and Java code for vulnerabilities and maintainability issues.",
      "Built with React (Vite) and Flask, this tool performs static code analysis using mock logic and AI models to help developers write secure, high-quality code.",
      "Supports multiple languages: C, C++, Python, and Java.",
      "Instant code vulnerability detection (e.g., gets(), eval(), strcpy(), SQL injection).",
      "CodeBERT fine-tuned on datasets like the Juliet Test Suite (C/C++), custom datasets (Python/Java).",
      "Provides actionable recommendations to improve code quality, such as replacing insecure or deprecated functions.",
      "Built using React + Vite for fast frontend development and Flask for the backend API.",
    ],
    technologies: ["Rect.js", "Javascript", "Python", "Machine Learning"],
    liveUrl: "https://static-code-analyzer.netlify.app/",
    githubUrl: "https://github.com/sumitkarki188/COMPILER_FINAL",
    imageUrl: "/StaticCode.png",
    featured: false,
    stats: { stars: 0, users: "Faculty & Students", date: "2025" },
  },
  {
    id: "mindguard",
    title: "🎲Simple Dice Game",
    description: [
      "A fun and interactive dice game built with React.js that tests your luck and decision-making. Players select a number, roll the dice, and earn or lose points based on the outcome. ",
      "The game features a simple UI, responsive design, and real-time score updates to create an engaging user experience.",
      "Perfect for learning React state management, event handling, and building small interactive apps.",
      "Light/dark mode UI for accessibility.",
      "Built using React.js, JavaScript, HTML5, CSS3, and hosted on GitHub Pages.",
      "Fully responsive UI for a seamless experience across desktops and smartphones.",
      "Allows users to restart the game and score from scratch at any time.",
    ],
    technologies: ["React.js", "JavaScript", "HTML5"],
    liveUrl: "https://sumitkarki188.github.io/dice-game/",
    githubUrl: "https://github.com/sumitkarki188/dice-game",
    imageUrl: "/DiceGame.png",
    featured: true,
    stats: { stars: 0, users: "Finalist Teams", date: "2025" },
  },
  {
    id: "3",
    title: "🤖 Gemini AI Clone - Personal AI Assistant UI",
    description: [
      "A clean and responsive front-end clone of Google's Gemini AI interface, designed to simulate a modern conversational AI assistant. ",
      "Intuitive UI mimicking Gemini and ChatGPT, featuring prompt cards, input interactions, and personalized greetings.",
      " Predefined prompt cards for quick interaction",
      "Interactive input box with icon support (text, voice, code).",
      "Profile avatar for realistic assistant feel.",
      "Responsive design for desktop and mobile devices.",
      " Deployed on GitHub Pages for easy access",
    ],
    technologies: [
      "React",
      "D3.js",
      "OpenWeather API",
      "Framer Motion",
      "Chart.js",
    ],
    liveUrl: "https://sumitkarki188.github.io/Gemini-ai/",
    githubUrl: "https://github.com/sumitkarki188/Gemini-ai",
    imageUrl: "/GeminiAi.png",
    stats: { stars: 67, users: "1.2k", date: "2024" },
  },
  {
    id: "pathfinding",
    title: "♻️ RePlastic Salesforce CRM – Plastic Waste Management",
    description: [
      "🏗️ Built on Salesforce using custom Apex classes, triggers, flows, and custom objects",
      "🔄 Manages full plastic recycling lifecycle: waste collection → recycling → stock → orders",
      "📦 Custom Objects for Plastic Waste, Recycled Products, Orders, Restock Requests, and Recycling Centers",
      "⚡ Triggers fire on order placement & restock approval for real-time updates",
      "🔐 Validation Rules, Roles/Profiles, and Sharing Rules ensure secure access control",
      "🚀 Deployed via SFDX CLI and managed with Git & GitHub",
      "🧍 Used by roles like CEO, Sales Rep, and Warehouse Supervisor",
    ],
    technologies: ["Salesforce Platform ", "Apex", "SOQL","Flows"],
    githubUrl: "https://github.com/sumitkarki188/plastic-recycling-salesforce",
    imageUrl: "/PlasticWaste.png",
    stats: { stars: 0, users: "Individual", date: "2025" },
  },
  {
    id: "portfolio",
    title: "🌐 Personal Portfolio – Developer Showcase & Digital Identity",
    description: [
      "Sleek, responsive, and performance-optimized website to highlight my technical skills, projects, open-source work, and achievements.",
      "Project showcases with tech stacks, live demos, and GitHub links.",
      "Animated UI/UX with smooth transitions and hover effects using Framer Motion.",
      "Modern design with custom typography, soft gradients, and light/dark mode.",
      "Mobile-first and fully responsive across all devices.",
      "Modular, scalable, and built with reusable components and clean code.",
      "A storytelling platform reflecting my journey, growth, and value as a developer.",
    ],
    technologies: ["Next.js 14", "Tailwind CSS", "TypeScript", "Framer Motion"],
    liveUrl:
      "https://personnel-portfolio-655vxase3-archit-agarwals-projects-f61b9f94.vercel.app/",
    githubUrl: "https://github.com/ArchitAgarwal04/Personnel_Portfolio",
    imageUrl: "/portfolio.png",
    stats: { stars: 0, users: "Developers & Recruiters", date: "2025" },
  },
  {
    id: "applevision",
    title: "☁️ Weather Forecast App – Real-time Weather Updates",
    description: [
      "A modern weather forecasting web app with real-time data fetching.",
      "Displays current weather, temperature, humidity, and wind speed for any location.",
      "Features dynamic background changes based on weather conditions (e.g., sunny, rainy)",
      "Responsive design for desktop and mobile.",
      "Integrates with a weather API for live data updates.",
      "Built to demonstrate API integration, DOM manipulation, and responsive design skills.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    liveUrl: "https://architagarwal04.github.io/Apple-Vision/",
    githubUrl: "https://github.com/ArchitAgarwal04/Apple-Vision",
    imageUrl: "/visionpro.png",
    stats: { stars: 0, users: "Web Developers & Learners", date: "2024" },
  },
];

// Sort projects from latest to oldest by date (descending)
projects.sort((a, b) => Number(b.stats?.date) - Number(a.stats?.date));

export default function Projects() {
  const [filter, setFilter] = useState("all");

  // Always show all projects, including mock data, regardless of filter
  const filteredProjects = projects;

  return (
    <section
      id="projects"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      <MeshGradient />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
            Showcasing some of my best work in web development, featuring modern
            technologies and innovative solutions
          </p>
        </motion.div>

        {/* All Projects Grid (shows all, including mock data) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.1 * index }}
      className={`glass-card rounded-xl overflow-hidden card-hover group ${
        featured ? "lg:col-span-1" : ""
      }`}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Project stats overlay */}
        {project.stats && (
          <div className="absolute top-4 left-4 flex space-x-2">
            <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
              <Star className="w-3 h-3 text-yellow-400" />
              <span className="text-xs">{project.stats.stars}</span>
            </div>
            <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
              <Users className="w-3 h-3 text-blue-400" />
              <span className="text-xs">{project.stats.users}</span>
            </div>
          </div>
        )}

        <div className="absolute top-4 right-4 flex space-x-2">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-4 h-4" />
            </motion.a>
          )}
        </div>

        {project.stats && (
          <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
            <Calendar className="w-3 h-3 text-gray-400" />
            <span className="text-xs">{project.stats.date}</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300 text-white">
          {project.title}
        </h3>
        <ul className="list-disc pl-5 text-sm md:text-base text-white/70 mb-4 leading-relaxed">
          {project.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors text-sm md:text-base font-medium"
                whileHover={{ x: 5 }}
              >
                Live Demo →
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm md:text-base font-medium"
                whileHover={{ x: 5 }}
              >
                Source Code →
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
