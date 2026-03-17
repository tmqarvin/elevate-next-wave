import ScrollReveal from "../ScrollReveal";

const pillars = [
  {
    number: "01",
    title: "Observe",
    description: "Agents silently ingest your actual workflows, respecting total data privacy and zero integration requirements.",
  },
  {
    number: "02",
    title: "Simulate",
    description: "Watch agents perform tasks using real data side-by-side with your team, verifying accuracy and zero hallucination.",
  },
  {
    number: "03",
    title: "Deploy",
    description: "Activate the agent only when it hits peak proficiency, knowing your ROI is guaranteed from day one.",
  },
];

const ShiftSection = () => (
  <section className="section-padding bg-neutral-soft">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        {/* Left text */}
        <ScrollReveal className="md:col-span-5">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            The Generational Shift
          </p>
          <h2 className="text-headline-section font-display">
            From Passive Assistants to Proactive&nbsp;
            <span className="text-primary">Agents</span>
          </h2>
        </ScrollReveal>

        {/* Right description */}
        <ScrollReveal className="md:col-span-5 md:col-start-8 flex items-end" delay={0.15}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Traditional AI waits for prompts and requires constant human input. Our agents observe top employees, learn enterprise systems, and perform work autonomously and proactively.
          </p>
        </ScrollReveal>
      </div>

      {/* Three pillars */}
      <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, i) => (
          <ScrollReveal key={pillar.number} delay={i * 0.12}>
            <div className="group p-8 md:p-10 bg-background rounded-xl border border-border/60 hover:border-primary/30 transition-colors duration-500 h-full">
              <span className="text-xs font-mono tracking-widest text-primary">{pillar.number}</span>
              <h3 className="text-headline-card font-display mt-4 mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ShiftSection;
