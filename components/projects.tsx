"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Globe, MessageSquare, Share2, Download, Video, BookOpen, Headset } from "lucide-react";
import Image from "next/image";
import { FaAws, FaLinux, FaBroadcastTower, FaJava } from "react-icons/fa";
import {
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs,
    SiExpress, SiMongodb, SiPostgresql, SiTailwindcss, SiFirebase,
    SiRedis, SiSocketdotio, SiWebrtc, SiBun, SiAmazondynamodb,
    SiPrisma, SiMui, SiRazorpay, SiLangchain, SiGit, SiDocker
} from "react-icons/si";
import { TbApi, TbBrandHtml5 } from "react-icons/tb";
import { RiBrainLine, RiRobot2Line } from "react-icons/ri";
import { BsLightningCharge } from "react-icons/bs";
import { HiOutlineQueueList } from "react-icons/hi2";

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

const techIconMap: Record<string, { icon: React.ReactNode }> = {
    "React": { icon: <SiReact className="w-3 h-3 text-[#61DAFB]" /> },
    "Next.js": { icon: <SiNextdotjs className="w-3 h-3 text-white" /> },
    "Next.js 16": { icon: <SiNextdotjs className="w-3 h-3 text-white" /> },
    "React 19": { icon: <SiReact className="w-3 h-3 text-[#61DAFB]" /> },
    "TypeScript": { icon: <SiTypescript className="w-3 h-3 text-[#3178C6]" /> },
    "JavaScript": { icon: <SiJavascript className="w-3 h-3 text-[#F7DF1E]" /> },
    "Node.js": { icon: <SiNodedotjs className="w-3 h-3 text-[#5FA04E]" /> },
    "Express": { icon: <SiExpress className="w-3 h-3 text-white" /> },
    "Express.js": { icon: <SiExpress className="w-3 h-3 text-white" /> },
    "MongoDB": { icon: <SiMongodb className="w-3 h-3 text-[#47A248]" /> },
    "PostgreSQL": { icon: <SiPostgresql className="w-3 h-3 text-[#4169E1]" /> },
    "Tailwind CSS": { icon: <SiTailwindcss className="w-3 h-3 text-[#06B6D4]" /> },
    "Tailwind v4": { icon: <SiTailwindcss className="w-3 h-3 text-[#06B6D4]" /> },
    "HTML/CSS": { icon: <TbBrandHtml5 className="w-3 h-3 text-[#E34F26]" /> },
    "Git": { icon: <SiGit className="w-3 h-3 text-[#F05032]" /> },
    "Docker": { icon: <SiDocker className="w-3 h-3 text-[#2496ED]" /> },
    "AWS": { icon: <FaAws className="w-3 h-3 text-[#FF9900]" /> },
    "AWS S3": { icon: <FaAws className="w-3 h-3 text-[#FF9900]" /> },
    "Firebase": { icon: <SiFirebase className="w-3.5 h-3.5 text-[#DD2C00]" /> },
    "Redis": { icon: <SiRedis className="w-3 h-3 text-[#FF4438]" /> },
    "REST APIs": { icon: <TbApi className="w-3 h-3 text-[#10B981]" /> },
    "Linux": { icon: <FaLinux className="w-3 h-3 text-[#FCC624]" /> },
    "LangGraph": { icon: <RiBrainLine className="w-3 h-3 text-[#A855F7]" /> },
    "Gemini 2.5": { icon: <BsLightningCharge className="w-3 h-3 text-[#4285F4]" /> },
    "Zustand": { icon: <HiOutlineQueueList className="w-3 h-3 text-[#F59E0B]" /> },
    "Bun": { icon: <SiBun className="w-3 h-3 text-[#F9F1E7]" /> },
    "SSE": { icon: <FaBroadcastTower className="w-3 h-3 text-[#FF4500]" /> },
    "WebRTC": { icon: <SiWebrtc className="w-3 h-3 text-[#32CD32]" /> },
    "Socket.IO": { icon: <SiSocketdotio className="w-3 h-3 text-white" /> },
    "DynamoDB": { icon: <SiAmazondynamodb className="w-3 h-3 text-[#4053F2]" /> },
    "Prisma": { icon: <SiPrisma className="w-3 h-3 text-[#5A67D8]" /> },
    "WebSockets": { icon: <SiSocketdotio className="w-3 h-3 text-white" /> },
    "Joy UI": { icon: <SiMui className="w-3 h-3 text-[#007FFF]" /> },
    "BullMQ": { icon: <HiOutlineQueueList className="w-3 h-3 text-[#EF4444]" /> },
    "PGVector": { icon: <SiPostgresql className="w-3 h-3 text-[#4169E1]" /> },
    "LangChain": { icon: <SiLangchain className="w-3 h-3 text-[#1C3C3C]" style={{ filter: "invert(1)" }} /> },
    "Razorpay": { icon: <SiRazorpay className="w-3 h-3 text-[#528FF0]" /> },
    "Spring Boot": { icon: <FaJava className="w-3 h-3 text-[#ED8B00]" /> },
};

const projects: Project[] = [
    {
        title: "HelpDesk — AI-Powered Customer Support",
        description: "An intelligent help desk that lets businesses deploy a customizable AI chat widget. Visitors chat with a LangGraph-powered AI agent backed by a knowledge base, with seamless real-time handoff to human agents via Socket.IO.",
        tech: ["Next.js 16", "LangGraph", "Gemini 2.5", "MongoDB", "Socket.IO", "Zustand"],
        github: "https://github.com/sunil8521/helpdesk",
        live: "https://helpdesk.sunilspace.in",
        icon: Headset,
        gradient: "from-blue-900/50 via-neutral-900 to-neutral-900",
        image: "/helpdesk.png"
    },
    {
        title: "RAG Book - AI Document Assistant",
        description: "An AI-powered document retrieval system. Users can upload PDFs which are chunked, parsed with Apache Tika, and embedded using Gemini AI into a PostgreSQL database with pgvector. Features a seamless React frontend and a robust Spring Boot microservice backend.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Spring Boot", "PostgreSQL", "PGVector", "Gemini 2.5", "Docker"],
        github: "https://github.com/sunil8521/rag-microservice-java",
        live: "https://qa-client.onrender.com",
        icon: BookOpen,
        gradient: "from-green-900/50 via-neutral-900 to-neutral-900",
        image: "/ragboook.png"
    },
    {
        title: "AI Support Agent — E-Commerce",
        description: "Production-grade AI customer support with RAG knowledge retrieval (PGVector), human-in-the-loop approval for sensitive actions, live agent handoff via WebSockets, and async job processing with BullMQ + Redis. Built with LangGraph agent orchestration and Gemini 2.5 Flash.",
        tech: ["Next.js", "LangGraph", "LangChain", "Gemini 2.5", "PGVector", "BullMQ", "Redis", "Socket.IO", "Razorpay"],
        github: "https://github.com/sunil8521/ecommerce-ai-support-agent",
        live: null,
        icon: RiRobot2Line,
        gradient: "from-purple-900/50 via-neutral-900 to-neutral-900",
        image: "/ecom-agent.png"
    },
    {
        title: "MeetClone - Minimal Zoom",
        description: "A lightweight Google Meet / Zoom clone built for serverless real-time audio/video conferencing. Implements WebRTC mesh topology connection pairs and Socket.IO signaling, featuring interactive custom lobby previews and responsive active grid tiles.",
        tech: ["Next.js 16", "React 19", "WebRTC", "Socket.IO", "Zustand", "Express"],
        github: "https://github.com/sunil8521/nooB-version-of-google-meet",
        live: "https://video-meet-latn.onrender.com",
        icon: Video,
        gradient: "from-neutral-900 via-neutral-800 to-neutral-900",
        image: "/google-meet.png"
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
    {
        title: "ExchangeFile - Local LAN P2P",
        description: "A peer-to-peer LAN file transfer app. Auto-discovers local subnet devices via Socket.IO signaling, transferring large files securely over WebRTC DataChannels with 16KB chunking and custom backpressure-aware pause/resume protocols.",
        tech: ["React", "TypeScript", "WebRTC", "Socket.IO", "Zustand", "Tailwind v4"],
        github: "https://github.com/sunil8521/ExchangeFile-Local-Network-File-Transfer",
        live: "https://exchange-file.vercel.app/",
        icon: Share2,
        gradient: "from-neutral-900 to-neutral-800",
        image: "/exchangefile.png"
    },
    {
        title: "GPT-Clone (LangGraph + Memory)",
        description: "A highly advanced full-stack ChatGPT/Gemini clone built with LangGraph for stateful multi-agent conversational memory. Securely stores conversation threads and agent checkpoints in MongoDB, featuring a premium modern chatbot layout.",
        tech: ["React", "LangGraph", "Gemini 2.5", "Zustand", "Express", "MongoDB"],
        github: "https://github.com/sunil8521/GPT-Clone-LangGraph",
        live: "https://gpt-clone-langgraph-1.onrender.com/",
        icon: MessageSquare,
        gradient: "from-neutral-800 to-neutral-900",
        image: "/gpt-clone.png"
    },
    {
        title: "SnapLoad - Premium Downloader",
        description: "A premium high-performance media downloader supporting YouTube and Instagram extraction. Built with Next.js 16 (client) and Express/TypeScript/Bun (backend), featuring real-time SSE progress indicators and backpressure-optimized streaming.",
        tech: ["Next.js 16", "Express", "Bun", "Tailwind v4", "SSE", "TypeScript"],
        github: "https://github.com/sunil8521/video-downloader",
        live: "https://snapload.sunilspace.in/",
        icon: Download,
        gradient: "from-neutral-800 via-neutral-900 to-neutral-800",
        image: "/snapload.png"
    },
    {
        title: "Real-Time Chat App",
        description: "Real-time chat application using React and WebSockets for seamless communication. Includes file transfer via WebRTC for peer-to-peer sharing.",
        tech: ["React", "WebSockets", "WebRTC", "MongoDB", "Joy UI"],
        github: "https://github.com/sunil8521/chat-webapp",
        live: "https://nextchat-rt8a.onrender.com/home",
        icon: MessageSquare,
        gradient: "from-neutral-850 via-neutral-900 to-neutral-850",
        image: "/chat.png"
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-16 sm:py-24 relative overflow-hidden bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24 flex justify-between items-end border-b border-white/10 pb-6"
                >
                    <div>
                        <h2 className="text-3xl font-black mb-2 tracking-wide uppercase">Work</h2>
                        <p className="text-sm text-neutral-400">Featured projects and case studies</p>
                    </div>
                </motion.div>

                {/* Projects List */}
                <div className="flex flex-col gap-20 md:gap-32">
                    {projects.map((project, idx) => {
                        const Icon = project.icon;
                        const isEven = idx % 2 !== 0;
                        const numStr = `0${idx + 1}`.slice(-2);
                        
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className={`flex flex-col md:flex-row items-center gap-8 lg:gap-16 relative w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                            >
                                
                                {/* Side Numbering */}
                                <div className={`hidden lg:flex flex-col ${isEven ? 'items-start text-left' : 'items-end text-right'} w-24 shrink-0`}>
                                    <span className="text-6xl font-black text-neutral-800 tracking-tighter">{numStr}</span>
                                    <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-600 uppercase mt-2">Project {numStr}</span>
                                </div>

                                {/* Main Card */}
                                <div className="flex-1 w-full flex flex-col md:flex-row items-stretch bg-[#050505] rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden shadow-2xl relative group">
                                    
                                    {/* Subtle Glow background on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    {/* Image Section */}
                                    <div className={`w-full md:w-5/12 lg:w-1/2 aspect-video md:aspect-auto relative overflow-hidden bg-neutral-900 shrink-0 border-b md:border-b-0 ${isEven ? 'md:border-l' : 'md:border-r'} border-white/10`}>
                                        {project.image ? (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        ) : (
                                            <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                                                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                                                <Icon size={64} strokeWidth={1} className="text-white/10 group-hover:text-white/20 transition-colors duration-500 relative z-10" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Content Section */}
                                    <div className="w-full p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center relative z-10">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-sm text-neutral-400 mb-8 leading-relaxed font-light">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-4 mb-8">
                                            {project.tech.map((t) => {
                                                const techData = techIconMap[t];
                                                return (
                                                    <span key={t} className="text-[10px] tracking-wider font-semibold text-neutral-500 uppercase flex items-center gap-1.5">
                                                        {techData?.icon}
                                                        {t}
                                                    </span>
                                                );
                                            })}
                                        </div>

                                        {/* Action Links */}
                                        <div className="flex items-center gap-6 mt-auto pt-4 border-t border-white/10">
                                            {project.live && (
                                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider group/btn">
                                                    <span className="text-[#10B981] group-hover/btn:text-white transition-colors">View Project</span>
                                                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                                </a>
                                            )}
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider group/btn ml-auto">
                                                    <Github size={14} className="text-neutral-500 group-hover/btn:text-white transition-colors" />
                                                    <span className="text-neutral-500 group-hover/btn:text-white transition-colors hidden sm:inline">Source Code</span>
                                                </a>
                                            )}
                                        </div>
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
