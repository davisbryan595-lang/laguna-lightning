"use client"

import Image from "next/image"
import { Mail, MapPin, Phone, Facebook, Music } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/laguna.jpg"
                  alt="Laguna Lighting"
                  width={40}
                  height={40}
                  className="rounded object-contain filter drop-shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Laguna</h3>
                <p className="text-xs bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent font-semibold">
                  Lighting
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">Transforming homes with professional outdoor lighting solutions.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-orange-500 transition text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-orange-500 transition text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-orange-500 transition text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-orange-500 transition text-sm">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition text-sm">
                  Landscape Lighting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition text-sm">
                  RGB Smart Lights
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition text-sm">
                  Holiday Lighting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition text-sm">
                  Installation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                <a href="tel:+13614160408" className="text-gray-400 hover:text-orange-500 transition text-sm">
                  +1 (361) 416-0408
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                <a href="mailto:info@lagunalighting.com" className="text-gray-400 hover:text-orange-500 transition text-sm">
                  info@lagunalighting.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Corpus Christi, TX</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© {currentYear} Laguna Lighting. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition text-sm">
                Sitemap
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://www.facebook.com/PortALightHouse/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@lagunalighting"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition"
              aria-label="TikTok"
            >
              <Music className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
