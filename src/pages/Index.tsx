import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import DigitalExperimentSection from "@/components/AboutSection"
import QuoteSection from "@/components/QuoteSection"
import MissionSection from "@/components/MissionSection"
import BackgroundSection from "@/components/BackgroundSection"
import EPassportSection from "@/components/EPassportSection"
import ETreasurySection from "@/components/ETreasurySection"
import Divider from "@/components/Divider"
import EServicesSection from "@/components/EServicesSection"
import ConstitutionSection from "@/components/ConstitutionSection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <HeroSection />
      <DigitalExperimentSection />
      <QuoteSection />
      <MissionSection />
      <EPassportSection />
      <ETreasurySection />
      <Divider />
      <EServicesSection />
      <ConstitutionSection />
      <Footer />
    </div>
  )
}

export default Index
