import { Card, CardContent } from "@/components/ui/card"

const EServicesSection = () => {
  // Vector images for phase cards
  const imgVector1 = "/services-phase-1.svg"
  const imgVector2 = "/services-phase-2.svg"

  const phases = [
    {
      id: 1,
      title: "Phase 1: Foundation",
      year: "2025",
      image: imgVector1,
      items: [
        "e-America Passport",
        "Digital Citizenship Registry",
        "Constitution published",
      ],
      imageWidth: "408px",
      contentLeft: "80px",
    },
    {
      id: 2,
      title: "Phase 2: Services",
      year: "2026",
      image: imgVector2,
      items: [
        "Company Registration within e-America's digital jurisdiction",
        "Global Compliance and Tax e Residency",
        "Citizen wallets",
      ],
      imageWidth: "503px",
      contentLeft: "109px",
    },
    {
      id: 3,
      title: "Phase 3: Governance",
      year: "2027",
      image: imgVector2,
      items: [
        "Digital Insurance",
        "Universal Earned Income (UEI) for all e-Americans",
        "Open assemblies",
        "Treasury votes",
        "Citizen proposals",
      ],
      imageWidth: "503px",
      contentLeft: "91px",
    },
    {
      id: 4,
      title: "Phase 4: Integration",
      year: "Beyond",
      image: imgVector2,
      items: [
        "Open Assemblies",
        "Transparent Treasury and Proposal Systems",
        "Partnerships with physical nations",
        "A truly global digital nation",
      ],
      imageWidth: "503px",
      contentLeft: "94px",
    },
  ]

  return (
    <section id="services" className="relative bg-white py-12 lg:py-[7.5rem]">
      {/* Header section - inside container */}
      <div className="container mx-auto px-4">
        <div className="max-w-[1568px] mx-auto">
          <div className="flex flex-col gap-[48px] items-center mb-8 lg:mb-20">
            <div className="flex flex-col gap-8 items-center">
              <p className="font-ubuntu-mono font-bold leading-[normal] text-[#0b1e46] text-[2.5rem] text-center whitespace-pre-wrap">
                e-Services
              </p>
              <div className="font-ubuntu font-normal leading-[2.125rem] text-[#0b1e46] text-[1.375rem] text-center max-w-[668px] whitespace-pre-wrap">
                <p className="mb-0">
                  e-America is gradually rolling out a suite of digital
                  government services, built on open, decentralized
                  infrastructure.{" "}
                </p>
                <p>
                  All built to be open source, auditable, and citizen driven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phases grid - responsive layout */}
      <div className="w-full">
        {/* Mobile/Tablet: Stacked cards */}
        <div className="flex flex-col gap-3 lg:gap-6 lg:hidden w-full px-4">
          {phases.map((phase) => (
            <Card key={phase.id} className="bg-[#E7ECF8] border-0">
              <CardContent className="p-8">
                {/* Phase title */}
                <div className="flex flex-col font-ubuntu font-bold justify-center leading-[normal] text-[#b30c2a] text-[1.25rem] w-full mb-3">
                  <p className="leading-[1.75rem] whitespace-pre-wrap break-words">
                    {phase.title}
                    <br aria-hidden="true" />({phase.year})
                  </p>
                </div>

                {/* Phase items */}
                <div className="flex flex-col font-ubuntu font-normal justify-center leading-[normal] text-[#0b1e46] text-[1rem] w-full">
                  <ul className="list-disc w-full">
                    {phase.items.map((item, index) => (
                      <li
                        key={index}
                        className={
                          index === phase.items.length - 1
                            ? "ms-[30px] pr-2"
                            : "mb-0 ms-[30px] pr-2"
                        }
                      >
                        <span className="leading-[1.5rem] break-words">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop: Original layout with vector images */}
        <div className="hidden lg:block w-full overflow-x-auto">
          <div className="flex items-stretch w-full">
            {phases.map((phase) => (
              <div
                key={phase.id}
                className="relative flex-shrink-0 flex flex-col"
                style={{
                  width: "auto",
                  flex: "1 1 0",
                  minWidth: 0,
                }}
              >
                {/* Vector image - stretches to fill container */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                  <img
                    alt=""
                    className="block max-w-none w-full h-full object-contain object-top"
                    src={phase.image}
                  />
                </div>

                {/* Content overlay */}
                <div
                  className="absolute top-[21px] left-0 right-0 flex flex-col gap-3 items-start"
                  style={{
                    paddingLeft: `clamp(1.5rem, ${
                      parseInt(phase.contentLeft) / 5
                    }vw, ${phase.contentLeft})`,
                    paddingRight: "clamp(3rem, 6vw, 5rem)",
                    paddingTop: "1rem",
                    paddingBottom: "2rem",
                  }}
                >
                  {/* Phase title */}
                  <div className="flex flex-col font-ubuntu font-bold justify-center leading-[normal] text-[#b30c2a] text-[1.25rem] w-full">
                    <p className="leading-[1.75rem] whitespace-pre-wrap break-words">
                      {phase.title}
                      <br aria-hidden="true" />({phase.year})
                    </p>
                  </div>

                  {/* Phase items */}
                  <div className="flex flex-col font-ubuntu font-normal justify-center leading-[normal] text-[#0b1e46] text-[1rem] w-full">
                    <ul className="list-disc w-full">
                      {phase.items.map((item, index) => (
                        <li
                          key={index}
                          className={
                            index === phase.items.length - 1
                              ? "ms-[30px] pr-2"
                              : "mb-0 ms-[30px] pr-2"
                          }
                        >
                          <span className="leading-[1.5rem] break-words">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer to ensure container height matches content */}
                <div
                  className="invisible flex flex-col gap-3"
                  style={{
                    paddingTop: "calc(21px + 1rem)",
                    paddingLeft: `clamp(1.5rem, ${
                      parseInt(phase.contentLeft) / 5
                    }vw, ${phase.contentLeft})`,
                    paddingRight: "clamp(3rem, 6vw, 5rem)",
                    paddingBottom: "2rem",
                  }}
                >
                  <div className="flex flex-col font-ubuntu font-bold justify-center leading-[normal] text-[#b30c2a] text-[1.25rem] w-full">
                    <p className="leading-[1.75rem] whitespace-pre-wrap break-words">
                      {phase.title}
                      <br aria-hidden="true" />({phase.year})
                    </p>
                  </div>
                  <div className="flex flex-col font-ubuntu font-normal justify-center leading-[normal] text-[#0b1e46] text-[1rem] w-full">
                    <ul className="list-disc w-full">
                      {phase.items.map((item, index) => (
                        <li
                          key={index}
                          className={
                            index === phase.items.length - 1
                              ? "ms-[30px] pr-2"
                              : "mb-0 ms-[30px] pr-2"
                          }
                        >
                          <span className="leading-[1.5rem] break-words">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EServicesSection
