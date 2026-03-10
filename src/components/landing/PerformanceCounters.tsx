import { useEffect, useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

function useCounter(end: number, duration: number, active: boolean, decimals = 0) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * end).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, end, duration, decimals]);
  return value;
}

const counters = [
  { end: 4.8, suffix: " Tbps", label: "Peak Throughput", decimals: 1 },
  { end: 12847, suffix: "", label: "Active Nodes", decimals: 0 },
  { end: 99.999, suffix: "%", label: "Uptime SLA", decimals: 3 },
  { end: 340, suffix: "ms", label: "Avg Response", decimals: 0 },
];

const PerformanceCounters = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding border-y border-border bg-surface-1">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {counters.map((c, i) => {
            const val = useCounter(c.end, 2000, isVisible, c.decimals);
            return (
              <div
                key={c.label}
                className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <p className="font-display text-4xl md:text-5xl font-bold glow-text text-primary">
                  {c.decimals > 0 ? val.toFixed(c.decimals) : Math.floor(val).toLocaleString()}
                  <span className="text-2xl">{c.suffix}</span>
                </p>
                <p className="mt-2 text-sm text-muted-foreground font-heading">{c.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PerformanceCounters;
