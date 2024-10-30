import { Suspense } from 'react'
import { OnTheWayContent } from './on-the-way-content'

interface PageProps {
  params: Promise<{ category: string; service: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function OnTheWayPage({
  params,
  searchParams,
}: PageProps) {
  try {
    const resolvedParams = await params;
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <OnTheWayContent 
          category={resolvedParams.category} 
          service={resolvedParams.service} 
        />
      </Suspense>
    )
  } catch (error) {
    console.error('Error loading service status:', error);
    return <div>Error loading service status</div>;
  }
}

export const dynamic = 'force-dynamic'