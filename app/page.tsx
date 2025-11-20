"use client"

import Navigation from "@/components/navigation"
import HeroSlider from "@/components/hero-slider"
import BeforeAfterSlider from "@/components/before-after-slider"
import GalleryCarousel from "@/components/gallery-carousel"
import CTASection from "@/components/cta-section"
import FloatingCTA from "@/components/floating-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <HeroSlider />
      <BeforeAfterSlider />
      <GalleryCarousel />
      <CTASection />
      <FloatingCTA />
    </main>
  )
}
