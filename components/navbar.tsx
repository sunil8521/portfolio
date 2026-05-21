"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, Home, Code2, Briefcase, FolderOpen, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // If near the bottom, activate Contact
            const atBottom =
                window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;
            if (atBottom) {
                setActiveSection("contact");
                return;
            }

            const sections = navLinks.map((l) => l.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 200) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileOpen(false);
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) {
            // Defer the scroll until the mobile menu exit transition (250ms) completes
            setTimeout(() => {
                const yOffset = -80;
                const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
            }, 300);
        }
    }, []);

    return (
        <>
            {/* Desktop: Floating pill at top center */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                className={`hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 items-center gap-1 px-2 py-2 rounded-full transition-all duration-500 ${isScrolled
                    ? "bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 shadow-2xl shadow-black/50"
                    : "bg-neutral-900/60 backdrop-blur-md border border-neutral-800/50"
                    }`}
            >
                {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = activeSection === link.href.slice(1);
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? "text-white" : "text-neutral-500 hover:text-neutral-300"
                                }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-white/8 border border-white/10 rounded-full"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <Icon size={15} className="relative z-10" />
                            <span className="relative z-10">{link.name}</span>
                        </a>
                    );
                })}
            </motion.nav>

            {/* Mobile: Top bar with hamburger */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-800/50"
                        : "bg-transparent"
                    }`}
            >
                <div className="flex items-center justify-between px-5 py-3.5">
                    <span className="text-white font-bold text-lg font-[family-name:var(--font-geist-mono)] tracking-widest">5UN1L</span>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="text-neutral-400 hover:text-white transition-colors p-1"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile dropdown */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800/50"
                        >
                            <div className="px-5 py-3 flex flex-col gap-1">
                                {navLinks.map((link) => {
                                    const Icon = link.icon;
                                    const isActive = activeSection === link.href.slice(1);
                                    return (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                                    ? "text-white bg-white/5"
                                                    : "text-neutral-500 hover:text-neutral-300 hover:bg-white/5"
                                                }`}
                                        >
                                            <Icon size={16} />
                                            {link.name}
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}
