import Hero from '../components/Hero'
import WorkshopToWorld from '../components/WorkshopToWorld'
import ExportIntelligence from '../components/ExportIntelligence'
import ReliableSection from '../components/ReliableSection'
import Collections from '../components/Collections'
import Craftsmanship from '../components/Craftsmanship'
import B2BSection from '../components/B2BSection'
import TrustBar from '../components/TrustBar'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-0 border-t border-cream-200">
        <WorkshopToWorld />
        <ExportIntelligence />
        <ReliableSection />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-0 border-t border-cream-200">
        <div className="xl:col-span-3 border-r border-cream-200">
          <Collections />
        </div>
        <div className="xl:col-span-2 flex flex-col">
          <Craftsmanship />
          <B2BSection />
        </div>
      </div>
      <TrustBar />
      <Footer />
    </>
  )
}
