import { useState, useEffect } from "react"
import heroBackground from "@/assets/hero-background.jpg"

const HeroSection = () => {
  const imgImage4 =
    "https://www.figma.com/api/mcp/asset/a8145377-2ad0-4532-ab35-c2b67afa1406"
  const img =
    "https://www.figma.com/api/mcp/asset/51277af4-daba-47dc-a7ef-0c049d673c05"

  const phrases = ["you.", "me.", "us.", "everyone."]
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting && displayText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && displayText === "") {
          setIsDeleting(false)
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
        } else if (isDeleting) {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1))
        } else {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1))
        }
      },
      isDeleting ? 120 : 150
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentPhraseIndex])

  return (
    <section className="relative h-[807px] w-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div className="absolute bg-[#000e2b] inset-0" />
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          <img
            alt=""
            className="absolute h-[121.1%] left-0 max-w-none top-[5%] w-full object-cover"
            src={imgImage4 || heroBackground}
          />
        </div>
        <div className="absolute bg-gradient-to-b from-[#0b1e46] inset-0 to-[18.422%] to-[rgba(11,30,70,0)]" />
      </div>

      {/* Blur overlay */}
      <div className="absolute backdrop-blur-[5px] backdrop-filter bg-[rgba(0,14,43,0.05)] inset-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-white font-ubuntu font-medium text-[2.625rem] leading-[normal] mb-8">
          We're building a parallel digital America.
        </p>

        <h1 className="text-white font-ubuntu-mono font-bold text-[6.875rem] leading-[normal] mb-16">
          America <br />
          for{" "}
          <span className="inline-block text-left" style={{ minWidth: "9ch" }}>
            {displayText}
          </span>
        </h1>

        <button
          className="inline-flex items-center justify-center gap-[10px] pl-6 pr-9 py-4 rounded-[1000px] text-white font-ubuntu-mono font-medium text-[1.375rem] leading-[normal] transition-all hover:opacity-90"
          style={{
            background:
              "linear-gradient(85.23deg, #0B1E46 16.92%, #896580 56.67%, #BF8398 70.07%, #DA1E3F 106.8%)",
          }}
          onClick={() =>
            document
              .getElementById("mission")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore More
          <div className="overflow-clip relative shrink-0 size-6">
            <img alt="" className="block max-w-none size-full" src={img} />
          </div>
        </button>
      </div>
    </section>
  )
}

export default HeroSection
