"use client";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-14 sm:py-20 relative bg-neutral-950/50">
            <div className="max-w-3xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h2 className="text-2xl font-bold mb-2">Contact Me</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="space-y-6"
                >
                    <p className="text-neutral-400 text-base leading-relaxed">
                        Email me at{" "}
                        <a
                            href="mailto:sunilmaharana.0x@gmail.com"
                            className="text-white hover:underline underline-offset-4"
                        >
                            sunilmaharana.0x@gmail.com
                        </a>
                    </p>

                    {/* Socials */}
                    <div className="flex items-center gap-3 pt-2">
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
                                className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:border-neutral-600 transition-all duration-300"
                            >
                                <Icon size={16} className={color} />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
