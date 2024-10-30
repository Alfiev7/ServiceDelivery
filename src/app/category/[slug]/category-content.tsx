'use client'

import { Button } from "@/components/ui/button"
import { ChevronLeft, Clock, Star, ChevronRight, Shield } from 'lucide-react'
import Link from 'next/link'
import { subCategories } from './data.ts'

export function CategoryContent({ slug }: { slug: string }) {
  const services = subCategories[slug] || []

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white z-10 shadow-sm">
        <div className="max-w-xl mx-auto px-4">
          <div className="flex items-center h-14">
            <Link href="/">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-black hover:bg-gray-100 -ml-3"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold ml-2 text-black capitalize">
              {slug.replace('-', ' ')}
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
            <Link
              key={service.name}
              href={`/subcategory/${slug}/${encodeURIComponent(service.name)}`}
              className="block"
            >
              <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
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
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}