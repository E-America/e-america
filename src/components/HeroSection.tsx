import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.svg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-[#000E2B]"
        style={{
          backgroundImage: `linear-gradient(180deg, #0B1E46 0%, rgba(11, 30, 70, 0) 18.42%), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      {/* Blur overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'rgba(0, 14, 43, 0.05)',
          backdropFilter: 'blur(5px)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <p className="text-white font-ubuntu font-medium text-[42px] leading-[48px] mb-12 animate-fade-in">
          We're building a parallel digital America.
        </p>
        
        <h1 className="text-white font-ubuntu-mono font-bold text-[110px] leading-[132px] mb-32">
          America <br />
          for everyone.
        </h1>

        <button 
          className="relative inline-flex items-center justify-center gap-2.5 pl-6 pr-9 py-4 rounded-full text-white font-ubuntu-mono font-medium text-[22px] leading-[26px] transition-all hover:scale-105"
          style={{
            background: 'linear-gradient(85.23deg, #0B1E46 16.92%, #896580 56.67%, #BF8398 70.07%, #DA1E3F 106.8%)'
          }}
          onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore More
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
