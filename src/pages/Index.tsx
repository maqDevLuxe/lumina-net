import TechNavbar from "@/components/landing/TechNavbar";
import HeroSection from "@/components/landing/HeroSection";
import ProvidersSection from "@/components/landing/ProvidersSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import AIOptimizationSection from "@/components/landing/AIOptimizationSection";
import MetricsSection from "@/components/landing/MetricsSection";
import ThreatRadarSection from "@/components/landing/ThreatRadarSection";
import BillingSection from "@/components/landing/BillingSection";
import ServerMapSection from "@/components/landing/ServerMapSection";
import PerformanceCounters from "@/components/landing/PerformanceCounters";
import NewsSection from "@/components/landing/NewsSection";
import ScalabilitySection from "@/components/landing/ScalabilitySection";
import ReviewsSection from "@/components/landing/ReviewsSection";
import CTAFooter from "@/components/landing/CTAFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <TechNavbar />
      <HeroSection />
      <ProvidersSection />
      <FeaturesSection />
      <AIOptimizationSection />
      <MetricsSection />
      <ThreatRadarSection />
      <BillingSection />
      <ServerMapSection />
      <PerformanceCounters />
      <NewsSection />
      <ScalabilitySection />
      <ReviewsSection />
      <CTAFooter />
    </main>
  );
};

export default Index;
