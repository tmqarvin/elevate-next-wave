import { useState } from "react";
import ScrollReveal from "../ScrollReveal";
import { motion } from "framer-motion";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="section-padding bg-neutral-soft">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-8">
          <ScrollReveal className="md:col-span-7">
            <h2 className="text-headline-section font-display">
              Transform What Enterprise Work&nbsp;
              <span className="text-primary">Can&nbsp;Be</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-5 md:col-start-8" delay={0.15}>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Secure, intelligent, and immediate. See what your next top performer looks like.
            </p>
            {submitted ? (
              <p className="text-sm font-medium text-primary">
                Thank you! We'll be in touch soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@company.com"
                  className="flex-1 min-w-0 px-4 py-3.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  className="shrink-0 px-6 py-3.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity"
                >
                  Request a Demo
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>

        {/* Decorative element */}
        <motion.div
          className="mt-20 h-px bg-gradient-to-r from-primary/40 via-primary to-primary/40"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0, 0, 1] }}
        />
      </div>
    </section>
  );
};

export default CTASection;
