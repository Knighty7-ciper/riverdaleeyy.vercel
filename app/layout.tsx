import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import Header from "@/components/layout/header"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Riverdale Kenya Safaris - Luxury East Africa Safari Experts | KATO Licensed",
  description:
    "Experience Kenya's finest safari adventures with Riverdale Kenya Safaris. Licensed KATO tour operator offering luxury safaris, beach holidays, and mountain adventures across East Africa. 15+ years of expertise.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#d97706",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable} antialiased`}>
      <body className="font-sans bg-background">
        <Header />
        {children}
      </body>
    </html>
  )
}
