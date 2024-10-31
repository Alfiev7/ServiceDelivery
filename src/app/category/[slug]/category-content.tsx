'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { ChevronLeft, Star, Clock, MapPin, Search, Filter, Home, Menu, User, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import { subCategories } from './data'

interface CategoryContentProps {
  slug: string;
}

export function CategoryContent({ slug }: CategoryContentProps) {
  const [activeFilter, setActiveFilter] = useState('Recommended')
  const services = subCategories[slug] || []

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white z-10 px-4 py-3 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Button variant="ghost" size="icon" className="text-gray-600">
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </Link>
            <h1 className="ml-4 text-lg font-semibold text-gray-900 capitalize">{slug.replace('-', ' ')}</h1>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="text-gray-600">
              <Search className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-600">
              <Filter className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-16 pb-20 px-4">
        {/* Map Preview */}
        <div className="relative h-48 bg-gray-200 rounded-xl mb-4 overflow-hidden">
          <Image
            src="https://picsum.photos/seed/map/800/400"
            alt="Map"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 rounded-full px-3 py-1 text-sm">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4 text-blue-500" />
              <span>1.2 km</span>
              <span className="mx-1">•</span>
              <span>15 minutes</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex overflow-x-auto pb-4 mb-6">
          {['Recommended', 'Top Rated', 'Nearest', 'Price: Low to High', 'Price: High to Low'].map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              className="mr-2 whitespace-nowrap"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Services List */}
        <div className="space-y-4">
          {services.map((service) => (
            <Link
              key={service.name}
              href={`/subcategory/${slug}/${encodeURIComponent(service.name)}`}
              className="block bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <Image
                    src={`https://picsum.photos/seed/${service.name}/200/200`}
                    alt={service.name}
                    width={100}
                    height={100}
                    className="h-full w-24 object-cover"
                  />
                </div>
                <div className="flex-1 p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{service.name}</h3>
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium text-gray-700">4.8</span>
                    <span className="ml-1 text-sm text-gray-500">(120 reviews)</span>
                  </div>
                  <p className="text-gray-600 text-sm">{service.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10 shadow-lg">
        <div className="flex justify-around py-2">
          <Button variant="ghost" size="sm" className="flex flex-col items-center text-gray-600">
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