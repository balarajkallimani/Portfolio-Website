import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Generative AI",
    issuer: "Coursera",
    year: "2025",
    file: "/certificates/genai-coursera.pdf",
  },
  {
    title: "Frontend Development",
    issuer: "Online Certification",
    year: "2024",
    file: "/certificates/frontend.pdf",
  },
  {
    title: "Google Cloud",
    issuer: "Google Cloud",
    year: "2024",
    file: "/certificates/google-cloud.pdf",
  },
  {
    title: "Prompt Engineering",
    issuer: "Online Certification",
    year: "2025",
    file: "/certificates/prompt-engineering.pdf",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">
            Credentials
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            My <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                <Award className="text-primary" size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs text-primary font-mono">{cert.year}</span>
                <h3 className="font-display text-lg font-semibold mt-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink size={12} /> View
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
