import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="min-h-[90vh] flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-10 max-w-[1400px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
      {/* Headline — left-anchored, massive */}
      <motion.div
        className="md:col-span-8"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0, 0, 1] }}
      >
        <motion.p
          className="text-sm font-semibold tracking-widest uppercase text-primary mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Autonomous Enterprise AI
        </motion.p>
        <h1 className="text-headline-hero font-display">
          The Next Leap<br />
          in Enterprise&nbsp;
          <span className="text-primary">AI</span>
        </h1>
      </motion.div>

      {/* Description — right side, offset */}
      <motion.div
        className="md:col-span-4 md:pb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0, 0, 1] }}
      >
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
          Agents that observe your workflows, learn from your top performers, and execute autonomously — with zero risk and total data privacy.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/enterprise"
            className="px-6 py-3.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            Request a Demo
          </Link>
          <Link
            to="/platform"
            className="px-6 py-3.5 border border-foreground/15 text-foreground font-semibold text-sm rounded-lg hover:bg-muted transition-colors text-center"
          >
            Explore Platform
          </Link>
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      className="mt-16 md:mt-24 flex items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      <motion.div
        className="w-px h-8 bg-primary"
        animate={{ scaleY: [1, 0.3, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll to explore</span>
    </motion.div>
  </section>
);

export default HeroSection;
