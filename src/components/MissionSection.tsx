import { Building2, CreditCard, FileText, Shield } from "lucide-react";

const services = [
  { icon: Building2, label: "Incorporate companies" },
  { icon: CreditCard, label: "Receive e-Residency certificate" },
  { icon: Building2, label: "Incorporate companies" },
  { icon: Building2, label: "Incorporate companies" },
  { icon: CreditCard, label: "Receive e-Residency certificate" },
  { icon: Building2, label: "Incorporate companies" },
  { icon: CreditCard, label: "Receive e-Residency certificate" },
  { icon: Building2, label: "Incorporate companies" },
];

const MissionSection = () => {
  return (
    <section id="mission" className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-ea" />
      
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-white text-5xl md:text-6xl font-bold text-center mb-8">
          Our Mission.
        </h2>
        
        <p className="text-white/90 text-lg md:text-xl text-center max-w-3xl mx-auto mb-16">
          To reimagine government as a service provider, accessible to anyone, anywhere.
          We are building tools that allow people to:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
                <service.icon className="w-10 h-10 text-primary" />
              </div>
              <p className="text-white text-sm text-center font-medium">
                {service.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
