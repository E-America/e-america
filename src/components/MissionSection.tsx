const MissionSection = () => {
  // Icons from Figma design
  const img =
    "https://www.figma.com/api/mcp/asset/d60124c0-ec5c-45f2-b197-9c3a209aca69" // Incorporate companies
  const img1 =
    "https://www.figma.com/api/mcp/asset/272ab1ad-1be9-4655-a391-9f70dd33a5cc" // Receive e-Residency certificate
  const imgEllipse1 =
    "https://www.figma.com/api/mcp/asset/f3ff2de1-bd5b-4f13-8b13-89a4965c337d" // Base for complex icons
  const img03MobilePayment =
    "https://www.figma.com/api/mcp/asset/910c9f11-c9b2-421a-9673-10215f0b7887" // Manage taxes
  const imgGroup5 =
    "https://www.figma.com/api/mcp/asset/693dbad7-b376-404f-a0b0-745d0d7a665f" // Alternative consumer credit scoring
  const imgGroup6 =
    "https://www.figma.com/api/mcp/asset/d26ccac9-b217-4677-9bf3-59f8307b3dc4" // Insurance
  const imgGroup7 =
    "https://www.figma.com/api/mcp/asset/89914aa7-6204-4d23-b3e6-4593ba271559" // Vote
  const imgGroup8 =
    "https://www.figma.com/api/mcp/asset/bd9bfd9f-38b4-4f83-b64d-5ba6b587101a" // Verify identity

  // Complex dashboard icon components
  const imgGroup =
    "https://www.figma.com/api/mcp/asset/589f0ce1-eaf1-4113-946a-cd183a62fe6c"
  const imgGroup1 =
    "https://www.figma.com/api/mcp/asset/7c23c5b4-3075-46ad-a5e3-db33a016e9b3"
  const imgGroup2 =
    "https://www.figma.com/api/mcp/asset/3b829510-eef7-4704-a717-8d399717c92c"
  const imgGroup3 =
    "https://www.figma.com/api/mcp/asset/5692a93c-858e-4965-84a8-101f004e3041"
  const imgGroup4 =
    "https://www.figma.com/api/mcp/asset/85496cb6-8f4b-46a5-bf52-035f4ec8cdff"
  const imgGroup9 =
    "https://www.figma.com/api/mcp/asset/d645065a-76e2-49f8-9db2-9b676aebb3d6"
  const imgGroup10 =
    "https://www.figma.com/api/mcp/asset/fc2f80f2-44ad-4a7f-b342-7057a759a619"
  const imgGroup11 =
    "https://www.figma.com/api/mcp/asset/46fa56bd-d4d9-4b64-9204-28bd1d85d8f7"
  const imgGroup12 =
    "https://www.figma.com/api/mcp/asset/77a8e76f-9ec0-4adc-884c-dff20dce2801"
  const imgGroup13 =
    "https://www.figma.com/api/mcp/asset/518b03fb-5ece-40d5-a205-ffaa1d5ced1c"
  const imgGroup14 =
    "https://www.figma.com/api/mcp/asset/a799bcfe-a328-4ad4-b06e-43e608687737"
  const imgGroup15 =
    "https://www.figma.com/api/mcp/asset/234db0ae-93ae-477d-bde2-c0566ddff8eb"
  const imgGroup16 =
    "https://www.figma.com/api/mcp/asset/73335236-2745-4222-9ea3-5a8b49e4413e"
  const imgGroup17 =
    "https://www.figma.com/api/mcp/asset/93809fc4-542f-4eec-85bc-2389cea64398"
  const imgGroup18 =
    "https://www.figma.com/api/mcp/asset/053d18e0-e8d6-4fce-b244-648b63cc9953"
  const imgGroup19 =
    "https://www.figma.com/api/mcp/asset/2656e08f-8538-40db-b225-9049594ea04d"
  const imgGroup20 =
    "https://www.figma.com/api/mcp/asset/c110123d-c13f-4fde-a16b-9b014a3866ee"
  const imgGroup21 =
    "https://www.figma.com/api/mcp/asset/8a06892a-c890-47be-8dbc-f9c12cd5030d"
  const imgGroup22 =
    "https://www.figma.com/api/mcp/asset/17e4078b-952c-457c-8901-eca10b48ae28"
  const imgGroup23 =
    "https://www.figma.com/api/mcp/asset/36675f36-6958-4601-824a-60d89f751427"
  const imgGroup24 =
    "https://www.figma.com/api/mcp/asset/492663e1-1dab-436c-95de-a7fcfa5765b2"
  const imgGroup25 =
    "https://www.figma.com/api/mcp/asset/77bebb41-7e7b-458b-a751-92f3289c8c5f"

  return (
    <section id="our-mission" className="relative bg-[#ccd2de] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-[1568px] mx-auto">
          {/* Header section */}
          <div className="flex flex-col gap-9 items-center mb-16">
            <p className="font-ubuntu-mono font-bold leading-[normal] text-[#0b1e46] text-[3.75rem] text-center whitespace-pre-wrap">
              Our Mission.
            </p>
            <p className="font-ubuntu font-normal leading-[34px] text-[#0b1e46] text-[1.5rem] text-center w-[957px] whitespace-pre-wrap">
              To reimagine government as a service provider, accessible to
              anyone, anywhere.
              <br />
              We are building tools that allow people to:
            </p>
          </div>

          {/* Grid section */}
          <div className="flex flex-col gap-20 items-start w-full">
            {/* First row - 4 columns */}
            <div className="grid grid-cols-4 gap-20 w-full">
              {/* Incorporate companies */}
              <div className="flex flex-col gap-[15px] items-center">
                <div className="max-h-[140px] max-w-[140px] min-h-[80px] min-w-[80px] size-[140px] relative shrink-0">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgGroup25}
                  />
                </div>
                <p className="font-ubuntu font-normal leading-[34px] text-[#0b1e46] text-[1.5rem] text-center whitespace-pre-wrap">
                  Incorporate companies
                </p>
              </div>

              {/* Receive e-Residency certificate */}
              <div className="flex flex-col gap-[15px] items-center">
                <div className="max-h-[140px] max-w-[140px] min-h-[80px] min-w-[80px] size-[140px] relative shrink-0">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={img1}
                  />
                </div>
                <p className="font-ubuntu font-normal leading-[34px] text-[#0b1e46] text-[1.5rem] text-center whitespace-pre-wrap">
                  Receive e-Residency certificate
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
                    <div className="col-[1] h-[58px] ml-0 mt-0 relative row-[1] w-[58px]">
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img03MobilePayment}
                      />
                    </div>
                  </div>
                </div>
                <p className="font-ubuntu font-normal leading-[34px] text-[#0b1e46] text-[1.5rem] text-center whitespace-pre-wrap">
                  Manage taxes & payments
                </p>
              </div>

              {/* Alternative consumer credit scoring */}
              <div className="flex flex-col gap-[15px] items-center">
                <div className="max-h-[140px] max-w-[140px] min-h-[80px] min-w-[80px] size-[140px] relative shrink-0">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgGroup5}
                  />
                </div>
                <p className="font-ubuntu font-normal leading-[34px] text-[#0b1e46] text-[1.5rem] text-center whitespace-pre-wrap">
                  Alternative consumer
                  <br />
                  credit scoring
                </p>
              </div>
            </div>

            {/* Second row - 4 columns */}
            <div className="grid grid-cols-4 gap-20 w-full">
              {/* Insurance */}
              <div className="flex flex-col gap-[15px] items-center">
                <div className="max-h-[140px] max-w-[140px] min-h-[80px] min-w-[80px] size-[140px] relative shrink-0">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgGroup6}
                  />
                </div>
                <p className="font-ubuntu font-normal leading-[34px] text-[#0b1e46] text-[1.5rem] text-center whitespace-pre-wrap">
                  Insurance through universal earned income
                </p>
              </div>

              {/* Vote */}
              <div className="flex flex-col gap-[15px] items-center">
                <div className="max-h-[140px] max-w-[140px] min-h-[80px] min-w-[80px] size-[140px] relative shrink-0">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgGroup7}
                  />
                </div>
                <p className="font-ubuntu font-normal leading-[34px] text-[#0b1e46] text-[1.5rem] text-center whitespace-pre-wrap">
                  Vote on specific issues
                </p>
              </div>

              {/* Verify identity */}
              <div className="flex flex-col gap-[15px] items-center">
                <div className="max-h-[140px] max-w-[140px] min-h-[80px] min-w-[80px] size-[140px] relative shrink-0">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgGroup8}
                  />
                </div>
                <p className="font-ubuntu font-normal leading-[34px] text-[#0b1e46] text-[1.5rem] text-center whitespace-pre-wrap">
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
                      src={imgEllipse1}
                    />
                  </div>
                  <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[29.15%] mt-[25.71%] relative row-[1]">
                    <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-0 mt-0 relative row-[1]">
                      <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[8.72%] mt-[0.01%] relative row-[1]">
                        <div className="col-[1] h-[48.624px] ml-0 mt-0 relative row-[1] w-[35.005px]">
                          <img
                            alt=""
                            className="block max-w-none size-full"
                            src={imgGroup}
                          />
                        </div>
                      </div>
                      <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[8.71%] mt-0 relative row-[1]">
                        <div className="col-[1] h-[48.636px] ml-0 mt-0 relative row-[1] w-[10.172px]">
                          <img
                            alt=""
                            className="block max-w-none size-full"
                            src={imgGroup1}
                          />
                        </div>
                      </div>
                      <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[15.17%] mt-[5.58%] relative row-[1]">
                        <div className="col-[1] h-[38.454px] ml-0 mt-0 relative row-[1] w-[27.436px]">
                          <img
                            alt=""
                            className="block max-w-none size-full"
                            src={imgGroup2}
                          />
                        </div>
                      </div>
                      <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-0 mt-[41.32%] relative row-[1]">
                        <div className="col-[1] h-[33.408px] ml-0 mt-0 relative row-[1] w-[27.531px]">
                          <img
                            alt=""
                            className="block max-w-none size-full"
                            src={imgGroup3}
                          />
                        </div>
                      </div>
                      <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[21.9%] mt-[70.88%] relative row-[1]">
                        <div className="col-[1] h-[1.871px] ml-0 mt-0 relative row-[1] w-[14.696px]">
                          <img
                            alt=""
                            className="block max-w-none size-full"
                            src={imgGroup4}
                          />
                        </div>
                      </div>
                      <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[0.01%] mt-[41.31%] relative row-[1]">
                        <div className="col-[1] h-[33.416px] ml-0 mt-0 relative row-[1] w-[8.507px]">
                          <img
                            alt=""
                            className="block max-w-none size-full"
                            src={imgGroup9}
                          />
                        </div>
                      </div>
                      <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[2.62%] mt-[88.3%] relative row-[1]">
                        <div className="col-[1] h-[7.935px] ml-0 mt-0 relative row-[1] w-[22.659px]">
                          <img
                            alt=""
                            className="block max-w-none size-full"
                            src={imgGroup10}
                          />
                        </div>
                      </div>
                      <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[27.42%] mt-[88.3%] relative row-[1]">
                        <div className="col-[1] h-[7.942px] ml-0 mt-0 relative row-[1] w-[8.129px]">
                          <img
                            alt=""
                            className="block max-w-none size-full"
                            src={imgGroup11}
                          />
                        </div>
                      </div>
                      <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[30.67%] mt-[65.23%] relative row-[1]">
                        <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] ml-0 mt-[-0.01%] relative row-[1]">
                          <div className="col-[1] h-[2.208px] ml-0 mt-[-0.01%] relative row-[1] w-[9.272px]">
                            <div className="absolute bottom-0 left-0 right-0 top-[-0.01%]">
                              <img
                                alt=""
                                className="block max-w-none size-full"
                                src={imgGroup12}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[20.77%] mt-[8.76%] relative row-[1]">
                        <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] ml-0 mt-0 relative row-[1]">
                          <div className="col-[1] h-[13.4px] ml-0 mt-0 relative row-[1] w-[20.872px]">
                            <img
                              alt=""
                              className="block max-w-none size-full"
                              src={imgGroup13}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[20.77%] mt-[34.86%] relative row-[1]">
                        <div className="col-[1] h-[5.186px] ml-0 mt-0 relative row-[1] w-[20.872px]">
                          <img
                            alt=""
                            className="block max-w-none size-full"
                            src={imgGroup14}
                          />
                        </div>
                      </div>
                      <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[20.77%] mt-[34.86%] relative row-[1]">
                        <div className="col-[1] h-[5.186px] ml-0 mt-0 relative row-[1] w-[6.729px]">
                          <img
                            alt=""
                            className="block max-w-none size-full"
                            src={imgGroup15}
                          />
                        </div>
                      </div>
                      <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[28.47%] mt-[49.51%] relative row-[1]">
                        <div className="col-[1] h-[5.304px] ml-0 mt-0 relative row-[1] w-[11.951px]">
                          <img
                            alt=""
                            className="block max-w-none size-full"
                            src={imgGroup16}
                          />
                        </div>
                      </div>
                      <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[44.35%] mt-[49.92%] relative row-[1]">
                        <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] ml-0 mt-0 relative row-[1]">
                          <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-0 mt-0 relative row-[1]">
                            <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[0.01%] mt-0 relative row-[1]">
                              <div className="col-[1] h-[26.328px] ml-0 mt-0 relative row-[1] w-[28.331px]">
                                <img
                                  alt=""
                                  className="block max-w-none size-full"
                                  src={imgGroup17}
                                />
                              </div>
                            </div>
                            <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-0 mt-[3.52%] relative row-[1]">
                              <div className="col-[1] h-[25.189px] ml-0 mt-0 relative row-[1] w-[17.452px]">
                                <img
                                  alt=""
                                  className="block max-w-none size-full"
                                  src={imgGroup18}
                                />
                              </div>
                            </div>
                            <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[36.88%] mt-[6.47%] relative row-[1]">
                              <div className="col-[1] h-[6.717px] ml-[0.01%] mt-0 relative row-[1] w-[2.938px]">
                                <div className="absolute bottom-0 left-0 right-[-0.01%] top-0">
                                  <img
                                    alt=""
                                    className="block max-w-none size-full"
                                    src={imgGroup19}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[25.41%] mt-[16.39%] relative row-[1]">
                              <div className="col-[1] h-[7.075px] ml-[-0.01%] mt-0 relative row-[1] w-[3.156px]">
                                <div className="absolute bottom-0 left-[-0.01%] right-0 top-0">
                                  <img
                                    alt=""
                                    className="block max-w-none size-full"
                                    src={imgGroup20}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[13.69%] mt-[35.98%] relative row-[1]">
                              <div className="col-[1] h-[5.966px] ml-[-0.01%] mt-0 relative row-[1] w-[3.314px]">
                                <div className="absolute bottom-0 left-[-0.01%] right-0 top-0">
                                  <img
                                    alt=""
                                    className="block max-w-none size-full"
                                    src={imgGroup21}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[51.04%] mt-[0.73%] relative row-[1]">
                              <div className="col-[1] h-[6.867px] ml-[-0.01%] mt-0 relative row-[1] w-[2.672px]">
                                <div className="absolute bottom-0 left-[-0.01%] right-0 top-0">
                                  <img
                                    alt=""
                                    className="block max-w-none size-full"
                                    src={imgGroup22}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[48.87%] mt-[57.34%] relative row-[1]">
                              <div className="col-[1] h-[13.735px] ml-0 mt-0 relative row-[1] w-[16.679px]">
                                <img
                                  alt=""
                                  className="block max-w-none size-full"
                                  src={imgGroup23}
                                />
                              </div>
                            </div>
                            <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[48.88%] mt-[57.95%] relative row-[1]">
                              <div className="col-[1] h-[13.538px] ml-0 mt-0 relative row-[1] w-[12.35px]">
                                <img
                                  alt=""
                                  className="block max-w-none size-full"
                                  src={imgGroup24}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-ubuntu font-normal leading-[34px] text-[#0b1e46] text-[1.5rem] text-center whitespace-pre-wrap">
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
