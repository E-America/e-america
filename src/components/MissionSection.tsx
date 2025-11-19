const MissionSection = () => {
  // Icons from local assets
  const imgIncorporateCompanies = "/incorporate-companies.svg"
  const imgEResidencyCertificate = "/e-residency-certificate.svg"
  const imgInsurance = "/insurance.svg"
  const imgVote = "/vote.svg"
  const imgVerifyIdentity = "/verify-identity.svg"
  const imgEllipse1 = "/ellipse-base.svg"
  const imgDigitalDashboard = "/digital-dashboard.svg"
  const img03MobilePayment = "/mobile-payment.svg"
  const imgAlternativeCreditScoring = "/alternative-credit-scoring.svg"

  // Complex dashboard icon components
  const imgGroup = "/dashboard-group-1.svg"
  const imgGroup1 = "/dashboard-group-2.svg"
  const imgGroup2 = "/dashboard-group-3.svg"
  const imgGroup3 = "/dashboard-group-4.svg"
  const imgGroup4 = "/dashboard-group-5.svg"
  const imgGroup5 = "/dashboard-group-6.svg"
  const imgGroup6 = "/dashboard-group-7.svg"
  const imgGroup7 = "/dashboard-group-8.svg"
  const imgGroup8 = "/dashboard-group-9.svg"
  const imgGroup9 = "/dashboard-group-10.svg"
  const imgGroup10 = "/dashboard-group-11.svg"
  const imgGroup11 = "/dashboard-group-12.svg"
  const imgGroup12 = "/dashboard-group-13.svg"
  const imgGroup13 = "/dashboard-group-14.svg"
  const imgGroup14 = "/dashboard-group-15.svg"
  const imgGroup15 = "/dashboard-group-16.svg"
  const imgGroup16 = "/dashboard-group-17.svg"
  const imgGroup17 = "/dashboard-group-18.svg"
  const imgGroup18 = "/dashboard-group-19.svg"

  return (
    <section
      id="our-mission"
      className="relative bg-[#ccd2de] pt-[120px] pb-[7.5rem]"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[1568px] mx-auto">
          {/* Header section */}
          <div className="flex flex-col gap-8 items-center mb-16 px-4">
            <p className="font-ubuntu-mono font-bold leading-[normal] text-[#0b1e46] text-[3.75rem] text-center whitespace-pre-wrap">
              Our Mission.
            </p>
            <p className="font-ubuntu font-normal leading-[2.125rem] text-[#0b1e46] text-[1.375rem] text-center max-w-[957px] px-4 whitespace-pre-wrap">
              To reimagine government as a service provider, accessible to
              anyone, anywhere.
              <br />
              We will be building tools that will allow people to:
            </p>
          </div>

          {/* Grid section */}
          <div className="flex flex-col gap-[5rem] items-start w-full">
            {/* First row - 4 columns */}
            <div className="grid grid-cols-4 gap-[5rem] w-full">
              {/* Incorporate companies */}
              <div className="flex flex-col gap-[15px] items-center">
                <div className="max-h-[140px] max-w-[140px] min-h-[80px] min-w-[80px] size-[140px] relative shrink-0">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgIncorporateCompanies}
                  />
                </div>
                <p className="font-ubuntu font-normal leading-[2.125rem] text-[#0b1e46] text-[1.5rem] text-center whitespace-pre-wrap">
                  Incorporate companies
                </p>
              </div>

              {/* Receive e-Residency certificate */}
              <div className="flex flex-col gap-[15px] items-center">
                <div className="max-h-[140px] max-w-[140px] min-h-[80px] min-w-[80px] size-[140px] relative shrink-0">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgEResidencyCertificate}
                  />
                </div>
                <p className="font-ubuntu font-normal leading-[2.125rem] text-[#0b1e46] text-[1.5rem] text-center whitespace-pre-wrap">
                  Receive e-Residency certificate{" "}
                </p>
              </div>

              {/* Manage taxes & payments */}
              <div className="flex flex-col gap-[15px] items-center">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] max-h-[140px] max-w-[140px] min-h-[80px] min-w-[80px] relative shrink-0">
                  <div className="col-[1] ml-0 mt-0 relative row-[1] size-[140px]">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={imgEllipse1}
                    />
                  </div>
                  <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[28.93%] mt-[29.29%] relative row-[1]">
                    <div className="col-[1] h-[58px] ml-0 mt-0 relative row-[1] w-[58.002px]">
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img03MobilePayment}
                      />
                    </div>
                  </div>
                </div>
                <p className="font-ubuntu font-normal leading-[2.125rem] text-[#0b1e46] text-[1.5rem] text-center whitespace-pre-wrap">
                  Manage taxes & payments
                </p>
              </div>

              {/* Alternative consumer credit scoring */}
              <div className="flex flex-col gap-[15px] items-center">
                <div className="max-h-[140px] max-w-[140px] min-h-[80px] min-w-[80px] size-[140px] relative shrink-0">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgAlternativeCreditScoring}
                  />
                </div>
                <p className="font-ubuntu font-normal leading-[2.125rem] text-[#0b1e46] text-[1.5rem] text-center whitespace-pre-wrap">
                  Alternative consumer
                  <br />
                  credit scoring
                </p>
              </div>
            </div>

            {/* Second row - 4 columns */}
            <div className="grid grid-cols-4 gap-[5rem] w-full">
              {/* Insurance */}
              <div className="flex flex-col gap-[15px] items-center">
                <div className="max-h-[140px] max-w-[140px] min-h-[80px] min-w-[80px] size-[140px] relative shrink-0">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgInsurance}
                  />
                </div>
                <p className="font-ubuntu font-normal leading-[2.125rem] text-[#0b1e46] text-[1.5rem] text-center whitespace-pre-wrap">
                  Insurance through universal earned income
                </p>
              </div>

              {/* Vote */}
              <div className="flex flex-col gap-[15px] items-center">
                <div className="max-h-[140px] max-w-[140px] min-h-[80px] min-w-[80px] size-[140px] relative shrink-0">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgVote}
                  />
                </div>
                <p className="font-ubuntu font-normal leading-[2.125rem] text-[#0b1e46] text-[1.5rem] text-center whitespace-pre-wrap">
                  Vote on specific issues
                </p>
              </div>

              {/* Verify identity */}
              <div className="flex flex-col gap-[15px] items-center">
                <div className="max-h-[140px] max-w-[140px] min-h-[80px] min-w-[80px] size-[140px] relative shrink-0">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgVerifyIdentity}
                  />
                </div>
                <p className="font-ubuntu font-normal leading-[2.125rem] text-[#0b1e46] text-[1.5rem] text-center whitespace-pre-wrap">
                  Verify identity
                </p>
              </div>

              {/* All in one digital dashboard */}
              <div className="flex flex-col gap-[15px] items-center">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] max-h-[140px] max-w-[140px] min-h-[80px] min-w-[80px] relative shrink-0">
                  <div className="col-[1] ml-0 mt-0 relative row-[1] size-[140px]">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={imgDigitalDashboard}
                    />
                  </div>
                </div>
                <p className="font-ubuntu font-normal leading-[2.125rem] text-[#0b1e46] text-[1.5rem] text-center whitespace-pre-wrap">
                  All in one digital dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection
