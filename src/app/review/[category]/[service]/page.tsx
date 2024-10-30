import { Suspense } from 'react'
import { ReviewContent } from './review-content'
import { LoadingSpinner } from '@/components/loading'

interface PageProps {
  params: Promise<{ category: string; service: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ReviewPage({
  params,
  searchParams,
}: PageProps) {
  try {
    const resolvedParams = await params;
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <ReviewContent 
          category={resolvedParams.category}
          service={resolvedParams.service}
        />
      </Suspense>
    )
  } catch (error) {
    console.error('Error loading review:', error);
    return <div>Error loading review</div>;
  }
}

export const dynamic = 'force-dynamic'