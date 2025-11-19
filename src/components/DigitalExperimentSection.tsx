const DigitalExperimentSection = () => {
  const imgRectangle4 = "/digital-experiment-1.png"
  const imgRectangle5 = "/digital-experiment-2.png"

  return (
    <section id="mission" className="relative bg-white pb-0 pt-[10rem]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col gap-2 items-center text-center w-full max-w-[1149px] mx-auto mb-8">
          <p className="font-ubuntu font-medium leading-[normal] text-[#0b1e46] text-[2rem] w-full whitespace-pre-wrap">
            🇺🇸 e-AMERICA
          </p>
          <div className="font-ubuntu font-bold leading-[2.25rem] relative text-[3.75rem] tracking-[2px] w-full">
            <p className="leading-[2.25rem] whitespace-pre-wrap">
              A Digital Experiment in{" "}
              <span
                style={{
                  background:
                    "linear-gradient(85.23deg, #0B1E46 16.92%, #896580 56.67%, #BF8398 70.07%, #DA1E3F 106.8%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Freedom
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Content with border - full width */}
      <div className="border-t border-[#769dd1] border-solid w-full">
        {/* First row: Text left, Image right */}
        <div className="relative w-full py-8">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-[4.1875rem] items-start w-full">
            <div className="flex flex-col font-ubuntu font-normal justify-center leading-[2.125rem] text-[#0b1e46] text-[1.375rem] w-full lg:w-[725px]">
              <p className="mb-0">
                There is America the physical place. And there is America the
                idea, the idea of free people. e-America is that idea, reborn
                for the digital age.{" "}
              </p>
              <p className="mb-0">&nbsp;</p>
              <p>
                e-America is a parallel digital America, an experiment in
                building government as a service for a borderless digital world.
                It is not a replacement for any existing nation. It is a
                parallel, digital America built on values, not geography, open
                to anyone who believes in liberty, equality, and the rule of
                law.
              </p>
            </div>
            {/* Image - full width of viewport, breaks out to edge */}
            <div className="h-[473.747px] relative w-full lg:w-[50vw] lg:mr-[calc(-50vw+50%)]">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full w-full"
                src={imgRectangle4}
              />
            </div>
          </div>
        </div>

        {/* Second row: Image left, Text right */}
        <div className="relative w-full py-8">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-[9.125rem] items-start w-full">
            {/* Image - full width of viewport, breaks out to edge */}
            <div className="h-[474.122px] relative w-full lg:w-[50vw] lg:ml-[calc(-50vw+50%)] lg:order-first">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full w-full"
                src={imgRectangle5}
              />
            </div>
            <div className="flex flex-col font-ubuntu font-normal justify-center leading-[2.125rem] text-[#0b1e46] text-[1.375rem] w-full lg:w-[604px] lg:order-last">
              <p className="mb-0">
                By joining, you agree to uphold the American Constitution, the
                timeless framework that has guided one of history's most
                enduring democracies.
              </p>
              <p className="mb-0">&nbsp;</p>
              <p>
                Once you join, you become an e-American and receive your digital
                passport, your identity in a global community united by shared
                principles, powered by Bitcoin.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider - full width */}
      <div className="h-[6px] w-full" />
    </section>
  )
}

export default DigitalExperimentSection
