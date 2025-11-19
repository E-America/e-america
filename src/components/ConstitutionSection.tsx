import { Link } from "react-router-dom"

const ConstitutionSection = () => {
  const imgImage8 = "/constitution-image.png"

  return (
    <section
      id="constitution"
      className="relative bg-gradient-to-b from-[#b30c2a] to-[#5b0413] py-[120px]"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[1302px] mx-auto flex flex-col items-center gap-[60px]">
          {/* Header section */}
          <div className="flex flex-col gap-8 items-center text-center text-white w-full">
            <p className="font-ubuntu-mono font-bold leading-[normal] text-white text-[3.75rem] lg:text-[60px] w-full">
              The Constitution
            </p>
            <p className="font-ubuntu font-normal leading-[34px] text-white text-[22px] w-full max-w-[899px]">
              The Constitution of the United States is the foundation of
              e-America. Every e-American commits to uphold its values of
              justice, liberty, and the pursuit of happiness. It reminds us that
              good governance begins with the people, not the state.
            </p>
          </div>

          {/* Image and Preamble section */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[136px] items-center justify-center w-full">
            {/* Image */}
            <div className="border-4 border-solid border-white h-[299px] rounded-[40px] shrink-0 w-full max-w-[532px] relative overflow-hidden">
              <img
                alt="Constitution document"
                className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[40px] size-full"
                src={imgImage8}
              />
            </div>

            {/* Preamble text */}
            <div className="flex flex-col gap-6 items-start text-white w-full max-w-[644px]">
              <div className="flex flex-col gap-4 min-h-[220px] items-start">
                <div className="flex flex-col font-ubuntu font-bold justify-center text-[24px] w-full">
                  <p className="leading-[34px]">Preamble</p>
                </div>
                <div className="flex flex-col font-ubuntu font-normal justify-center text-[20px] w-full max-w-[622px]">
                  <p className="leading-[34px]">
                    "We the People of the United States, in Order to form a
                    more perfect Union, establish Justice, insure domestic
                    Tranquility, provide for the common defence, promote the
                    general Welfare, and secure the Blessings of Liberty to
                    ourselves and our Posterity, do ordain and establish this
                    Constitution for the United States of America."
                  </p>
                </div>
              </div>
              <div className="flex flex-col font-ubuntu font-normal justify-center text-[22px] w-full">
                <p className="leading-[34px]">
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
          <div className="flex flex-col gap-8 items-center w-full">
            <Link
              to="/apply"
              className="bg-white border border-[#0b1e46] border-solid box-border flex gap-[10px] items-center justify-center px-9 py-4 rounded-[1000px] hover:bg-white/95 transition-colors"
            >
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
            </Link>
            <p className="font-ubuntu font-light italic leading-[34px] text-white text-[18px] text-center whitespace-pre-wrap">
              Joining e-America is both a freedom and a responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConstitutionSection
