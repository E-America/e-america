const ETreasurySection = () => {
  const imgGeminiGeneratedImageVa35Ylva35Ylva351 = "/treasury-image.png"
  const imgVector1 = "/treasury-vector.svg"
  const imgE = "/treasury-e-icon.svg"

  return (
    <section id="treasury" className="relative bg-white py-[7.5rem]">
      <div className="container mx-auto px-4">
        <div className="max-w-[1568px] mx-auto">
          {/* Title */}
          <div className="flex gap-[10px] items-center justify-center p-[10px] mb-[4.125rem]">
            <p className="font-ubuntu-mono font-bold leading-[normal] text-[#0b1e46] text-[3.75rem] text-center">
              e-Treasury
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-[9.8125rem] items-start justify-center w-full">
            {/* Left column - Content */}
            <div className="flex flex-col gap-[2.625rem] items-start w-full lg:w-[506px]">
              {/* e-Treasury */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex flex-col font-ubuntu font-bold justify-center text-[#b30c2a] text-[1.5rem]">
                  <p className="leading-[2.125rem] whitespace-pre-wrap">
                    e-Treasury
                  </p>
                </div>
                <div className="flex flex-col font-ubuntu font-normal justify-center text-[#0b1e46] text-[1.25rem] w-[504px]">
                  <p className="leading-[2.125rem] whitespace-pre-wrap">
                    The e-America Treasury will operate entirely in Bitcoin,
                    held transparently and governed by multi signature wallets.
                  </p>
                </div>
              </div>

              {/* Citizen Wallets */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex flex-col font-ubuntu font-bold justify-center text-[#b30c2a] text-[1.5rem]">
                  <p className="leading-[2.125rem] whitespace-pre-wrap">
                    Citizen Wallets
                  </p>
                </div>
                <div className="flex flex-col font-ubuntu font-normal justify-center text-[#0b1e46] text-[1.25rem] w-[501.544px]">
                  <p className="leading-[2.125rem] whitespace-pre-wrap">
                    Each e-American will have a verified wallet to receive,
                    transact, and participate in treasury governance.
                  </p>
                </div>
              </div>

              {/* Why Bitcoin? */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex flex-col font-ubuntu font-bold justify-center text-[#b30c2a] text-[1.5rem]">
                  <p className="leading-[2.125rem] whitespace-pre-wrap">
                    Why Bitcoin?
                  </p>
                </div>
                <div className="flex flex-col font-ubuntu font-normal justify-center text-[#0b1e46] text-[1.25rem] w-[501.544px]">
                  <p className="leading-[2.125rem] whitespace-pre-wrap mb-0">
                    Bitcoin is the official currency and financial foundation of
                    e-America. It ensures that the digital nation remains
                    neutral, global, and incorruptible.
                  </p>
                </div>
                <div className="flex flex-col font-ubuntu font-normal justify-center text-[#0b1e46] text-[1.25rem] w-full">
                  <ul className="list-disc whitespace-pre-wrap">
                    <li className="mb-0 ms-[30px]">
                      <span className="leading-[2.125rem]">
                        Economic independence where no central authority
                        controls it
                      </span>
                    </li>
                    <li className="mb-0 ms-[30px]">
                      <span className="leading-[2.125rem]">
                        Transparency where every transaction is verifiable
                      </span>
                    </li>
                    <li className="ms-[30px]">
                      <span className="leading-[2.125rem]">
                        Borderless inclusion where anyone can participate
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right column - Image */}
            <div className="relative shrink-0">
              <div className="border-[#0b1e46] border-[3.5px] border-solid h-[466.297px] rounded-[70px] w-[639px] overflow-hidden relative">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[70px] size-full"
                  src={imgGeminiGeneratedImageVa35Ylva35Ylva351}
                />
                {/* Decorative elements */}
                <div className="absolute left-[127.64px] top-[128.18px] h-[13.492px] w-[19.969px]">
                  <div className="absolute inset-[-5.26%_6.86%_-5.91%_7.75%]">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={imgVector1}
                    />
                  </div>
                </div>
                <div className="absolute left-[136.26px] top-[131.08px] flex items-center justify-center">
                  <div className="flex-none rotate-[336.667deg]">
                    <div className="h-[6.798px] relative w-[6.645px]">
                      <div className="absolute inset-[-51.48%_-52.67%]">
                        <img
                          alt=""
                          className="block max-w-none size-full"
                          src={imgE}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ETreasurySection
