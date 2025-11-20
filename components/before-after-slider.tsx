"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const BEFORE_AFTER_ITEMS = [
  {
    id: 1,
    before: "/house-before-lighting-dark.jpg",
    after: "/house-after-colored-lights.jpg",
    title: "Residential RGB Lighting",
  },
  {
    id: 2,
    before: "/residential-home-daylight.jpg",
    after: "/residential-home-night-lights.jpg",
    title: "Holiday Transformation",
  },
  {
    id: 3,
    before: "/white-lights-driveway-landscape-night.jpg",
    after: "/colorful-rgb-lights-roofline-night.jpg",
    title: "Roofline Accent Lighting",
  },
  {
    id: 4,
    before: "/home-ambient-lighting-night.jpg",
    after: "/colorful-rgb-lights-pool-backyard.jpg",
    title: "Backyard Pool Lighting",
  },
  {
    id: 5,
    before: "/residential-home-at-night.jpg",
    after: "/modern-blue-white-led-lights.jpg",
    title: "Modern LED Installation",
  },
  {
    id: 6,
    before: "/luxury-home-driveway-lights.jpg",
    after: "/warm-amber-entrance-lighting.jpg",
    title: "Luxury Entrance Lighting",
  },
]

export default function BeforeAfterSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + BEFORE_AFTER_ITEMS.length) % BEFORE_AFTER_ITEMS.length)
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % BEFORE_AFTER_ITEMS.length)

  const current = BEFORE_AFTER_ITEMS[currentIndex]

  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left side - Before/After comparison */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-900">
              {/* Before image */}
              <div className="absolute inset-0 transition-all duration-300" style={{ width: "50%" }}>
                <Image src={current.before || "/placeholder.svg"} alt="Before" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-white/90 text-black px-3 py-1 rounded font-semibold text-sm">
                  Before
                </div>
              </div>

              {/* After image */}
              <div className="absolute inset-0 flex items-center justify-end">
                <div className="absolute inset-0" style={{ left: "50%" }}>
                  <Image src={current.after || "/placeholder.svg"} alt="After" fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-white/90 text-black px-3 py-1 rounded font-semibold text-sm">
                    After
                  </div>
                </div>
              </div>

              {/* Divider line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white/50 z-10" />

              {/* Navigation arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white transition-all shadow-lg hover:shadow-xl"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white transition-all shadow-lg hover:shadow-xl"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="text-center mt-6">
              <h3 className="text-white font-semibold mb-3">{current.title}</h3>
              <div className="flex gap-2 justify-center flex-wrap">
                {BEFORE_AFTER_ITEMS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-orange-600 w-6" : "bg-gray-600 w-2 hover:bg-gray-500"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Transform Your Home's Curb Appeal</h2>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              See the dramatic difference permanent professional lighting can make. Our expert installations enhance
              your home's beauty day and night, increasing property value and creating stunning ambiance.
            </p>
            <a
              href="tel:+13614160408"
              className="glow-button inline-block px-8 py-3 text-white font-semibold rounded-lg transition relative z-10"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
