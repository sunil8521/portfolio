"use client";

import { useEffect, useState } from "react";
import { ArrowDown, FileText } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Backend Developer",
    "Frontend Developer",
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center"
        >
            <div className="absolute inset-0 bg-grid opacity-20" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 sm:py-28 w-full">
                <div className="flex flex-col items-start">
                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-neutral-500 text-sm mb-6 flex items-center gap-2"
                    >
                        <span className="text-base">👋</span> HELLO!
                    </motion.p>

                    {/* Big creative headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-[clamp(1.6rem,4vw,3rem)] font-light leading-[1.2] tracking-tight text-neutral-400 mb-8"
                    >
                        I&apos;m{" "}
                        <span className="font-bold text-white">Sunil</span>
                        <span className="text-neutral-700">,</span> a{" "}
                        <span className="font-bold text-white">#ENGINEER</span>{" "}
                        passionate about{" "}
                        <span className="italic font-[family-name:var(--font-playfair)] text-white font-normal">
                            system design
                        </span>
                        <span className="text-neutral-700">,</span>{" "}
                        <span className="italic font-[family-name:var(--font-playfair)] text-neutral-300 font-normal">
                            backend development
                        </span>
                        <span className="text-neutral-700">,</span>{" "}
                        <span className="font-bold text-white">Web3</span>
                        <span className="text-neutral-700">,</span> and writing{" "}
                        <span className="italic font-[family-name:var(--font-playfair)] text-white font-normal">
                            clean, maintainable code
                        </span>
                        <span className="text-neutral-700">.</span>
                    </motion.h1>

                    {/* Role badge - smooth rotate */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mb-10 h-8 flex items-center gap-2 overflow-hidden"
                    >
                        <span className="w-2 h-px bg-neutral-700" />
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={roleIndex}
                                initial={{ y: 16, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -16, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="text-sm text-neutral-400 inline-block"
                            >
                                {roles[roleIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="flex flex-wrap items-center gap-3 mb-6"
                    >
                        <a
                            href="#projects"
                            className="px-5 py-2.5 bg-white text-black text-sm rounded-full font-medium transition-all duration-300 hover:bg-neutral-200 flex items-center gap-2 whitespace-nowrap"
                        >
                            View My Work
                            <ArrowDown size={14} />
                        </a>

                        <a
                            href="/sunil-kumar-maharana.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 text-neutral-300 text-sm rounded-full font-medium border border-neutral-700 hover:border-neutral-500 hover:text-white transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                        >
                            <FileText size={14} />
                            Resume
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="flex items-center gap-3"
                    >
                        {[
                            { icon: FaGithub, href: "https://github.com/sunil8521", label: "GitHub", color: "text-white" },
                            { icon: FaLinkedinIn, href: "https://linkedin.com/in/sunil8521", label: "LinkedIn", color: "text-[#0A66C2]" },
                        ].map(({ icon: Icon, href, label, color }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="inline-block hover:scale-125 transition-transform duration-300"
                            >
                                <Icon size={18} className={color} />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
