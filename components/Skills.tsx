'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SkillCategory } from '@/types';
import { OrbitingSkills } from '@/scenes/OrbitingSkills';
import { GridBackground } from '@/components/BackgroundAnimations';

const skillsData = [
  {
    icon: '💻',
    title: 'Programming Languages',
    skills: [
      { name: 'C++ (strongest)', level: 100 },
      { name: 'JavaScript (ES6+)', level: 80 },
      { name: 'Python', level: 80 },
      { name: 'Java (basic)', level: 60 }
    ]
  },
  {
    icon: '🌐',
    title: 'Web Development',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML5, CSS3', level: 95 },
      { name: 'Framer Motion (animations)', level: 80 },
    ]
  },
  {
    icon: '🌐',
    title: 'Web Development (Backend)',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'Firebase', level: 75 },
      { name: 'MongoDB', level: 80 },
      { name: 'SQL', level: 90 },
    ]
  },
  {
    icon: '🧠',
    title: 'Machine Learning & AI',
    skills: [
      { name: 'Python (NumPy, Pandas, Matplotlib)', level: 80 },
      { name: 'Scikit-learn (ML Models)', level: 75 },
      { name: 'OpenCV (Computer Vision)', level: 70 },
      { name: 'Flask (ML model deployment)', level: 70 },
      { name: 'Jupyter Notebooks', level: 80 }
    ]
  },
  {
    icon: '⚙️',
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Postman (API Testing)', level: 85 },
      { name: 'VS Code', level: 95 }
    ]
  },
  {
    icon: '🧪',
    title: 'Deployment',
    skills: [
      { name: 'Vercel (Next.js deployment)', level: 90 },
      { name: 'Netlify', level: 90 },
      { name: 'MongoDB Atlas', level: 80 }
    ]
  },
  {
    icon: '🧩',
    title: 'Platforms & Ecosystem',
    skills: [
      { name: 'Linux basics (Ubuntu CLI)', level: 70 },
      { name: 'Windows OS', level: 95 },
      { name: 'NPM, Yarn (Package Managers)', level: 85 }
    ]
  },
  {
    icon: '🏁',
    title: 'Competitive Programming',
    skills: [
      { name: 'Codeforces', level: 40 },
      { name: 'LeetCode', level: 75 },
      { name: 'GFG', level: 60 },
      { name: 'Coding Ninjas', level: 60 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 relative overflow-hidden">
      <GridBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <OrbitingSkills />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
            A comprehensive overview of my technical expertise and proficiency across modern technologies.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl md:text-2xl font-bold gradient-text">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.title === 'Competitive Programming' ? (
                  <ul className="list-disc pl-6 space-y-1 text-white/90">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skill.name} className="text-base">{skill.name}</li>
                    ))}
                  </ul>
                ) : (
                  category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.1 * index + 0.05 * skillIndex }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm md:text-base font-medium text-white">{skill.name}</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <motion.div
                          className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 1, delay: 0.1 * index + 0.1 * skillIndex }}
                        />
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}