const ConstitutionSection = () => {
  const imgImage8 = "/constitution-image.png"

  return (
    <section
      id="constitution"
      className="relative bg-gradient-to-b from-[#b30c2a] to-[#5b0413] py-16 lg:py-[120px]"
    >
      <div className="container mx-auto px-8 lg:px-4">
        <div className="max-w-[1302px] mx-auto flex flex-col items-center gap-8 lg:gap-[60px]">
          {/* Header section */}
          <div className="flex flex-col gap-6 lg:gap-8 items-center text-center text-white w-full">
            <p className="font-ubuntu-mono font-bold leading-[normal] text-white text-[1.5rem] lg:text-[2.5rem] w-full">
              The Constitution
            </p>
            <p className="font-ubuntu font-normal leading-[28px] lg:leading-[34px] text-white text-[18px] lg:text-[22px] w-full max-w-[899px]">
              The Constitution of the United States is the foundation of
              e-America. Every e-American commits to uphold its values of
              justice, liberty, and the pursuit of happiness. It reminds us that
              good governance begins with the people, not the state.
            </p>
          </div>

          {/* Image and Preamble section */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[136px] items-center justify-center w-full">
            {/* Image */}
            <div className="border-4 border-solid border-white h-[250px] lg:h-[299px] rounded-[30px] lg:rounded-[40px] shrink-0 w-full max-w-[532px] relative overflow-hidden">
              <img
                alt="Constitution document"
                className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[30px] lg:rounded-[40px] size-full"
                src={imgImage8}
              />
            </div>

            {/* Preamble text */}
            <div className="flex flex-col gap-5 lg:gap-6 items-start text-white w-full max-w-[644px]">
              <div className="flex flex-col gap-3 lg:gap-4 min-h-[180px] lg:min-h-[220px] items-start">
                <div className="flex flex-col font-ubuntu font-bold justify-center text-[20px] lg:text-[24px] w-full">
                  <p className="leading-[28px] lg:leading-[34px]">Preamble</p>
                </div>
                <div className="flex flex-col font-ubuntu font-normal justify-center text-[16px] lg:text-[20px] w-full max-w-[622px]">
                  <p className="leading-[26px] lg:leading-[34px]">
                    "We the People of the United States, in Order to form a more
                    perfect Union, establish Justice, insure domestic
                    Tranquility, provide for the common defence, promote the
                    general Welfare, and secure the Blessings of Liberty to
                    ourselves and our Posterity, do ordain and establish this
                    Constitution for the United States of America."
                  </p>
                </div>
              </div>
              <div className="flex flex-col font-ubuntu font-normal justify-center text-[18px] lg:text-[22px] w-full">
                <p className="leading-[28px] lg:leading-[34px]">
                  You can read the full Constitution at the{" "}
                  <a
                    className="cursor-pointer underline decoration-solid"
                    href="https://www.archives.gov/founding-docs/constitution-transcript"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    U S National Archives
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Button and disclaimer */}
          <div className="flex flex-col gap-6 lg:gap-8 items-center w-full">
            <a
              href="/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#0b1e46] border-solid box-border flex gap-[10px] items-center justify-center px-6 lg:px-9 py-3 lg:py-4 rounded-[1000px] hover:bg-white/95 transition-colors"
            >
              <p
                className="bg-clip-text font-ubuntu-mono font-medium leading-[normal] text-[1.25rem]"
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
            </a>
            <p className="font-ubuntu font-light italic leading-[26px] lg:leading-[34px] text-white text-[16px] lg:text-[18px] text-center whitespace-pre-wrap">
              Joining e-America is both a freedom and a responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConstitutionSection
