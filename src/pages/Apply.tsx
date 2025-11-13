import { useEffect } from "react";
import Navigation from "@/components/Navigation";

const Apply = () => {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join e-America
            </h1>
            <p className="text-lg text-muted-foreground">
              Become an e-American citizen and join the digital experiment in freedom.
            </p>
          </div>

          <div 
            data-tf-live="01K9ZQJMYT9KYNTJ7ATRZ5FW1Q"
            className="w-full"
            style={{ minHeight: '600px' }}
          />
        </div>
      </main>
    </div>
  );
};

export default Apply;
