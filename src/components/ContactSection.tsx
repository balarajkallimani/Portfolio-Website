import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  const socials = [
    { icon: Mail, label: "Email", href: "mailto:balaraj@example.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Github, label: "GitHub", href: "https://github.com" },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 z-0">
        <img src={contactBg} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="relative z-10 container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-4"
          >
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              I'm always open to new opportunities, collaborations, or just a friendly conversation about tech and AI.
            </p>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 glass-card p-4 hover:border-primary/40 transition-all duration-300 group"
              >
                <s.icon size={18} className="text-primary" />
                <span className="text-sm text-secondary-foreground group-hover:text-foreground transition-colors">
                  {s.label}
                </span>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass-card p-6 md:p-8 space-y-5"
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-lg bg-primary/10 border border-primary/30 text-center text-sm text-primary"
              >
                Thank you! Your message has been sent.
              </motion.div>
            )}

            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
              {errors.name && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-destructive mt-1">
                  {errors.name}
                </motion.p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
              {errors.email && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-destructive mt-1">
                  {errors.email}
                </motion.p>
              )}
            </div>

            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
              {errors.message && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-destructive mt-1">
                  {errors.message}
                </motion.p>
              )}
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium btn-glow transition-all duration-300 hover:brightness-110"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
