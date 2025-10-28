"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ExternalLink,
  Eye,
  Shield,
  ChevronDown,
  ChevronUp,
  Award,
  Calendar,
  Building,
} from "lucide-react";
import { MeshGradient } from "@/components/BackgroundAnimations";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string[];
  imageUrl: string;
  verifyUrl?: string;
  viewUrl?: string;
  skills: string[];
  featured: boolean;
}

const certificates: Certificate[] = [
  {
    id: "aws-cloud-practitioner",
    title: "👨‍💻 Certified Salesforce Developer",
    issuer: "AgentBlazer",
    date: "2025",
    description: [
      "Proficient in developing custom applications using Apex, Visualforce, and Lightning Web Components.",
      "Deep understanding of Salesforce data modeling, process automation, and platform configuration.",
      "Experience with Salesforce integration patterns, APIs, and deployment tools.",
      "Strong grasp of security, governor limits, and multi-tenant architecture in Salesforce.",
    ],
    imageUrl: "/salesforce.png",
    viewUrl: "/certificates/salesforce.pdf",
    skills: ["Salesforce", "Apex", "LWC", "Visualforce", "CRM Development"],
    featured: true,
  },
  {
    id: "react-certification",
    title: "🐍 Python Programming Fundamentals",
    issuer: "Microsoft - Coursera",
    date: "2025",
    description: [
      "Foundational Python programming course offered by Microsoft via Coursera.",
      "Covers variables, data types, conditionals, loops, functions, and error handling.",
      "Emphasis on writing clean, readable code and understanding programming logic.",
      "Includes hands-on exercises and quizzes to reinforce core Python concepts.",
    ],
    imageUrl: "/microsoftPython.png",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/3ZFVEUMB4QDW",
    viewUrl: "/certificates/coursersaPython.pdf",
    skills: ["Python", "Containers", "OOP", "Data Structures"],
    featured: true,
  },
  {
    id: "full-stack-web-dev",
    title: "💡 GDG Solution Challenge Participant",
    issuer: "Google Developer Groups (GDG) On Campus",
    date: "2025",
    description: [
      "Participated in the GDG on Campus Solution Challenge, powered by Hack2skill.",
      "Demonstrated commitment to learning and contributing to tech-driven social impact.",
      "Collaborated on innovative solutions within the developer community.",
      "Enhanced understanding of community-driven tech development and project design.",
    ],
    imageUrl: "/gdg.jpg",
    verifyUrl: "https://certificate.hack2skill.com/user/gdgscparticipation/2025H2S01GSC-P41324",
    viewUrl: "#",
    skills: [
      "Team Collaboration",
      "Solution Design",
      "Community Engagement",
      "Innovation",
    ],
    featured: false,
  },
  {
    id: "python-data-science",
    title: "🐍 Programming in Python",
    issuer: "SWAYAM - NPTEL",
    date: "2023",
    description: [
      "Comprehensive introduction to Python programming through the SWAYAM platform.",
      "Covers syntax, control structures, functions, and modules in Python.",
      "Hands-on practice with file handling, data structures, and object-oriented programming.",
      "Focus on problem-solving and algorithmic thinking using Python.",
    ],
    imageUrl: "/swayamPython.png",
    verifyUrl:
      "https://storage.googleapis.com/swayam-node2-production_certificates/examform/certificates/ns_cec23_cs14/2315110010740_cec23-cs14.pdf?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=sa-google-drive%40swayam-node2-production.iam.gserviceaccount.com%2F20250717%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250717T090508Z&X-Goog-Expires=300&X-Goog-SignedHeaders=host&X-Goog-Signature=82f06000362023ea5876e320ae344578e13a39961aa4285cc4b42a75c94b1985255108448f200ea87c171879391483da19d6612d508eabb371e50540befa216f227142791371f186c2a43cb80774803200e103f93ab3a43546161cca751d16a5e078d636659b53ecb8ff83f1c1061f3d56dfa4d6fff3f65b7444c01564524c678b824c8a4d28568e7422e7f4554f6c06409c51e05e6f92a5708a138add9e42f37352789fc16d82b8f0467ef0ce4933c9f8cc92fa5425e9f8e59107896d8a2bdff4e2de29fa9f4a1d64bb41d6a16f3086c3c09330ea9d087d2b235fdaecfabc2d806f83eb14ea10bc789463a3e5cde920b7da1c62d2a4f4fa5fecdac04eaf4ff4",
    viewUrl:"/certificates/python-swayam.pdf",
    skills: ["Python", "Containers", "File Handling", "Data Structures"],
    featured: true,
  },
  {
    id: "cyber-security",
    title: "👨‍💻 Hackathon Hack O holi 3.0",
    issuer: "Graphic Era Hill University",
    date: "2025",
    description: [
      "Participated in Hack-O-Holi 3.0, a 36-hour national-level hackathon.",
      "Built a full-stack web app in a team to solve a real-world problem.",
      "Used modern tech and user-focused design under time constraints.",
      "Presented the project to industry experts and received feedback.",
    ],
    imageUrl: "/Hack3.0.png",
    viewUrl: "/certificates/hack3.0.pdf",
    skills: [
      "Team Collaboration",
      "Problem Solving",
      "Full-Stack Web Development",
      "UI/UX Design",
    ],
    featured: false,
  },
  {
    id: "javascript-algorithms",
    title: "💻 Android Mobile Application Development",
    issuer: "Swayam - NPTEL",
    date: "2024",
    description: [
      "Learned Android app development fundamentals using Java.",
      "Built interactive mobile apps with Activities, Intents, and UI components.",
      "Worked with Android Studio, layouts, and event-driven programming.",
    ],
    imageUrl: "/androidSwayam.png",
    viewUrl: "certificates/androidSwayam.pdf",
    skills: [
      "Java",
      "Android Studio",
      "Mobile Development",
      "UI/UX for Mobile",
      "XML",
    ],
    featured: false,
  },
  {
  id: "oracle-devops",
  title: "💻 DevOps Professional",
  issuer: "Oracle",
  date: "2025",
  description: [
    "Gained expertise in continuous integration and continuous deployment (CI/CD) pipelines.",
    "Worked with containerization and orchestration using Docker and Kubernetes.",
    "Learned infrastructure as code (IaC) with tools like Terraform and Ansible.",
    "Applied monitoring, logging, and version control best practices for modern DevOps workflows.",
  ],
  imageUrl: "/devops.png",
  viewUrl: "certificates/devops_oracle.pdf",
  skills: [
    "Docker",
    "Kubernetes",
    "Linux",
    "Git",
    "Cloud Platforms",
  ],
  featured: true,
},
 {
  id: "young_turk-naukri.com",
  title: "🏆 Naukri Campus Young Turks 2025 Participant",
  issuer: "Naukri.com",
  date: "2025",
 description: [
  "Participated in Naukri Campus Young Turks 2025, India’s largest undergraduate skill assessment competition.",
  "Secured an All India Rank of #10684 among lakhs of participants across multiple domains.",
  "Demonstrated strong aptitude, problem-solving, and domain-specific skills in a national-level setting.",
  "Gained valuable exposure to competitive assessments, enhancing preparedness for campus placements and industry challenges.",
],
  imageUrl: "/young_turk.png",
  viewUrl: "certificates/young_turk.pdf",
  skills: [
  "Problem Solving",
  "Aptitude & Logical Reasoning",
  "Competitive Programming",
  "Data Structures & Algorithms",
],
  featured: true,
},
{
  id: "adobe-india-hackathon-2025",
  title: "💡 Adobe India Hackathon 2025 Participant",
  issuer: "Adobe India",
  date: "2025",
 description: [
 "Participated in Adobe India Hackathon 2025 – 'Connecting the Dots Challenge', focused on reimagining the PDF as an intelligent and interactive experience.",
    "Collaborated in a team of 3 members from the same institute to design innovative solutions that enhance knowledge discovery and research workflows.",
    "Cleared the Online MCQ Assessment + Coding round, involving algorithm, data structures, and problem-solving within a timed environment.",
],
  imageUrl: "/adobe_unstop.png",
  viewUrl: "certificates/adobe_unstop.pdf",
  skills: [
    "Problem Solving",
    "Data Structures & Algorithms",
    "Team Collaboration",
    "Hackathon Experience"
  ],
  featured: true,
}

];

// Sort certificates from latest to oldest by date (descending)
certificates.sort((a, b) => Number(b.date) - Number(a.date));

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const [expandedCert, setExpandedCert] = useState<string | null>(null);

  // Show only featured certificates initially, all when showAll is true
  const displayedCertificates = showAll
    ? certificates
    : certificates.filter((cert) => cert.featured);

  return (
    <section
      id="certificates"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      <MeshGradient />
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-blue-900/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
            Professional certifications and achievements that validate my
            expertise in various technologies and domains
          </p>

          {/* Show All Certificates Button */}
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? (
              <>
                <ChevronUp className="w-5 h-5 mr-2" />
                Show Featured Only
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5 mr-2" />
                Show All Certificates ({certificates.length})
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCertificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
              isExpanded={expandedCert === certificate.id}
              onToggleExpand={() =>
                setExpandedCert(
                  expandedCert === certificate.id ? null : certificate.id
                )
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CertificateCard({
  certificate,
  index,
  isExpanded,
  onToggleExpand,
}: {
  certificate: Certificate;
  index: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.1 * index }}
      className="glass-card rounded-xl overflow-hidden card-hover group"
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={certificate.imageUrl}
          alt={certificate.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Certificate info overlay */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
            <Award className="w-3 h-3 text-yellow-400" />
            <span className="text-xs">Certified</span>
          </div>
          <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
            <Calendar className="w-3 h-3 text-green-400" />
            <span className="text-xs">{certificate.date}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          {certificate.viewUrl && (
            <motion.a
              href={certificate.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Eye className="w-4 h-4" />
            </motion.a>
          )}
          {certificate.verifyUrl && (
            <motion.a
              href={certificate.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Shield className="w-4 h-4" />
            </motion.a>
          )}
        </div>

        {/* Issuer info */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
          <Building className="w-3 h-3 text-blue-400" />
          <span className="text-xs truncate max-w-32">
            {certificate.issuer}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300 text-white">
          {certificate.title}
        </h3>

        <p className="text-sm text-purple-300 mb-3 font-medium">
          {certificate.issuer}
        </p>

        {/* Description - expandable */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : "60px" }}
          className="overflow-hidden"
        >
          <ul className="list-disc pl-5 text-sm md:text-base text-white/70 mb-4 leading-relaxed">
            {certificate.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </motion.div>

        {/* Expand/Collapse button */}
        <motion.button
          onClick={onToggleExpand}
          className="text-purple-400 hover:text-purple-300 transition-colors text-sm mb-4 flex items-center"
          whileHover={{ x: 5 }}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-1" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-1" />
              Show More
            </>
          )}
        </motion.button>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {certificate.skills.map((skill) => (
            <motion.span
              key={skill}
              className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 rounded-full text-xs border border-green-500/30"
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Action links */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            {certificate.viewUrl && (
              <motion.a
                href={certificate.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors text-sm md:text-base font-medium flex items-center"
                whileHover={{ x: 5 }}
              >
                <Eye className="w-4 h-4 mr-1" />
                View Certificate
              </motion.a>
            )}
            {certificate.verifyUrl && (
              <motion.a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors text-sm md:text-base font-medium flex items-center"
                whileHover={{ x: 5 }}
              >
                <Shield className="w-4 h-4 mr-1" />
                Verify
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
