import Layout from "../components/Layout";
import ScrollReveal from "../components/ScrollReveal";
import { motion } from "framer-motion";

const Enterprise = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <ScrollReveal className="md:col-span-7">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">Enterprise</p>
            <h1 className="text-headline-hero font-display">
              Ready to Transform Your&nbsp;
              <span className="text-primary">Enterprise?</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Reach out to start your journey. Secure, intelligent, and immediate autonomous AI agents for your organization.
            </p>
          </ScrollReveal>

          {/* Contact form placeholder */}
          <ScrollReveal className="md:col-span-4 md:col-start-9" delay={0.2}>
            <div className="bg-neutral-soft rounded-2xl p-8 md:p-10">
              <h3 className="font-display font-bold text-xl mb-6">Request a Demo</h3>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-xs font-medium tracking-wide text-muted-foreground mb-1.5 block">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium tracking-wide text-muted-foreground mb-1.5 block">Work Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium tracking-wide text-muted-foreground mb-1.5 block">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium tracking-wide text-muted-foreground mb-1.5 block">Message</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                    placeholder="Tell us about your use case..."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full px-6 py-3.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity"
                >
                  Get in Touch
                </button>
              </form>
              <p className="mt-4 text-xs text-muted-foreground text-center">
                Or email us directly at <a href="mailto:hi@op.ai" className="text-primary">hi@op.ai</a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Trust signals */}
    <section className="section-padding-sm bg-forest">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "$0", label: "Upfront Investment" },
              { value: "90%+", label: "Proficiency Before Billing" },
              { value: "100%", label: "Data Sovereignty" },
              { value: "0", label: "Third-Party Dependencies" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <motion.p
                  className="text-3xl md:text-4xl font-display font-800 text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.value}
                </motion.p>
                <p className="mt-2 text-sm opacity-60">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Enterprise;
