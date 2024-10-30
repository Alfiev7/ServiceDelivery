'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronLeft, CreditCard } from 'lucide-react'

interface PaymentContentProps {
  category: string;
  service: string;
  price: string;
}

export function PaymentContent({ category, service, price }: PaymentContentProps) {
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white z-10 shadow-sm">
        <div className="max-w-xl mx-auto px-4">
          <div className="flex items-center h-14">
            <Link href={`/subcategory/${category}/${service}`}>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-black hover:bg-gray-100 -ml-3"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold ml-2 text-black">Payment</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-xl mx-auto pt-16 pb-20 px-4">
        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-black mb-4">Order Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">{decodeURIComponent(service)}</span>
              <span className="text-black font-medium">${price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Service Fee</span>
              <span className="text-black font-medium">$2.99</span>
            </div>
            <div className="pt-3 border-t border-gray-100 flex justify-between">
              <span className="font-semibold text-black">Total</span>
              <span className="font-semibold text-black">${Number(price) + 2.99}</span>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-6">
            <CreditCard className="h-5 w-5 text-[#06C167]" />
            <h2 className="text-lg font-semibold text-black">Payment Method</h2>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Card Number
              </label>
              <Input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="h-12"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Expiry Date
                </label>
                <Input
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="h-12"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  CVV
                </label>
                <Input
                  type="text"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="h-12"
                />
              </div>
            </div>
          </form>
        </div>
      </main>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-xl mx-auto">
          <Link href={`/on-the-way/${category}/${service}`}>
            <Button 
              className="w-full h-14 text-lg font-semibold bg-black text-white hover:bg-gray-900"
            >
              Pay ${Number(price) + 2.99}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}