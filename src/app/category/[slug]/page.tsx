'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ChevronLeft, Clock, Star, ChevronRight, Shield } from 'lucide-react'

// Define the type for a service
type Service = {
  name: string;
  price: string;
  rating: number;
  time: string;
}

// Define the type for the categories
type Categories = {
  [key: string]: Service[];
}

// Define the subCategories object first
const subCategories: Categories = {
  cleaner: [
    { name: "Deep cleaning", price: "From $80", rating: 4.8, time: "2-3 hours" },
    { name: "Carpet and upholstery cleaning", price: "From $60", rating: 4.7, time: "1-2 hours" },
    { name: "Window washing", price: "From $40", rating: 4.9, time: "1 hour" },
    { name: "Floor polishing and waxing", price: "From $100", rating: 4.6, time: "3-4 hours" },
    { name: "Move-in/move-out cleaning", price: "From $150", rating: 4.8, time: "4-5 hours" },
    { name: "Post-renovation cleanup", price: "From $120", rating: 4.7, time: "3-4 hours" },
    { name: "Office/commercial cleaning", price: "From $100", rating: 4.9, time: "2-3 hours" },
    { name: "Appliance cleaning", price: "From $50", rating: 4.8, time: "1-2 hours" },
    { name: "Disinfection services", price: "From $70", rating: 4.9, time: "1-2 hours" },
    { name: "Regular/recurring cleaning", price: "From $60", rating: 4.8, time: "2-3 hours" }
  ],
  handyman: [
    { name: "TV Mounting and Installation", price: "From $70", rating: 4.7, time: "1-2 hours" },
    { name: "Furniture Assembly", price: "From $60", rating: 4.8, time: "1-3 hours" },
    { name: "Wall Repairs", price: "From $80", rating: 4.6, time: "2-3 hours" },
    { name: "Picture and Mirror Hanging", price: "From $40", rating: 4.9, time: "1 hour" },
    { name: "Lighting Installation", price: "From $90", rating: 4.7, time: "1-2 hours" },
    { name: "Smart Home Device Setup", price: "From $65", rating: 4.8, time: "1-2 hours" }
  ],
  plumber: [
    { name: "Faucet installation and repair", price: "From $70", rating: 4.8, time: "1-2 hours" },
    { name: "Toilet installation and repair", price: "From $120", rating: 4.7, time: "2-3 hours" },
    { name: "Leak detection and repair", price: "From $90", rating: 4.9, time: "1-2 hours" },
    { name: "Water heater installation/repair", price: "From $150", rating: 4.6, time: "2-4 hours" },
    { name: "Drain cleaning and unclogging", price: "From $80", rating: 4.8, time: "1-2 hours" },
    { name: "Showerhead and tap replacement", price: "From $60", rating: 4.7, time: "1 hour" },
    { name: "Garbage disposal repair", price: "From $85", rating: 4.8, time: "1-2 hours" },
    { name: "Pipe insulation and replacement", price: "From $100", rating: 4.7, time: "2-3 hours" },
    { name: "Water filtration system installation", price: "From $200", rating: 4.9, time: "3-4 hours" },
    { name: "Dishwasher and washing machine hookup", price: "From $90", rating: 4.8, time: "1-2 hours" }
  ],
  "aircon-technician": [
    { name: "AC installation", price: "From $300", rating: 4.8, time: "3-4 hours" },
    { name: "Routine AC maintenance", price: "From $80", rating: 4.9, time: "1-2 hours" },
    { name: "Filter cleaning and replacement", price: "From $50", rating: 4.7, time: "1 hour" },
    { name: "Thermostat installation", price: "From $90", rating: 4.8, time: "1-2 hours" },
    { name: "Ductwork cleaning", price: "From $150", rating: 4.6, time: "2-3 hours" },
    { name: "AC repair", price: "From $100", rating: 4.8, time: "1-3 hours" },
    { name: "Compressor repair", price: "From $200", rating: 4.7, time: "2-4 hours" },
    { name: "Seasonal maintenance", price: "From $120", rating: 4.9, time: "2-3 hours" },
    { name: "Ventilation repair", price: "From $90", rating: 4.8, time: "1-2 hours" }
  ],
  electrician: [
    { name: "Electrical troubleshooting", price: "From $80", rating: 4.8, time: "1-2 hours" },
    { name: "Outlet installation", price: "From $60", rating: 4.7, time: "1 hour" },
    { name: "Ceiling fan installation", price: "From $100", rating: 4.9, time: "2-3 hours" },
    { name: "Lighting installation", price: "From $85", rating: 4.8, time: "1-2 hours" },
    { name: "Circuit breaker replacement", price: "From $120", rating: 4.7, time: "2-3 hours" },
    { name: "Surge protection", price: "From $90", rating: 4.8, time: "1-2 hours" },
    { name: "Smart device installation", price: "From $70", rating: 4.9, time: "1-2 hours" },
    { name: "Home wiring inspection", price: "From $150", rating: 4.8, time: "2-3 hours" },
    { name: "Generator installation", price: "From $300", rating: 4.7, time: "4-6 hours" },
    { name: "Smoke detector installation", price: "From $60", rating: 4.9, time: "1 hour" }
  ],
  "tire-change": [
    { name: "Flat tire replacement", price: "From $50", rating: 4.8, time: "30 mins" },
    { name: "Tire rotation", price: "From $40", rating: 4.7, time: "45 mins" },
    { name: "Seasonal tire change", price: "From $80", rating: 4.9, time: "1 hour" },
    { name: "On-site tire repair", price: "From $45", rating: 4.8, time: "30-45 mins" },
    { name: "Tire balancing", price: "From $60", rating: 4.7, time: "1 hour" },
    { name: "New tire installation", price: "From $100", rating: 4.8, time: "1-2 hours" },
    { name: "TPMS service", price: "From $40", rating: 4.9, time: "30 mins" },
    { name: "Tire pressure check", price: "From $20", rating: 4.8, time: "15 mins" },
    { name: "Wheel alignment", price: "From $80", rating: 4.7, time: "1 hour" },
    { name: "Emergency roadside assistance", price: "From $70", rating: 4.9, time: "30-60 mins" }
  ]
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const category = params.slug
  const services = subCategories[category] || []

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
            <h1 className="text-xl font-semibold ml-2 text-black capitalize">
              {category.replace('-', ' ')}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-xl mx-auto pt-16 pb-20 px-4">
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex items-center space-x-2 text-[#06C167]">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">All services are verified</span>
          </div>
        </div>

        <div className="space-y-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => router.push(`/subcategory/${category}/${encodeURIComponent(service.name)}`)}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h2 className="font-semibold text-black">{service.name}</h2>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-[#06C167] mr-1" />
                      <span className="text-sm text-black">{service.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{service.time}</span>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-black">{service.price}</div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}