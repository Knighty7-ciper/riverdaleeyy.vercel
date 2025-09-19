"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Clock, MapPin } from "lucide-react"

interface WhatsAppWidgetProps {
  phoneNumber?: string
  businessName?: string
}

export function WhatsAppWidget({
  phoneNumber = "+254700123456",
  businessName = "Riverdale Kenya Safaris",
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)

  const quickMessages = [
    {
      title: "🦁 Safari Booking Inquiry",
      message:
        "Jambo! I'm interested in booking a luxury safari package to Maasai Mara. Can you help me with pricing and availability?",
      icon: "🦁",
    },
    {
      title: "🏨 Luxury Hotel Reservation",
      message:
        "Hello! I'd like to inquire about luxury hotel accommodations in Kenya. What premium options do you have available?",
      icon: "🏨",
    },
    {
      title: "✨ Custom Safari Package",
      message:
        "Jambo! I'm looking for a bespoke safari experience for my family. Can we discuss creating a custom itinerary?",
      icon: "✨",
    },
    {
      title: "🇰🇪 Kenya Travel Information",
      message:
        "Hello! I have questions about traveling to Kenya - visa requirements, best time to visit, and cultural experiences. Can you help?",
      icon: "🇰🇪",
    },
  ]

  const sendWhatsAppMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <div className="relative">
            <Button
              onClick={() => setIsOpen(true)}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 animate-bounce border-4 border-white"
              size="icon"
            >
              <MessageCircle className="w-8 h-8" />
            </Button>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <div className="absolute -top-12 right-0 bg-amber-900 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
              Chat with Safari Expert
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-amber-900"></div>
            </div>
          </div>
        )}

        {isOpen && (
          <Card className="w-96 shadow-2xl border-2 border-amber-200 overflow-hidden bg-gradient-to-b from-white to-amber-50/30">
            <CardHeader className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-serif font-semibold">{businessName}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-green-100">
                      <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                      <span className="font-medium">Safari Expert Online</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-10 w-10 rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 border-b-2 border-amber-200">
                <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-amber-200">
                  <p className="text-base text-amber-900 mb-2 font-medium">🦁 Jambo! Welcome to {businessName}</p>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    Ready to embark on your dream Kenyan safari adventure? Our expert team is here to create your
                    perfect wildlife experience!
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-amber-600">
                    <MapPin className="w-3 h-3" />
                    <span className="font-medium">Based in Nairobi, Kenya</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-3 max-h-72 overflow-y-auto">
                <p className="text-sm text-amber-800 mb-4 font-semibold">Choose your safari inquiry:</p>
                {quickMessages.map((msg, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full text-left justify-start h-auto p-4 bg-gradient-to-r from-white to-amber-50/50 border-2 border-amber-200 hover:from-amber-50 hover:to-orange-50 hover:border-amber-300 transition-all duration-200"
                    onClick={() => sendWhatsAppMessage(msg.message)}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{msg.icon}</span>
                      <div>
                        <div className="font-semibold text-amber-900 text-sm">{msg.title}</div>
                        <div className="text-amber-700 mt-1 text-xs leading-relaxed line-clamp-2">{msg.message}</div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-t-2 border-amber-200">
                <div className="flex items-center gap-3 text-sm text-amber-700 mb-4 p-3 bg-white/60 rounded-lg border border-amber-200">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span className="font-medium">Our safari experts typically reply within 5 minutes</span>
                </div>
                <Button
                  onClick={() =>
                    sendWhatsAppMessage(
                      "Jambo! I'm interested in planning a luxury safari experience in Kenya. Can you help me get started?",
                    )
                  }
                  className="w-full bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white font-semibold h-12 shadow-lg hover:shadow-xl transition-all duration-200"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Start Safari Planning Chat
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  )
}
