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
      className="relative bg-[#ccd2de] pt-16 md:pt-24 lg:pt-[120px] pb-12 md:pb-16 lg:pb-[7.5rem]"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[1568px] mx-auto">
          {/* Header section */}
          <div className="flex flex-col gap-4 md:gap-8 items-center mb-8 md:mb-16 px-4">
            <p className="font-ubuntu-mono font-bold leading-[normal] text-[#0b1e46] text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-center whitespace-pre-wrap">
              Our Mission.
            </p>
            <p className="font-ubuntu font-normal leading-[1.75rem] md:leading-[2.125rem] text-[#0b1e46] text-[1.125rem] md:text-[1.375rem] text-center max-w-[957px] px-4 whitespace-pre-wrap">
              To reimagine government as a service provider, accessible to
              anyone, anywhere.
              <br />
              We will be building tools that will allow people to:
            </p>
          </div>

          {/* Grid section */}
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 items-start w-full">
            {/* First row - responsive columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
              {/* Incorporate companies */}
              <div className="bg-white md:bg-transparent rounded-lg p-6 md:p-8 flex flex-col gap-4 md:gap-5 items-center w-full max-w-[320px] mx-auto md:mx-0 shadow-sm md:shadow-none">
                <div className="max-h-[100px] max-w-[100px] md:max-h-[120px] md:max-w-[120px] min-h-[80px] min-w-[80px] size-[100px] md:size-[120px] relative shrink-0">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgIncorporateCompanies}
                  />
                </div>
                <p className="font-ubuntu font-normal leading-[1.5rem] md:leading-[1.75rem] text-[#0b1e46] text-[1rem] md:text-[1.125rem] text-center max-w-[240px]">
                  Incorporate companies
                </p>
              </div>

              {/* Receive e-Residency certificate */}
              <div className="bg-white md:bg-transparent rounded-lg p-6 md:p-8 flex flex-col gap-4 md:gap-5 items-center w-full max-w-[320px] mx-auto md:mx-0 shadow-sm md:shadow-none">
                <div className="max-h-[100px] max-w-[100px] md:max-h-[120px] md:max-w-[120px] min-h-[80px] min-w-[80px] size-[100px] md:size-[120px] relative shrink-0">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgEResidencyCertificate}
                  />
                </div>
                <p className="font-ubuntu font-normal leading-[1.5rem] md:leading-[1.75rem] text-[#0b1e46] text-[1rem] md:text-[1.125rem] text-center max-w-[240px]">
                  Receive e-Residency certificate
                </p>
              </div>

              {/* Manage taxes & payments */}
              <div className="bg-white md:bg-transparent rounded-lg p-6 md:p-8 flex flex-col gap-4 md:gap-5 items-center w-full max-w-[320px] mx-auto md:mx-0 shadow-sm md:shadow-none">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] max-h-[100px] max-w-[100px] md:max-h-[120px] md:max-w-[120px] min-h-[80px] min-w-[80px] relative shrink-0 size-[100px] md:size-[120px]">
                  <div className="col-[1] ml-0 mt-0 relative row-[1] size-[100px] md:size-[120px]">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={imgEllipse1}
                    />
                  </div>
                  <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[28.93%] mt-[29.29%] relative row-[1]">
                    <div className="col-[1] h-[41px] md:h-[50px] ml-0 mt-0 relative row-[1] w-[41px] md:w-[50px]">
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img03MobilePayment}
                      />
                    </div>
                  </div>
                </div>
                <p className="font-ubuntu font-normal leading-[1.5rem] md:leading-[1.75rem] text-[#0b1e46] text-[1rem] md:text-[1.125rem] text-center max-w-[240px]">
                  Manage taxes & payments
                </p>
              </div>

              {/* Alternative consumer credit scoring */}
              <div className="bg-white md:bg-transparent rounded-lg p-6 md:p-8 flex flex-col gap-4 md:gap-5 items-center w-full max-w-[320px] mx-auto md:mx-0 shadow-sm md:shadow-none">
                <div className="max-h-[100px] max-w-[100px] md:max-h-[120px] md:max-w-[120px] min-h-[80px] min-w-[80px] size-[100px] md:size-[120px] relative shrink-0">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgAlternativeCreditScoring}
                  />
                </div>
                <p className="font-ubuntu font-normal leading-[1.5rem] md:leading-[1.75rem] text-[#0b1e46] text-[1rem] md:text-[1.125rem] text-center max-w-[240px]">
                  Alternative consumer credit scoring
                </p>
              </div>
            </div>

            {/* Second row - responsive columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
              {/* Insurance */}
              <div className="bg-white md:bg-transparent rounded-lg p-6 md:p-8 flex flex-col gap-4 md:gap-5 items-center w-full max-w-[320px] mx-auto md:mx-0 shadow-sm md:shadow-none">
                <div className="max-h-[100px] max-w-[100px] md:max-h-[120px] md:max-w-[120px] min-h-[80px] min-w-[80px] size-[100px] md:size-[120px] relative shrink-0">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgInsurance}
                  />
                </div>
                <p className="font-ubuntu font-normal leading-[1.5rem] md:leading-[1.75rem] text-[#0b1e46] text-[1rem] md:text-[1.125rem] text-center max-w-[240px]">
                  Insurance through universal earned income
                </p>
              </div>

              {/* Vote */}
              <div className="bg-white md:bg-transparent rounded-lg p-6 md:p-8 flex flex-col gap-4 md:gap-5 items-center w-full max-w-[320px] mx-auto md:mx-0 shadow-sm md:shadow-none">
                <div className="max-h-[100px] max-w-[100px] md:max-h-[120px] md:max-w-[120px] min-h-[80px] min-w-[80px] size-[100px] md:size-[120px] relative shrink-0">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgVote}
                  />
                </div>
                <p className="font-ubuntu font-normal leading-[1.5rem] md:leading-[1.75rem] text-[#0b1e46] text-[1rem] md:text-[1.125rem] text-center max-w-[240px]">
                  Vote on specific issues
                </p>
              </div>

              {/* Verify identity */}
              <div className="bg-white md:bg-transparent rounded-lg p-6 md:p-8 flex flex-col gap-4 md:gap-5 items-center w-full max-w-[320px] mx-auto md:mx-0 shadow-sm md:shadow-none">
                <div className="max-h-[100px] max-w-[100px] md:max-h-[120px] md:max-w-[120px] min-h-[80px] min-w-[80px] size-[100px] md:size-[120px] relative shrink-0">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgVerifyIdentity}
                  />
                </div>
                <p className="font-ubuntu font-normal leading-[1.5rem] md:leading-[1.75rem] text-[#0b1e46] text-[1rem] md:text-[1.125rem] text-center max-w-[240px]">
                  Verify identity
                </p>
              </div>

              {/* All in one digital dashboard */}
              <div className="bg-white md:bg-transparent rounded-lg p-6 md:p-8 flex flex-col gap-4 md:gap-5 items-center w-full max-w-[320px] mx-auto md:mx-0 shadow-sm md:shadow-none">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] max-h-[100px] max-w-[100px] md:max-h-[120px] md:max-w-[120px] min-h-[80px] min-w-[80px] relative shrink-0 size-[100px] md:size-[120px]">
                  <div className="col-[1] ml-0 mt-0 relative row-[1] size-[100px] md:size-[120px]">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={imgDigitalDashboard}
                    />
                  </div>
                </div>
                <p className="font-ubuntu font-normal leading-[1.5rem] md:leading-[1.75rem] text-[#0b1e46] text-[1rem] md:text-[1.125rem] text-center max-w-[240px]">
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
