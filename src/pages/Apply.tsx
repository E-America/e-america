import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const Apply = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Hide loading spinner after a short delay to allow Typeform to render
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      document.body.removeChild(script);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
          <Loader2 className="w-12 h-12 animate-spin text-ea-blue" />
        </div>
      )}
      <div 
        data-tf-live="01KAFV8FXM35BK8VHN1HY9C1BV"
        className="w-full h-screen"
      />
    </>
  );
};

export default Apply;
