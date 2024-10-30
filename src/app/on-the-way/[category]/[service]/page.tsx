'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ChevronLeft, MapPin, Phone, MessageSquare, Clock, User } from 'lucide-react'

export default function OnTheWayPage({ params }: { params: { category: string, service: string } }) {
  const router = useRouter()
  const { category, service } = params
  const [arrivalTime, setArrivalTime] = useState('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Generate a random arrival time between 15 and 45 minutes
    const minutes = Math.floor(Math.random() * 31) + 15
    const now = new Date()
    now.setMinutes(now.getMinutes() + minutes)
    setArrivalTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))

    // Simulate progress updates
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

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
            <h1 className="text-xl font-semibold ml-2 text-black">Service Status</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-xl mx-auto pt-16 pb-20 px-4">
        {/* Progress Bar */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-black">Professional on the way</h2>
            <Clock className="h-5 w-5 text-[#06C167]" />
          </div>
          <div className="h-2 bg-gray-100 rounded-full mb-4">
            <div 
              className="h-full bg-[#06C167] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#06C167] font-medium">On the way</span>
            <span className="text-black font-medium">Arriving at {arrivalTime}</span>
          </div>
        </div>

        {/* Service Provider Info */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-gray-500" />
            </div>
            <div>
              <h3 className="font-semibold text-black">John Smith</h3>
              <p className="text-sm text-gray-500">Professional {category.replace('-', ' ')}</p>
              <div className="flex items-center mt-1">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#06C167] rounded-full mr-2" />
                  <span className="text-sm text-[#06C167]">Available</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Options */}
          <div className="grid grid-cols-2 gap-4">
            <Button 
              variant="outline" 
              className="h-12 space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>Call</span>
            </Button>
            <Button 
              variant="outline"
              className="h-12 space-x-2"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Message</span>
            </Button>
          </div>
        </div>

        {/* Service Details */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold text-black mb-4">Service Details</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-black">Service Location</p>
                <p className="text-sm text-gray-500">123 Main Street, Tel Aviv</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-black">Service</p>
                <p className="text-sm text-gray-500">{decodeURIComponent(service)}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-xl mx-auto">
          <Button 
            className="w-full h-14 text-lg font-semibold bg-black text-white hover:bg-gray-900"
            onClick={() => router.push(`/review/${category}/${service}`)}
          >
            Service Completed
          </Button>
        </div>
      </div>
    </div>
  )
}