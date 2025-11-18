const DigitalExperimentSection = () => {
  const imgRectangle4 = "https://www.figma.com/api/mcp/asset/4d7062a6-2484-4900-b633-68248c6ae4e0";

  return (
    <section id="mission" className="relative bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 px-4">
          <p className="font-ubuntu font-medium text-[#0b1e46] text-[2rem] leading-[normal] mb-4">
            🇺🇸 e-AMERICA
          </p>
          <div className="font-ubuntu font-bold text-[3.75rem] text-center tracking-[2px] py-8 leading-[1.4]">
            <h2 
              className="whitespace-pre-wrap bg-clip-text text-transparent break-words" 
              style={{
                background: 'linear-gradient(85.23deg, #0B1E46 16.92%, #896580 56.67%, #BF8398 70.07%, #DA1E3F 106.8%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: '1.4',
                paddingTop: '1rem',
                paddingBottom: '1rem',
                display: 'block',
              }}
            >
              A Digital Experiment in Freedom
            </h2>
          </div>
        </div>

        <div className="max-w-[1728px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left column */}
            <div className="flex flex-col font-ubuntu font-normal justify-center leading-[34px] text-[#0b1e46] text-[1.5rem] whitespace-pre-wrap">
              <p className="mb-4">There is America the physical place. And there is America the idea, the idea of free people.</p>
              <p className="mb-4">e-America is that idea, reborn for the digital age.</p>
              <p className="mb-4">&nbsp;</p>
              <p>e-America is a parallel digital America, an experiment in building government as a service for a borderless digital world. It is not a replacement for any existing nation. It is a parallel, digital America built on values, not geography, open to anyone who believes in liberty, equality, and the rule of law.</p>
            </div>

            {/* Right column - Image */}
            <div className="h-[465px] w-full relative">
              <img 
                alt="" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-lg" 
                src={imgRectangle4} 
              />
            </div>
          </div>

          {/* Bottom text */}
          <div className="mt-12 flex flex-col font-ubuntu font-normal justify-center leading-[34px] text-[#0b1e46] text-[1.5rem] whitespace-pre-wrap max-w-[604px] ml-auto">
            <p className="mb-4">&nbsp;</p>
            <p className="mb-4">&nbsp;</p>
            <p className="mb-4">By joining, you agree to uphold the American Constitution, the timeless framework that has guided one of history's most enduring democracies.</p>
            <p className="mb-4">&nbsp;</p>
            <p>Once you join, you become an e-American and receive your digital passport, your identity in a global community united by shared principles, powered by Bitcoin.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalExperimentSection;

