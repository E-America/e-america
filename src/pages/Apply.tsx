import { useEffect } from "react";

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
    <div 
      data-tf-live="01K9ZQJMYT9KYNTJ7ATRZ5FW1Q"
      className="w-full h-screen"
    />
  );
};

export default Apply;
