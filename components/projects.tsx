"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Globe, MessageSquare, Share2, Download, Video } from "lucide-react";
import Image from "next/image";

interface Project {
    title: string;
    description: string;
    tech: string[];
    github: string | null;
    live: string | null;
    icon: any;
    gradient: string;
    image?: string;
}

const projects: Project[] = [
    {
        title: "GPT-Clone (LangGraph + Memory)",
        description: "A highly advanced full-stack ChatGPT/Gemini clone built with LangGraph for stateful multi-agent conversational memory. Securely stores conversation threads and agent checkpoints in MongoDB, featuring a premium modern chatbot layout.",
        tech: ["React", "LangGraph", "Gemini 2.5", "Zustand", "Express", "MongoDB"],
        github: "https://github.com/sunil8521/GPT-Clone-LangGraph",
        live: "https://gpt-clone-langgraph-1.onrender.com/",
        icon: MessageSquare,
        gradient: "from-neutral-800 to-neutral-900",
        image: undefined
    },
    {
        title: "SnapLoad - Premium Downloader",
        description: "A premium high-performance media downloader supporting YouTube and Instagram extraction. Built with Next.js 16 (client) and Express/TypeScript/Bun (backend), featuring real-time SSE progress indicators and backpressure-optimized streaming.",
        tech: ["Next.js 16", "Express", "Bun", "Tailwind v4", "SSE", "TypeScript"],
        github: "https://github.com/sunil8521/video-downloader",
        live: "https://snapload.sunilspace.in/",
        icon: Download,
        gradient: "from-neutral-800 via-neutral-900 to-neutral-800",
        image: undefined
    },
    {
        title: "ExchangeFile - Local LAN P2P",
        description: "A peer-to-peer LAN file transfer app. Auto-discovers local subnet devices via Socket.IO signaling, transferring large files securely over WebRTC DataChannels with 16KB chunking and custom backpressure-aware pause/resume protocols.",
        tech: ["React", "TypeScript", "WebRTC", "Socket.IO", "Zustand", "Tailwind v4"],
        github: "https://github.com/sunil8521/ExchangeFile-Local-Network-File-Transfer",
        live: "https://exchange-file.vercel.app/",
        icon: Share2,
        gradient: "from-neutral-900 to-neutral-800",
        image: undefined
    },
    {
        title: "MeetClone - Minimal Zoom",
        description: "A lightweight Google Meet / Zoom clone built for serverless real-time audio/video conferencing. Implements WebRTC mesh topology connection pairs and Socket.IO signaling, featuring interactive custom lobby previews and responsive active grid tiles.",
        tech: ["Next.js 16", "React 19", "WebRTC", "Socket.IO", "Zustand", "Express"],
        github: "https://github.com/sunil8521/nooB-version-of-google-meet",
        live: null,
        icon: Video,
        gradient: "from-neutral-900 via-neutral-800 to-neutral-900",
        image: undefined
    },
    {
        title: "Multi-Tenant SaaS Blogging Platform",
        description: "Designed a multi-tenant backend with data isolation across organizations. Integrated AWS S3 for media storage and DynamoDB via Prisma with RBAC using BetterAuth.",
        tech: ["Node.js", "React", "TypeScript", "AWS S3", "DynamoDB", "Prisma"],
        github: "https://github.com/sunil8521/Multi-Tenant-SaaS-Blog",
        live: null,
        icon: Globe,
        gradient: "from-neutral-800 to-neutral-900",
        image: undefined
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-14 sm:py-20 relative">
            <div className="max-w-3xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <h2 className="text-2xl font-bold mb-2">Projects</h2>
                    <p className="text-sm text-muted">Things I&apos;ve built and worked on</p>
                </motion.div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {projects.map((project, idx) => {
                        const Icon = project.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="group rounded-2xl bg-card border border-card-border hover:border-white/15 transition-all duration-300 overflow-hidden glow-border flex flex-col h-full"
                            >
                                {/* Image Preview with fallback */}
                                <div className="relative h-44 w-full overflow-hidden border-b border-card-border bg-neutral-900">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    ) : (
                                        <div
                                            className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
                                        >
                                            {/* Subtle grid pattern inside */}
                                            <div
                                                className="absolute inset-0 opacity-[0.04]"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                                                    backgroundSize: "20px 20px",
                                                }}
                                            />
                                            <Icon
                                                size={40}
                                                strokeWidth={1}
                                                className="text-white/10 group-hover:text-white/20 group-hover:scale-110 transition-all duration-500 relative z-10"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-4 flex flex-col flex-grow">
                                    <div className="flex items-start justify-between mb-1.5">
                                        <h3 className="text-sm font-semibold text-foreground group-hover:text-white transition-colors flex items-center gap-1.5">
                                            {project.title}
                                            {project.live && (
                                                <ArrowUpRight size={12} className="text-muted-dark group-hover:text-white/60 transition-colors" />
                                            )}
                                        </h3>
                                        <div className="flex items-center gap-1.5 shrink-0">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-1 rounded-md hover:bg-white/5 transition-colors"
                                                >
                                                    <Github size={13} className="text-muted-dark hover:text-foreground transition-colors" />
                                                </a>
                                            )}
                                            {project.live && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-1 rounded-md hover:bg-white/5 transition-colors"
                                                >
                                                    <ExternalLink size={13} className="text-muted-dark hover:text-foreground transition-colors" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-xs text-muted mb-3 leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mt-auto">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-muted-dark"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
