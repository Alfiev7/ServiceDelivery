import { Suspense } from 'react'
import { PaymentContent } from './payment-content'
import { LoadingSpinner } from '@/components/loading'

interface PageProps {
  params: Promise<{ category: string; service: string; price: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function PaymentPage({
  params,
  searchParams,
}: PageProps) {
  try {
    const resolvedParams = await params;
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <PaymentContent 
          category={resolvedParams.category}
          service={resolvedParams.service}
          price={resolvedParams.price}
        />
      </Suspense>
    )
  } catch (error) {
    console.error('Error loading payment:', error);
    return <div>Error loading payment</div>;
  }
}

export const dynamic = 'force-dynamic'