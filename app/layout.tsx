import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Laguna Lighting | Permanent & Holiday Lighting Texas",
  description:
    "Coastal vibes, year-round brilliance. Premium permanent and holiday lighting for Fort Worth, Corpus Christi, and across Texas Coast & DFW.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo-favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/logo-favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo-apple-icon.png",
    shortcut: "/logo-favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Laguna Lighting",
            description: "Premium permanent and holiday lighting installations",
            url: "https://lagunalighting.com",
            telephone: "+1361-416-0408",
            email: "Lagunahomeservices@gmail.com",
            areaServed: ["Fort Worth, TX", "Rockport, TX", "Lubbock, TX", "Corpus Christi, TX", "Port Aransas, TX"],
            priceRange: "$$",
          })}
        </script>
      </head>
      <body className={`font-sans antialiased bg-slate-950 text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
