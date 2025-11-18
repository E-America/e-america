const EPassportSection = () => {
  const imgGeminiGeneratedImageHjenvqhjenvqhjen1 = "https://www.figma.com/api/mcp/asset/e9a65528-7a2d-4e4a-a734-32363e2106a4";
  const imgLine2 = "https://www.figma.com/api/mcp/asset/b254bc76-a4e2-4386-a4a1-f6530d63a657";
  const imgEllipse5 = "https://www.figma.com/api/mcp/asset/3192ed59-a315-4d86-b1e6-f3956e95b027";
  const imgGroup16 = "https://www.figma.com/api/mcp/asset/946da551-ddb7-46c6-8544-1e419c39abc0";
  const imgGroup17 = "https://www.figma.com/api/mcp/asset/4a48276e-5206-46ef-9adb-012783c72846";

  return (
    <section id="passport" className="relative bg-gradient-to-b from-[#b30c29] to-[#70081a] via-[#b30c29] via-[69.303%] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-[1568px] mx-auto">
          <p className="font-ubuntu-mono font-bold leading-[normal] text-white text-[3.75rem] text-center mb-16 whitespace-pre-wrap">
            e-Passport
          </p>
          
          <p className="font-ubuntu font-normal leading-[34px] text-white text-[1.5rem] text-center w-[957px] mx-auto mb-16 whitespace-pre-wrap">
            Every e American will receive a digital passport, a verifiable credential of identity within our ecosystem. This passport is not a travel document. It represents your membership in a digital union of free individuals.
          </p>

          <div className="flex flex-col items-center gap-8">
            {/* Passport image */}
            <div className="border-[3px] border-solid border-white h-[296px] rounded-[70px] w-[381px] relative overflow-hidden">
              <img 
                alt="" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[70px] size-full" 
                src={imgGeminiGeneratedImageHjenvqhjenvqhjen1} 
              />
            </div>

            {/* Features with connecting lines */}
            <div className="relative w-full max-w-[1200px] h-[400px] mt-8">
              {/* Connecting lines and graphics - background */}
              <div className="absolute left-[33.33%] top-0 h-[185px] w-[283px] opacity-50">
                <img alt="" className="block max-w-none size-full" src={imgGroup16} />
              </div>
              <div className="absolute left-[33.33%] top-[100px] h-[215px] w-[283px] opacity-50">
                <img alt="" className="block max-w-none size-full" src={imgGroup17} />
              </div>

              {/* Feature 1 */}
              <div className="absolute left-[33.33%] top-0 flex items-center gap-4">
                <div className="size-2 shrink-0">
                  <img alt="" className="block max-w-none size-full" src={imgEllipse5} />
                </div>
                <div className="bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-[rgba(153,153,153,0)] p-6 rounded-lg">
                  <p className="font-ubuntu font-normal leading-[34px] text-white text-[1.5rem]">
                    Enjoy access to digital public services as they roll out
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="absolute left-[41.67%] top-[100px] flex items-center gap-4">
                <div className="size-2 shrink-0">
                  <img alt="" className="block max-w-none size-full" src={imgEllipse5} />
                </div>
                <div className="bg-gradient-to-r from-[rgba(255,255,255,0.04)] to-[rgba(153,153,153,0)] p-6 rounded-lg">
                  <p className="font-ubuntu font-normal leading-[34px] text-white text-[1.5rem]">
                    Participate in governance and community decisions
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="absolute left-[50%] top-[200px] flex items-center gap-4">
                <div className="size-2 shrink-0">
                  <img alt="" className="block max-w-none size-full" src={imgEllipse5} />
                </div>
                <div className="bg-gradient-to-r from-[rgba(255,255,255,0.04)] to-[rgba(153,153,153,0)] p-6 rounded-lg max-w-[605px]">
                  <p className="font-ubuntu font-normal leading-[34px] text-white text-[1.5rem] whitespace-pre-wrap">
                    Are expected to act in accordance with the rule of law, fairness, and transparency
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="bg-white border border-[#0b1e46] border-solid box-border flex gap-[10px] items-center justify-center px-9 py-4 rounded-[1000px] mt-8">
              <p className="bg-clip-text font-ubuntu-mono font-medium leading-[normal] text-[1.375rem]" style={{
                background: 'linear-gradient(85.23deg, #0B1E46 16.92%, #896580 56.67%, #BF8398 70.07%, #DA1E3F 106.8%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Get Early Access!
              </p>
            </button>

            <p className="font-ubuntu font-light italic leading-[34px] text-white text-[1.125rem] text-center w-[957px] mx-auto mt-8 whitespace-pre-wrap">
              Joining e-America is both a freedom and a responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EPassportSection;

