"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ReviewCard } from "./review-card"
import { Star, MessageSquare } from "lucide-react"

interface Review {
  id: string
  customerName: string
  destination: string
  rating: number
  comment: string
  date: string
  verified: boolean
}

interface ReviewsSectionProps {
  destination?: string
  limit?: number
}

export function ReviewsSection({ destination, limit }: ReviewsSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    loadReviews()
  }, [])

  const loadReviews = () => {
    const defaultReviews: Review[] = [
      {
        id: "rev-1",
        customerName: "Sarah Johnson",
        destination: "Maasai Mara Safari",
        rating: 5,
        comment:
          "Absolutely incredible experience! Our guide was knowledgeable and we saw the Big Five. The accommodation was comfortable and the food was excellent. Riverdale Travel made everything seamless.",
        date: "2024-01-15",
        verified: true,
      },
      {
        id: "rev-2",
        customerName: "Michael Chen",
        destination: "Diani Beach Getaway",
        rating: 5,
        comment:
          "Perfect beach holiday! The resort was beautiful, staff were friendly, and the beach was pristine. Great value for money and excellent service from booking to checkout.",
        date: "2024-01-10",
        verified: true,
      },
      {
        id: "rev-3",
        customerName: "Emma Thompson",
        destination: "Mount Kenya Adventure",
        rating: 4,
        comment:
          "Challenging but rewarding hike! The guides were experienced and safety-conscious. Beautiful scenery and well-organized logistics. Would recommend for adventure seekers.",
        date: "2024-01-08",
        verified: true,
      },
      {
        id: "rev-4",
        customerName: "David Ochieng",
        destination: "Amboseli Elephant Safari",
        rating: 5,
        comment:
          "Amazing elephant encounters with Kilimanjaro in the background! Professional guides, comfortable vehicles, and unforgettable wildlife viewing. Highly recommended!",
        date: "2024-01-05",
        verified: true,
      },
      {
        id: "rev-5",
        customerName: "Lisa Martinez",
        destination: "Sarova Stanley Hotel",
        rating: 4,
        comment:
          "Historic hotel with great location in Nairobi. Excellent service, comfortable rooms, and good restaurant. Perfect for business or leisure stays.",
        date: "2024-01-03",
        verified: true,
      },
      {
        id: "rev-6",
        customerName: "James Wilson",
        destination: "Serena Beach Resort & Spa",
        rating: 5,
        comment:
          "Luxury beachfront experience! Spa treatments were amazing, food was diverse and delicious, and the beach access was perfect. Worth every penny!",
        date: "2023-12-28",
        verified: true,
      },
    ]

    const storedReviews = localStorage.getItem("customerReviews")
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews))
    } else {
      localStorage.setItem("customerReviews", JSON.stringify(defaultReviews))
      setReviews(defaultReviews)
    }
  }

  const filteredReviews = destination ? reviews.filter((review) => review.destination === destination) : reviews

  const displayedReviews = limit && !showAll ? filteredReviews.slice(0, limit) : filteredReviews

  const averageRating =
    filteredReviews.length > 0
      ? filteredReviews.reduce((sum, review) => sum + review.rating, 0) / filteredReviews.length
      : 0

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
      />
    ))
  }

  if (filteredReviews.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="font-medium text-lg mb-2">No Reviews Yet</h3>
          <p className="text-muted-foreground">Be the first to share your experience!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-xl flex items-center gap-2">
            <Star className="w-6 h-6 text-amber-500" />
            Customer Reviews
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="flex">{renderStars(averageRating)}</div>
              <span className="text-2xl font-bold">{averageRating.toFixed(1)}</span>
              <span className="text-muted-foreground">({filteredReviews.length} reviews)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {limit && filteredReviews.length > limit && (
        <div className="text-center">
          <Button variant="outline" onClick={() => setShowAll(!showAll)} className="bg-transparent">
            {showAll ? "Show Less" : `Show All ${filteredReviews.length} Reviews`}
          </Button>
        </div>
      )}
    </div>
  )
}
