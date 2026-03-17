import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-forest text-forest-foreground">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        {/* Brand */}
        <div className="md:col-span-5">
          <span className="font-display font-800 text-2xl tracking-tight">
            nextops<span className="text-primary">.ai</span>
          </span>
          <p className="mt-4 text-sm opacity-70 max-w-sm leading-relaxed">
            The next leap in enterprise AI. Autonomous agents that observe, learn, and perform — without risk.
          </p>
        </div>

        {/* Links */}
        <div className="md:col-span-3 md:col-start-7">
          <h4 className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-4">Product</h4>
          <div className="flex flex-col gap-3">
            <Link to="/platform" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Platform</Link>
            <Link to="/how-it-works" className="text-sm opacity-70 hover:opacity-100 transition-opacity">How It Works</Link>
            <Link to="/enterprise" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Enterprise</Link>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-4">Contact</h4>
          <div className="flex flex-col gap-3">
            <a href="mailto:hi@op.ai" className="text-sm opacity-70 hover:opacity-100 transition-opacity">hi@op.ai</a>
            <span className="text-sm opacity-70">op.ai</span>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-forest-foreground/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-xs opacity-40">© 2026 NextOps.ai. All rights reserved.</p>
        <p className="text-xs opacity-40">Patent Pending Technology</p>
      </div>
    </div>
  </footer>
);

export default Footer;
