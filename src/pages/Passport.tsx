import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Loader2 } from "lucide-react"
import logo from "@/assets/logo.png"
import Divider from "@/components/Divider"

interface ApplicationAnswer {
  answer: string
  field_id: string
  question: string
}

interface ApplicationData {
  id: number
  first_name: string
  last_name: string
  created_at: string
  passport_number: string
  application_responses: ApplicationAnswer[]
}

const SUPABASE_URL = "https://xopgoepsswzvzyqrmaaf.supabase.co"
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvcGdvZXBzc3d6dnp5cXJtYWFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNTgxMzYsImV4cCI6MjA3ODYzNDEzNn0.jaxVARbwHjNJ_aWOCCyqoHJaV4t7DW5F4QmVheRw_ao"

// Image assets from Figma (saved locally)
const imgGeminiGeneratedImageCe8Gg5Ce8Gg5Ce8G2 = "/passport-bg-2.png"

const Passport = () => {
  const [searchParams] = useSearchParams()
  const userId = searchParams.get("id")
  const [applicationData, setApplicationData] =
    useState<ApplicationData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPassportData = async () => {
      if (!userId) {
        setError("No passport ID provided")
        setLoading(false)
        return
      }

      try {
        // Call RPC function to get all application data
        const response = await fetch(
          `${SUPABASE_URL}/rest/v1/rpc/get_application_data`,
          {
            method: "POST",
            headers: {
              apikey: SUPABASE_ANON_KEY,
              Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
              "Content-Type": "application/json",
              Prefer: "return=representation",
            },
            body: JSON.stringify({ p_user_id: userId }),
          }
        )

        if (!response.ok) {
          throw new Error("Failed to fetch passport data")
        }

        const result = await response.json()
        // Handle both array and single object responses from Supabase RPC
        let applicationData: ApplicationData | null = null
        if (Array.isArray(result) && result.length > 0) {
          applicationData = result[0] as ApplicationData
        } else if (result && typeof result === "object" && "id" in result) {
          // Single object response
          applicationData = result as ApplicationData
        } else {
          throw new Error("Invalid response format from server")
        }
        setApplicationData(applicationData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchPassportData()
  }, [userId])

  // Extract data from the RPC response
  const firstName = applicationData?.first_name || ""
  const lastName = applicationData?.last_name || ""
  const passportNumber = applicationData?.passport_number || ""

  // Get registration date from application created_at
  const registrationDate = applicationData?.created_at
    ? new Date(applicationData.created_at).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })

  // Generate QR code URL using the application id
  const qrCodeUrl = applicationData?.id
    ? `https://xopgoepsswzvzyqrmaaf.supabase.co/storage/v1/object/qr-codes/${applicationData.id}.png`
    : null

  if (loading) {
    return (
      <div className="relative size-full min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-white" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="relative size-full min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-ubuntu-mono font-bold mb-4">
            Passport Not Found
          </h1>
          <p className="text-[#b5c1db]">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative size-full min-h-screen bg-[#0b1e46]"
      data-name="Passport page UI"
    >
      {/* Background Images - Absolutely Positioned */}
      <div
        className="absolute inset-0 p-4 sm:p-6 lg:p-8"
        data-name="Gemini_Generated_Image_ce8gg5ce8gg5ce8g 1"
      >
        <div
          aria-hidden="true"
          className="relative w-full h-full pointer-events-none rounded-[24px] md:rounded-[48px] overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.93] overflow-hidden rounded-[24px] md:rounded-[48px]">
            <img
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              src={imgGeminiGeneratedImageCe8Gg5Ce8Gg5Ce8G2}
            />
          </div>
        </div>
      </div>

      {/* Main Content Container - Flexbox Layout */}
      <div className="relative min-h-screen w-full flex flex-col p-4 sm:p-6 lg:p-8 pb-[60px]">
        {/* Logo - Top Left on Desktop, Centered on Mobile */}
        <div className="h-[3rem] w-auto max-w-[21.7rem] lg:max-w-none mt-4 md:mt-12 lg:mt-12 mb-6 md:mb-8 lg:mb-12 mx-auto md:mx-0 md:ml-10">
          <img
            alt="e-AMERICA logo"
            className="block max-w-none h-full w-auto object-contain"
            src={logo}
          />
        </div>

        {/* Citizen of e-America Title - Centered, Split on Mobile */}
        <div className="flex md:flex-1 md:items-center justify-center mb-4 md:mb-0 px-6 sm:px-10 md:px-10">
          <h1 className="block font-ubuntu-mono font-bold leading-[normal] text-[3rem] lg:text-[5.375rem] text-center text-white w-full max-w-[1442.888px]">
            <span className="block md:inline">Citizen of</span>
            <span className="hidden md:inline"> </span>
            <span className="block md:inline">e-America</span>
          </h1>
        </div>

        {/* Mobile Layout: QR Code Section */}
        <div className="flex md:hidden flex-col items-center w-full mb-4 px-6 sm:px-10">
          {/* QR Code Label */}
          <div className="flex flex-col font-ubuntu-mono justify-center leading-[0] not-italic text-[1.25rem] text-center text-white mb-2">
            <p className="leading-[1.875rem] whitespace-pre-wrap">
              Your e-Passport QR Code
            </p>
          </div>

          {/* QR Code Container */}
          <div className="relative backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.4)] border-[3px] border-solid border-white rounded-[24px] md:rounded-[48px] w-[250px] h-[250px]">
            <div className="absolute left-[26.41px] rounded-[12px] md:rounded-[24px] w-[calc(100%-52.82px)] h-[calc(100%-52.82px)] top-[25.67px] bg-white p-4">
              {qrCodeUrl ? (
                <img
                  alt="QR Code"
                  className="w-full h-full max-w-none object-contain pointer-events-none rounded-[6px] md:rounded-[12px]"
                  src={qrCodeUrl}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center rounded-[12px] md:rounded-[24px] bg-white/20">
                  <Loader2 className="h-8 w-8 animate-spin text-white" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section - Info and QR Code */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-0 w-full mb-6 md:mb-12 px-6 sm:px-10 md:px-10">
          {/* Left Side - Passport Information Fields */}
          <div className="flex flex-col gap-3 md:gap-[25px] items-start w-full lg:w-auto lg:max-w-[828.354px]">
            <div className="flex flex-col lg:flex-row gap-0 md:gap-[20px] lg:gap-[59px] items-start lg:items-center leading-[0] not-italic text-[1.5rem] lg:text-[2.5rem] w-full">
              <div className="flex flex-col font-ubuntu-mono justify-center text-[#b5c1db] w-full lg:w-[341.328px]">
                <p className="leading-[2.25rem] lg:leading-[3.75rem] whitespace-pre-wrap">
                  First Name
                </p>
              </div>
              <div className="flex flex-col font-ubuntu font-bold justify-center text-white w-full lg:w-[428.025px]">
                <p className="leading-[2.25rem] lg:leading-[3.75rem] whitespace-pre-wrap">
                  {firstName || "—"}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-0 md:gap-[20px] lg:gap-[59px] items-start lg:items-center leading-[0] not-italic text-[1.5rem] lg:text-[2.5rem] w-full">
              <div className="flex flex-col font-ubuntu-mono justify-center text-[#b5c1db] w-full lg:w-[341.328px]">
                <p className="leading-[2.25rem] lg:leading-[3.75rem] whitespace-pre-wrap">
                  Last Name
                </p>
              </div>
              <div className="flex flex-col font-ubuntu font-bold justify-center text-white w-full lg:w-[428.025px]">
                <p className="leading-[2.25rem] lg:leading-[3.75rem] whitespace-pre-wrap">
                  {lastName || "—"}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-0 md:gap-[20px] lg:gap-[59px] items-start lg:items-center leading-[0] not-italic text-[1.5rem] lg:text-[2.5rem] w-full">
              <div className="flex flex-col font-ubuntu-mono justify-center text-[#b5c1db] w-full lg:w-[341.328px]">
                <p className="leading-[2.25rem] lg:leading-[3.75rem] whitespace-pre-wrap">
                  Passport Number
                </p>
              </div>
              <div className="flex flex-col font-ubuntu font-bold justify-center text-white w-full lg:w-[428.025px]">
                <p className="leading-[2.25rem] lg:leading-[3.75rem] whitespace-pre-wrap">
                  {passportNumber || "—"}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-0 md:gap-[20px] lg:gap-[59px] items-start lg:items-center leading-[0] not-italic text-[1.5rem] lg:text-[2.5rem] w-full">
              <div className="flex flex-col font-ubuntu-mono justify-center text-[#b5c1db] w-full lg:w-[341.328px]">
                <p className="leading-[2.25rem] lg:leading-[3.75rem] whitespace-pre-wrap">
                  Registration Date
                </p>
              </div>
              <div className="flex flex-col font-ubuntu font-bold justify-center text-white w-full lg:w-[428.025px]">
                <p className="leading-[2.25rem] lg:leading-[3.75rem] whitespace-pre-wrap">
                  {registrationDate}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - QR Code Section - Desktop */}
          <div className="hidden md:flex flex-col items-end w-full md:w-auto md:flex-shrink-0">
            {/* QR Code Label */}
            <div className="flex flex-col font-ubuntu-mono justify-center leading-[0] not-italic text-[2rem] text-right text-white mb-4">
              <p className="leading-[3.75rem] whitespace-normal">
                Your e-Passport QR Code
              </p>
            </div>

            {/* QR Code Container */}
            <div className="relative backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.4)] border-[3px] border-solid border-white rounded-[48px] size-[300px]">
              <div className="absolute left-[26.41px] rounded-[24px] w-[calc(100%-52.82px)] h-[calc(100%-52.82px)] top-[25.67px] bg-white p-5">
                {qrCodeUrl ? (
                  <img
                    alt="QR Code"
                    className="w-full h-full max-w-none object-contain pointer-events-none rounded-[12px]"
                    src={qrCodeUrl}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center rounded-[24px] bg-white/20">
                    <Loader2 className="h-8 w-8 animate-spin text-white" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)]">
          <Divider />
        </div>
      </div>
      {/* Footer Bar */}
      {/* <div className="absolute bg-white h-[60.12px] left-0 top-[calc(956.33px+16px)] lg:top-[calc(956.33px+16px)] bottom-0 lg:bottom-auto w-full" /> */}
    </div>
  )
}

export default Passport
