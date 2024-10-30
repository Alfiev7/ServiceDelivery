import { Suspense } from 'react'
import { SubCategoryContent } from './subcategory-content'

interface PageProps {
  params: Promise<{ category: string; service: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function SubCategoryPage({
  params,
  searchParams,
}: PageProps) {
  try {
    const resolvedParams = await params;
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <SubCategoryContent 
          category={resolvedParams.category} 
          service={resolvedParams.service}
        />
      </Suspense>
    )
  } catch (error) {
    console.error('Error loading service details:', error);
    return <div>Error loading service details</div>;
  }
}

export const dynamic = 'force-dynamic'