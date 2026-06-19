import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CollectionsPage from './pages/CollectionsPage'
import MaterialsPage from './pages/MaterialsPage'
import CustomizationPage from './pages/CustomizationPage'
import OurStoryPage from './pages/OurStoryPage'
import WhySagaPage from './pages/WhySagaPage'
import ResourcesPage from './pages/ResourcesPage'
import ProductPage from './pages/ProductPage'
import SustainabilityPage from './pages/SustainabilityPage'
import FurnitureCarePage from './pages/FurnitureCarePage'
import CareersPage from './pages/CareersPage'
import TermsPage from './pages/TermsPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream-100">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/materials" element={<MaterialsPage />} />
            <Route path="/customization" element={<CustomizationPage />} />
            <Route path="/our-story" element={<OurStoryPage />} />
            <Route path="/why-saga" element={<WhySagaPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/furniture-care" element={<FurnitureCarePage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
