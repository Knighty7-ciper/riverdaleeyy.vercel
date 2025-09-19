"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Menu, X, MapPin, Phone } from "lucide-react"

export default function Header() {
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 shadow-lg border-b-2 border-amber-200 sticky top-0 z-50 backdrop-blur-md">
      <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Westlands, Nairobi</span>
              </div>
            </div>
            <div className="text-amber-200">24/7 Safari Support Available</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 rounded-xl flex items-center justify-center shadow-lg border-2 border-amber-300">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-amber-900">Riverdale</div>
              <div className="text-sm text-orange-700 -mt-1 font-medium">Kenya Safaris</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-amber-900 hover:text-orange-700 font-semibold text-base transition-all duration-300 hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-amber-900 hover:text-orange-700 font-semibold text-base transition-all duration-300 hover:scale-105"
            >
              About
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
                className="flex items-center space-x-1 text-amber-900 hover:text-orange-700 font-semibold text-base transition-all duration-300 hover:scale-105"
              >
                <span>Destinations</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isDestinationsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isDestinationsOpen && (
                <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-xl shadow-2xl border-2 border-amber-200 py-3 z-50 backdrop-blur-md">
                  <Link
                    href="/destinations"
                    className="block px-6 py-3 text-amber-900 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 hover:text-orange-700 transition-all duration-200 font-medium"
                  >
                    All Safari Destinations
                  </Link>
                  <div className="border-t border-amber-100 my-2"></div>
                  <Link
                    href="/destinations/maasai-mara"
                    className="block px-6 py-3 text-amber-900 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 hover:text-orange-700 transition-all duration-200 font-medium"
                  >
                    Maasai Mara Safari
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/hotels"
              className="text-amber-900 hover:text-orange-700 font-semibold text-base transition-all duration-300 hover:scale-105"
            >
              Hotels
            </Link>
            <Link
              href="/gallery"
              className="text-amber-900 hover:text-orange-700 font-semibold text-base transition-all duration-300 hover:scale-105"
            >
              Gallery
            </Link>
            <Link
              href="/blog"
              className="text-amber-900 hover:text-orange-700 font-semibold text-base transition-all duration-300 hover:scale-105"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-amber-900 hover:text-orange-700 font-semibold text-base transition-all duration-300 hover:scale-105"
            >
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-amber-100 transition-all duration-200 border-2 border-amber-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-amber-900" /> : <Menu className="w-6 h-6 text-amber-900" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t-2 border-amber-200 bg-gradient-to-b from-amber-50 to-orange-50">
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                className="block px-6 py-4 text-amber-900 hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 hover:text-orange-700 rounded-lg transition-all duration-200 font-semibold text-lg"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-6 py-4 text-amber-900 hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 hover:text-orange-700 rounded-lg transition-all duration-200 font-semibold text-lg"
              >
                About
              </Link>
              <Link
                href="/destinations"
                className="block px-6 py-4 text-amber-900 hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 hover:text-orange-700 rounded-lg transition-all duration-200 font-semibold text-lg"
              >
                Destinations
              </Link>
              <Link
                href="/hotels"
                className="block px-6 py-4 text-amber-900 hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 hover:text-orange-700 rounded-lg transition-all duration-200 font-semibold text-lg"
              >
                Hotels
              </Link>
              <Link
                href="/gallery"
                className="block px-6 py-4 text-amber-900 hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 hover:text-orange-700 rounded-lg transition-all duration-200 font-semibold text-lg"
              >
                Gallery
              </Link>
              <Link
                href="/blog"
                className="block px-6 py-4 text-amber-900 hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 hover:text-orange-700 rounded-lg transition-all duration-200 font-semibold text-lg"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block px-6 py-4 text-amber-900 hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 hover:text-orange-700 rounded-lg transition-all duration-200 font-semibold text-lg"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
