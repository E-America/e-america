import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import logo from "@/assets/logo.png"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section based on scroll position
      // Map: section id -> nav item key
      const sectionMap = [
        { id: "mission", navKey: "about" }, // DigitalExperimentSection (About Us)
        { id: "our-mission", navKey: "mission" }, // MissionSection (Our Mission)
        { id: "passport", navKey: "passport" },
        { id: "treasury", navKey: "treasury" },
        { id: "services", navKey: "services" },
        { id: "constitution", navKey: "constitution" },
      ]

      const scrollPosition = window.scrollY + 200 // Offset for fixed nav

      let currentNavKey = ""

      // Check sections from bottom to top to get the most recent one
      for (let i = sectionMap.length - 1; i >= 0; i--) {
        const { id, navKey } = sectionMap[i]
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY

          if (scrollPosition >= elementTop - 150) {
            currentNavKey = navKey
            break
          }
        }
      }

      // If we're at the very top (before mission section), show "about" as active
      if (window.scrollY < 300) {
        currentNavKey = "about"
      }

      setActiveSection(currentNavKey)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0B1E46]" : "bg-transparent"
      }`}
    >
      <div
        className={`flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[4.875rem] transition-all duration-300 max-w-[1920px] mx-auto ${
          isScrolled
            ? "py-3 sm:py-4 md:py-[1.1875rem]"
            : "py-4 sm:py-6 md:py-8 lg:py-[3.0625rem]"
        }`}
      >
        <Link to="/" className="flex-none shrink-0">
          <img
            src={logo}
            alt="e-AMERICA logo"
            className={`transition-all duration-300 ${
              isScrolled
                ? "w-24 h-auto sm:w-[9rem] md:w-[11.75rem] md:h-[3.18rem]"
                : "w-28 h-auto sm:w-[11rem] md:w-[13.26rem] md:h-[3.59rem]"
            }`}
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6 flex-1 justify-center max-w-full overflow-hidden">
          <div className="flex items-center gap-6 shrink-0">
            <a
              href="#mission"
              onClick={(e) => {
                e.preventDefault()
                document
                  .getElementById("mission")
                  ?.scrollIntoView({ behavior: "smooth" })
              }}
              className={`text-[1.25rem] leading-[normal] transition-colors font-ubuntu-mono font-normal text-center whitespace-nowrap shrink-0 ${
                activeSection === "about"
                  ? "text-white"
                  : "text-[#B7B7B7] hover:text-white"
              }`}
            >
              About Us
            </a>
            <a
              href="#our-mission"
              onClick={(e) => {
                e.preventDefault()
                document
                  .getElementById("our-mission")
                  ?.scrollIntoView({ behavior: "smooth" })
              }}
              className={`text-[1.25rem] leading-[normal] transition-colors font-ubuntu-mono font-normal text-center whitespace-nowrap shrink-0 ${
                activeSection === "mission"
                  ? "text-white"
                  : "text-[#B7B7B7] hover:text-white"
              }`}
            >
              Mission
            </a>
            <a
              href="#passport"
              onClick={(e) => {
                e.preventDefault()
                document
                  .getElementById("passport")
                  ?.scrollIntoView({ behavior: "smooth" })
              }}
              className={`text-[1.25rem] leading-[normal] transition-colors font-ubuntu-mono font-normal text-center whitespace-nowrap shrink-0 ${
                activeSection === "passport"
                  ? "text-white"
                  : "text-[#B7B7B7] hover:text-white"
              }`}
            >
              e-Passport
            </a>
            <a
              href="#treasury"
              onClick={(e) => {
                e.preventDefault()
                document
                  .getElementById("treasury")
                  ?.scrollIntoView({ behavior: "smooth" })
              }}
              className={`text-[1.25rem] leading-[normal] transition-colors font-ubuntu-mono font-normal text-center whitespace-nowrap shrink-0 ${
                activeSection === "treasury"
                  ? "text-white"
                  : "text-[#B7B7B7] hover:text-white"
              }`}
            >
              e-Treasury
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }}
              className={`text-[1.25rem] leading-[normal] transition-colors font-ubuntu-mono font-normal text-center whitespace-nowrap shrink-0 ${
                activeSection === "services"
                  ? "text-white"
                  : "text-[#B7B7B7] hover:text-white"
              }`}
            >
              e-Services
            </a>
            <a
              href="#constitution"
              onClick={(e) => {
                e.preventDefault()
                document
                  .getElementById("constitution")
                  ?.scrollIntoView({ behavior: "smooth" })
              }}
              className={`text-[1.25rem] leading-[normal] transition-colors font-ubuntu-mono font-normal text-center whitespace-nowrap shrink-0 ${
                activeSection === "constitution"
                  ? "text-white"
                  : "text-[#B7B7B7] hover:text-white"
              }`}
            >
              Constitution
            </a>
          </div>
        </div>

        <Link to="/apply" className="flex-none shrink-0">
          <button className="flex flex-row justify-center items-center font-ubuntu-mono font-medium rounded-[1000px] bg-white border border-[#0b1e46] border-solid hover:bg-white/95 transition-colors px-[36px] py-[16px]">
            <span
              className="text-[1.25rem] leading-[normal] whitespace-nowrap md:hidden"
              style={{
                background:
                  "linear-gradient(85.23deg, #0B1E46 16.92%, #896580 56.67%, #BF8398 70.07%, #DA1E3F 106.8%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Apply
            </span>
            <span
              className="text-[1.25rem] leading-[normal] whitespace-nowrap hidden md:inline"
              style={{
                background:
                  "linear-gradient(85.23deg, #0B1E46 16.92%, #896580 56.67%, #BF8398 70.07%, #DA1E3F 106.8%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Apply For Citizenship
            </span>
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
