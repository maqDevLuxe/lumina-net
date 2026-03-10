import { useScrollReveal } from "./useScrollReveal";
import { Server, HardDrive, Wifi, BarChart3 } from "lucide-react";

const metrics = [
  { icon: Server, label: "Data Centers", value: "42", suffix: "+" },
  { icon: HardDrive, label: "Storage Capacity", value: "12", suffix: " PB" },
  { icon: Wifi, label: "Coverage Regions", value: "180", suffix: "+" },
  { icon: BarChart3, label: "API Calls / Day", value: "2.8", suffix: "B" },
];

const MetricsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding border-y border-border bg-surface-1">
      <div ref={ref} className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-3 font-display text-xs tracking-[0.3em] uppercase text-primary">Infrastructure</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold gradient-text">Platform Metrics</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`tech-card text-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms`, transitionDuration: "600ms" }}
            >
              <m.icon className="mx-auto mb-4 h-8 w-8 text-primary" />
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {m.value}<span className="text-primary">{m.suffix}</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
