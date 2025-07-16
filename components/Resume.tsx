"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Download,
  Eye,
  Award,
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { Experience, Education } from "@/types";
import { MeshGradient } from "@/components/BackgroundAnimations";

// const experiences: Experience[] = [
//   {
//     title: "Co-Technical Lead",
//     company: "Co-Dev Club, Graphic Era Hill University",
//     period: "Aug 2024 – Present",
//     description:
//       "Mentored over 100 students in web development and DSA through club sessions and peer learning initiatives. Led internal tech teams to build full-stack applications using React, Node.js, MongoDB, and Docker. Conducted workshops on Git, API integration, and performance optimization. Collaborated with faculty and student developers to promote a culture of open-source and project-based learning.",
//     technologies: ["React", "Node.js", "MongoDB", "Docker", "Git"],
//   },
//   {
//     title: "Team Lead – Finalist",
//     company: "Quasar 3.0, National Hackathon (Mumbai)",
//     period: "March 2025",
//     description:
//       "Led a 4-member team to build a mental health SaaS using Next.js 14, Tailwind CSS, MongoDB, and OpenAI APIs. Integrated a custom LLM for personalized journaling support and therapy insights. Implemented real-time analytics, chart visualizations, and responsive UI with light/dark mode themes. Selected as one of the top finalists among 300+ teams nationwide.",
//     technologies: [
//       "Next.js",
//       "TypeScript",
//       "Framer Motion",
//       "MongoDB",
//       "Tailwind CSS",
//     ],
//   },
//   {
//     title: "Team Lead – Finalist",
//     company: "Grapha-e-thon 2.0, National Hackathon",
//     period: "April 2025",
//     description:
//       "Led a 4-member team to build a mental health SaaS using Next.js 14, Tailwind CSS, MongoDB, and OpenAI APIs. Integrated a custom LLM for personalized journaling support and therapy insights. Implemented real-time analytics, chart visualizations, and responsive UI with light/dark mode themes. Selected as one of the top finalists among 300+ teams nationwide.",
//     technologies: [
//       "Next.js 14",
//       "Tailwind CSS",
//       "MongoDB",
//       "Docker",
//       "OpenAI APIs",
//     ],
//   },
//   {
//     title: "Open Source Creator",
//     company: "OSimulate – Operating Systems Learning Dashboard",
//     period: "June 2025 – Present",
//     description:
//       "Designed and open-sourced a full-fledged learning dashboard to teach core OS concepts through interactive visualizations. Included modules for Page Replacement, CPU Scheduling, and Memory Management with animations, theory, and code walkthroughs.",
//     technologies: [
//       "C++",
//       "Next.js",
//       "Express.js",
//       "Tailwind CSS",
//       "Framer Motion",
//     ],
//   },
// ];

const education: Education[] = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Graphic Era Hill University, Uttarakhand",
    period: "2022 - 2026",
    description:
      "Focused on data structures, algorithms, operating systems, and full-stack development using technologies like React.js, Next.js, Tailwind CSS, Node.js, and MongoDB.Specializing in React Native and Android development, building performant mobile apps with modern UI/UX.",
    gpa: "CGPA: 8.0/10",
  },
  {
    degree: "Senior Secondary (Class XII – CBSE)",
    institution: "Army Public School, Uttarakhand (Pithoragarh)",
    period: "2022",
    description:
      "Specialized in Physics, Chemistry, and Mathematics. Active participant in competitive programming contests and school-level coding activities.",
    gpa: "Percentage: 82.3%",
  },
  {
    degree: "Secondary (Class X – CBSE)",
    institution: "Army Public School, Uttarakhand (Pithoragarh)",
    period: "2020",
    description:
      "Strong foundation in science and mathematics. Engaged in early web development and logical problem-solving.",
    gpa: "Percentage: 87.7%",
  },
];

const achievements = [
  "Finalist at Quasar 3.0, a national-level hackathon held in Mumbai.",
  "Finalist at Grapha-e-thon 2.0, national hackathon representing university.",
  "Co-Technical Lead at Co-Dev Club, Graphic Era Hill University.",
  "Organized and led Arambh 3.0, a flagship CP event for 100+ participants.",
  "Knight on LeetCode and Pupil on Codeforces.",
  "Completed PwC Launchpad course in Cybersecurity Risk & Compliance.",
  "Mentored peers and juniors in full-stack development and competitive programming.",
];

const projects = [
  {
    name: "MindGuard – AI-Powered Mental Health SaaS",
    description:
      "A full-stack mental health platform integrating a custom LLM for journaling assistance and therapy insights. Includes analytics dashboards, chart visualizations, light/dark themes, and secure authentication. Finalist at Grapha-e-thon 2.0.",
    impact: "Next.js 14, Tailwind CSS, MongoDB, OpenAI APIs",
  },
  {
    name: "OSimulate – OS Learning Dashboard",
    description:
      "An open-source educational platform featuring OS theory, interactive simulations (scheduling, memory, deadlocks), quizzes, and progress tracking. Adopted by faculty and used by students; starred on GitHub.",
    impact: "Next.js 15, TypeScript, Tailwind CSS, Supabase",
  },
  {
    name: "FormCraft – Custom Form Builder",
    description:
      "A drag-and-drop form builder for creating dynamic forms in real-time. Supports public sharing via secure links, real-time previews, and customizable fields. Emphasizes UX and data handling.",
    impact: "Next.js 14, TypeScript, PostgreSQL",
  },
];

export default function Resume() {
  // Google Drive file ID
  const fileId = "17mAerIB8HNkBOxZIhLihHZnL4xqDXJum";

  // Direct‑download URL (forces download)
  const downloadURL = `https://drive.google.com/uc?export=download&id=${fileId}`;

  // View URL (opens Google Drive preview)
  const previewURL = `https://drive.google.com/file/d/${fileId}/view?usp=drivesdk`;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = downloadURL;
    link.download = "Archit_Agarwal_Resume.pdf"; // filename on the user's system
    link.click();
  };

  const handlePreview = () => {
    window.open(previewURL, "_blank");
  };

  return (
    <section
      id="resume"
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
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
            My professional journey, achievements, and the impact I've made in
            the tech industry
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={handlePreview}
              className="px-8 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:from-blue-600 hover:to-purple-600 hover:scale-105 transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              <Eye className="w-5 h-5" />
              <span>Preview</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 rounded-xl mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
            Professional Summary
          </h3>
          <p className="text-base md:text-lg leading-relaxed text-white/90">
            Full-stack developer skilled in MERN and T3 stacks, currently
            pursuing B.Tech at Graphic Era Hill University. Finalist at
            Grapha-e-thon 2.0, with a leadership role in the Co-Dev Club. Built
            projects using Next.js, Tailwind CSS, and OpenCV. passionate about
            solving real-world problems through code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Experience */}
          {/* <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500/30 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                  Experience
                </h3>
              </div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="border-l-2 border-purple-500/50 pl-6 relative"
                  >
                    <div className="absolute w-3 h-3 bg-purple-400 rounded-full -left-2 top-2"></div>
                    <div className="mb-3">
                      <h4 className="text-lg md:text-xl font-bold text-white">
                        {exp.title}
                      </h4>
                      <div className="flex items-center text-purple-300 font-medium text-base md:text-lg mb-1">
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center text-sm md:text-base text-white/70">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-white/90 mb-3 leading-relaxed">
                      {exp.description}
                    </p>
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-md text-xs md:text-sm border border-purple-500/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div> */}

          {/* Education & Projects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Education */}
            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
                    className="border-l-2 border-blue-500/50 pl-6 relative"
                  >
                    <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-2 top-2"></div>
                    <div className="mb-2">
                      <h4 className="text-lg md:text-xl font-bold text-white">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center text-blue-300 font-medium text-base md:text-lg mb-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm md:text-base text-white/70">
                        <span>{edu.period}</span>
                        {edu.gpa && <span>GPA: {edu.gpa}</span>}
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-white/90">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Projects */}
            {/* <div className="glass-card p-8 rounded-xl"> */}
              {/* <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500/30 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-green-300" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                  Key Projects
                </h3>
              </div> */}

              {/* <div className="space-y-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                    className="p-4 bg-white/10 rounded-lg border border-white/20"
                  >
                    <h4 className="font-bold text-base md:text-lg text-white mb-2">
                      {project.name}
                    </h4>
                    <p className="text-sm md:text-base text-white/80 mb-2">
                      {project.description}
                    </p>
                    <div className="flex items-center text-green-300 text-sm md:text-base">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      <span>{project.impact}</span>
                    </div>
                  </motion.div>
                ))}
              </div> */}
            {/* </div> */}
          </motion.div>
        </div>

        {/* Achievements */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-card p-8 rounded-xl"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-yellow-500/30 rounded-lg flex items-center justify-center mr-4">
              <Award className="w-6 h-6 text-yellow-300" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold gradient-text">
              Key Achievements
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.9 + 0.05 * index }}
                className="flex items-start"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm md:text-base text-white/90">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
