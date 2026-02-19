"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
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
                                                {exp.company}
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
                                        {exp.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-xs px-2.5 py-1 rounded-md bg-surface border border-card-border text-muted-dark"
                                            >
                                                {t}
                                            </span>
                                        ))}
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
