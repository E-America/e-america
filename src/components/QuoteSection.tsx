const QuoteSection = () => {
  return (
    <section className="relative bg-[#0b1e46] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-[849px] mx-auto text-center">
          <div className="flex flex-col font-ubuntu font-normal justify-center leading-[2.375rem] text-[1.5rem] text-center text-white whitespace-pre-wrap">
            <p className="mb-0">
              <span>e America is a </span>
              <a
                className="cursor-pointer font-ubuntu font-bold not-italic text-[#ff516f]"
                href="https://drapernation.com/"
              >
                <span className="leading-[2.375rem] text-[1.5rem]">
                  Draper Nation
                </span>
              </a>
              <span className="text-[#ff516f]"> </span>
              experiment in digital governance, a prototype for a new kind of
              digital nation: borderless, voluntary, and built on code.
            </p>
            <p className="mb-0">
              Our goal is not to replace existing governments, but to create new
              options for human organization in the digital age.
            </p>
            <p className="mb-0">&nbsp;</p>
            <p>
              This is part of a larger movement toward freedom infrastructure,
              tools that give people sovereignty over their identity, money, and
              governance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuoteSection;

