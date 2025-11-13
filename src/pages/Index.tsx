import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <AboutSection />
    </div>
  );
};

export default Index;
