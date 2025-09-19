"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LazyImage } from "@/components/ui/lazy-image"
import { MapPin, Star, Users, ArrowUp, Phone, Award, Shield, Heart, CheckCircle, Camera } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/layout/footer"

const featuredDestinations = [
  {
    id: "1",
    name: "Maasai Mara National Reserve",
    description:
      "Witness the world's greatest wildlife spectacle during the Great Migration. Home to the Big Five and endless savannah plains where nature's drama unfolds daily.",
    location: "Narok County, Kenya",
    price: 45000,
    duration: "3 Days",
    image_url: "/maasai-mara-safari.png",
    rating: 4.9,
    highlights: ["Great Migration", "Big Five", "Maasai Culture"],
    bestTime: "July - October",
    activities: ["Game Drives", "Hot Air Balloon", "Cultural Visits"],
    difficulty: "Easy",
  },
  {
    id: "2",
    name: "Diani Beach Paradise",
    description:
      "Pristine white sand beaches kissed by crystal clear Indian Ocean waters. Perfect sanctuary for relaxation, water sports, and romantic escapes.",
    location: "South Coast, Kenya",
    price: 25000,
    duration: "4 Days",
    image_url: "/diani-beach-kenya.png",
    rating: 4.8,
    highlights: ["White Sand Beaches", "Water Sports", "Coral Reefs"],
    bestTime: "December - March",
    activities: ["Snorkeling", "Dhow Sailing", "Beach Relaxation"],
    difficulty: "Easy",
  },
  {
    id: "3",
    name: "Mount Kenya National Park",
    description:
      "Africa's second highest peak offering challenging climbs through diverse ecosystems, from bamboo forests to alpine meadows with breathtaking vistas.",
    location: "Central Kenya",
    price: 35000,
    duration: "5 Days",
    image_url: "/mount-kenya-hikers.png",
    rating: 4.7,
    highlights: ["Alpine Climbing", "Diverse Wildlife", "Scenic Landscapes"],
    bestTime: "January - February",
    activities: ["Mountain Climbing", "Wildlife Viewing", "Photography"],
    difficulty: "Challenging",
  },
  {
    id: "4",
    name: "Amboseli National Park",
    description:
      "Spectacular elephant herds against the backdrop of Mount Kilimanjaro. Famous for its large elephant population and stunning mountain views.",
    location: "Kajiado County, Kenya",
    price: 38000,
    duration: "3 Days",
    image_url: "/amboseli-elephants-kilimanjaro.png",
    rating: 4.8,
    highlights: ["Elephant Herds", "Kilimanjaro Views", "Maasai Culture"],
    bestTime: "June - October",
    activities: ["Game Drives", "Photography", "Cultural Tours"],
    difficulty: "Easy",
  },
]

const luxuryHotels = [
  {
    id: "1",
    name: "Sarova Mara Game Camp",
    location: "Maasai Mara",
    price: 15000,
    rating: 4.9,
    image_url: "/luxury-safari-camp-maasai-mara.jpg",
    amenities: ["Pool", "Spa", "Restaurant", "Game Drives"],
    category: "Luxury Safari Lodge",
  },
  {
    id: "2",
    name: "Diani Reef Beach Resort",
    location: "Diani Beach",
    price: 12000,
    rating: 4.7,
    image_url: "/luxury-beach-resort-diani-kenya.jpg",
    amenities: ["Beach Access", "Water Sports", "Spa", "Multiple Restaurants"],
    category: "Beach Resort",
  },
  {
    id: "3",
    name: "Serena Mountain Lodge",
    location: "Mount Kenya",
    price: 18000,
    rating: 4.8,
    image_url: "/mountain-lodge-kenya-luxury.jpg",
    amenities: ["Mountain Views", "Wildlife Viewing", "Restaurant", "Guided Hikes"],
    category: "Mountain Lodge",
  },
]

const galleryImages = [
  { url: "/african-lion-pride-golden-hour.jpg", alt: "Lion Pride at Golden Hour" },
  { url: "/elephants-crossing-river-kenya.jpg", alt: "Elephants Crossing River" },
  { url: "/maasai-warriors-traditional-dance.jpg", alt: "Maasai Cultural Dance" },
  { url: "/hot-air-balloon-safari-kenya.jpg", alt: "Hot Air Balloon Safari" },
  { url: "/cheetah-running-savannah.jpg", alt: "Cheetah in Full Sprint" },
  { url: "/mount-kilimanjaro-sunrise.jpg", alt: "Mount Kilimanjaro at Sunrise" },
]

const customerReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "United Kingdom",
    rating: 5,
    comment:
      "Absolutely extraordinary experience! Our guide's knowledge was encyclopedic and we witnessed the Big Five in their natural habitat. The accommodations exceeded expectations and every meal was a culinary delight.",
    trip: "Maasai Mara Safari",
    date: "January 2024",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Australia",
    rating: 5,
    comment:
      "Flawless beach holiday! The resort was absolutely stunning, staff anticipated our every need, and the beach was pristine paradise. Exceptional value and world-class service throughout.",
    trip: "Diani Beach Getaway",
    date: "December 2023",
    avatar: "MC",
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "Canada",
    rating: 5,
    comment:
      "Challenging yet incredibly rewarding climb! Professional guides with impeccable safety standards, flawless logistics, and views that will forever be etched in memory. Perfect for adventure enthusiasts.",
    trip: "Mount Kenya Adventure",
    date: "November 2023",
    avatar: "ET",
  },
  {
    id: 4,
    name: "David Ochieng",
    location: "Kenya",
    rating: 5,
    comment:
      "Spectacular elephant encounters with Kilimanjaro's majestic backdrop! Expert photography guidance and luxury safari vehicles made this an unforgettable photographic journey.",
    trip: "Amboseli Elephant Safari",
    date: "October 2023",
    avatar: "DO",
  },
]

export default function HomePage() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <LazyImage
            src="/african-lion-hero.jpg"
            alt="Majestic African Lion in Golden Savannah"
            className="w-full h-full"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center min-h-screen py-12 lg:py-20">
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl luxury-card bg-white/10 backdrop-blur-sm border border-white/20">
                <LazyImage
                  src="/professional-safari-guides-team-kenya-wildlife-exp.jpg"
                  alt="Riverdale Kenya Safari Team - Your Professional Wildlife Experts"
                  className="w-full h-[400px] lg:h-[650px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 text-white">
                  <h3 className="font-serif text-xl lg:text-3xl font-bold mb-2 lg:mb-3 text-balance drop-shadow-lg">
                    Your Trusted Kenya Safari Experts
                  </h3>
                  <p className="text-sm lg:text-lg text-white/95 mb-3 lg:mb-4 drop-shadow-md">
                    Professional wildlife guides with 15+ years expertise
                  </p>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 lg:px-4 py-1 lg:py-2">
                    <Award className="w-4 lg:w-5 h-4 lg:h-5 text-amber-300" />
                    <span className="text-xs lg:text-sm font-medium">Licensed KATO Member</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 lg:-bottom-8 -right-4 lg:-right-8 bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-2xl border border-amber-200 luxury-card">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-10 lg:w-12 h-10 lg:h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 lg:w-6 h-5 lg:h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-bold text-amber-900 text-base lg:text-lg">KATO Certified</div>
                    <div className="text-xs lg:text-sm text-amber-700">Licensed Tour Operator</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-white order-1 lg:order-2">
              <div className="mb-6 lg:mb-8">
                <Badge className="bg-amber-500/90 text-white border-amber-400/50 px-4 lg:px-6 py-2 lg:py-3 text-xs lg:text-sm font-medium backdrop-blur-sm rounded-full shadow-lg">
                  WELCOME TO RIVERDALE KENYA SAFARIS • EAST AFRICA SAFARI EXPERTS
                </Badge>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight text-balance drop-shadow-2xl">
                Welcome To
                <br />
                <span className="text-amber-300 drop-shadow-lg">Riverdale Kenya</span>
              </h1>

              <div className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 lg:mb-8 text-white/95 leading-relaxed space-y-3 lg:space-y-4 max-w-2xl drop-shadow-lg">
                <p>
                  Riverdale Kenya safaris is a{" "}
                  <strong className="text-amber-300">Kenya based East African Tour Operator</strong> taking pride in
                  crafting unmatched bush and beach itineraries that are creative and flexible with the backing of
                  professionals of vast experience.
                </p>
                <p>
                  Ask for <strong className="text-amber-300">Affordable Kenya safari tours</strong>, Tanzania safari
                  tour, combined Kenya and Tanzania safari holidays, Uganda gorilla trekking packages, Mount Kenya and
                  Kilimanjaro hiking or beach holidays in Mombasa, Diani, Malindi, Watamu, Zanzibar, and you'll get
                  endless opportunities to explore nature at its finest.
                </p>
                <p className="text-amber-300 font-semibold text-xs sm:text-sm lg:text-base">
                  Now we are fully bonded member of <strong>Kenya Association Of Tour Operators</strong>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-white px-6 lg:px-8 py-2.5 lg:py-3 text-sm lg:text-base font-semibold rounded-lg shadow-2xl border-2 border-amber-400/50 transition-all duration-300 hover:scale-105 hover:shadow-amber-500/25"
                  >
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="tel:+254700123456">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-white/90 text-white hover:bg-white hover:text-amber-900 px-6 lg:px-8 py-2.5 lg:py-3 text-sm lg:text-base font-semibold bg-white/20 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Expert Now
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-3 lg:gap-6 pt-4 lg:pt-6 border-t border-white/30">
                <div className="text-center">
                  <div className="text-xl lg:text-3xl font-bold text-amber-300 font-serif mb-1 drop-shadow-lg">15+</div>
                  <div className="text-xs lg:text-sm text-white/90 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-3xl font-bold text-amber-300 font-serif mb-1 drop-shadow-lg">
                    5000+
                  </div>
                  <div className="text-xs lg:text-sm text-white/90 font-medium">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-3xl font-bold text-amber-300 font-serif mb-1 drop-shadow-lg">50+</div>
                  <div className="text-xs lg:text-sm text-white/90 font-medium">Destinations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-16 bg-gradient-to-r from-amber-50 to-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <Badge className="bg-amber-600 text-white px-3 lg:px-4 py-1.5 lg:py-2 text-xs font-medium mb-3 lg:mb-4 rounded-full">
              Kenya Wildlife Gallery
            </Badge>
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-amber-900 mb-3 lg:mb-4">
              Witness Kenya's Magnificent Wildlife
            </h2>
            <p className="text-sm lg:text-lg text-amber-800 max-w-4xl mx-auto leading-relaxed">
              Experience the raw beauty and untamed spirit of Kenya's incredible wildlife through our lens
            </p>
          </div>

          <div className="relative h-48 lg:h-80 rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl">
            <div
              className="flex transition-transform duration-1000 ease-in-out h-full"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="min-w-full h-full relative">
                  <LazyImage src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 text-white">
                    <h3 className="font-serif text-lg sm:text-xl lg:text-3xl font-bold drop-shadow-lg">{image.alt}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 lg:bottom-6 right-4 lg:right-6 flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 lg:w-3 h-2 lg:h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Riverdale */}
      <section className="py-12 lg:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-primary/10 text-primary px-4 py-2 text-xs font-medium mb-4 rounded-full">
              Why Choose Riverdale Kenya Safaris
            </Badge>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 lg:mb-6 text-balance">
              Contact Us For The Best Budget In Safari Booking
            </h2>
            <p className="text-sm lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We specialize in creating authentic Kenyan experiences that match your dreams and budget. From luxury
              safaris to budget adventures, our expert team crafts unforgettable journeys through Kenya's most
              spectacular destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            <div className="luxury-card rounded-2xl p-6 lg:p-8 text-center transition-all duration-500 hover:scale-105">
              <div className="w-16 lg:w-20 h-16 lg:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                <Users className="w-8 lg:w-10 h-8 lg:h-10 text-primary" />
              </div>
              <h3 className="font-serif text-lg lg:text-xl font-semibold mb-3 lg:mb-4 text-foreground">
                Expert Local Guides
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                Our experienced Kenyan guides know every corner of our beautiful country and share authentic cultural
                experiences with genuine passion and deep local knowledge.
              </p>
            </div>

            <div className="luxury-card rounded-2xl p-6 lg:p-8 text-center transition-all duration-500 hover:scale-105">
              <div className="w-16 lg:w-20 h-16 lg:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                <Shield className="w-8 lg:w-10 h-8 lg:h-10 text-primary" />
              </div>
              <h3 className="font-serif text-lg lg:text-xl font-semibold mb-3 lg:mb-4 text-foreground">
                Licensed & Bonded
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                Fully licensed KATO member with comprehensive insurance, 24/7 emergency support, and carefully vetted
                accommodations for your complete peace of mind.
              </p>
            </div>

            <div className="luxury-card rounded-2xl p-6 lg:p-8 text-center transition-all duration-500 hover:scale-105">
              <div className="w-16 lg:w-20 h-16 lg:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                <Heart className="w-8 lg:w-10 h-8 lg:h-10 text-primary" />
              </div>
              <h3 className="font-serif text-lg lg:text-xl font-semibold mb-3 lg:mb-4 text-foreground">
                Budget Friendly
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                Whether you have $500 or $5000, we create amazing safari experiences that fit your budget without ever
                compromising on quality or authenticity.
              </p>
            </div>
          </div>

          <div className="luxury-gradient rounded-2xl p-8 lg:p-12 text-center text-white shadow-2xl">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-balance">
              Your Dream Safari, Your Budget
            </h3>
            <p className="text-sm lg:text-lg mb-6 lg:mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Can't find the perfect safari package? We specialize in creating customized travel experiences that match
              your dreams and your wallet. Let our experts craft your perfect Kenyan adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 px-6 lg:px-8 py-2.5 lg:py-3 text-sm lg:text-base font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Get Custom Quote
                </Button>
              </Link>
              <Link href="tel:+254700123456">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary px-6 lg:px-8 py-2.5 lg:py-3 text-sm lg:text-base font-semibold bg-white/10 rounded-lg backdrop-blur-sm transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="py-8 lg:py-16 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <Badge className="bg-amber-600 text-white px-3 lg:px-4 py-1.5 lg:py-2 text-xs font-medium mb-3 lg:mb-4 rounded-full">
              Popular Safari Destinations
            </Badge>
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-amber-900 mb-3 lg:mb-4 text-balance">
              Curated Kenya Safari Experiences
            </h2>
            <p className="text-sm lg:text-base text-amber-800 max-w-4xl mx-auto leading-relaxed">
              Discover Kenya's most spectacular destinations with our carefully crafted travel packages, designed for
              unforgettable memories and authentic experiences with comprehensive details and expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {featuredDestinations.map((destination) => (
              <Card
                key={destination.id}
                className="overflow-hidden luxury-card transition-all duration-500 group hover:scale-105 border-0 bg-white shadow-xl h-[320px]"
              >
                <div className="relative overflow-hidden h-[180px]">
                  <LazyImage
                    src={destination.image_url || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <Badge className="absolute top-2 left-2 bg-amber-600 text-white font-semibold px-2 py-1 rounded-full text-xs">
                    {destination.duration}
                  </Badge>
                  <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span className="text-xs font-semibold text-amber-900">{destination.rating}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-4 h-[140px] flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-base font-bold text-amber-900 mb-1 group-hover:text-amber-700 transition-colors line-clamp-1">
                      {destination.name}
                    </h3>

                    <div className="flex items-center text-amber-700 mb-2">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span className="text-xs font-medium line-clamp-1">{destination.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-2">
                      {destination.highlights.slice(0, 2).map((highlight, index) => (
                        <Badge key={index} className="text-xs px-1.5 py-0.5 rounded-full bg-amber-600 text-white">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-amber-600 font-serif">
                        KSh {destination.price.toLocaleString()}
                      </span>
                      <span className="text-amber-700 text-xs ml-1">/Adult</span>
                    </div>
                    <Link href={`/package/${destination.id}`}>
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* </CHANGE> */}

          <div className="text-center mt-8 lg:mt-12">
            <Link href="/destinations">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-6 lg:px-8 py-2.5 lg:py-3 bg-transparent rounded-lg transition-all duration-300 hover:scale-105"
              >
                View All Safari Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-amber-600 text-white px-4 py-2 text-xs font-medium mb-4 rounded-full">
              Luxury Accommodations
            </Badge>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-amber-900 mb-4 lg:mb-6 text-balance">
              World-Class Safari Lodges & Beach Resorts
            </h2>
            <p className="text-sm lg:text-lg text-amber-800 max-w-4xl mx-auto leading-relaxed">
              Experience Kenya's finest accommodations, from luxury safari camps in the heart of the wilderness to
              pristine beach resorts along the Indian Ocean coast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {luxuryHotels.map((hotel) => (
              <Card
                key={hotel.id}
                className="overflow-hidden luxury-card transition-all duration-500 group hover:scale-105 border-0 bg-white shadow-xl h-[300px]"
              >
                <div className="relative overflow-hidden h-[160px]">
                  <LazyImage
                    src={hotel.image_url || "/placeholder.svg"}
                    alt={hotel.name}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <Badge className="absolute top-2 left-2 bg-amber-600 text-white font-semibold px-2 py-1 rounded-full text-xs">
                    {hotel.category}
                  </Badge>
                  <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span className="text-xs font-semibold text-amber-900">{hotel.rating}</span>
                  </div>
                </div>
                <CardContent className="p-4 h-[140px] flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-base font-bold text-amber-900 mb-1 group-hover:text-amber-700 transition-colors line-clamp-1">
                      {hotel.name}
                    </h3>

                    <div className="flex items-center text-amber-700 mb-2">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span className="text-xs font-medium">{hotel.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-2">
                      {hotel.amenities.slice(0, 2).map((amenity, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800"
                        >
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-amber-600 font-serif">
                        KSh {hotel.price.toLocaleString()}
                      </span>
                      <span className="text-amber-700 text-xs ml-1">/night</span>
                    </div>
                    <Link href={`/package/hotel-${hotel.id}`}>
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* </CHANGE> */}

          <div className="text-center mt-12">
            <Link href="/hotels">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-6 lg:px-8 py-2.5 lg:py-3 bg-transparent rounded-lg transition-all duration-300 hover:scale-105"
              >
                View All Hotels & Lodges
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-16 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <Badge className="bg-amber-600 text-white px-3 lg:px-4 py-1.5 lg:py-2 text-xs font-medium mb-3 lg:mb-4 rounded-full">
              Client Testimonials
            </Badge>
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-amber-900 mb-3 lg:mb-4 text-balance">
              Stories from the Wild
            </h2>
            <div className="flex items-center justify-center gap-2 lg:gap-3 mb-3 lg:mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 lg:w-5 h-4 lg:h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-xl lg:text-2xl font-bold text-amber-900 font-serif">4.9</span>
              <span className="text-amber-800 text-xs lg:text-sm">(1,200+ reviews)</span>
            </div>
            <p className="text-sm lg:text-base text-amber-800 max-w-4xl mx-auto leading-relaxed">
              Real experiences from real travelers who explored Kenya's wonders with Riverdale Kenya Safaris.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {customerReviews.map((review) => (
              <div
                key={review.id}
                className="luxury-card rounded-xl lg:rounded-2xl p-4 lg:p-6 transition-all duration-500 hover:scale-105 bg-white shadow-xl"
              >
                <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
                  <div className="w-10 lg:w-12 h-10 lg:h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-amber-600 font-semibold text-sm lg:text-base font-serif">
                      {review.avatar}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 text-sm lg:text-base">{review.name}</h4>
                    <p className="text-xs text-amber-700">{review.location}</p>
                  </div>
                </div>

                <div className="flex mb-3 lg:mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3 lg:w-4 h-3 lg:h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-amber-800 mb-3 lg:mb-4 leading-relaxed text-xs lg:text-sm">"{review.comment}"</p>

                <div className="border-t border-amber-200 pt-3 lg:pt-4">
                  <p className="text-xs font-medium text-amber-600">{review.trip}</p>
                  <p className="text-xs text-amber-700">{review.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 lg:mt-12">
            <Link href="/reviews">
              <Button
                variant="outline"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent rounded-lg px-6 lg:px-8 py-2.5 lg:py-3 transition-all duration-300 hover:scale-105"
              >
                Read More Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Showcase */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-amber-600 text-white px-3 py-1.5 text-xs font-medium mb-3">
              Kenya Safari Experiences
            </Badge>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-900 mb-4">
              Where Adventure Meets Authenticity
            </h2>
            <p className="text-sm lg:text-base text-amber-800 max-w-3xl mx-auto">
              From the thundering hooves of the Great Migration to the gentle lapping of Indian Ocean waves, Kenya
              offers experiences that touch your soul and create memories for a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group">
              <div className="overflow-hidden rounded-xl shadow-xl">
                <LazyImage
                  src="/maasai-mara-safari.png"
                  alt="Maasai Mara Safari"
                  className="w-full h-48 lg:h-56 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-serif text-lg lg:text-xl font-bold mb-1">Safari Adventures</h3>
                  <p className="text-xs opacity-90">Big Five & Great Migration</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="overflow-hidden rounded-xl shadow-xl">
                <LazyImage
                  src="/diani-beach-kenya.png"
                  alt="Diani Beach"
                  className="w-full h-48 lg:h-56 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-serif text-lg lg:text-xl font-bold mb-1">Coastal Paradise</h3>
                  <p className="text-xs opacity-90">Pristine Beaches & Culture</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="overflow-hidden rounded-xl shadow-xl">
                <LazyImage
                  src="/mount-kenya-hikers.png"
                  alt="Mount Kenya"
                  className="w-full h-48 lg:h-56 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-serif text-lg lg:text-xl font-bold mb-1">Mountain Adventures</h3>
                  <p className="text-xs opacity-90">Peaks & Alpine Landscapes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <LazyImage
                  src="/amboseli-elephants-kilimanjaro.png"
                  alt="Elephants in Amboseli with Mount Kilimanjaro backdrop"
                  className="w-full h-64 lg:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white border border-amber-200 rounded-lg p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-amber-600" />
                  <div>
                    <div className="font-bold text-amber-900 text-sm">Authentic Kenya</div>
                    <div className="text-xs text-amber-700">Real Experiences</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <Badge className="bg-amber-100 text-amber-800 px-3 py-1 text-xs font-medium">
                  About Riverdale Kenya Safaris
                </Badge>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-900 mb-4">
                Rooted in Kenya's Rich Heritage
              </h2>
              <p className="text-sm lg:text-base text-amber-800 mb-4 leading-relaxed">
                Born from the heart of Kenya, Riverdale celebrates the timeless beauty of our homeland. From the ancient
                migration routes of the Maasai Mara to the pristine shores of our Indian Ocean coast, we are your
                gateway to authentic Kenyan experiences.
              </p>
              <p className="text-sm lg:text-base text-amber-800 mb-6 leading-relaxed">
                Our name "Riverdale" reflects Kenya's life-giving rivers that nourish our diverse ecosystems. We believe
                every journey should flow naturally, connecting you with the soul of Kenya through genuine local
                expertise.
              </p>

              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span className="text-amber-800 text-sm">
                  Licensed Kenya Association of Tour Operators (KATO) Member
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span className="text-amber-800 text-sm">15+ Years of Safari Excellence in East Africa</span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span className="text-amber-800 text-sm">5000+ Satisfied Travelers from Around the World</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact">
                  <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-lg">
                    Plan Your Safari
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white bg-transparent px-6 py-2.5 rounded-lg"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 lg:bottom-6 right-4 lg:right-6 z-50 w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-amber-600 hover:bg-amber-700 shadow-2xl transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <ArrowUp className="w-4 lg:w-5 h-4 lg:h-5" />
        </Button>
      )}

      <Footer />
    </div>
  )
}
