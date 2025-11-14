import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Hero image overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541499482271-e08df6b8c5c2?q=80&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay"
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-white/90 text-lg md:text-xl mb-6 animate-fade-in">
          We're building a parallel digital America,
        </p>
        
        <h1 className="text-white font-bold mb-8">
          <span className="block text-5xl md:text-7xl lg:text-8xl mb-4">
            America
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl">
            for <span className="inline-block min-w-[200px] text-left">{displayText}</span>
          </span>
        </h1>

        <Button 
          className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-6 text-lg shadow-lg"
          onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore More <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
