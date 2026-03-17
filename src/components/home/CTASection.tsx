import ScrollReveal from "../ScrollReveal";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => (
  <section className="section-padding bg-neutral-soft">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-8">
        <ScrollReveal className="md:col-span-8">
          <h2 className="text-headline-section font-display">
            Transform What Enterprise Work&nbsp;
            <span className="text-primary">Can&nbsp;Be</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal className="md:col-span-4 md:text-right" delay={0.15}>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Secure, intelligent, and immediate. See what your next top performer looks like.
          </p>
          <Link
            to="/enterprise"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity"
          >
            Request a Demo
          </Link>
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

export default CTASection;
