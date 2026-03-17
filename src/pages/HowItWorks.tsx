import Layout from "../components/Layout";
import ScrollReveal from "../components/ScrollReveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Observe",
    description: "Agents ingest your actual workflows, respecting total data privacy and zero integration requirements. They learn by watching the UI — just like your team.",
    detail: "No complex API connections. No expensive IT integration projects. Works with both modern SaaS and decades-old legacy systems.",
  },
  {
    number: "02",
    title: "Simulate",
    description: "Watch agents perform tasks using real data side-by-side with your team, verifying accuracy and zero hallucination before anything goes live.",
    detail: "The proficiency dashboard tracks task readiness, domain mastery, and error rates. You compare simulated AI actions against actual employee workflows.",
  },
  {
    number: "03",
    title: "Deploy",
    description: "Activate the agent only when it hits peak proficiency, knowing your ROI is guaranteed from day one.",
    detail: "You hold the keys. You decide when the agent is ready. Billing only triggers when an agent surpasses 90% task proficiency.",
  },
];

const comparisons = [
  { passive: "Wait for prompts", agentic: "Observe top employees in action" },
  { passive: "Require constant human input", agentic: "Learn and internalize enterprise systems" },
  { passive: "Operate outside core workflows", agentic: "Perform work autonomously and proactively" },
];

const HowItWorks = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">How It Works</p>
          <h1 className="text-headline-hero font-display max-w-4xl">
            Observe. Simulate.&nbsp;
            <span className="text-primary">Deploy.</span>
          </h1>
        </ScrollReveal>
      </div>
    </section>

    {/* Steps — staggered mega cards */}
    <section className="pb-20 md:pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 space-y-8">
        {steps.map((step, i) => (
          <ScrollReveal key={step.number} delay={i * 0.05}>
            <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 p-8 md:p-12 rounded-2xl ${
              i === 1 ? "bg-forest" : "bg-neutral-soft"
            }`}>
              <div className="md:col-span-1">
                <span className="text-5xl md:text-6xl font-display font-900 text-primary/30">{step.number}</span>
              </div>
              <div className="md:col-span-5">
                <h2 className="text-headline-card font-display mb-4">{step.title}</h2>
                <p className={`leading-relaxed ${i === 1 ? "opacity-80" : "text-muted-foreground"}`}>
                  {step.description}
                </p>
              </div>
              <div className="md:col-span-5 md:col-start-8 flex items-center">
                <p className={`text-sm leading-relaxed ${i === 1 ? "opacity-60" : "text-muted-foreground"}`}>
                  {step.detail}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Comparison */}
    <section className="section-padding-sm bg-neutral-soft">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <h2 className="text-headline-section font-display mb-16">
            Passive Assistants vs.<br/>
            <span className="text-primary">Agentic AI</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparisons.map((c, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className="contents">
              <div className="p-6 border border-border/60 rounded-xl bg-background">
                <span className="text-xs tracking-widest uppercase text-muted-foreground">Passive</span>
                <p className="mt-2 font-display font-bold text-lg">{c.passive}</p>
              </div>
              <div className="p-6 border border-primary/20 rounded-xl bg-background">
                <span className="text-xs tracking-widest uppercase text-primary">Agentic</span>
                <p className="mt-2 font-display font-bold text-lg">{c.agentic}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Onboard your next top performer — digital, tireless, and continuously improving.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-8">
            <h2 className="text-headline-section font-display md:col-span-7">
              See What Your Next Top Performer&nbsp;
              <span className="text-primary">Looks Like</span>
            </h2>
            <div className="md:col-span-4 md:col-start-9 md:text-right">
              <Link
                to="/enterprise"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default HowItWorks;
