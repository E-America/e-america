const Footer = () => {
  const imgFooter = "https://www.figma.com/api/mcp/asset/a0a47053-c177-4d91-afb7-c49ba0688337";
  const img30 = "https://www.figma.com/api/mcp/asset/2f274e07-efcc-4344-bf90-997c31eb26fc";
  const img31 = "https://www.figma.com/api/mcp/asset/960b997e-8b3a-459f-b2f2-e5d80c5f9ea7";

  return (
    <footer className="relative bg-[#0b1e46] h-[408px]">
      <div className="absolute inset-0">
        <img 
          alt="" 
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
          src={imgFooter} 
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-between">
        <div className="h-[57px] relative shrink-0 w-[212px]">
          <img alt="" className="block max-w-none size-full" src={img30} />
        </div>
        
        <div className="flex items-center justify-between flex-1 max-w-[1236px] ml-8">
          <div className="flex gap-9 items-center flex-wrap">
            <div className="flex gap-[10px] items-center w-[147px]">
              <div className="box-border flex flex-1 gap-2 items-center px-0 py-[9px] relative">
                <div className="relative shrink-0 size-[7px]">
                  <img alt="" className="block max-w-none size-full" src={img31} />
                </div>
                <p className="font-ubuntu-mono font-medium leading-[normal] text-[1.25rem] text-white whitespace-pre-wrap ml-2">
                  About Us
                </p>
              </div>
            </div>
            <div className="h-6 shrink-0 w-[124px]">
              <p className="font-ubuntu-mono font-normal leading-[normal] text-[#b7b7b7] text-[1.25rem] text-center">
                Our Mission
              </p>
            </div>
            <div className="h-6 shrink-0 w-[124px]">
              <p className="font-ubuntu-mono font-normal leading-[normal] text-[#b7b7b7] text-[1.25rem] text-center">
                e-Passport
              </p>
            </div>
            <div className="h-6 shrink-0 w-[124px]">
              <p className="font-ubuntu-mono font-normal leading-[normal] text-[#b7b7b7] text-[1.25rem] text-center">
                e-Treasury
              </p>
            </div>
            <div className="h-6 shrink-0 w-[124px]">
              <p className="font-ubuntu-mono font-normal leading-[normal] text-[#b7b7b7] text-[1.25rem] text-center">
                e-Services
              </p>
            </div>
            <div className="h-6 shrink-0 w-[181px]">
              <p className="font-ubuntu-mono font-normal leading-[normal] text-[#b7b7b7] text-[1.25rem] text-center">
                The Constitution
              </p>
            </div>
          </div>
          
          <button className="bg-white border border-[#0b1e46] border-solid box-border flex gap-[10px] items-center justify-center px-9 py-4 rounded-[1000px] shrink-0">
            <p className="bg-clip-text font-ubuntu-mono font-medium leading-[normal] text-[1.375rem]" style={{
              background: 'linear-gradient(85.23deg, #0B1E46 16.92%, #896580 56.67%, #BF8398 70.07%, #DA1E3F 106.8%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Apply Now
            </p>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

