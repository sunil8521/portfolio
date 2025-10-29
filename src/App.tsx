"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Github, ExternalLink, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function App() {
  const [terminalText, setTerminalText] = useState("");

  const fullTextarr = ["Sunil.0x", "0xsunil", "sunil", "SUNIL"];
  useEffect(() => {
    let pos = 0, idx = 0, writing = true;
    const type = () => {
      const text = fullTextarr[pos];
      if (writing) {
        if (idx < text.length) {
          setTerminalText(text.slice(0, ++idx));
          setTimeout(type, 120);
        } else {
          setTimeout(() => { writing = false; type(); }, 1000);
        }
      } else {
        if (idx > 0) {
          setTerminalText(text.slice(0, --idx));
          setTimeout(type, 80);
        } else {
          pos = (pos + 1) % fullTextarr.length;
          writing = true;
          setTimeout(type, 500);
        }
      }
    };
    type();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = {
    backend: ["Node.js", "Express", "APIs", "PostgreSQL", "MongoDB", "Docker"],
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
    tools: ["Git", "AWS", "Vercel", "Jest", "Prisma", "GraphQL"],
  };

  const projects = [
    {
      title: "DeFi Portfolio Tracker",
      description: "Full-stack Web3 app for tracking DeFi investments across protocols.",
      tech: ["React", "Node.js", "Web3.js", "PostgreSQL", "Ethereum"],
      github: "#", demo: "#",
      challenge: "Real-time data aggregation from multiple blockchain networks"
    },
    {
      title: "Microservices API Gateway",
      description: "Scalable gateway handling 10k+ req/min with rate limiting and auth.",
      tech: ["Node.js", "Express", "Redis", "Docker", "AWS"],
      github: "#", demo: "#",
      challenge: "Zero-downtime deployments and horizontal scaling"
    },
    {
      title: "Smart Contract Auditor",
      description: "Automated Solidity analyzer for vulnerabilities and gas optimization.",
      tech: ["Python", "Solidity", "Web3.py", "React", "FastAPI"],
      github: "#", demo: "#",
      challenge: "Static analysis of complex smart contract interactions"
    },
    {
      title: "Real-time Chat Platform",
      description: "Scalable WebSocket chat with encryption and file sharing.",
      tech: ["Socket.io", "React", "Node.js", "MongoDB", "JWT"],
      github: "#", demo: "#",
      challenge: "Handling concurrent connections and message delivery guarantees"
    },
  ];

  return (
    <>
      {/* Subtle 3D Background */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.3} />
          <Sphere args={[4, 64, 64]}>
            <meshBasicMaterial color="#ffffff" wireframe />
          </Sphere>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
        </Canvas>
      </div>

      <div className="min-h-screen bg-black text-white font-mono">

        {/* Nav */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <div className="text-lg tracking-wider">
              {terminalText}<span className="animate-pulse">|</span>
            </div>
            <div className="hidden md:flex  gap-10 text-sm uppercase">
              {["about", "skills", "projects", "contact"].map(s => (
                <button key={s} onClick={() => scrollTo(s)} className="hover:text-white/60 transition">
                  {s}
                </button>
              ))}
            </div>
          </div>
        </motion.nav>

        {/* Hero */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4">Hi, I'm Sunil</h1>
            <p className="text-xl text-white/60 mb-8">Fullstack • Backend • Web3</p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => scrollTo("projects")} className="bg-white text-black hover:bg-white/90">
                View Work
              </Button>
              <Button variant="outline" onClick={() => scrollTo("contact")} className="border-white/30 hover:bg-white/10">
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl mb-16 text-center">
              About
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div initial={{ x: -40 }} whileInView={{ x: 0 }} className="text-white/70 space-y-4">
                <p>I build scalable backend systems and Web3 applications.</p>
                <p>Specializing in high-performance APIs and decentralized protocols.</p>
                <p>Currently exploring L2 scaling and modular smart contracts.</p>
              </motion.div>
              <motion.div
                initial={{ x: 40 }} whileInView={{ x: 0 }}
                className="bg-white/5 border border-white/10 p-6 rounded text-sm"
              >
                <div className="text-white/50">const developer = &#123;</div>
                <div className="ml-4 text-white/80 space-y-1">
                  <div> name: <span className="text-white">"Sunil"</span></div>
                  <div> focus: <span className="text-white">"Backend + Web3"</span></div>
                  <div> passion: <span className="text-white">"Clean Code"</span></div>
                </div>
                <div className="text-white/50">&#125;</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl mb-16 text-center">
              Skills
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-6">
              {Object.entries(skills).map(([cat, items]) => (
                <motion.div
                  key={cat}
                  initial={{ y: 30 }} whileInView={{ y: 0 }}
                  className="bg-white/5 border border-white/10 p-6 rounded"
                >
                  <h3 className="text-sm uppercase text-white/50 mb-4">{cat}</h3>
                  {items.map(s => (
                    <div key={s} className="text-white/80 text-sm"> {s}</div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl mb-16 text-center">
              Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 40 }} whileInView={{ y: 0 }} transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded hover:border-white/20 transition"
                >
                  <div className="flex justify-between mb-3">
                    <h3 className="text-xl">{p.title}</h3>
                    <div className="flex gap-2">
                      <a href={p.github} className="text-white/50 hover:text-white"><Github className="w-4 h-4" /></a>
                      <a href={p.demo} className="text-white/50 hover:text-white"><ExternalLink className="w-4 h-4" /></a>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm mb-3">{p.description}</p>
                  <p className="text-xs text-white/40 mb-3"># {p.challenge}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => (
                      <span key={t} className="text-xs px-2 py-1 bg-white/10 rounded">{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl mb-12">
              Let's Connect
            </motion.h2>
            <p className="text-white/60 mb-10">
              Open to opportunities in backend, Web3, and scalable systems.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <a href="mailto:sunil@example.com" className="flex items-center gap-2 text-white/70 hover:text-white">
                <Mail className="w-4 h-4" /> sunil@example.com
              </a>
              <a href="https://github.com/sunil0x" className="flex items-center gap-2 text-white/70 hover:text-white">
                <Github className="w-4 h-4" /> github.com/sunil0x
              </a>
              <a href="https://linkedin.com/in/sunil0x" className="flex items-center gap-2 text-white/70 hover:text-white">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="py-8 border-t border-white/10 text-center text-white/40 text-xs">
          © 2024 Sunil • Built with Next.js, Tailwind, Framer Motion
        </footer>
      </div>
    </>
  );
}