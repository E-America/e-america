const ETreasurySection = () => {
  const imgGeminiGeneratedImageVa35Ylva35Ylva351 =
    "https://www.figma.com/api/mcp/asset/ca2a34ce-68c4-46f5-b6ef-31a0bbaf342c"
  const imgVector1 =
    "https://www.figma.com/api/mcp/asset/1fd42753-afb6-4781-acbb-3caff31200b5"
  const imgE =
    "https://www.figma.com/api/mcp/asset/e218310c-e930-41c5-8077-a187787a8b97"

  return (
    <section id="treasury" className="relative bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-[1568px] mx-auto">
          <p className="font-ubuntu-mono font-bold leading-[normal] text-[#0b1e46] text-[3.75rem] text-center mb-16 whitespace-pre-wrap">
            e-Treasury
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left column - Content */}
            <div className="flex flex-col gap-[42px]">
              {/* e-Treasury */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col font-ubuntu font-bold justify-center text-[#b30c2a] text-[2rem]">
                  <p className="leading-[34px] whitespace-pre-wrap">
                    e-Treasury
                  </p>
                </div>
                <div className="flex flex-col font-ubuntu font-normal justify-center text-[#0b1e46] text-[1.5rem]">
                  <p className="leading-[34px] whitespace-pre-wrap">
                    The e-America Treasury will operate entirely in Bitcoin,
                    held transparently and governed by multi signature wallets.
                  </p>
                </div>
              </div>

              {/* Citizen Wallets */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col font-ubuntu font-bold justify-center text-[#b30c2a] text-[2rem]">
                  <p className="leading-[34px] whitespace-pre-wrap">
                    Citizen Wallets
                  </p>
                </div>
                <div className="flex flex-col font-ubuntu font-normal justify-center text-[#0b1e46] text-[1.5rem]">
                  <p className="leading-[34px] whitespace-pre-wrap">
                    Each e-American will have a verified wallet to receive,
                    transact, and participate in treasury governance.
                  </p>
                </div>
              </div>

              {/* Why Bitcoin? */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col font-ubuntu font-bold justify-center text-[#b30c2a] text-[2rem]">
                  <p className="leading-[34px] whitespace-pre-wrap">
                    Why Bitcoin?
                  </p>
                </div>
                <div className="flex flex-col font-ubuntu font-normal justify-center text-[#0b1e46] text-[1.5rem]">
                  <p className="leading-[34px] whitespace-pre-wrap mb-4">
                    Bitcoin is the official currency and financial foundation of
                    e-America. It ensures that the digital nation remains
                    neutral, global, and incorruptible.
                  </p>
                  <ul className="list-disc ms-9 whitespace-pre-wrap">
                    <li className="mb-2">
                      <span className="leading-[34px]">
                        Economic independence where no central authority
                        controls it
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="leading-[34px]">
                        Transparency where every transaction is verifiable
                      </span>
                    </li>
                    <li>
                      <span className="leading-[34px]">
                        Borderless inclusion where anyone can participate
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right column - Image */}
            <div className="relative">
              <div className="border-[#0b1e46] border-[3.5px] border-solid h-[466px] rounded-[70px] w-full overflow-hidden relative">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[70px] size-full"
                  src={imgGeminiGeneratedImageVa35Ylva35Ylva351}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ETreasurySection
