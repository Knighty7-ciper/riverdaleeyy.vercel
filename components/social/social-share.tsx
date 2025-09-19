"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, MessageCircle, Mail, Share2, Copy, Check } from "lucide-react"

interface SocialShareProps {
  url: string
  title: string
  description: string
  image?: string
  hashtags?: string[]
}

export function SocialShare({ url, title, description, image, hashtags = [] }: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)
  const encodedImage = image ? encodeURIComponent(image) : ""
  const hashtagString = hashtags.length > 0 ? encodeURIComponent(hashtags.join(" ")) : ""

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${hashtagString}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${url}`,
  }

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], "_blank", "width=600,height=400")
    setIsOpen(false)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        })
      } catch (err) {
        console.error("Error sharing:", err)
      }
    } else {
      setIsOpen(!isOpen)
    }
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={handleNativeShare}
        className="flex items-center gap-2 bg-transparent"
      >
        <Share2 className="w-4 h-4" />
        Share
      </Button>

      {isOpen && (
        <Card className="absolute top-full right-0 mt-2 w-64 z-50 shadow-lg">
          <CardContent className="p-4">
            <h4 className="font-medium mb-3">Share this experience</h4>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("facebook")}
                className="flex items-center gap-2 justify-start"
              >
                <Facebook className="w-4 h-4 text-blue-600" />
                Facebook
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("twitter")}
                className="flex items-center gap-2 justify-start"
              >
                <Twitter className="w-4 h-4 text-blue-400" />
                Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("whatsapp")}
                className="flex items-center gap-2 justify-start"
              >
                <MessageCircle className="w-4 h-4 text-green-600" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("email")}
                className="flex items-center gap-2 justify-start"
              >
                <Mail className="w-4 h-4 text-gray-600" />
                Email
              </Button>
            </div>

            <div className="mt-3 pt-3 border-t">
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="w-full flex items-center gap-2 justify-center bg-transparent"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Link
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  )
}
