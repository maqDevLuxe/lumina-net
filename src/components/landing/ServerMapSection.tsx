import { useScrollReveal } from "./useScrollReveal";

const locations = [
  { x: 25, y: 35, label: "US-East" }, { x: 18, y: 45, label: "US-West" },
  { x: 48, y: 30, label: "EU-West" }, { x: 55, y: 25, label: "EU-North" },
  { x: 60, y: 40, label: "ME-Central" }, { x: 72, y: 45, label: "Asia-South" },
  { x: 80, y: 35, label: "Asia-East" }, { x: 85, y: 60, label: "Oceania" },
  { x: 42, y: 65, label: "Africa" }, { x: 32, y: 60, label: "SA-East" },
];

const ServerMapSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding relative overflow-hidden">
      <div ref={ref} className="container mx-auto px-4 text-center">
        <p className="mb-3 font-display text-xs tracking-[0.3em] uppercase text-primary">Global Reach</p>
        <h2 className="mb-4 font-display text-3xl md:text-5xl font-bold gradient-text">Server Locations</h2>
        <p className="mx-auto mb-16 max-w-xl text-muted-foreground">
          Deploy and manage network infrastructure across 180+ regions worldwide.
        </p>

        <div className={`relative mx-auto max-w-4xl transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          {/* Simplified world map outline */}
          <div className="relative aspect-[2/1] rounded-xl bg-surface-2 glow-border overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-20" />
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50">
              {[[0,2],[2,3],[3,4],[4,5],[5,6],[6,7],[0,1],[1,9],[9,8],[8,4]].map(([a,b], i) => (
                <line
                  key={i}
                  x1={locations[a].x} y1={locations[a].y * 0.5}
                  x2={locations[b].x} y2={locations[b].y * 0.5}
                  stroke="hsl(185, 90%, 50%)" strokeOpacity="0.15" strokeWidth="0.3"
                  strokeDasharray="2 1"
                />
              ))}
            </svg>
            {/* Location dots */}
            {locations.map((loc, i) => (
              <div
                key={loc.label}
                className="absolute group"
                style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: "translate(-50%, -50%)" }}
              >
                <div className="relative">
                  <div className="h-3 w-3 rounded-full bg-primary pulse-glow" />
                  <div className="absolute -inset-2 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: `${3 + i * 0.5}s` }} />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap rounded bg-background/90 px-2 py-1 text-xs font-display text-primary border border-border">
                  {loc.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerMapSection;
