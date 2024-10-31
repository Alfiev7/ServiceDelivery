'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ChevronLeft, Star, Clock, Shield, CheckCircle, MapPin } from 'lucide-react'

interface SubCategoryContentProps {
  category: string;
  service: string;
}

export function SubCategoryContent({ category, service }: SubCategoryContentProps) {
  const price = Math.floor(Math.random() * 100) + 50

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white z-10 shadow-sm">
        <div className="max-w-xl mx-auto px-4">
          <div className="flex items-center h-14">
            <Link href={`/category/${category}`}>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-black hover:bg-gray-100 -ml-3"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold ml-2 text-black">Service Details</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-xl mx-auto pt-16 pb-20 px-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Service Info */}
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-black mb-2">{decodeURIComponent(service)}</h2>
            <div className="flex flex-col space-y-2 mb-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-[#06C167] mr-1" />
                <span className="text-sm font-medium text-gray-700">4.8</span>
                <span className="text-sm text-gray-500 ml-1">(2.5k reviews)</span>
              </div>
              <div className="flex items-center text-gray-500">
                <Clock className="h-5 w-5 mr-1" />
                <span className="text-sm">35-45 min</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-[#06C167] mb-4">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">Professional service guarantee</span>
            </div>
            <div className="text-3xl font-bold text-black">${price}</div>
          </div>

          {/* Location */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-[#06C167]" />
              <div>
                <h3 className="font-semibold text-black">Service Location</h3>
                <p className="text-sm text-gray-600">Tel Aviv, Israel</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="p-6">
            <h3 className="font-semibold text-black mb-4">Service Includes</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-[#06C167]" />
                <span className="text-sm text-gray-600">Professional equipment and supplies</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-[#06C167]" />
                <span className="text-sm text-gray-600">Experienced and vetted professional</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-[#06C167]" />
                <span className="text-sm text-gray-600">100% satisfaction guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-xl mx-auto">
          <Link href={`/payment/${category}/${service}/${price}`}>
            <Button 
              className="w-full h-14 text-lg font-semibold bg-black text-white hover:bg-gray-900"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}