import { useScrollReveal } from "./useScrollReveal";
import { Layers, GitBranch, Cloud, Boxes } from "lucide-react";

const tiers = [
  { icon: Layers, name: "Starter", nodes: "Up to 500", features: ["Basic monitoring", "Email alerts", "5 users"] },
  { icon: GitBranch, name: "Professional", nodes: "Up to 5,000", features: ["AI analytics", "API access", "25 users"], highlighted: true },
  { icon: Cloud, name: "Enterprise", nodes: "Unlimited", features: ["Custom SLA", "Dedicated support", "SSO/SAML"] },
  { icon: Boxes, name: "Hyperscale", nodes: "Unlimited+", features: ["Multi-tenant", "White-label", "Custom integrations"] },
];

const ScalabilitySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding border-y border-border bg-surface-1">
      <div ref={ref} className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-3 font-display text-xs tracking-[0.3em] uppercase text-primary">Scale</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold gradient-text">System Scalability</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            From startups to hyperscalers — our platform grows with your network.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t, i) => (
            <div
              key={t.name}
              className={`tech-card relative text-center ${t.highlighted ? "glow-box border-primary/30" : ""} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms`, transitionDuration: "600ms" }}
            >
              {t.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-display font-bold text-primary-foreground">
                  Popular
                </div>
              )}
              <t.icon className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-1 font-display text-lg font-bold text-foreground">{t.name}</h3>
              <p className="mb-4 text-sm text-primary font-heading">{t.nodes} nodes</p>
              <ul className="space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground">{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScalabilitySection;
