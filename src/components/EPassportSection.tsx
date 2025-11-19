const EPassportSection = () => {
  // Image assets from local files
  const imgGeminiGeneratedImageHjenvqhjenvqhjen1 = "/passport-image.png"
  const imgLine2 = "/passport-line.svg"
  const imgEllipse5 = "/passport-dot.svg"
  const imgGroup16 = "/passport-bg-1.svg"
  const imgGroup17 = "/passport-bg-2.svg"

  return (
    <section id="passport" className="relative bg-[#0b1e46] py-[120px]">
      <div className="container mx-auto px-4">
        <div className="max-w-[1568px] mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-[32px] items-center text-center text-white mb-[64px]">
            <p className="font-ubuntu-mono font-bold leading-[normal] text-white text-[60px] w-full">
              e-Passport
            </p>
            <p className="font-ubuntu font-normal leading-[34px] text-white text-[22px] w-[957px]">
              Every e American will receive a digital passport, a verifiable
              credential of identity within our ecosystem. This passport is not a
              travel document. It represents your membership in a digital union
              of free individuals.
            </p>
          </div>

          {/* Main content area - using relative container for absolute positioning */}
          <div className="relative w-full max-w-[1200px] mx-auto mb-[64px]" style={{ minHeight: '400px' }}>
            {/* Passport image */}
            <div className="border-[3px] border-solid border-white h-[296px] ml-0 mt-[10.3px] relative rounded-[70px] w-[381px]">
              <img
                alt="Digital passport"
                className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[70px] size-full"
                src={imgGeminiGeneratedImageHjenvqhjenvqhjen1}
              />
            </div>

            {/* Feature 1 - Top */}
            <div className="absolute left-[659.5px] top-[10.3px] bg-gradient-to-r box-border content-stretch flex from-[rgba(255,255,255,0.2)] gap-[10px] items-center justify-center p-[24px] rounded-[8px] to-[rgba(153,153,153,0)] z-20">
              <p className="font-ubuntu font-normal leading-[34px] not-italic relative shrink-0 text-[22px] text-white">
                Enjoy access to digital public services as they roll out
              </p>
            </div>

            {/* Connecting line - rotated diagonal line */}
            <div className="absolute left-[383.5px] top-[47.3px] flex items-center justify-center z-10" style={{ 
              width: '274.529px', 
              height: '54.449px'
            }}>
              <div className="flex-none" style={{ 
                transform: 'rotate(339.018deg)',
                transformOrigin: 'center'
              }}>
                <div className="h-[54.449px] relative w-[274.529px]">
                  <div className="absolute inset-[-1.84%_-0.36%]">
                    <img 
                      alt="" 
                      className="block max-w-none size-full" 
                      src={imgLine2} 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Dots - positioned at connection points along the lines */}
            <div className="absolute left-[515.5px] top-[47.3px] size-[8px] z-20">
              <img alt="" className="block max-w-none size-full" src={imgEllipse5} />
            </div>
            <div className="absolute left-[655.5px] top-[47.3px] size-[8px] z-20">
              <img alt="" className="block max-w-none size-full" src={imgEllipse5} />
            </div>
            <div className="absolute left-[380.5px] top-[93.3px] size-[8px] z-20">
              <img alt="" className="block max-w-none size-full" src={imgEllipse5} />
            </div>
            <div className="absolute left-[515.5px] top-[93.3px] size-[8px] z-20">
              <img alt="" className="block max-w-none size-full" src={imgEllipse5} />
            </div>

            {/* Feature 2 - Middle */}
            <div className="absolute left-[659.5px] top-[111.61px] bg-gradient-to-r box-border content-stretch flex from-[rgba(255,255,255,0.04)] gap-[10px] items-center justify-center p-[24px] rounded-[8px] to-[rgba(153,153,153,0)] z-20">
              <p className="font-ubuntu font-normal leading-[34px] not-italic relative shrink-0 text-[22px] text-white">
                Participate in governance and community decisions
              </p>
            </div>

            {/* Background graphics 1 */}
            <div className="absolute left-[380.5px] top-[59.42px] h-[185.441px] w-[283px] z-0">
              <img alt="" className="block max-w-none size-full" src={imgGroup16} />
            </div>

            {/* Feature 3 - Bottom */}
            <div className="absolute left-[659.5px] top-[207.61px] bg-gradient-to-r box-border content-stretch flex from-[rgba(255,255,255,0.04)] gap-[10px] items-center justify-center p-[24px] rounded-[8px] to-[rgba(153,153,153,0)] z-20">
              <p className="font-ubuntu font-normal leading-[34px] not-italic relative shrink-0 text-[22px] text-white w-[605px] whitespace-pre-wrap">
                Are expected to act in accordance with the rule of law, fairness, and transparency
              </p>
            </div>

            {/* Background graphics 2 */}
            <div className="absolute left-[380.5px] top-[120.32px] h-[214.801px] w-[283px] z-0">
              <img alt="" className="block max-w-none size-full" src={imgGroup17} />
            </div>
          </div>

          {/* Button and footer */}
          <div className="flex flex-col gap-[32px] items-center w-full">
            <button className="bg-white border border-[#0b1e46] border-solid box-border flex gap-[10px] items-center justify-center px-[36px] py-[16px] rounded-[1000px]">
              <p
                className="bg-clip-text font-ubuntu-mono font-medium leading-[normal] text-[22px]"
                style={{
                  background:
                    "linear-gradient(85.23deg, #0B1E46 16.92%, #896580 56.67%, #BF8398 70.07%, #DA1E3F 106.8%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Apply For Citizenship
              </p>
            </button>

            <p className="font-ubuntu font-light italic leading-[34px] text-white text-[18px] text-center whitespace-pre-wrap">
              Joining e-America is both a freedom and a responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EPassportSection;
