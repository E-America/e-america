const QuoteSection = () => {
  const imgAa = "https://www.figma.com/api/mcp/asset/9aa6349d-3bc8-448e-9944-258a2230cbd1";

  return (
    <section className="relative bg-[#0b1e46] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-[849px] mx-auto text-center">
          <div className="flex flex-col font-ubuntu font-normal h-[88px] justify-center leading-[34px] text-[6.25rem] text-center text-white mb-8">
            <p className="leading-[34px] whitespace-pre-wrap">"</p>
          </div>
          
          <div className="flex flex-col font-ubuntu font-normal justify-center leading-[34px] text-[1.5rem] text-center text-white whitespace-pre-wrap mb-8">
            <p className="mb-4">
              <span>e America is a </span>
              <span className="font-ubuntu font-bold not-italic">Draper Nation</span>
              <span> experiment in digital governance, a prototype for a new kind of digital nation: borderless, voluntary, and built on code.</span>
            </p>
            <p className="mb-4">Our goal is not to replace existing governments, but to create new options for human organization in the digital age.</p>
            <p className="mb-4">&nbsp;</p>
            <p>This is part of a larger movement toward freedom infrastructure, tools that give people sovereignty over their identity, money, and governance.</p>
          </div>

          <div className="h-6 w-8 mx-auto mb-4">
            <img alt="" className="block max-w-none size-full" src={imgAa} />
          </div>

          <div className="flex flex-col font-ubuntu font-medium italic justify-center leading-[34px] text-[#7c8aa8] text-[1.5rem] text-center">
            <p className="leading-[34px] whitespace-pre-wrap">Vikram - CEO Draper Startup House Singapore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;

