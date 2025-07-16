"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Rocket, Users, Award, Coffee } from "lucide-react";
import { GridBackground } from "@/components/BackgroundAnimations";
import { LetterAssembly } from "./LetterAssembly";
import { TypeWriter } from "./TypeWriter";
import { Badge } from "./ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { FloatingText } from "../scenes/FloatingText";

const features = [
  {
    icon: Code,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable, and efficient code with modern best practices and design patterns.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description:
      "Crafting beautiful, intuitive user interfaces that engage users and deliver exceptional experiences.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Building fast, optimized applications with cutting-edge technologies and performance optimization.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working effectively with cross-functional teams to deliver projects that exceed expectations.",
    color: "from-green-500 to-emerald-500",
  },
];

const stats = [
  { number: "50+", label: "Projects Completed", icon: Award },
  { number: "3+", label: "Years Experience", icon: Coffee },
  { number: "15+", label: "Technologies Mastered", icon: Code },
  { number: "100%", label: "Client Satisfaction", icon: Users },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      <GridBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Animated Name & Typewriter */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg md:text-xl font-semibold text-white/80 mb-2">
            Full Stack Web Developer |Software Developer | Competitive
            Programmer
          </p>
          {/* <TypeWriter
            texts={["Full Stack Developer", "Hackathon Finalist", "Mentor & Leader", "Open Source Contributor", "AI Explorer"]}
            className="text-xl sm:text-2xl font-medium text-purple-300 justify-center mt-2"
          /> */}
        </div>
        {/* Thematic Cards */}
        <div className="grid gap-8">
          {/* What Drives Me */}
          {/* <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/30 border-none shadow-xl">
            <CardHeader className="flex flex-row items-center gap-3">
              <span className="text-pink-400"><Rocket size={28}/></span>
              <CardTitle className="text-pink-300">What Drives Me?</CardTitle>
            </CardHeader>
            <CardContent className="text-white/90 text-lg">
              <p className="mb-2">From organizing <span className="font-semibold text-purple-300">Arambh 3.0</span>, an inter-university competitive coding fest with over 100 participants, to leading finalist teams at national hackathons, I thrive on teamwork, innovation, and building with purpose.</p>
              <p className="mb-2">I'm also the <span className="font-semibold text-blue-300">Co-Technical Lead</span> of the Co-dev Club at my university, where I mentor fellow developers, conduct technical sessions, and contribute to a growing tech community focused on peer learning and real-world development.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary">Teamwork</Badge>
                <Badge variant="secondary">Innovation</Badge>
                <Badge variant="secondary">Mentorship</Badge>
                <Badge variant="secondary">Community</Badge>
              </div>
            </CardContent>
          </Card> */}
          {/* Competitive Programming */}
          <Card className="bg-gradient-to-br from-blue-900/40 to-purple-900/30 border-none shadow-xl">
            <CardHeader className="flex flex-row items-center gap-3">
              <span className="text-cyan-400">
                <Code size={28} />
              </span>
              <CardTitle className="text-cyan-300">
                Competitive Programming
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/90 text-lg">
              <p className="mb-2">
                Beyond development, I actively engaged on platforms like
                LeetCode, Codeforces, and GeeksforGeeks — having solved over{" "}
                <span className="font-semibold text-purple-300">
                  300+ questions on LeetCode
                </span>{" "}
                <span className="font-semibold text-yellow-300">
                  and 400+ problems across all platforms combined
                </span>
                , This consistent practice sharpens my problem-solving and
                algorithmic thinking, which directly enhances my approach to
                building efficient and scalable software..
              </p>
              <p>
                My journey began with curiosity and code — and today, that spark
                fuels everything I do, from solving real-world problems to
                exploring the frontiers of AI, systems, and full-stack
                development.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge>Leetcode</Badge>
                <Badge>Codeforces</Badge>
                <Badge>GFG</Badge>
                <Badge variant="secondary">Algorithmic Thinking</Badge>
                <Badge variant="secondary">AI Explorer</Badge>
              </div>
            </CardContent>
          </Card>

          {/* current focus */}
          <Card className="bg-gradient-to-br from-blue-900/40 to-purple-900/30 border-none shadow-xl">
            <CardHeader className="flex flex-row items-center gap-3">
              <span className="text-cyan-400">
                <Code size={28} />
              </span>
              <CardTitle className="text-cyan-300">Current Focus</CardTitle>
            </CardHeader>
            <CardContent className="text-white/90 text-lg">
              <p className="mb-2">
                I’m currently focused on strengthening my core programming
                foundation by learning Data Structures and Algorithms (DSA)..
              </p>
              <p>
                the same time, I’m expanding my knowledge of modern web
                development tools and frameworks diving into technologies.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge>React</Badge>
                <Badge>Node.js</Badge>
                <Badge>Tailwind css</Badge>
                <Badge>Mongo DB</Badge>
                <Badge>Git</Badge>
                
              </div>
            </CardContent>
          </Card>

          {/* Hackathons & Leadership */}
          {/* <Card className="bg-gradient-to-br from-pink-900/40 to-purple-900/30 border-none shadow-xl">
            <CardHeader className="flex flex-row items-center gap-3">
              <span className="text-yellow-400"><Award size={28}/></span>
              <CardTitle className="text-yellow-300">Hackathons & Leadership</CardTitle>
            </CardHeader>
            <CardContent className="text-white/90 text-lg">
              <ul className="list-disc pl-6 mb-2">
                <li><span className="font-semibold text-blue-300">Quasar 3.0 (Mumbai)</span> – <span className="text-purple-300">National Finalist</span>. Led a dynamic team in building AI-powered solutions under real-world constraints, guided by industry experts.</li>
                <li><span className="font-semibold text-blue-300">Graph-a-e-thon 2.0</span> – <span className="text-purple-300">National Finalist</span>. Spearheaded a data-driven project focused on graph-based analytics and scalable architecture.</li>
              </ul>
              <p>These experiences taught me to lead under pressure, collaborate deeply, and build solutions that truly matter.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary">National Finalist</Badge>
                <Badge variant="secondary">AI Solutions</Badge>
                <Badge variant="secondary">Leadership</Badge>
              </div>
            </CardContent>
          </Card> */}
          {/* Community & Mentorship */}
          {/* <Card className="bg-gradient-to-br from-green-900/40 to-blue-900/30 border-none shadow-xl">
            <CardHeader className="flex flex-row items-center gap-3">
              <span className="text-green-400"><Users size={28}/></span>
              <CardTitle className="text-green-300">Community & Mentorship</CardTitle>
            </CardHeader>
            <CardContent className="text-white/90 text-lg">
              <p>As a mentor and community builder, I love sharing knowledge, conducting technical sessions, and helping others grow. I believe in the power of peer learning and strive to foster a collaborative, inclusive tech culture wherever I go.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary">Mentor</Badge>
                <Badge variant="secondary">Tech Sessions</Badge>
                <Badge variant="secondary">Peer Learning</Badge>
                <Badge variant="secondary">Inclusive Culture</Badge>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  );
}
