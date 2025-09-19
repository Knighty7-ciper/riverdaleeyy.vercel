"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Search, Filter, X, MapPin } from "lucide-react"

interface SearchFiltersProps {
  onFiltersChange: (filters: SearchFilters) => void
  type: "destinations" | "hotels"
}

export interface SearchFilters {
  searchTerm: string
  location: string
  priceRange: [number, number]
  rating: number
  duration: string
  amenities: string[]
  category: string
}

export function SearchFilters({ onFiltersChange, type }: SearchFiltersProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    searchTerm: "",
    location: "",
    priceRange: [0, 100000],
    rating: 0,
    duration: "",
    amenities: [],
    category: "",
  })

  const [isExpanded, setIsExpanded] = useState(false)

  const updateFilters = (newFilters: Partial<SearchFilters>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    onFiltersChange(updatedFilters)
  }

  const clearFilters = () => {
    const clearedFilters: SearchFilters = {
      searchTerm: "",
      location: "",
      priceRange: [0, 100000],
      rating: 0,
      duration: "",
      amenities: [],
      category: "",
    }
    setFilters(clearedFilters)
    onFiltersChange(clearedFilters)
  }

  const hotelAmenities = [
    "Free WiFi",
    "Pool",
    "Spa",
    "Restaurant",
    "Gym",
    "Beach Access",
    "Business Center",
    "Room Service",
    "Airport Transfer",
    "Conference Facilities",
  ]

  const safariCategories = [
    "Wildlife Safari",
    "Beach Holiday",
    "Mountain Adventure",
    "Cultural Tour",
    "Photography Safari",
    "Luxury Safari",
  ]

  return (
    <Card className="bg-gradient-to-br from-white to-amber-50/50 border-2 border-amber-200 shadow-xl">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="font-serif text-xl text-amber-900 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center border-2 border-amber-200">
              <Filter className="w-4 h-4 text-amber-600" />
            </div>
            Search & Filter
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-amber-700 hover:text-orange-700 hover:bg-amber-100/60 font-medium"
          >
            {isExpanded ? "Less Filters" : "More Filters"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label htmlFor="search" className="text-amber-900 font-medium text-base mb-2 block">
            Search
          </Label>
          <div className="relative">
            <Search className="absolute left-4 top-4 w-5 h-5 text-amber-600" />
            <Input
              id="search"
              placeholder={`Search ${type === "destinations" ? "safari destinations" : "luxury hotels"}...`}
              value={filters.searchTerm}
              onChange={(e) => updateFilters({ searchTerm: e.target.value })}
              className="pl-12 h-12 border-2 border-amber-200 focus:border-amber-500 focus:ring-amber-500/20"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="location" className="text-amber-900 font-medium text-base mb-2 block">
            Location
          </Label>
          <Select value={filters.location} onValueChange={(value) => updateFilters({ location: value })}>
            <SelectTrigger className="h-12 border-2 border-amber-200 focus:border-amber-500 focus:ring-amber-500/20">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <SelectValue placeholder="Any location in Kenya" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any location</SelectItem>
              <SelectItem value="Nairobi">Nairobi</SelectItem>
              <SelectItem value="Diani Beach">Diani Beach</SelectItem>
              <SelectItem value="Maasai Mara">Maasai Mara</SelectItem>
              <SelectItem value="Mount Kenya">Mount Kenya</SelectItem>
              <SelectItem value="Amboseli">Amboseli</SelectItem>
              <SelectItem value="Westlands">Westlands</SelectItem>
              <SelectItem value="Karen">Karen</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-amber-900 font-medium text-base mb-3 block">Price Range (KSh)</Label>
          <div className="px-2">
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => updateFilters({ priceRange: value as [number, number] })}
              max={100000}
              min={0}
              step={1000}
              className="w-full [&_[role=slider]]:bg-amber-600 [&_[role=slider]]:border-amber-700 [&_.bg-primary]:bg-amber-600"
            />
            <div className="flex justify-between text-sm text-amber-700 mt-2 font-medium">
              <span>KSh {filters.priceRange[0].toLocaleString()}</span>
              <span>KSh {filters.priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="space-y-6 pt-4 border-t-2 border-amber-200">
            <div>
              <Label htmlFor="rating" className="text-amber-900 font-medium text-base mb-2 block">
                Minimum Rating
              </Label>
              <Select
                value={filters.rating.toString()}
                onValueChange={(value) => updateFilters({ rating: Number.parseInt(value) })}
              >
                <SelectTrigger className="h-12 border-2 border-amber-200 focus:border-amber-500 focus:ring-amber-500/20">
                  <SelectValue placeholder="Any rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any rating</SelectItem>
                  <SelectItem value="3">3+ stars</SelectItem>
                  <SelectItem value="4">4+ stars</SelectItem>
                  <SelectItem value="5">5 stars only</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {type === "destinations" && (
              <div>
                <Label htmlFor="duration" className="text-amber-900 font-medium text-base mb-2 block">
                  Safari Duration
                </Label>
                <Select value={filters.duration} onValueChange={(value) => updateFilters({ duration: value })}>
                  <SelectTrigger className="h-12 border-2 border-amber-200 focus:border-amber-500 focus:ring-amber-500/20">
                    <SelectValue placeholder="Any duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any duration</SelectItem>
                    <SelectItem value="1-2 Days">1-2 Days</SelectItem>
                    <SelectItem value="3-4 Days">3-4 Days</SelectItem>
                    <SelectItem value="5+ Days">5+ Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div>
              <Label htmlFor="category" className="text-amber-900 font-medium text-base mb-2 block">
                {type === "destinations" ? "Safari Category" : "Hotel Category"}
              </Label>
              <Select value={filters.category} onValueChange={(value) => updateFilters({ category: value })}>
                <SelectTrigger className="h-12 border-2 border-amber-200 focus:border-amber-500 focus:ring-amber-500/20">
                  <SelectValue placeholder="Any category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any category</SelectItem>
                  {(type === "destinations" ? safariCategories : ["Luxury", "Business", "Resort", "Boutique"]).map(
                    (category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
            </div>

            {type === "hotels" && (
              <div>
                <Label className="text-amber-900 font-medium text-base mb-3 block">Hotel Amenities</Label>
                <div className="grid grid-cols-2 gap-3">
                  {hotelAmenities.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-amber-50/50">
                      <Checkbox
                        id={amenity}
                        checked={filters.amenities.includes(amenity)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            updateFilters({ amenities: [...filters.amenities, amenity] })
                          } else {
                            updateFilters({ amenities: filters.amenities.filter((a) => a !== amenity) })
                          }
                        }}
                        className="border-2 border-amber-300 data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600"
                      />
                      <Label htmlFor={amenity} className="text-sm text-amber-800 font-medium cursor-pointer">
                        {amenity}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <Button
          variant="outline"
          onClick={clearFilters}
          className="w-full bg-transparent border-2 border-amber-300 text-amber-700 hover:bg-amber-100/60 hover:text-orange-700 font-semibold h-12"
        >
          <X className="w-5 h-5 mr-2" />
          Clear All Filters
        </Button>
      </CardContent>
    </Card>
  )
}
