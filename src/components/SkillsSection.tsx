import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Brain, Wrench } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "HTML / CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
      { name: "SQL", level: 75 },
      { name: "Firebase", level: 70 },
    ],
  },
  {
    title: "AI & Tools",
    icon: Brain,
    skills: [
      { name: "Generative AI", level: 70 },
      { name: "Prompt Engineering", level: 80 },
      { name: "ChatGPT / Gemini", level: 85 },
      { name: "AI Integration", level: 75 },
    ],
  },
  {
    title: "Dev Tools",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 65 },
      { name: "Vite", level: 75 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-secondary-foreground">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <cat.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
              </div>
              {cat.skills.map((skill, j) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={j * 0.1} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
