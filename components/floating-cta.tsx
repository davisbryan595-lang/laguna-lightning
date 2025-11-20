"use client"

import { Phone } from "lucide-react"

export default function FloatingCTA() {
  return (
    <a
      href="tel:+13614160408"
      className="glow-button fixed bottom-8 right-8 z-40 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition transform hover:scale-110 flex items-center gap-2 relative"
    >
      <Phone className="w-6 h-6" />
      <span className="hidden sm:inline font-bold">Call Now</span>
    </a>
  )
}
