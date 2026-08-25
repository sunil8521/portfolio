import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import ClientProjects from "@/components/client-projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-[100dvh]">
      <Navbar />
      <Hero />
      <Skills />
      <ClientProjects />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
