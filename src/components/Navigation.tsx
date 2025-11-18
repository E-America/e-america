import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      // Map: section id -> nav item key
      const sectionMap = [
        { id: 'mission', navKey: 'about' }, // DigitalExperimentSection (About Us)
        { id: 'our-mission', navKey: 'mission' }, // MissionSection (Our Mission)
        { id: 'passport', navKey: 'passport' },
        { id: 'treasury', navKey: 'treasury' },
        { id: 'services', navKey: 'services' },
        { id: 'constitution', navKey: 'constitution' },
      ];
      
      const scrollPosition = window.scrollY + 200; // Offset for fixed nav
      
      let currentNavKey = "";
      
      // Check sections from bottom to top to get the most recent one
      for (let i = sectionMap.length - 1; i >= 0; i--) {
        const { id, navKey } = sectionMap[i];
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          
          if (scrollPosition >= elementTop - 150) {
            currentNavKey = navKey;
            break;
          }
        }
      }
      
      // If we're at the very top (before mission section), show "about" as active
      if (window.scrollY < 300) {
        currentNavKey = 'about';
      }
      
      setActiveSection(currentNavKey);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0B1E46]' : 'bg-transparent'
    }`}>
      <div className={`flex items-center justify-between px-[4.875rem] transition-all duration-300 ${
        isScrolled ? "py-[1.1875rem]" : "py-[3.0625rem]"
      }`}>
        <Link to="/" className="flex-none">
          <img 
            src={logo} 
            alt="e-AMERICA logo" 
            className={`transition-all duration-300 ${
              isScrolled ? "w-[11.75rem] h-[3.18rem]" : "w-[13.26rem] h-[3.59rem]"
            }`}
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-[2.25rem] flex-none">
          <a 
            href="#mission" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`flex items-center gap-[0.5rem] text-[1.25rem] leading-[1.5rem] transition-colors font-ubuntu-mono ${
              activeSection === 'about' ? 'text-white font-medium' : 'text-[#B7B7B7] hover:text-white font-normal'
            }`}
          >
            <span className={`w-[0.4375rem] h-[0.4375rem] rounded-full transition-colors ${
              activeSection === 'about' ? 'bg-white' : 'bg-transparent'
            }`}></span>
            About Us
          </a>
          <a 
            href="#our-mission" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('our-mission')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`text-[1.25rem] leading-[1.5rem] text-center transition-colors font-ubuntu-mono ${
              activeSection === 'mission' ? 'text-white font-medium' : 'text-[#B7B7B7] hover:text-white font-normal'
            }`}
          >
            Our Mission
          </a>
          <a 
            href="#passport" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('passport')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`text-[1.25rem] leading-[1.5rem] text-center transition-colors font-ubuntu-mono ${
              activeSection === 'passport' ? 'text-white font-medium' : 'text-[#B7B7B7] hover:text-white font-normal'
            }`}
          >
            e-Passport
          </a>
          <a 
            href="#treasury" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('treasury')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`text-[1.25rem] leading-[1.5rem] text-center transition-colors font-ubuntu-mono ${
              activeSection === 'treasury' ? 'text-white font-medium' : 'text-[#B7B7B7] hover:text-white font-normal'
            }`}
          >
            e-Treasury
          </a>
          <a 
            href="#services" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`text-[1.25rem] leading-[1.5rem] text-center transition-colors font-ubuntu-mono ${
              activeSection === 'services' ? 'text-white font-medium' : 'text-[#B7B7B7] hover:text-white font-normal'
            }`}
          >
            e-Services
          </a>
          <a 
            href="#constitution" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('constitution')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`text-[1.25rem] leading-[1.5rem] text-center transition-colors font-ubuntu-mono ${
              activeSection === 'constitution' ? 'text-white font-medium' : 'text-[#B7B7B7] hover:text-white font-normal'
            }`}
          >
            The Constitution
          </a>
        </div>

        <Link to="/apply" className="flex-none">
          <button 
            className="flex flex-row justify-center items-center font-ubuntu-mono font-medium rounded-full bg-white hover:bg-white/95 transition-colors"
            style={{
              padding: '1rem 2.25rem',
              width: '11.4375rem',
              height: '3.625rem',
              boxSizing: 'border-box'
            }}
          >
            <span 
              className="text-[1.375rem] leading-[1.625rem]"
              style={{
                background: 'linear-gradient(85.23deg, #0B1E46 16.92%, #896580 56.67%, #BF8398 70.07%, #DA1E3F 106.8%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Apply Now
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
