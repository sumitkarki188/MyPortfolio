'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { SocialLink } from '@/types';

const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/sumitkarki188', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sumitsinghkarki/', icon: 'Linkedin' },
  { name: 'Email', url: 'mailto:sumitkarki1114@gmail.com', icon: 'Mail' },
];

const IconComponents = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

export default function Footer() {
  return (
    <footer className="py-20 relative overflow-hidden bg-gradient-to-t from-black/50 to-transparent z-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-6">
            <span className="gradient-text">Let's Build Something</span>
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold font-poppins mb-8">
            <span className="text-white">Amazing Together</span>
          </h3>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
            Ready to bring your ideas to life? I'm here to help you create exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {socialLinks.map((link, index) => {
            const IconComponent = IconComponents[link.icon as keyof typeof IconComponents];
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200 group"
              >
                <IconComponent className="w-6 h-6 text-white/70 group-hover:text-purple-400 transition-colors" />
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-white/70 mb-4">
            © 2025 Sumit Karki. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}