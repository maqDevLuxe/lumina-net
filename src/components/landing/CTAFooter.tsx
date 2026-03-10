import { Zap, Github, Linkedin, Twitter } from "lucide-react";

const CTAFooter = () => (
  <>
    {/* CTA */}
    <section id="trial" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[200px]" />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <p className="mb-3 font-display text-xs tracking-[0.3em] uppercase text-primary">Get Started</p>
        <h2 className="mb-6 font-display text-3xl md:text-5xl lg:text-6xl font-bold gradient-text">
          Start Your Free Trial
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-lg text-muted-foreground">
          Deploy in minutes. No credit card required. Full access to all features for 30 days.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="rounded-lg bg-primary px-10 py-4 font-heading text-lg font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_hsl(185,90%,50%,0.4)]">
            Start Free Trial
          </a>
          <a href="#" className="rounded-lg glow-border px-10 py-4 font-heading text-lg font-semibold text-foreground transition-all duration-300 glow-border-hover hover:bg-surface-2">
            Schedule Demo
          </a>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-border bg-surface-1 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-primary" />
              <span className="font-display text-base font-bold text-foreground">NET<span className="text-primary">PULSE</span></span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered network management platform for modern ISPs and telecom operators.
            </p>
          </div>
          {[
            { title: "Product", links: ["Features", "Pricing", "Documentation", "API Reference"] },
            { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Service", "SLA", "Security"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 font-display text-xs tracking-[0.2em] uppercase text-foreground">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">© 2026 NetPulse. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default CTAFooter;
