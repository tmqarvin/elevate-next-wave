import Layout from "../components/Layout";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";

const features = [
  {
    tag: "Data Sovereignty",
    title: "Total Data Sovereignty",
    subtitle: "Your Data Never Leaves Your Environment",
    points: [
      { label: "Self-Hosted", detail: "Deploy in your private cloud or on-premises." },
      { label: "Air-Gapped & Offline", detail: "Operates entirely disconnected from the web." },
      { label: "No Third-Party Exposure", detail: "Zero dependency on external LLM providers." },
    ],
  },
  {
    tag: "Zero Integration",
    title: "Zero Integration Overhead",
    subtitle: "Learns by Observing the UI, Just Like Your Team",
    points: [
      { label: "No Complex API Connections", detail: "Agents watch screens, not schemas." },
      { label: "No Expensive IT Projects", detail: "Skip months of integration timelines." },
      { label: "Legacy Compatible", detail: "Adapts instantly to both modern SaaS and decades-old legacy systems." },
    ],
    patentPending: true,
  },
  {
    tag: "Self-Learning",
    title: "Self-Learning Intelligence",
    subtitle: "See What the AI Would Do Before It Does It",
    points: [
      { label: "Proficiency Dashboard", detail: "Track task readiness, domain mastery, and error rates in real-time." },
      { label: "Side-by-Side Simulation", detail: "Compare simulated AI actions against actual employee workflows." },
      { label: "Accountable AI", detail: "You hold the keys. You decide when the agent is ready to deploy." },
    ],
    patentPending: true,
  },
  {
    tag: "Hallucination Safety",
    title: "Safeguards Eliminate AI Hallucinations",
    subtitle: "Accuracy Isn't Optional in the Enterprise",
    points: [
      { label: "100% Confident → Execute", detail: "Strict adherence to internal rules, policies, and procedures." },
      { label: "Uncertain → Escalate", detail: "Agents never guess — they pause and escalate to keep you in control." },
    ],
    patentPending: true,
  },
];

const Platform = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <ScrollReveal className="md:col-span-7">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">Platform</p>
            <h1 className="text-headline-hero font-display leading-none">
              Purpose-Built for the&nbsp;
              <span className="text-primary">Enterprise</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-4 md:col-start-9 flex items-end" delay={0.15}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bridging the gap between AI capability and enterprise reality. Every feature designed around Fortune 50 requirements.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Feature blocks */}
    {features.map((feature, i) => (
      <section
        key={feature.tag}
        className={`section-padding-sm ${i % 2 === 0 ? "bg-neutral-soft" : ""}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <ScrollReveal className={`md:col-span-5 ${i % 2 !== 0 ? "md:order-2 md:col-start-8" : ""}`}>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                {feature.tag}
              </span>
              {feature.patentPending && (
                <span className="inline-block ml-3 text-[10px] tracking-wider uppercase text-muted-foreground border border-border rounded-full px-2.5 py-0.5">
                  Patent Pending
                </span>
              )}
              <h2 className="text-headline-card font-display mt-2">{feature.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{feature.subtitle}</p>
            </ScrollReveal>

            <div className={`md:col-span-6 ${i % 2 !== 0 ? "md:order-1" : "md:col-start-7"} flex flex-col gap-5`}>
              {feature.points.map((point, j) => (
                <ScrollReveal key={point.label} delay={j * 0.08}>
                  <div className="p-6 bg-background rounded-xl border border-border/60">
                    <h4 className="font-display font-bold mb-1">{point.label}</h4>
                    <p className="text-sm text-muted-foreground">{point.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="section-padding bg-forest">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
        <ScrollReveal>
          <h2 className="text-headline-section font-display max-w-3xl mx-auto">
            Ready to See It in Action?
          </h2>
          <p className="mt-6 text-lg opacity-70 max-w-xl mx-auto">
            Deploy autonomous agents that meet every enterprise requirement — privacy, precision, and transparency.
          </p>
          <Link
            to="/enterprise"
            className="inline-block mt-10 px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity"
          >
            Request a Demo
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Platform;
