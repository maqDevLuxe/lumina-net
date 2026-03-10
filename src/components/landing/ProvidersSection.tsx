import { useScrollReveal } from "./useScrollReveal";

const providers = [
  "AWS", "Google Cloud", "Azure", "Cloudflare", "Akamai", "Cisco", "Juniper", "Nokia"
];

const ProvidersSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding border-y border-border bg-surface-1">
      <div ref={ref} className="container mx-auto px-4 text-center">
        <p className="mb-10 font-display text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Trusted by leading providers worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {providers.map((p, i) => (
            <div
              key={p}
              className={`font-display text-lg md:text-xl font-bold text-muted-foreground/40 hover:text-primary transition-all duration-500 cursor-default ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvidersSection;
