"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs,
    SiExpress, SiMongodb, SiPostgresql, SiTailwindcss,
    SiRedis, SiDocker, SiGit, SiLangchain, SiPrisma
} from "react-icons/si";
import { FaAws, FaLinux } from "react-icons/fa";
import { TbApi, TbBrandHtml5 } from "react-icons/tb";
import { RiBrainLine } from "react-icons/ri";

const skills: { name: string; icon: React.ReactNode }[] = [
    { name: "React", icon: <SiReact className="w-8 h-8 md:w-10 md:h-10 text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 md:w-10 md:h-10 text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 md:w-10 md:h-10 text-[#3178C6]" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 md:w-10 md:h-10 text-[#F7DF1E]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8 md:w-10 md:h-10 text-[#5FA04E]" /> },
    { name: "Express.js", icon: <SiExpress className="w-8 h-8 md:w-10 md:h-10 text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 md:w-10 md:h-10 text-[#47A248]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 md:w-10 md:h-10 text-[#4169E1]" /> },
    { name: "Prisma", icon: <SiPrisma className="w-8 h-8 md:w-10 md:h-10 text-[#5A67D8]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 md:w-10 md:h-10 text-[#06B6D4]" /> },
    { name: "HTML/CSS", icon: <TbBrandHtml5 className="w-8 h-8 md:w-10 md:h-10 text-[#E34F26]" /> },
    { name: "Git", icon: <SiGit className="w-8 h-8 md:w-10 md:h-10 text-[#F05032]" /> },
    { name: "Docker", icon: <SiDocker className="w-8 h-8 md:w-10 md:h-10 text-[#2496ED]" /> },
    { name: "AWS", icon: <FaAws className="w-8 h-8 md:w-10 md:h-10 text-[#FF9900]" /> },
    { name: "Firebase", icon: <Image src="/firebase.svg" alt="Firebase" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: "Redis", icon: <SiRedis className="w-8 h-8 md:w-10 md:h-10 text-[#FF4438]" /> },
    { name: "LangChain", icon: <SiLangchain className="w-8 h-8 md:w-10 md:h-10 text-[#1C3C3C]" style={{ filter: "invert(1)" }} /> },
    { name: "LangGraph", icon: <RiBrainLine className="w-8 h-8 md:w-10 md:h-10 text-[#A855F7]" /> },
    { name: "REST APIs", icon: <TbApi className="w-8 h-8 md:w-10 md:h-10 text-[#10B981]" /> },
    { name: "Linux", icon: <FaLinux className="w-8 h-8 md:w-10 md:h-10 text-[#FCC624]" /> },
];

export default function Skills() {
    return (
        <section id="skills" className="py-14 sm:py-20 relative">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center md:text-left"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Tech Stack</h2>
                    <p className="text-sm text-muted">Technologies I use to bring ideas to life</p>
                </motion.div>

                {/* Skills Grid/Flex */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap items-center gap-2 md:gap-4"
                >
                    {skills.map((skill, i) => (
                        <motion.span
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.03, duration: 0.3 }}
                            className="inline-flex items-center gap-1.5 md:gap-3 px-3 md:px-5 py-1.5 md:py-2.5 rounded-full bg-card border border-card-border text-xs md:text-base text-muted hover:text-foreground hover:border-white/20 hover:bg-white/5 transition-all duration-200 cursor-default"
                        >
                            <div className="flex items-center justify-center w-5 h-5 md:w-8 md:h-8 transition-transform duration-300 hover:scale-110">
                                {skill.icon}
                            </div>
                            <span className="font-medium">{skill.name}</span>
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
