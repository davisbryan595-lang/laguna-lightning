"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

const GALLERY_IMAGES = [
  { id: 1, image: "/house-landscape-lighting.jpg", title: "Landscape Lighting" },
  { id: 2, image: "/home-blue-rgb-lights.jpg", title: "RGB Blue Accent" },
  { id: 3, image: "/garage-neon-pink-lights.jpg", title: "Neon Garage Accent" },
  { id: 4, image: "/house-colorful-led-lights.jpg", title: "Colorful LED Package" },
  { id: 5, image: "/home-ambient-lighting-night.jpg", title: "Ambient Outdoor Lighting" },
  { id: 6, image: "/beautiful-holiday-lights-house-entrance.jpg", title: "Holiday Entrance" },
  { id: 7, image: "/colorful-rgb-lights-roofline-night.jpg", title: "Roofline RGB" },
  { id: 8, image: "/modern-blue-white-led-lights.jpg", title: "Modern Blue & White" },
  { id: 9, image: "/house-decorated-holiday-lights.jpg", title: "Holiday Decoration" },
]

export default function GalleryCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scrollContainer2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    const scrollContainer2 = scrollContainer2Ref.current
    if (!scrollContainer || !scrollContainer2) return

    let animationFrameId: number

    const scroll = () => {
      scrollContainer.scrollLeft += 1
      scrollContainer2.scrollLeft -= 1

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      }
      if (scrollContainer2.scrollLeft <= 0) {
        scrollContainer2.scrollLeft = scrollContainer2.scrollWidth / 2
      }

      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  const doubledImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES]

  return (
    <section className="w-full bg-black py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Our Latest Projects</h2>

        {/* First row - scrolling right */}
        <div className="mb-6 overflow-hidden">
          <div ref={scrollContainerRef} className="flex gap-4 scroll-smooth" style={{ scrollBehavior: "auto" }}>
            {doubledImages.map((item, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-80 h-48 relative rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition flex items-end p-4">
                  <h3 className="text-white font-semibold opacity-0 group-hover:opacity-100 transition">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second row - scrolling left */}
        <div className="overflow-hidden">
          <div ref={scrollContainer2Ref} className="flex gap-4 scroll-smooth" style={{ scrollBehavior: "auto" }}>
            {doubledImages.map((item, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-80 h-48 relative rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition flex items-end p-4">
                  <h3 className="text-white font-semibold opacity-0 group-hover:opacity-100 transition">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12">
          <a
            href="tel:+13614160408"
            className="glow-button inline-block px-8 py-3 text-white font-semibold rounded-lg transition relative z-10"
          >
            See All Projects
          </a>
        </div>
      </div>
    </section>
  )
}
