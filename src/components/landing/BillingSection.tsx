import { useScrollReveal } from "./useScrollReveal";
import { CreditCard, FileText, Users, TrendingUp } from "lucide-react";

const BillingSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding border-y border-border bg-surface-1">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className={`order-2 lg:order-1 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="tech-card p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <span className="font-display text-xs tracking-wider uppercase text-muted-foreground">Revenue Dashboard</span>
                <span className="text-xs text-primary">Live</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "MRR", value: "$284K", change: "+12.4%" },
                  { label: "Active Subs", value: "14,823", change: "+8.2%" },
                  { label: "ARPU", value: "$19.16", change: "+3.1%" },
                  { label: "Churn Rate", value: "1.2%", change: "-0.4%" },
                ].map((m) => (
                  <div key={m.label} className="rounded-lg bg-surface-1 p-4">
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                    <p className="mt-1 font-display text-xl font-bold text-foreground">{m.value}</p>
                    <p className="text-xs text-primary">{m.change}</p>
                  </div>
                ))}
              </div>
              {/* Mini chart bars */}
              <div className="flex items-end gap-1.5 h-20">
                {[40, 55, 35, 65, 50, 75, 60, 80, 70, 90, 85, 95].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary/30 to-primary/80 transition-all duration-500" style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }} />
                ))}
              </div>
            </div>
          </div>

          <div className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <p className="mb-3 font-display text-xs tracking-[0.3em] uppercase text-primary">Billing</p>
            <h2 className="mb-6 font-display text-3xl md:text-5xl font-bold gradient-text">ISP Billing & Management</h2>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              Automated invoicing, subscription management, and revenue analytics designed specifically for ISPs and telecom operators.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: CreditCard, label: "Automated Billing" },
                { icon: FileText, label: "Usage Reports" },
                { icon: Users, label: "Subscriber Mgmt" },
                { icon: TrendingUp, label: "Revenue Analytics" },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-3 rounded-lg bg-surface-2 p-3 glow-border">
                  <f.icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillingSection;
