import { Suspense } from 'react'
import { CategoryContent } from './category-content'

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CategoryPage({
  params,
  searchParams,
}: PageProps) {
  try {
    const resolvedParams = await params;
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <CategoryContent slug={resolvedParams.slug} />
      </Suspense>
    )
  } catch (error) {
    console.error('Error loading category:', error);
    return <div>Error loading category</div>;
  }
}

export const dynamic = 'force-dynamic'