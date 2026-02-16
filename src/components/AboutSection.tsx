import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Sparkles } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 z-0">
        <img src={aboutBg} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="relative z-10 container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">About Me</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Passionate About <span className="gradient-text">Innovation</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="flex items-start gap-3 mb-6">
            <Sparkles className="text-primary mt-1 shrink-0" size={20} />
            <p className="text-secondary-foreground leading-relaxed">
              I'm a Computer Science Engineering student at RNS Institute of Technology
              with a deep passion for building intelligent web applications. I specialize in
              modern frontend frameworks, backend development, and integrating Generative AI
              to create next-generation digital experiences. I love transforming complex problems
              into elegant, user-friendly solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-8">
            {[
              { label: "Projects", value: "5+" },
              { label: "Technologies", value: "10+" },
              { label: "Focus", value: "AI + Web" },
              { label: "Status", value: "Open to work" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-lg bg-secondary/50"
              >
                <p className="font-display text-xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/resume/1rn23cs401_balarajkallimani.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/50 text-primary font-medium hover:bg-primary/10 transition-all duration-300"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
