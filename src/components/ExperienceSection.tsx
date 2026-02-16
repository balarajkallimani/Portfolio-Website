import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    title: "B.E. in Computer Science & Engineering",
    org: "RNS Institute of Technology, Bengaluru",
    period: "2022 – 2026",
    description: "Pursuing CSE with focus on AI/ML and web development. Active participant in hackathons and technical events.",
  },
  {
    icon: Briefcase,
    title: "Web Development Intern",
    org: "Self / Freelance Projects",
    period: "2024 – Present",
    description: "Building real-world web applications using React, Tailwind, and integrating AI capabilities for smarter user experiences.",
  },
  {
    icon: Award,
    title: "Certifications",
    org: "Online Platforms",
    period: "2023 – 2025",
    description: "Completed certifications in Web Development, Python Programming, and AI fundamentals from leading online platforms.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Journey</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Education & <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative pl-16"
              >
                {/* Icon */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <item.icon className="text-primary" size={18} />
                </div>

                <div className="glass-card p-6">
                  <span className="text-xs text-primary font-mono">{item.period}</span>
                  <h3 className="font-display text-lg font-semibold mt-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.org}</p>
                  <p className="text-sm text-secondary-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
