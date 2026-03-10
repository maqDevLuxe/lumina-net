import { useScrollReveal } from "./useScrollReveal";
import { Brain, TrendingUp, Zap } from "lucide-react";

const AIOptimizationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-glow-blue/5 blur-[150px]" />
      <div ref={ref} className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <p className="mb-3 font-display text-xs tracking-[0.3em] uppercase text-primary">AI Engine</p>
            <h2 className="mb-6 font-display text-3xl md:text-5xl font-bold gradient-text">
              Bandwidth Optimization
            </h2>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              Our neural network models analyze traffic patterns across your infrastructure, predicting congestion 
              before it happens and automatically redistributing loads for optimal performance.
            </p>
            <div className="space-y-5">
              {[
                { icon: Brain, label: "Predictive Congestion Analysis", detail: "ML models forecast traffic spikes 15 minutes ahead" },
                { icon: TrendingUp, label: "Dynamic Load Balancing", detail: "Auto-redistribute traffic across optimal paths" },
                { icon: Zap, label: "Latency Reduction", detail: "Average 40% improvement in round-trip times" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="tech-card relative overflow-hidden p-8">
              <div className="absolute inset-0 scan-line pointer-events-none" />
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Bandwidth Utilization</span>
                  <span className="font-display text-primary">87.3%</span>
                </div>
                <div className="h-2 rounded-full bg-surface-3 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary to-glow-blue w-[87%] transition-all duration-1000" />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: "Throughput", value: "2.4 Tbps" },
                    { label: "Latency", value: "12ms" },
                    { label: "Packet Loss", value: "0.001%" },
                    { label: "Uptime", value: "99.999%" },
                  ].map((m) => (
                    <div key={m.label} className="rounded-lg bg-surface-1 p-4 glow-border">
                      <p className="text-xs text-muted-foreground">{m.label}</p>
                      <p className="mt-1 font-display text-xl font-bold text-foreground">{m.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-primary">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary pulse-glow" />
                  AI optimization active — 23 adjustments in last hour
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIOptimizationSection;
