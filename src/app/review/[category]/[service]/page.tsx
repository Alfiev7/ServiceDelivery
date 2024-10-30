'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, Star, User } from 'lucide-react'

export default function ReviewPage({ params }: { params: { category: string, service: string } }) {
  const router = useRouter()
  const { category, service } = params
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')
  const [hoveredRating, setHoveredRating] = useState(0)

  const handleSubmit = () => {
    // In a real app, you would submit the review here
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white z-10 shadow-sm">
        <div className="max-w-xl mx-auto px-4">
          <div className="flex items-center h-14">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => router.back()}
              className="text-black hover:bg-gray-100 -ml-3"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <h1 className="text-xl font-semibold ml-2 text-black">Rate & Review</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-xl mx-auto pt-16 pb-20 px-4">
        {/* Service Provider Info */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-gray-500" />
            </div>
            <div>
              <h3 className="font-semibold text-black">John Smith</h3>
              <p className="text-sm text-gray-500">Professional {category.replace('-', ' ')}</p>
            </div>
          </div>
        </div>

        {/* Rating Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h3 className="text-lg font-semibold text-black mb-4">How was your service?</h3>
          <div className="flex justify-center space-x-2 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="focus:outline-none"
              >
                <Star
                  className={`w-12 h-12 transition-colors ${
                    star <= (hoveredRating || rating)
                      ? 'text-[#06C167] fill-[#06C167]'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
          <Textarea
            placeholder="Tell us about your experience..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="min-h-[120px] resize-none"
          />
        </div>

        {/* Service Details */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold text-black mb-4">Service Details</h3>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">Service Type</p>
            <p className="text-sm font-medium text-black mb-4">{decodeURIComponent(service)}</p>
            <p className="text-sm text-gray-500">Date</p>
            <p className="text-sm font-medium text-black">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </main>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-xl mx-auto">
          <Button 
            className="w-full h-14 text-lg font-semibold bg-black text-white hover:bg-gray-900"
            onClick={handleSubmit}
            disabled={!rating}
          >
            Submit Review
          </Button>
        </div>
      </div>
    </div>
  )
}