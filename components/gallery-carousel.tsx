"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"

const GALLERY_IMAGES = [
  { id: 1, image: "/house-landscape-lighting.jpg", title: "Landscape Lighting", description: "Beautiful landscape lighting that enhances the natural beauty of your home's exterior and creates an inviting ambiance for evening gatherings." },
  { id: 2, image: "/home-blue-rgb-lights.jpg", title: "RGB Blue Accent", description: "Modern RGB lighting system with vibrant blue accents that adds a contemporary touch to your home's facade and outdoor spaces." },
  { id: 3, image: "/garage-neon-pink-lights.jpg", title: "Neon Garage Accent", description: "Eye-catching neon pink lighting installation perfect for creating a distinctive look around your garage and driveway area." },
  { id: 4, image: "/house-colorful-led-lights.jpg", title: "Colorful LED Package", description: "Full-spectrum LED lighting package that transforms your home with dynamic colors and customizable lighting effects throughout the year." },
  { id: 5, image: "/home-ambient-lighting-night.jpg", title: "Ambient Outdoor Lighting", description: "Soft ambient lighting that creates a warm, welcoming atmosphere around your home while enhancing security and visibility." },
  { id: 6, image: "/beautiful-holiday-lights-house-entrance.jpg", title: "Holiday Entrance", description: "Professional holiday lighting installation that creates a stunning festive display around your home's entrance and entryway." },
  { id: 7, image: "/colorful-rgb-lights-roofline-night.jpg", title: "Roofline RGB", description: "Dramatic RGB lighting installation along your roofline that creates a striking visual impact and enhances your home's nighttime appearance." },
  { id: 8, image: "/modern-blue-white-led-lights.jpg", title: "Modern Blue & White", description: "Sophisticated blue and white LED lighting combination that provides a sleek, modern aesthetic to your outdoor living spaces." },
  { id: 9, image: "/house-decorated-holiday-lights.jpg", title: "Holiday Decoration", description: "Complete holiday lighting decoration package featuring custom designs and professional installation for maximum visual impact." },
]

export default function GalleryCarousel() {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scrollContainer2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    const scrollContainer2 = scrollContainer2Ref.current
    if (!scrollContainer || !scrollContainer2) return

    let animationFrameId: number
    let isRunning = true
    const scrollSpeed = 1

    const scroll = () => {
      if (!isRunning || !scrollContainer || !scrollContainer2) return

      scrollContainer.scrollLeft += scrollSpeed
      scrollContainer2.scrollLeft -= scrollSpeed

      const maxScroll1 = scrollContainer.scrollWidth - scrollContainer.clientWidth
      const minScroll2 = 0
      const maxScroll2 = scrollContainer2.scrollWidth - scrollContainer2.clientWidth

      if (scrollContainer.scrollLeft >= maxScroll1) {
        scrollContainer.scrollLeft = 0
      }
      if (scrollContainer2.scrollLeft <= minScroll2) {
        scrollContainer2.scrollLeft = maxScroll2
      }

      animationFrameId = requestAnimationFrame(scroll)
    }

    const startTimer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(scroll)
    }, 100)

    return () => {
      clearTimeout(startTimer)
      cancelAnimationFrame(animationFrameId)
      isRunning = false
    }
  }, [])

  const doubledImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES]

  return (
    <>
      <section className="w-full bg-black py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Our Latest Projects</h2>

          {/* First row - scrolling right */}
          <div className="mb-6 overflow-hidden rounded-lg">
            <div
              ref={scrollContainerRef}
              className="flex gap-4 gallery-scroll-container"
              style={{ scrollBehavior: "auto" }}
            >
              {doubledImages.map((item, index) => (
                <div
                  key={`row1-${index}`}
                  onClick={() => setSelectedImage(item)}
                  className="flex-shrink-0 w-80 h-48 relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-4">
                    <h3 className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - scrolling left */}
          <div className="overflow-hidden rounded-lg">
            <div
              ref={scrollContainer2Ref}
              className="flex gap-4"
              style={{ scrollBehavior: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {doubledImages.map((item, index) => (
                <div
                  key={`row2-${index}`}
                  onClick={() => setSelectedImage(item)}
                  className="flex-shrink-0 w-80 h-48 relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-4">
                    <h3 className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div
            className="bg-slate-900 rounded-2xl max-w-4xl w-full flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="w-full md:w-2/3 relative aspect-video md:aspect-auto md:h-96">
              <Image
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/3 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{selectedImage.title}</h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                {selectedImage.description}
              </p>
              <a
                href="tel:+13614160408"
                className="glow-button inline-block px-6 py-3 text-white font-semibold rounded-lg transition relative z-10 bg-orange-600 hover:bg-orange-700 w-fit"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
