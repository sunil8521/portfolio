"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ClientProject {
    num: string;
    title: string;
    tagline: string;
    description: string;
    tech: string[];
    live: string;
    image: string;
    accentColor: string;
    accentGlow: string;
    taglineColor: string;
    borderColor: string;
    hoverBorderColor: string;
    numberColor: string;
}

const clientProjects: ClientProject[] = [
    {
        num: "01",
        title: "Orake",
        tagline: "Direct-to-consumer e-commerce brand for prebiotic fiber soda",
        description: "Modern D2C beverage brand delivering clean, gut-healthy prebiotic soda. Engineered dynamic 3D can animations, flavor showcase carousel, seamless checkout flow, and custom scroll-triggered drop experiences.",
        tech: ["NEXT.JS", "TAILWIND CSS", "FRAMER MOTION", "TYPESCRIPT", "REST APIS"],
        live: "https://drinkorake.com/",
        image: "/orake.png",
        accentColor: "#DE3E4F",
        accentGlow: "rgba(222, 62, 79, 0.18)",
        taglineColor: "text-[#FB7185]",
        borderColor: "border-[#DE3E4F]/25",
        hoverBorderColor: "hover:border-[#DE3E4F]/60",
        numberColor: "text-[#DE3E4F]/25 group-hover:text-[#DE3E4F]/50",
    },
    {
        num: "02",
        title: "Rocky Legal",
        tagline: "India's premier AI legal assistant for advocates and law firms",
        description: "AI-powered Indian legal research assistant specializing in Supreme Court precedents, High Court case law, and Bharatiya Nyaya Sanhita (BNS) statutes with instant citation-backed search.",
        tech: ["NEXT.JS", "TYPESCRIPT", "AI / RAG", "TAILWIND CSS", "POSTGRESQL"],
        live: "http://rocky.legal/",
        image: "/rocky-legal.png",
        accentColor: "#C7A064",
        accentGlow: "rgba(199, 160, 100, 0.18)",
        taglineColor: "text-[#C7A064]",
        borderColor: "border-[#C7A064]/25",
        hoverBorderColor: "hover:border-[#C7A064]/60",
        numberColor: "text-[#C7A064]/25 group-hover:text-[#C7A064]/50",
    }
];

export default function ClientProjects() {
    return (
        <section id="client-work" className="py-20 sm:py-28 relative overflow-hidden bg-black text-white">
            {/* Subtle background grid pattern */}
            <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24 flex flex-col items-start border-b border-white/10 pb-6"
                >
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-black tracking-wide uppercase">Client Work</h2>
                            <p className="text-sm text-neutral-400 mt-1">Live production applications built for high-growth brands</p>
                        </div>
                    </div>
                </motion.div>

                {/* Projects List */}
                <div className="flex flex-col gap-20 md:gap-28">
                    {clientProjects.map((project, idx) => {
                        const isEven = idx % 2 !== 0;

                        return (
                            <motion.div
                                key={project.num}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className={`flex flex-col md:flex-row items-center gap-8 lg:gap-14 relative w-full group ${
                                    isEven ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Side Numbering */}
                                <div
                                    className={`hidden lg:flex flex-col ${
                                        isEven ? "items-start text-left" : "items-end text-right"
                                    } w-24 shrink-0 transition-colors duration-500`}
                                >
                                    <span
                                        className={`text-6xl font-black tracking-tighter transition-colors duration-500 ${project.numberColor}`}
                                    >
                                        {project.num}
                                    </span>
                                    <span
                                        className="text-[10px] font-bold tracking-[0.2em] uppercase mt-2 transition-colors duration-500 text-neutral-600 group-hover:text-neutral-400"
                                    >
                                        Project {project.num}
                                    </span>
                                </div>

                                {/* Main Card */}
                                <div
                                    className={`flex-1 w-full flex flex-col md:flex-row items-stretch bg-[#070707] rounded-2xl border ${project.borderColor} ${project.hoverBorderColor} transition-all duration-500 overflow-hidden shadow-2xl relative`}
                                    style={{
                                        boxShadow: `0 0 50px -15px ${project.accentGlow}`
                                    }}
                                >
                                    {/* Subtle hover gradient glow */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                        style={{
                                            background: `radial-gradient(600px circle at top left, ${project.accentGlow}, transparent 70%)`
                                        }}
                                    />

                                    {/* Image Section */}
                                    <div className="w-full md:w-5/12 lg:w-1/2 aspect-video md:aspect-auto relative overflow-hidden bg-neutral-950 shrink-0 border-b md:border-b-0 md:border-r border-white/10">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            priority={idx === 0}
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="w-full md:w-7/12 lg:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center relative z-10">
                                        {/* Title */}
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                                            {project.title}
                                        </h3>

                                        {/* Tagline in custom matching color */}
                                        <p className={`text-xs sm:text-sm font-medium ${project.taglineColor} mb-4 leading-snug`}>
                                            {project.tagline}
                                        </p>

                                        {/* Description */}
                                        <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed font-light">
                                            {project.description}
                                        </p>

                                        {/* Tech Badges */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-[10px] tracking-wider font-semibold text-neutral-400 uppercase px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08]"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Link */}
                                        <div className="flex items-center pt-4 border-t border-white/10 mt-auto">
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${project.taglineColor} hover:text-white transition-colors group/btn`}
                                            >
                                                <span>View Project</span>
                                                <ArrowUpRight
                                                    size={15}
                                                    className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                                                />
                                            </a>
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
