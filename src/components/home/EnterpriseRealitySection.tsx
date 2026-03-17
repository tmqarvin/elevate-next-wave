import ScrollReveal from "../ScrollReveal";

const requirements = [
  { label: "Privacy & Data Control", detail: "Your data never leaves your environment. Self-hosted, air-gapped, and offline capable." },
  { label: "High-Precision Output", detail: "Patent-pending safety mechanisms ensure agents never guess — they escalate when uncertain." },
  { label: "Zero-Risk Investment", detail: "Background observation and simulation at $0. Pay only after 90% task proficiency." },
  { label: "Full Transparency", detail: "Side-by-side simulation dashboard lets you compare AI actions against actual employee workflows." },
  { label: "Zero Hallucination", detail: "Strict adherence to internal rules, policies, and procedures. Equipped with patent-pending safeguards." },
];

const EnterpriseRealitySection = () => (
  <section className="section-padding bg-forest">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <ScrollReveal className="md:col-span-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Built for Fortune 500
          </p>
          <h2 className="text-headline-section font-display">
            AI Must Conform to Enterprise Realities
          </h2>
          <p className="mt-6 text-lg opacity-70 leading-relaxed max-w-lg">
            Based on priorities from Fortune 50 C-suites, true enterprise AI requires uncompromising standards.
          </p>
        </ScrollReveal>

        <div className="md:col-span-5 md:col-start-8 flex flex-col gap-6">
          {requirements.map((req, i) => (
            <ScrollReveal key={req.label} delay={i * 0.08}>
              <div className="border-l-2 border-primary/60 pl-6">
                <h4 className="font-display font-bold text-lg mb-1">{req.label}</h4>
                <p className="text-sm opacity-60 leading-relaxed">{req.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EnterpriseRealitySection;
