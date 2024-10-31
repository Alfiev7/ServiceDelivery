'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { MapPin, Bell, Search, Home, Menu, User, ShoppingBag, ImageIcon, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const categories = [
  { name: "Cleaner", icon: "🧹", link: "cleaner" },
  { name: "Handyman", icon: "🔧", link: "handyman" },
  { name: "Plumber", icon: "🚰", link: "plumber" },
  { name: "AC Tech", icon: "❄️", link: "aircon-technician" },
  { name: "Electric", icon: "⚡", link: "electrician" },
  { name: "Tire", icon: "🚗", link: "tire-change" },
  { name: "Paint", icon: "🎨", link: "painter" },
  { name: "Garden", icon: "🌿", link: "gardener" },
]

const featuredServices = [
  {
    name: "Premium Cleaning Service",
    rating: 4.8,
    distance: "1.2 km",
    time: "30-45 minutes",
    image: "https://picsum.photos/seed/cleaning/600/400"
  },
  {
    name: "Expert Handyman Solutions",
    rating: 4.9,
    distance: "2.1 km",
    time: "25-40 minutes",
    image: "https://picsum.photos/seed/handyman/600/400"
  }
]

const ImageWithFallback = ({ src, alt, ...props }) => {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-gray-100">
        <ImageIcon className="w-12 h-12 text-gray-400" />
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      {...props}
      onError={() => setError(true)}
    />
  )
}

export default function HomePage() {
  const [location, setLocation] = useState("Tel Aviv")

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Status Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white z-20 px-4 py-3 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Search className="h-6 w-6 text-gray-600" />
            <div>
              <p className="text-xs text-gray-500">Current location</p>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4 text-blue-500" />
                <p className="font-medium text-gray-800">{location}</p>
              </div>
            </div>
          </div>
          <Bell className="h-6 w-6 text-gray-600" />
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-16 pb-20 px-4">
        {/* Promo Banner */}
        <div className="bg-blue-600 rounded-xl overflow-hidden shadow-lg mt-4 mb-6">
          <div className="relative h-48">
            <ImageWithFallback
              src="https://picsum.photos/seed/service-promo/800/400"
              alt="Service Promo"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="p-6 w-2/3">
                <h2 className="text-2xl font-bold mb-4 text-white drop-shadow-md">Claim your daily service discount now!</h2>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-6 py-2 font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center">
                  Book now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {categories.map((category) => (
            <Link 
              key={category.name}
              href={`/category/${category.link}`}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-2">
                <span className="text-2xl">{category.icon}</span>
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">{category.name}</span>
            </Link>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Featured</h2>
          <div className="space-y-4">
            {featuredServices.map((service) => (
              <div 
                key={service.name}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">{service.name}</h3>
                    <div className="flex items-center space-x-1 bg-yellow-100 px-2 py-1 rounded-full">
                      <span className="text-sm">⭐</span>
                      <span className="text-sm font-medium text-gray-800">{service.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>{service.distance}</span>
                    <span className="mx-2">•</span>
                    <span>{service.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20 shadow-lg">
        <div className="flex justify-around py-2">
          <Button variant="ghost" size="sm" className="flex flex-col items-center text-blue-600">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center text-gray-600">
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xs mt-1">Orders</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center text-gray-600">
            <Menu className="h-6 w-6" />
            <span className="text-xs mt-1">Menu</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center text-gray-600">
            <User className="h-6 w-6" />
            <span className="text-xs mt-1">Account</span>
          </Button>
        </div>
      </div>
    </div>
  )
}