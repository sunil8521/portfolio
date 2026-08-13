"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink, Code, Rocket } from "lucide-react";
import {
    SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb,
    SiPython, SiFlask, SiDocker, SiGithubactions
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const techIconMap: Record<string, { icon: React.ReactNode }> = {
    "Node.js": { icon: <SiNodedotjs className="w-3 h-3 text-[#5FA04E]" /> },
    "Express.js": { icon: <SiExpress className="w-3 h-3 text-white" /> },
    "React": { icon: <SiReact className="w-3 h-3 text-[#61DAFB]" /> },
    "Next.js": { icon: <SiNextdotjs className="w-3 h-3 text-white" /> },
    "Frontend Development": { icon: <Code className="w-3 h-3 text-neutral-400" /> },
    "MongoDB": { icon: <SiMongodb className="w-3 h-3 text-[#47A248]" /> },
    "REST APIs": { icon: <TbApi className="w-3 h-3 text-[#10B981]" /> },
    "Python": { icon: <SiPython className="w-3 h-3 text-[#3776AB]" /> },
    "Flask": { icon: <SiFlask className="w-3 h-3 text-white" /> },
    "Docker": { icon: <SiDocker className="w-3 h-3 text-[#2496ED]" /> },
    "GitHub Actions": { icon: <SiGithubactions className="w-3 h-3 text-[#2088FF]" /> },
    "CI/CD": { icon: <Rocket className="w-3 h-3 text-orange-500" /> },
};

const experiences = [
    {
        company: "Swiftrise Solution Pvt Ltd",
        role: "Full-stack Developer Intern",
        type: "Full-time",
        location: "Remote",
        period: "Feb 2026 – Present",
        isCurrent: true,
        description: [
            "Engineered secure, high-performance server architectures using Node.js and Express.js to process enterprise transactions.",
            "Created pixel-perfect, fully responsive client interfaces using modern React and Tailwind CSS.",
            "Integrated state management protocols and optimized browser API usage to enhance user experience.",
            "Authored scalable, clean codebase patterns and maintained version workflows using Git."
        ],
        tech: ["Node.js", "Express.js", "React", "Frontend Development","Next.js"],
        link: "https://www.linkedin.com/company/swiftrise-solutions-pvt-ltd",
    },
    {
        company: "Tribex Esports",
        role: "Full Stack Developer Intern",
        type: "Virtual",
        location: "Remote",
        period: "Aug 2025 – Dec 2025",
        isCurrent: false,
        description: [
            "Developed and maintained features for a live production esports platform using React, Node.js, and MongoDB",
            "Built reusable frontend components and integrated RESTful APIs to support dynamic content rendering",
            "Delivered bug fixes and feature updates collaborating with a remote development team",
        ],
        tech: ["React", "Node.js", "MongoDB", "REST APIs"],
        link: "https://tribexesports.com",
    },
    {
        company: "TimesPro",
        role: "DevOps Intern",
        type: "Virtual",
        location: "Remote",
        period: "Jun 2025 – Aug 2025",
        isCurrent: false,
        description: [
            "Built and deployed a web application using Python (Flask) with a browser-based UI",
            "Containerized the application using Docker for consistent development and deployment",
            "Set up CI/CD pipelines using GitHub Actions to automate testing and deployment workflows",
        ],
        tech: ["Python", "Flask", "Docker", "GitHub Actions", "CI/CD"],
        link: null,
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-14 sm:py-20 relative bg-surface/30">
            <div className="max-w-3xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <h2 className="text-2xl font-bold mb-2">
                        Experience
                    </h2>
                    <p className="text-sm text-muted">
                        My career path and the experiences that shaped me
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-card-border" />

                    <div className="space-y-8">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="relative pl-16 md:pl-20"
                            >
                                {/* Timeline dot */}
                                <div
                                    className={`absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full border-2 ${exp.isCurrent
                                        ? "bg-white border-white shadow-lg shadow-white/20"
                                        : "bg-card border-card-border"
                                        }`}
                                />

                                {/* Card */}
                                <div className="rounded-2xl bg-card border border-card-border p-6 hover:border-white/15 transition-all duration-300 glow-border">
                                    {/* Header */}
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground">
                                                {exp.link ? (
                                                    <a
                                                        href={exp.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-white hover:underline flex items-center gap-1.5 group/link"
                                                    >
                                                        {exp.company}
                                                        <ExternalLink size={14} className="text-muted-dark group-hover/link:text-white transition-colors" />
                                                    </a>
                                                ) : (
                                                    exp.company
                                                )}
                                            </h3>
                                            <p className="text-neutral-400 font-medium text-sm">
                                                {exp.role}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3 text-xs text-muted">
                                            {exp.isCurrent && (
                                                <span className="px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/20 font-medium">
                                                    PRESENT
                                                </span>
                                            )}
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} />
                                                {exp.period}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Meta */}
                                    <div className="flex items-center gap-4 text-xs text-muted-dark mb-4">
                                        <span className="flex items-center gap-1">
                                            <Briefcase size={12} />
                                            {exp.type}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin size={12} />
                                            {exp.location}
                                        </span>
                                    </div>

                                    {/* Bullets */}
                                    <ul className="space-y-2 mb-4">
                                        {exp.description.map((point, i) => (
                                            <li key={i} className="text-sm text-muted flex items-start gap-2">
                                                <span className="text-neutral-500 mt-1.5 text-[6px]">●</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech badges */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t) => {
                                            const techData = techIconMap[t];
                                            return (
                                                <span
                                                    key={t}
                                                    className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md bg-surface border border-card-border text-muted-dark"
                                                >
                                                    {techData?.icon}
                                                    {t}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
