import { Suspense } from 'react'
import { CategoryContent } from './category-content'

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function CategoryPage({
  params,
  searchParams,
}: PageProps) {
  const getSlug = async () => {
    const resolvedParams = await params;
    return resolvedParams.slug;
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoryContent slug={getSlug()} />
    </Suspense>
  )
}

export const dynamic = 'force-dynamic'