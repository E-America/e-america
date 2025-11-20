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

const SUPABASE_URL = "https://xopgoepsswzvzyqrmaaf.supabase.co"
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvcGdvZXBzc3d6dnp5cXJtYWFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNTgxMzYsImV4cCI6MjA3ODYzNDEzNn0.jaxVARbwHjNJ_aWOCCyqoHJaV4t7DW5F4QmVheRw_ao"

// Image assets from Figma
const imgGeminiGeneratedImageCe8Gg5Ce8Gg5Ce8G1 =
  "https://www.figma.com/api/mcp/asset/387762cc-699f-4074-a95a-91cb96eb527c"
const imgGeminiGeneratedImageCe8Gg5Ce8Gg5Ce8G2 =
  "https://www.figma.com/api/mcp/asset/5e11165e-3368-4fdc-9fd0-ef7f9327043c"
const imgGeminiGeneratedImageBcf4Ovbcf4Ovbcf41 =
  "https://www.figma.com/api/mcp/asset/387c1df0-7056-4335-b6d5-55039573edd0"

const Passport = () => {
  const [searchParams] = useSearchParams()
  const userId = searchParams.get("id")
  const [data, setData] = useState<ApplicationAnswer[] | null>(null)
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
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchPassportData()
  }, [userId])

  const getFieldValue = (fieldId: string) => {
    return data?.find((item) => item.field_id === fieldId)?.answer || ""
  }

  const firstName = getFieldValue("axqAsliRLmn9")
  const lastName = getFieldValue("D8x1hSxsGR3k")

  // Generate passport number from userId (format: XA + last 8 chars of userId)
  const passportNumber = userId ? `XA${userId.slice(-8).padStart(8, "0")}` : ""

  // Get registration date (use current date or from data if available)
  const registrationDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

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
      className="relative size-full h-screen overflow-hidden bg-[#0b1e46]"
      data-name="Passport page UI"
    >
      {/* Background Images */}
      <div
        className="absolute h-[1117px] left-1/2 rounded-[99px] top-0 translate-x-[-50%] w-full max-w-[1728px] scale-100 lg:scale-100"
        data-name="Gemini_Generated_Image_ce8gg5ce8gg5ce8g 1"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none rounded-[99px]"
        >
          <div className="absolute inset-0 overflow-hidden rounded-[99px]">
            <img
              alt=""
              className="absolute h-[100.56%] left-0 max-w-none top-0 w-[107.19%] object-cover"
              src={imgGeminiGeneratedImageCe8Gg5Ce8Gg5Ce8G1}
            />
          </div>
          <div className="absolute inset-0 opacity-[0.93] overflow-hidden rounded-[99px]">
            <img
              alt=""
              className="absolute h-[139.25%] left-[-24.27%] max-w-none top-[-4.41%] w-[193.74%] object-cover"
              src={imgGeminiGeneratedImageCe8Gg5Ce8Gg5Ce8G2}
            />
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="absolute h-[94.38px] left-[6%] lg:left-[108.11px] top-[84.7px] w-auto max-w-[347.071px]">
        <img
          alt="e-AMERICA logo"
          className="block max-w-none h-full w-auto object-contain"
          src={logo}
        />
      </div>

      {/* Citizen of e-America Title */}
      <h1 className="absolute block font-ubuntu-mono font-bold leading-[normal] left-1/2 text-[48px] lg:text-[86px] text-center text-white top-[291.54px] translate-x-[-50%] w-[90%] max-w-[1442.888px]">
        <span className="whitespace-pre-wrap">Citizen of e-America</span>
      </h1>

      {/* Passport Information Fields */}
      <div className="absolute content-stretch flex flex-col gap-[25px] items-start left-[6%] lg:left-[104.36px] top-[566.37px] w-[88%] max-w-[828.354px]">
        <div className="content-stretch flex flex-col lg:flex-row gap-[20px] lg:gap-[59px] items-start lg:items-center leading-[0] not-italic relative shrink-0 text-[24px] lg:text-[40px] w-full">
          <div className="flex flex-col font-ubuntu-mono justify-center relative shrink-0 text-[#b5c1db] w-full lg:w-[341.328px]">
            <p className="leading-[36px] lg:leading-[60px] whitespace-pre-wrap">
              First Name
            </p>
          </div>
          <div className="flex flex-col font-ubuntu font-bold justify-center relative shrink-0 text-white w-full lg:w-[428.025px]">
            <p className="leading-[36px] lg:leading-[60px] whitespace-pre-wrap">
              {firstName || "—"}
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col lg:flex-row gap-[20px] lg:gap-[59px] items-start lg:items-center leading-[0] not-italic relative shrink-0 text-[24px] lg:text-[40px] w-full">
          <div className="flex flex-col font-ubuntu-mono justify-center relative shrink-0 text-[#b5c1db] w-full lg:w-[341.328px]">
            <p className="leading-[36px] lg:leading-[60px] whitespace-pre-wrap">
              Last Name
            </p>
          </div>
          <div className="flex flex-col font-ubuntu font-bold justify-center relative shrink-0 text-white w-full lg:w-[428.025px]">
            <p className="leading-[36px] lg:leading-[60px] whitespace-pre-wrap">
              {lastName || "—"}
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col lg:flex-row gap-[20px] lg:gap-[59px] items-start lg:items-center leading-[0] not-italic relative shrink-0 text-[24px] lg:text-[40px] w-full">
          <div className="flex flex-col font-ubuntu-mono justify-center relative shrink-0 text-[#b5c1db] w-full lg:w-[341.328px]">
            <p className="leading-[36px] lg:leading-[60px] whitespace-pre-wrap">
              Passport Number
            </p>
          </div>
          <div className="flex flex-col font-ubuntu font-bold justify-center relative shrink-0 text-white w-full lg:w-[428.025px]">
            <p className="leading-[36px] lg:leading-[60px] whitespace-pre-wrap">
              {passportNumber || "—"}
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col lg:flex-row gap-[20px] lg:gap-[59px] items-start lg:items-center leading-[0] not-italic relative shrink-0 text-[24px] lg:text-[40px] w-full">
          <div className="flex flex-col font-ubuntu-mono justify-center relative shrink-0 text-[#b5c1db] w-full lg:w-[341.328px]">
            <p className="leading-[36px] lg:leading-[60px] whitespace-pre-wrap">
              Registration Date
            </p>
          </div>
          <div className="flex flex-col font-ubuntu font-bold justify-center relative shrink-0 text-white w-full lg:w-[428.025px]">
            <p className="leading-[36px] lg:leading-[60px] whitespace-pre-wrap">
              {registrationDate}
            </p>
          </div>
        </div>
      </div>

      {/* QR Code Label */}
      <div className="absolute hidden lg:flex flex-col font-ubuntu-mono justify-center leading-[0] left-1/2 lg:left-[calc(50%+450px)] not-italic text-[20px] lg:text-[32px] text-center text-white top-[528.5px] translate-x-[-50%] translate-y-[-50%] w-[90%] max-w-[373.434px]">
        <p className="leading-[30px] lg:leading-[60px] whitespace-pre-wrap">
          Your e-Passport QR Code
        </p>
      </div>

      {/* QR Code Container */}
      <div className="absolute backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.4)] border-[3px] border-solid border-white left-1/2 lg:left-[1320.75px] rounded-[40px] w-[250px] h-[250px] lg:size-[300px] top-[581.37px] translate-x-[-50%] lg:translate-x-0">
        <div className="absolute left-[26.41px] rounded-[16px] w-[calc(100%-52.82px)] h-[calc(100%-52.82px)] top-[25.67px]">
          <img
            alt="QR Code"
            className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[16px] size-full"
            src={imgGeminiGeneratedImageBcf4Ovbcf4Ovbcf41}
          />
        </div>
      </div>

      {/* Footer Bar */}
      <div className="absolute bg-white h-[60.12px] left-0 top-[956.33px] lg:top-[956.33px] bottom-0 lg:bottom-auto w-full" />
      <div className="absolute left-0 top-[956.33px] lg:top-[956.33px] w-full">
        <Divider />
      </div>
    </div>
  )
}

export default Passport
