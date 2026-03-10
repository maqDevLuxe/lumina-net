import { useScrollReveal } from "./useScrollReveal";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    tag: "AI Research",
    title: "How Neural Networks Are Revolutionizing Traffic Engineering",
    excerpt: "Deep learning models now predict congestion with 98% accuracy, enabling proactive network management.",
    date: "Mar 5, 2026",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    tag: "Infrastructure",
    title: "The Rise of 400G Backbone Networks in Enterprise ISPs",
    excerpt: "Next-generation optical networking is transforming how data centers interconnect across continents.",
    date: "Mar 2, 2026",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
  },
  {
    tag: "Security",
    title: "Zero-Trust Architecture: A Modern ISP's Security Blueprint",
    excerpt: "Implementing perimeter-less security models to protect critical telecom infrastructure.",
    date: "Feb 28, 2026",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=400&fit=crop",
  },
];

const NewsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding">
      <div ref={ref} className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-3 font-display text-xs tracking-[0.3em] uppercase text-primary">Insights</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold gradient-text">Network Tech News</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((a, i) => (
            <article
              key={a.title}
              className={`tech-card group overflow-hidden p-0 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms`, transitionDuration: "600ms" }}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={a.image} alt={a.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-primary/20 px-3 py-1 text-xs font-display text-primary backdrop-blur-sm border border-primary/20">
                  {a.tag}
                </span>
              </div>
              <div className="p-6">
                <p className="mb-2 text-xs text-muted-foreground">{a.date}</p>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Read More <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
