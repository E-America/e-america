import { useState, useEffect } from "react"
import heroBackground from "@/assets/hero-background.jpg"

const HeroSection = () => {
  const words = ["me", "you", "us", "everyone"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [words.length])

  const currentWord = words[currentWordIndex]
  const imgHeroSection = "/hero-background.png"
  const imgVector = "/arrow-icon.svg"

  return (
    <section className="relative w-full flex flex-col items-center justify-center gap-[120px] min-h-screen overflow-hidden">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img
          alt=""
          className="absolute max-w-none object-center object-cover size-full"
          src={imgHeroSection || heroBackground}
        />
        <div className="absolute backdrop-blur-sm backdrop-filter bg-gradient-to-b from-[#0b1e46] inset-0 to-[rgba(4,16,42,0.8)] via-[15.865%] via-[rgba(8,23,56,0.897)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-[7.5rem] text-center text-white min-h-screen pt-32 pb-20">
        <div className="flex flex-col items-center">
          <p className="text-white font-ubuntu font-medium text-[2.625rem] leading-[normal] mb-0 mt-16">
            We're building a parallel digital America.
          </p>

          <h1 className="text-white font-ubuntu-mono font-bold text-[6.875rem] leading-[normal] mt-[80px] text-align: center;">
            America <br />
            for <span className="inline-block">{currentWord}.</span>
          </h1>
        </div>

        <button
          className="flex flex-row items-center justify-center gap-[10px] px-9 py-4 rounded-[1000px] bg-white border border-[#0b1e46] border-solid hover:bg-white/95 transition-colors"
          onClick={() =>
            document
              .getElementById("mission")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span
            className="text-[1.375rem] leading-[normal] font-ubuntu-mono font-medium"
            style={{
              background:
                "linear-gradient(85.23deg, #0B1E46 16.92%, #896580 56.67%, #BF8398 70.07%, #DA1E3F 106.8%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Explore More
          </span>
          <div
            className="overflow-clip relative shrink-0 size-6"
            style={{
              maskImage: `url(${imgVector})`,
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskImage: `url(${imgVector})`,
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              backgroundColor: "#0B1E46",
            }}
          />
        </button>
      </div>
    </section>
  )
}

export default HeroSection
