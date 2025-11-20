"use client"

import Image from "next/image"

const GALLERY_IMAGES = [
  {
    id: 1,
    image: "/house-landscape-lighting.jpg",
    title: "Landscape Lighting",
  },
  {
    id: 2,
    image: "/home-blue-rgb-lights.jpg",
    title: "RGB Blue Accent",
  },
  {
    id: 3,
    image: "/garage-neon-pink-lights.jpg",
    title: "Neon Garage Accent",
  },
  {
    id: 4,
    image: "/house-colorful-led-lights.jpg",
    title: "Colorful LED Package",
  },
  {
    id: 5,
    image: "/home-ambient-lighting-night.jpg",
    title: "Ambient Outdoor Lighting",
  },
  {
    id: 6,
    image: "/beautiful-holiday-lights-house-entrance.jpg",
    title: "Holiday Entrance",
  },
  {
    id: 7,
    image: "/colorful-rgb-lights-roofline-night.jpg",
    title: "Roofline RGB",
  },
  {
    id: 8,
    image: "/modern-blue-white-led-lights.jpg",
    title: "Modern Blue & White",
  },
  {
    id: 9,
    image: "/house-decorated-holiday-lights.jpg",
    title: "Holiday Decoration",
  },
]

export default function GalleryGrid() {
  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Our Latest Projects</h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
          {GALLERY_IMAGES.map((item, index) => (
            <div
              key={item.id}
              className={`relative rounded-xl overflow-hidden bg-gray-900 cursor-pointer group ${
                index === 1 || index === 3 ? "lg:col-span-1 lg:row-span-2" : ""
              }`}
              style={{
                height: index === 1 || index === 3 ? "500px" : "300px",
              }}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-end p-4">
                <h3 className="text-white font-semibold opacity-0 group-hover:opacity-100 transition">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12">
          <a
            href="tel:+13614160408"
            className="inline-block px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition"
          >
            See All Projects
          </a>
        </div>
      </div>
    </section>
  )
}
