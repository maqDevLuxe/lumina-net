import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = ["Features", "Monitoring", "Security", "Pricing", "Contact"];

const TechNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="font-display text-lg font-bold tracking-wider text-foreground">
            NET<span className="text-primary">PULSE</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300">
              {l}
            </a>
          ))}
          <a href="#trial" className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_hsl(185,90%,50%,0.4)]">
            Start Free Trial
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-4 pb-4">
          {navLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 text-sm text-muted-foreground hover:text-primary transition-colors">
              {l}
            </a>
          ))}
          <a href="#trial" className="mt-2 block rounded-lg bg-primary px-5 py-2 text-center text-sm font-semibold text-primary-foreground">
            Start Free Trial
          </a>
        </div>
      )}
    </nav>
  );
};

export default TechNavbar;
