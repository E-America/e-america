import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1E46]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex flex-col">
            <span className="font-ubuntu-mono text-xl text-white tracking-[0.2em]">e-AMERICA</span>
            <span className="text-xs text-white/90 font-light font-ubuntu">America for Everyone</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-9">
            <a href="#mission" className="flex items-center gap-2 text-[20px] text-white hover:text-white transition-colors font-ubuntu-mono font-medium">
              <span className="w-[7px] h-[7px] bg-white rounded-full"></span>
              About Us
            </a>
            <a href="#mission" className="text-[20px] text-[#B7B7B7] hover:text-white transition-colors font-ubuntu-mono">
              Our Mission
            </a>
            <a href="#passport" className="text-[20px] text-[#B7B7B7] hover:text-white transition-colors font-ubuntu-mono">
              e-Passport
            </a>
            <a href="#treasury" className="text-[20px] text-[#B7B7B7] hover:text-white transition-colors font-ubuntu-mono">
              e-Treasury
            </a>
            <a href="#services" className="text-[20px] text-[#B7B7B7] hover:text-white transition-colors font-ubuntu-mono">
              e-Services
            </a>
            <a href="#constitution" className="text-[20px] text-[#B7B7B7] hover:text-white transition-colors font-ubuntu-mono">
              The Constitution
            </a>
          </div>

          <Link to="/apply">
            <Button 
              className="bg-white hover:bg-white/90 font-ubuntu-mono font-medium rounded-full px-9 py-4 text-[22px] leading-[26px]"
              style={{
                background: 'white',
                backgroundImage: 'linear-gradient(85.23deg, #0B1E46 16.92%, #896580 56.67%, #BF8398 70.07%, #DA1E3F 106.8%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
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
