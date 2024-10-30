import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import { LoadingSpinner } from '@/components/loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Service Delivery App',
  description: 'Book professional services at your doorstep',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<LoadingSpinner />}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}