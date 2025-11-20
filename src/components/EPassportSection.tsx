import { useState } from "react"

const EPassportSection = () => {
  // Image assets from local files
  const imgGeminiGeneratedImageHjenvqhjenvqhjen1 = "/passport-image.png"

  // State to track which feature is active (0 = first, 1 = second, 2 = third)
  const [activeFeature, setActiveFeature] = useState(0)

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
              credential of identity within our ecosystem. This passport is not
              a travel document. It represents your membership in a digital
              union of free individuals.
            </p>
          </div>

          {/* Main content area - using relative container for absolute positioning */}
          <div
            className="relative w-full max-w-[1200px] mx-auto mb-[64px]"
            style={{ minHeight: "400px" }}
            onMouseLeave={() => setActiveFeature(0)}
          >
            {/* Passport image */}
            <div className="border-[3px] border-solid border-white h-[296px] ml-0 mt-[10.3px] relative rounded-[70px] w-[381px]">
              <img
                alt="Digital passport"
                className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[70px] size-full"
                src={imgGeminiGeneratedImageHjenvqhjenvqhjen1}
              />
            </div>

            {/* Feature 1 - Top */}
            <div
              className="absolute left-[659.5px] top-[10.3px] bg-gradient-to-r box-border content-stretch flex from-[rgba(255,255,255,0.2)] gap-[10px] items-center justify-center p-[24px] rounded-[8px] to-[rgba(153,153,153,0)] z-20 cursor-pointer"
              onMouseEnter={() => setActiveFeature(0)}
            >
              <p className="font-ubuntu font-normal leading-[34px] not-italic relative shrink-0 text-[22px] text-white">
                Enjoy access to digital public services as they roll out
              </p>
            </div>

            {/* Feature 1 - Connecting line and dots grouped */}
            <svg
              className="absolute left-[383.5px] top-[47.3px] w-[274.529px] h-[54.449px] z-10"
              viewBox="0 0 277 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: "rotate(339.018deg)",
                transformOrigin: "center",
              }}
            >
              <g style={{ opacity: activeFeature === 0 ? 1 : 0.2 }}>
                <path
                  d="M1 1L128.282 49.8137L145.279 5.4941L275.529 55.449"
                  stroke={activeFeature === 0 ? "white" : "#8E8E8E"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>
            </svg>

            {/* Feature 1 - Dots grouped */}
            <svg
              className="absolute left-[380.5px] top-[47.3px] w-[283px] h-[54px] z-20"
              viewBox="0 0 283 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g style={{ opacity: activeFeature === 0 ? 1 : 0.2 }}>
                <circle
                  cx="139"
                  cy="4"
                  r="4"
                  fill={activeFeature === 0 ? "white" : "#8E8E8E"}
                />
                <circle
                  cx="279"
                  cy="4"
                  r="4"
                  fill={activeFeature === 0 ? "white" : "#8E8E8E"}
                />
                <circle
                  cx="4"
                  cy="50"
                  r="4"
                  fill={activeFeature === 0 ? "white" : "#8E8E8E"}
                />
                <circle
                  cx="139"
                  cy="50"
                  r="4"
                  fill={activeFeature === 0 ? "white" : "#8E8E8E"}
                />
              </g>
            </svg>

            {/* Feature 2 - Middle */}
            <div
              className="absolute left-[659.5px] top-[111.61px] bg-gradient-to-r box-border content-stretch flex from-[rgba(255,255,255,0.04)] gap-[10px] items-center justify-center p-[24px] rounded-[8px] to-[rgba(153,153,153,0)] z-20 cursor-pointer"
              onMouseEnter={() => setActiveFeature(1)}
            >
              <p className="font-ubuntu font-normal leading-[34px] not-italic relative shrink-0 text-[22px] text-white">
                Participate in governance and community decisions
              </p>
            </div>

            {/* Feature 2 - Background graphics grouped */}
            <svg
              className="absolute left-[380.5px] top-[59.42px] h-[185.441px] w-[283px] z-0"
              viewBox="0 0 283 186"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                stroke={activeFeature === 1 ? "white" : "#8E8E8E"}
                fill={activeFeature === 1 ? "white" : "#8E8E8E"}
                style={{ opacity: activeFeature === 1 ? 1 : 0.2 }}
              >
                <path
                  d="M1.5 92.7186L139.321 92.7199L278.822 92.7223"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="4" cy="92.8827" r="4" />
                <circle cx="139" cy="93.1873" r="4" />
                <circle cx="279" cy="93.1873" r="4" />
              </g>
            </svg>

            {/* Feature 3 - Bottom */}
            <div
              className="absolute left-[659.5px] top-[207.61px] bg-gradient-to-r box-border content-stretch flex from-[rgba(255,255,255,0.04)] gap-[10px] items-center justify-center p-[24px] rounded-[8px] to-[rgba(153,153,153,0)] z-20 cursor-pointer"
              onMouseEnter={() => setActiveFeature(2)}
            >
              <p className="font-ubuntu font-normal leading-[34px] not-italic relative shrink-0 text-[22px] text-white w-[605px] whitespace-pre-wrap">
                Are expected to act in accordance with the rule of law,
                fairness, and transparency
              </p>
            </div>

            {/* Feature 3 - Background graphics grouped */}
            <svg
              className="absolute left-[380.5px] top-[120.32px] h-[214.801px] w-[283px] z-0"
              viewBox="0 0 283 215"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g style={{ opacity: activeFeature === 2 ? 1 : 0.2 }}>
                <path
                  d="M3 86.9813L139.321 86.9807L139.321 127.817L278.822 127.819"
                  strokeWidth="2"
                  strokeLinecap="round"
                  stroke={activeFeature === 2 ? "white" : "#8E8E8E"}
                />
                <circle
                  cx="139"
                  cy="86.9808"
                  r="4"
                  fill={activeFeature === 2 ? "white" : "#8E8E8E"}
                />
                <circle
                  cx="4"
                  cy="86.9808"
                  r="4"
                  fill={activeFeature === 2 ? "white" : "#8E8E8E"}
                />
                <circle
                  cx="139"
                  cy="128.284"
                  r="4"
                  fill={activeFeature === 2 ? "white" : "#8E8E8E"}
                />
                <circle
                  cx="279"
                  cy="128.284"
                  r="4"
                  fill={activeFeature === 2 ? "white" : "#8E8E8E"}
                />
              </g>
            </svg>
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

export default EPassportSection
