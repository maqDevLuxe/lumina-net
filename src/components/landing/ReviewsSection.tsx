import { useScrollReveal } from "./useScrollReveal";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marcus Chen",
    role: "CTO, FiberLink ISP",
    text: "NetPulse reduced our mean time to resolution by 73%. The AI-driven anomaly detection catches issues our NOC team would have missed entirely.",
    rating: 5,
  },
  {
    name: "Sarah Andersson",
    role: "VP Engineering, NordConnect",
    text: "We migrated from three separate tools to NetPulse. The unified dashboard alone saved us 20 hours per week in operational overhead.",
    rating: 5,
  },
  {
    name: "Raj Patel",
    role: "Network Architect, TelecomX",
    text: "The threat detection radar is phenomenal. We blocked over 2 million attack attempts last quarter with zero false positives on critical alerts.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding">
      <div ref={ref} className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-3 font-display text-xs tracking-[0.3em] uppercase text-primary">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold gradient-text">Client Reviews</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`tech-card ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms`, transitionDuration: "600ms" }}
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed italic">"{r.text}"</p>
              <div>
                <p className="font-heading text-base font-semibold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
