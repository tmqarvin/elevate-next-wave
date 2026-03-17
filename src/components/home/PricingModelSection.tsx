import ScrollReveal from "../ScrollReveal";
import { motion } from "framer-motion";

const steps = [
  {
    phase: "Phase 1",
    title: "Background Observation",
    cost: "$0",
    description: "Agents learn silently in the background without disrupting operations.",
  },
  {
    phase: "Phase 2",
    title: "Side-by-Side Simulation",
    cost: "$0",
    description: "Compare simulated AI actions against actual employee workflows in real-time.",
  },
  {
    phase: "Phase 3",
    title: "Surpasses 90% Proficiency",
    cost: "Decision Point",
    description: "Billing only triggers when an agent surpasses 90% task proficiency in a specific domain.",
  },
  {
    phase: "Phase 4",
    title: "Active Deployment",
    cost: "Value Realized",
    description: "Pay only for proven, intelligent automation at scale.",
  },
];

const PricingModelSection = () => (
  <section className="section-padding">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10">
      <ScrollReveal>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Zero Upfront Investment
          </p>
          <h2 className="text-headline-section font-display">
            Try Before<br />You Buy
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Enterprise AI should deliver value before demanding budget. Our model ensures you never pay for unproven technology.
          </p>
        </div>
      </ScrollReveal>

      {/* Timeline */}
      <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <ScrollReveal key={step.phase} delay={i * 0.1}>
            <div className="relative h-full">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border z-0" />
              )}
              <div className="relative z-10 p-8 bg-background border border-border/60 rounded-xl h-full flex flex-col">
                <span className="text-xs font-mono tracking-widest text-muted-foreground">{step.phase}</span>
                <motion.span
                  className="inline-block mt-3 text-2xl md:text-3xl font-display font-800 text-primary"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4, ease: [0.25, 0, 0, 1] }}
                >
                  {step.cost}
                </motion.span>
                <h3 className="font-display font-bold text-lg mt-4 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{step.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PricingModelSection;
