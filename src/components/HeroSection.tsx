import { useState, useEffect } from "react";
import heroBackground from "@/assets/hero-background.svg";
import arrowIcon from "@/assets/arrow-icon.svg";

const HeroSection = () => {
  const phrases = ["you.", "me.", "us.", "everyone."];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentPhrase) {
        // Finished typing, wait then start deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else if (isDeleting) {
        // Delete one character
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
      } else {
        // Type one character
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
      }
    }, isDeleting ? 80 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhraseIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <p className="text-white text-lg md:text-xl mb-8 animate-fade-in font-normal">
          We're building a parallel digital America.
        </p>
        
        <h1 className="text-white font-bold mb-12">
          <span className="block text-6xl md:text-8xl lg:text-9xl mb-2">
            America
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl">
            for <span className="inline-block min-w-[250px] text-left">{displayText}</span>
          </span>
        </h1>

        <button 
          className="relative inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 bg-gradient-to-r from-[#0C4CD3] via-[#700265] to-[#DA1E3F] border border-white/20"
          onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore More
          <img src={arrowIcon} alt="" className="w-24 h-3" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
