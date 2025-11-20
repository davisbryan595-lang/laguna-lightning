"use client"

import type React from "react"

import { useState } from "react"

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Ready to Transform Your Home?</h2>
          <p className="text-lg text-gray-400">Get a free consultation and quote from our lighting experts</p>
        </div>

        {/* Form */}
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 border border-slate-800">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg border border-slate-700 focus:border-orange-500 focus:outline-none transition"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg border border-slate-700 focus:border-orange-500 focus:outline-none transition"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg border border-slate-700 focus:border-orange-500 focus:outline-none transition"
              />
              <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg border border-slate-700 focus:border-orange-500 focus:outline-none transition"
              />
            </div>
            <textarea
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg border border-slate-700 focus:border-orange-500 focus:outline-none transition resize-none h-32"
            />
            <button
              type="submit"
              className="glow-button w-full text-white font-bold py-4 rounded-lg transition text-lg relative z-10 bg-orange-600 hover:bg-orange-700"
            >
              Get Your Free Quote
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12 text-gray-400">
          <p className="mb-2">Or call us directly:</p>
          <a href="tel:+13614160408" className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition">
            +1 (361) 416-0408
          </a>
        </div>
      </div>
    </section>
  )
}
