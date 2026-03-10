import { useEffect, useState } from "react";
import NetworkNodesSVG from "./NetworkNodesSVG";

const phrases = [
  "AI-Powered Network Intelligence",
  "Real-Time Threat Detection",
  "Autonomous Bandwidth Optimization",
  "Next-Gen ISP Management",
];

const HeroSection = () => {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const phrase = phrases[idx];
    if (typing) {
      if (displayed.length < phrase.length) {
        const t = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 50);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setIdx((i) => (i + 1) % phrases.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, idx]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px]">
          <NetworkNodesSVG />
        </div>
      </div>
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-glow-cyan/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-glow-blue/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <p className="mb-4 font-display text-xs tracking-[0.3em] uppercase text-primary">
          Network Operations Platform
        </p>
        <h1 className="mb-6 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="gradient-text">{displayed}</span>
          <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle pulse-glow" />
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground font-body">
          Harness machine learning to monitor, optimize, and secure your entire ISP infrastructure 
          from a single unified command center.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#trial" className="rounded-lg bg-primary px-8 py-3.5 font-heading text-lg font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsl(185,90%,50%,0.4)]">
            Launch Dashboard
          </a>
          <a href="#features" className="rounded-lg glow-border px-8 py-3.5 font-heading text-lg font-semibold text-foreground transition-all duration-300 glow-border-hover hover:bg-surface-2">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
