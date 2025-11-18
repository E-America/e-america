import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1E46]">
      <div className="flex items-center justify-between px-[4.875rem] py-[3.0625rem]">
        <Link to="/" className="flex-none">
          <img 
            src={logo} 
            alt="e-AMERICA logo" 
            className="w-[13.26rem] h-[3.59rem]"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-[2.25rem] flex-none">
          <a href="#mission" className="flex items-center gap-[0.5rem] text-[1.25rem] leading-[1.5rem] text-white hover:text-white transition-colors font-ubuntu-mono font-medium">
            <span className="w-[0.4375rem] h-[0.4375rem] bg-white rounded-full"></span>
            About Us
          </a>
          <a href="#mission" className="text-[1.25rem] leading-[1.5rem] text-center text-[#B7B7B7] hover:text-white transition-colors font-ubuntu-mono font-normal">
            Our Mission
          </a>
          <a href="#passport" className="text-[1.25rem] leading-[1.5rem] text-center text-[#B7B7B7] hover:text-white transition-colors font-ubuntu-mono font-normal">
            e-Passport
          </a>
          <a href="#treasury" className="text-[1.25rem] leading-[1.5rem] text-center text-[#B7B7B7] hover:text-white transition-colors font-ubuntu-mono font-normal">
            e-Treasury
          </a>
          <a href="#services" className="text-[1.25rem] leading-[1.5rem] text-center text-[#B7B7B7] hover:text-white transition-colors font-ubuntu-mono font-normal">
            e-Services
          </a>
          <a href="#constitution" className="text-[1.25rem] leading-[1.5rem] text-center text-[#B7B7B7] hover:text-white transition-colors font-ubuntu-mono font-normal">
            The Constitution
          </a>
        </div>

        <Link to="/apply" className="flex-none">
          <Button 
            className="bg-white hover:bg-white/90 font-ubuntu-mono font-medium rounded-full px-[2.25rem] py-[1rem] text-[1.375rem] leading-[1.625rem] h-[3.625rem]"
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
    </nav>
  );
};

export default Navigation;
