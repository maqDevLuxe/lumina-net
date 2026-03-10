import { useScrollReveal } from "./useScrollReveal";
import { ShieldAlert, AlertTriangle, CheckCircle2, Lock } from "lucide-react";

const ThreatRadarSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const threats = [
    { type: "DDoS Attempt", source: "185.220.xx.xx", status: "Blocked", severity: "Critical", time: "2s ago" },
    { type: "Port Scan", source: "45.134.xx.xx", status: "Blocked", severity: "High", time: "14s ago" },
    { type: "Brute Force", source: "91.240.xx.xx", status: "Blocked", severity: "Medium", time: "1m ago" },
    { type: "Malware C2", source: "23.106.xx.xx", status: "Quarantined", severity: "Critical", time: "3m ago" },
  ];

  return (
    <section id="security" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-destructive/3 blur-[200px]" />
      <div ref={ref} className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Radar visualization */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative aspect-square max-w-md mx-auto">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {[150, 120, 90, 60].map((r, i) => (
                  <circle key={i} cx="200" cy="200" r={r} fill="none" stroke="hsl(185, 90%, 50%)" strokeOpacity={0.1 + i * 0.05} strokeWidth="1" />
                ))}
                <line x1="200" y1="50" x2="200" y2="350" stroke="hsl(185, 90%, 50%)" strokeOpacity="0.1" />
                <line x1="50" y1="200" x2="350" y2="200" stroke="hsl(185, 90%, 50%)" strokeOpacity="0.1" />
                {/* Sweep */}
                <path d="M200,200 L200,50 A150,150 0 0,1 329,125 Z" fill="hsl(185, 90%, 50%)" fillOpacity="0.05">
                  <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="4s" repeatCount="indefinite" />
                </path>
                <line x1="200" y1="200" x2="200" y2="50" stroke="hsl(185, 90%, 50%)" strokeOpacity="0.6" strokeWidth="1">
                  <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="4s" repeatCount="indefinite" />
                </line>
                {/* Threat dots */}
                {[
                  { cx: 260, cy: 130, color: "hsl(0, 84%, 60%)" },
                  { cx: 140, cy: 160, color: "hsl(40, 90%, 55%)" },
                  { cx: 280, cy: 260, color: "hsl(0, 84%, 60%)" },
                  { cx: 170, cy: 280, color: "hsl(40, 90%, 55%)" },
                ].map((dot, i) => (
                  <circle key={i} cx={dot.cx} cy={dot.cy} r="4" fill={dot.color}>
                    <animate attributeName="r" values="3;6;3" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.4;1" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                  </circle>
                ))}
                <circle cx="200" cy="200" r="6" fill="hsl(185, 90%, 50%)">
                  <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>

          {/* Threat log */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <p className="mb-3 font-display text-xs tracking-[0.3em] uppercase text-primary">Cybersecurity</p>
            <h2 className="mb-6 font-display text-3xl md:text-5xl font-bold gradient-text">Threat Detection</h2>
            <p className="mb-8 text-muted-foreground">
              AI-driven radar continuously scans your perimeter, identifying and neutralizing threats autonomously.
            </p>

            <div className="space-y-3">
              {threats.map((t, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg bg-surface-2 p-4 glow-border transition-all duration-300 hover:border-primary/30">
                  <div className="flex items-center gap-3">
                    {t.severity === "Critical" ? (
                      <ShieldAlert className="h-5 w-5 text-destructive" />
                    ) : t.severity === "High" ? (
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <Lock className="h-5 w-5 text-muted-foreground" />
                    )}
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.type}</p>
                      <p className="text-xs text-muted-foreground">{t.source}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1.5 text-xs text-primary">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {t.status}
                    </div>
                    <p className="text-xs text-muted-foreground">{t.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreatRadarSection;
