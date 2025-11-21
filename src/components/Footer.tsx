const Footer = () => {
  const imgHeart = "/heart-icon.svg"
  const imgGroup25 = "/draper-nation-logo.png"
  const imgTwitter = "/twitter-icon.svg"
  const imgInstagram = "/instagram-icon.svg"
  const imgLinkedin = "/linkedin-icon.svg"

  return (
    <footer className="bg-[#0b1e46] box-border flex flex-col gap-12 sm:gap-16 lg:gap-[78px] items-center justify-center pb-6 sm:pb-8 lg:pb-[38px] pt-12 sm:pt-16 md:pt-20 lg:pt-[120px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[80px] relative w-full">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-0 relative shrink-0 w-full max-w-[1400px]">
        {/* Left Section: Crafted with by + Logo */}
        <div className="flex flex-col items-center lg:items-start relative shrink-0 w-full lg:w-auto lg:pt-0 lg:-mt-[10px]">
          <div className="flex items-center gap-2 font-ubuntu-mono font-bold text-[24px] sm:text-[28px] lg:text-[30px] text-white mb-4 lg:mb-0">
            <span className="whitespace-pre-wrap">Crafted with</span>
            <img
              className="size-[28px] sm:size-[32px] lg:size-[36px]"
              alt="Heart icon"
              src={imgHeart}
            />
            <span className="whitespace-pre-wrap">by</span>
          </div>
          <div className="w-[13.5rem] mt-4 lg:mt-[1.79rem%]">
            <img
              className="block w-full h-auto"
              alt="Draper Nation logo"
              src={imgGroup25}
            />
          </div>
        </div>

        {/* Middle Section: Contact Us */}
        <div className="flex flex-col gap-[13px] items-center lg:items-start relative shrink-0 w-full lg:w-[288px]">
          <p className="font-ubuntu-mono font-bold leading-[normal] text-[20px] sm:text-[22px] lg:text-[24px] text-white whitespace-pre-wrap text-center lg:text-left">
            Contact Us
          </p>
          <p className="font-ubuntu font-normal leading-[30px] not-italic text-[18px] sm:text-[19px] lg:text-[20px] text-white whitespace-pre-wrap text-center lg:text-left">
            55 E 3rd Ave, San Mateo
            <br className="" aria-hidden="true" />
            CA 94401, United States
          </p>
          <a
            className="block font-ubuntu font-normal not-italic text-[#ff516f] text-[18px] sm:text-[19px] lg:text-[20px] hover:opacity-80 transition-opacity"
            href="mailto:hello@e-america.org"
          >
            <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[normal] underline whitespace-pre-wrap text-center lg:text-left">
              hello@e-america.org
            </p>
          </a>
        </div>

        {/* Right Section: Follow us */}
        <div className="flex flex-col gap-[32px] items-center lg:items-end lg:justify-start relative shrink-0 w-full lg:w-auto">
          <p className="font-ubuntu-mono font-bold leading-[normal] text-[20px] sm:text-[22px] lg:text-[24px] text-center lg:text-right text-white whitespace-pre-wrap">
            Follow us
          </p>
          <div className="flex gap-[32px] sm:gap-[38px] lg:gap-[42px] items-center justify-center lg:justify-end relative shrink-0">
            <a
              href="https://x.com/eAmericaHQ"
              target="_blank"
              rel="noopener noreferrer"
              className="relative shrink-0 size-[38px] sm:size-[40px] lg:size-[42px] hover:opacity-80 transition-opacity"
              aria-label="X (Twitter)"
            >
              <img
                className="block max-w-none size-full"
                alt="X (Twitter)"
                src={imgTwitter}
              />
            </a>
            <a
              href="https://www.instagram.com/eamericahq/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative shrink-0 size-[38px] sm:size-[40px] lg:size-[42px] hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <img
                className="block max-w-none size-full"
                alt="Instagram"
                src={imgInstagram}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/e-america"
              target="_blank"
              rel="noopener noreferrer"
              className="relative shrink-0 size-[38px] sm:size-[40px] lg:size-[42px] hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <img
                className="block max-w-none size-full"
                alt="LinkedIn"
                src={imgLinkedin}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="font-ubuntu font-normal leading-[34px] not-italic relative shrink-0 text-[#d1d7e4] text-[16px] sm:text-[17px] lg:text-[18px] text-center w-full whitespace-pre-wrap">
        © 2025 e-AMERICA
      </p>
    </footer>
  )
}

export default Footer
