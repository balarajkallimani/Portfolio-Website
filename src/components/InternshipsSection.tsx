import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const internships = [
  {
    title: "Artificial Intelligence Intern",
    org: "AI & ML Training Program",
    duration: "4 Months",
    description:
      "Gained foundational knowledge of Artificial Intelligence and Machine Learning concepts, along with practical usage of ChatGPT and generative AI tools for problem solving and automation.",
    skills: ["AI Basics", "ML Basics", "ChatGPT", "Generative AI"],
  },
  {
    title: "Full Stack Web Development Intern",
    org: "MERN Stack Training Program",
    duration: "3 Months",
    description:
      "Learned to build full-stack web applications using the MERN stack, covering frontend development with React, backend APIs with Node.js and Express, and database management with MongoDB.",
    skills: ["MongoDB", "Express", "React", "Node.js"],
  },
];

const InternshipsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="internships" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">
            Internships
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Hands-On <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {internships.map((internship, i) => (
            <motion.div
              key={internship.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <Briefcase className="text-primary" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-primary font-mono">{internship.duration}</span>
                  <h3 className="font-display text-lg font-semibold mt-1">
                    {internship.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{internship.org}</p>
                </div>
              </div>

              <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
                {internship.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {internship.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
