"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 relative transition-transform hover:scale-110">
              <Image
                src="/images/laguna.jpg"
                alt="Laguna Lighting"
                width={48}
                height={48}
                className="rounded object-contain filter drop-shadow-lg"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold text-white">Laguna</h1>
              <p className="text-xs bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent font-semibold">
                Lighting
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center text-sm">
            <a href="#features" className="text-gray-300 hover:text-white transition">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition">
              Pricing
            </a>
            <a href="#team" className="text-gray-300 hover:text-white transition">
              Team
            </a>
            <a href="#reviews" className="text-gray-300 hover:text-white transition">
              Reviews
            </a>
            <a
              href="#contact-form"
              className="glow-button px-6 py-2 bg-orange-600 hover:bg-orange-700 rounded-full font-semibold transition text-white relative z-10"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+13614160408"
              className="glow-button px-6 py-2 bg-orange-600 hover:bg-orange-700 rounded-full font-semibold transition text-white relative z-10"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-slate-800">
            <a href="#features" className="block px-4 py-2 text-gray-300 hover:text-white">
              Features
            </a>
            <a href="#how-it-works" className="block px-4 py-2 text-gray-300 hover:text-white">
              How It Works
            </a>
            <a href="#pricing" className="block px-4 py-2 text-gray-300 hover:text-white">
              Pricing
            </a>
            <a href="#team" className="block px-4 py-2 text-gray-300 hover:text-white">
              Team
            </a>
            <a href="#reviews" className="block px-4 py-2 text-gray-300 hover:text-white">
              Reviews
            </a>
            <a
              href="tel:+13614160408"
              className="glow-button block px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded font-semibold text-white relative z-10 w-fit"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+13614160408"
              className="glow-button block px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded font-semibold text-white relative z-10 w-fit"
            >
              Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
