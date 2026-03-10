import { Activity, Shield, Gauge, Eye, Cpu, Network } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const features = [
  { icon: Activity, title: "Real-Time Monitoring", desc: "Track network health across thousands of nodes with sub-second latency dashboards." },
  { icon: Shield, title: "DDoS Protection", desc: "AI-powered threat mitigation automatically neutralizes volumetric attacks in real time." },
  { icon: Gauge, title: "Bandwidth Analytics", desc: "Deep packet inspection and flow analysis for granular bandwidth utilization metrics." },
  { icon: Eye, title: "NOC Visualization", desc: "Interactive topology maps with live status overlays for your entire infrastructure." },
  { icon: Cpu, title: "Edge Computing", desc: "Deploy compute workloads at the network edge for ultra-low latency applications." },
  { icon: Network, title: "SD-WAN Integration", desc: "Seamlessly orchestrate software-defined networking across hybrid environments." },
];

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="features" className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div ref={ref} className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-3 font-display text-xs tracking-[0.3em] uppercase text-primary">Core Capabilities</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold gradient-text">Network Monitoring</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Enterprise-grade observability for every layer of your network stack.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`tech-card group cursor-default ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms`, transitionDuration: "600ms" }}
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
