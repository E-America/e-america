import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0034A1]/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex flex-col">
            <span className="font-mono text-xl text-white tracking-[0.2em]">EAMERICA</span>
            <span className="text-xs text-white/90 font-light">America for Everyone</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#mission" className="text-sm text-white/90 hover:text-white transition-colors font-mono">
              • Our Mission
            </a>
            <a href="#passport" className="text-sm text-white/90 hover:text-white transition-colors font-mono">
              e-Passport
            </a>
            <a href="#treasury" className="text-sm text-white/90 hover:text-white transition-colors font-mono">
              e-Treasury
            </a>
            <a href="#services" className="text-sm text-white/90 hover:text-white transition-colors font-mono">
              e-Services
            </a>
            <a href="#constitution" className="text-sm text-white/90 hover:text-white transition-colors font-mono">
              The Constitution
            </a>
          </div>

          <Link to="/apply">
            <Button 
              className="bg-white text-[#0034A1] hover:bg-white/90 font-semibold rounded-full px-8 py-3 text-base"
            >
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
