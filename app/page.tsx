"use client"

import Navigation from "@/components/navigation"
import HeroSlider from "@/components/hero-slider"
import BeforeAfterSlider from "@/components/before-after-slider"
import GalleryCarousel from "@/components/gallery-carousel"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <HeroSlider />
      <BeforeAfterSlider />
      <GalleryCarousel />
      <CTASection />
      <Footer />
    </main>
  )
}
