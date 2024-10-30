'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { MapPin, Search, Clock, ChevronRight } from 'lucide-react'

const mainCategories = [
  {
    name: "Cleaner",
    description: "Professional cleaning services",
    icon: "🧹",
    eta: "Arrives in 30 min"
  },
  {
    name: "Handyman",
    description: "Expert repairs and installations",
    icon: "🔧",
    eta: "Arrives in 45 min"
  },
  {
    name: "Plumber",
    description: "Quick solutions for plumbing needs",
    icon: "🚰",
    eta: "Arrives in 35 min"
  },
  {
    name: "Aircon Technician",
    description: "AC repairs and maintenance",
    icon: "❄️",
    eta: "Arrives in 40 min"
  },
  {
    name: "Electrician",
    description: "Professional electrical services",
    icon: "⚡",
    eta: "Arrives in 30 min"
  },
  {
    name: "Tire Change",
    description: "Mobile tire change and repair",
    icon: "🚗",
    eta: "Arrives in 25 min"
  }
]

export default function HomePage() {
  const [location, setLocation] = useState("Tel Aviv")

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white z-10">
        <div className="max-w-xl mx-auto px-4 py-2">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 bg-[#EEEEEE] rounded-full px-4 py-2.5">
                <MapPin className="h-5 w-5 text-black" />
                <input
                  type="text"
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-transparent border-none focus:outline-none text-black placeholder:text-gray-500 w-full"
                />
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full bg-[#EEEEEE] h-12 w-12"
            >
              <Search className="h-5 w-5 text-black" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-xl mx-auto pt-20 pb-20 px-4">
        <h1 className="text-2xl font-bold text-black mb-2">Services</h1>
        <p className="text-gray-500 mb-6">Book professional services at your doorstep</p>

        <div className="space-y-4">
          {mainCategories.map((category) => (
            <Link 
              href={`/category/${category.name.toLowerCase().replace(' ', '-')}`} 
              key={category.name}
              className="block"
            >
              <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{category.icon}</div>
                    <div>
                      <h2 className="font-semibold text-black">{category.name}</h2>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock className="h-4 w-4 text-[#06C167]" />
                        <span className="text-sm text-[#06C167]">{category.eta}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}