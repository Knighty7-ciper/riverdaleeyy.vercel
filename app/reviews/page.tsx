"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Search, MapPin, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Footer from "@/components/layout/footer"

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterRating, setFilterRating] = useState("all")
  const [filterDestination, setFilterDestination] = useState("all")

  // Mock reviews data - will be replaced with Supabase data
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "London, UK",
      rating: 5,
      date: "December 2024",
      destination: "Maasai Mara Safari",
      title: "Absolutely Incredible Experience!",
      content:
        "Our 5-day safari with Riverdale was beyond our wildest dreams. The guides were knowledgeable, the accommodations were luxurious, and seeing the Great Migration was a once-in-a-lifetime experience. Every detail was perfectly planned.",
      verified: true,
      images: ["/maasai-mara-safari.png"],
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      date: "November 2024",
      destination: "Mount Kenya Climbing",
      title: "Professional and Safe Adventure",
      content:
        "The Mount Kenya climbing expedition was challenging but incredibly rewarding. Our guides prioritized safety while ensuring we had an amazing experience. The views from Point Lenana were breathtaking!",
      verified: true,
      images: ["/mount-kenya-hikers.png"],
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      date: "October 2024",
      destination: "Diani Beach Getaway",
      title: "Perfect Beach Holiday",
      content:
        "Diani Beach was paradise! The resort was beautiful, the staff was friendly, and the activities were perfectly organized. The dhow cruise at sunset was magical. Highly recommend Riverdale for beach holidays!",
      verified: true,
      images: ["/diani-beach-kenya.png"],
    },
    {
      id: 4,
      name: "James Wilson",
      location: "Toronto, Canada",
      rating: 4,
      date: "September 2024",
      destination: "Amboseli National Park",
      title: "Great Wildlife Experience",
      content:
        "Excellent safari experience with amazing views of Mount Kilimanjaro. Saw lots of elephants and other wildlife. The only minor issue was some delays in the schedule, but overall a fantastic trip.",
      verified: true,
      images: ["/amboseli-elephants-kilimanjaro.png"],
    },
  ]

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.destination.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRating = filterRating === "all" || review.rating.toString() === filterRating
    const matchesDestination =
      filterDestination === "all" || review.destination.toLowerCase().includes(filterDestination.toLowerCase())

    return matchesSearch && matchesRating && matchesDestination
  })

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  const totalReviews = reviews.length

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Customer Reviews</h1>
          <p className="text-lg text-muted-foreground mb-6">See what our travelers say about their Kenya adventures</p>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">{averageRating.toFixed(1)}</div>
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(averageRating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{totalReviews}+</div>
              <div className="text-sm text-muted-foreground">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search reviews..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterRating} onValueChange={setFilterRating}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4 Stars</SelectItem>
                <SelectItem value="3">3 Stars</SelectItem>
                <SelectItem value="2">2 Stars</SelectItem>
                <SelectItem value="1">1 Star</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterDestination} onValueChange={setFilterDestination}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Destinations</SelectItem>
                <SelectItem value="safari">Safari Tours</SelectItem>
                <SelectItem value="beach">Beach Holidays</SelectItem>
                <SelectItem value="mountain">Mountain Adventures</SelectItem>
                <SelectItem value="cultural">Cultural Tours</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {filteredReviews.map((review) => (
            <Card key={review.id} className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{review.name}</h3>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {review.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {review.date}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <Badge variant="outline" className="mb-3">
                      {review.destination}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl">{review.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">{review.content}</p>
                {review.images && review.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-2">
                    {review.images.map((image, index) => (
                      <img
                        key={index}
                        src={image || "/placeholder.svg"}
                        alt={`Review image ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
              <p className="text-muted-foreground mb-6">
                Have you traveled with us? We'd love to hear about your Kenya adventure!
              </p>
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Write a Review
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
