"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaLinux, FaBrain } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiExpress, SiMongodb, SiPostgresql, SiTailwindcss, SiFirebase, SiRedis } from "react-icons/si";
import { TbApi, TbBrandHtml5 } from "react-icons/tb";
import { RiBrainLine } from "react-icons/ri";

const skills: { name: string; icon: React.ReactNode }[] = [
    { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
    { name: "Express.js", icon: <SiExpress className="w-4 h-4 text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#4169E1]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" /> },
    { name: "HTML/CSS", icon: <TbBrandHtml5 className="w-4 h-4 text-[#E34F26]" /> },
    { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
    { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
    { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
    { name: "Firebase", icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" /> },
    { name: "Redis", icon: <SiRedis className="w-4 h-4 text-[#DC382D]" /> },
    { name: "LangChain", icon: <FaBrain className="w-4 h-4 text-[#1C3C3C]" /> },
    { name: "LangGraph", icon: <RiBrainLine className="w-4 h-4 text-[#8A2BE2]" /> },
    { name: "REST APIs", icon: <TbApi className="w-4 h-4 text-[#6BA539]" /> },
    { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
];

export default function Skills() {
    return (
        <section id="skills" className="py-14 sm:py-20 relative">
            <div className="max-w-3xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <h2 className="text-2xl font-bold mb-2">Tech Stack</h2>
                    <p className="text-sm text-muted">Technologies I use to bring ideas to life</p>
                </motion.div>

                {/* Skills pills with colorful icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap gap-2.5"
                >
                    {skills.map((skill, i) => (
                        <motion.span
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.03, duration: 0.3 }}
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-card border border-card-border text-sm text-muted hover:text-foreground hover:border-white/20 transition-all duration-200 cursor-default"
                        >
                            {skill.icon}
                            {skill.name}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
