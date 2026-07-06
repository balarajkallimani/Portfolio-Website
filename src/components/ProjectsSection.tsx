import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import projectsBg from "@/assets/projects-bg.jpg";

const projects = [
  {
    title: "Smart Waste Management System",
    description:
      "IoT-based waste management system with real-time monitoring, smart bin level detection, and route optimization using Firebase.",
    tech: ["IoT", "Firebase", "JavaScript", "Sensors"],
    github: "#",
    live: "#",
  },
  {
    title: "AI-Integrated Web App",
    description:
      "A concept web application that leverages Generative AI APIs to provide intelligent content generation and smart recommendations.",
    tech: ["React", "Python", "OpenAI API", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, animated portfolio website built with React, Framer Motion, and Tailwind CSS showcasing projects and skills.",
    tech: ["React", "Tailwind", "Framer Motion", "Vite"],
    github: "#",
    live: "#",
  },
  {
    title: "Student Management Dashboard",
    description:
      "Full-stack student management system with CRUD operations, authentication, and a clean admin dashboard interface.",
    tech: ["React", "Java", "SQL", "REST API"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather Application",
    description:
      "A real-time weather application that provides current weather conditions, multi-day forecasts, and location-based search using the MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js", "OpenWeather API"],
    github: "#",
    live: "#",
  },
  {
    title: "Hospital Management System",
    description:
      "A comprehensive hospital management platform with patient records, appointment scheduling, doctor allocation, and billing management using the MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    github: "#",
    live: "#",
  },

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 z-0">
        <img src={projectsBg} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="relative z-10 container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Projects</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card-hover p-6 flex flex-col"
            >
              {/* Color bar */}
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent mb-5" />

              <h3 className="font-display text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.live}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
