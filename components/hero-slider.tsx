"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Front Entrance Glow",
    image: "/residential-home-at-night.jpg",
    description: "Beautiful permanent lighting installation highlighting home architecture",
  },
  {
    id: 2,
    title: "Roofline Magic",
    image: "/house-with-colorful-roof-lights.jpg",
    description: "Custom RGB roofline installation with vibrant color schemes",
  },
  {
    id: 3,
    title: "Driveway Elegance",
    image: "/luxury-home-driveway-lights.jpg",
    description: "Professional driveway pathway lighting installation",
  },
  {
    id: 4,
    title: "Holiday Transformation",
    image: "/house-decorated-holiday-lights.jpg",
    description: "Full home holiday decoration and lighting setup",
  },
]

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GALLERY_ITEMS.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  useEffect(() => {
    const timeout = setTimeout(() => setAutoplay(true), 10000)
    return () => clearTimeout(timeout)
  }, [currentIndex])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prev) => (prev + 1) % GALLERY_ITEMS.length)
  }

  const handleDotClick = (index: number) => {
    setAutoplay(false)
    setCurrentIndex(index)
  }

  const currentItem = GALLERY_ITEMS[currentIndex]

  return (
    <section className="relative w-full min-h-screen bg-black pt-20 overflow-hidden">
      {/* Background bokeh effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl"></div>
        <div className="absolute top-40 right-40 w-80 h-80 bg-yellow-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 py-20">
        {/* Hero Text */}
        <div className="text-center max-w-3xl mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-pretty">
            Permanent <span className="text-lime-400">Lighting</span> Done Right.
          </h1>
          <p className="text-lg text-amber-300 text-balance">
            Join Hundreds of SoCal Homeowners
            <br />
            who have Transformed their Homes
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden mb-8">
          {/* Images */}
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover"
                priority={index === currentIndex}
              />
            </div>
          ))}

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white hover:scale-110 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white hover:scale-110 transition"
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex gap-2 justify-center mb-8">
          {GALLERY_ITEMS.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex ? "bg-white w-8 h-2" : "bg-white/30 w-2 h-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="tel:+13614160408"
          className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition"
        >
          Get Your Free Quote
        </a>
      </div>
    </section>
  )
}
