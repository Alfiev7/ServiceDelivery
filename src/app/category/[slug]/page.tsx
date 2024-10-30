import { Suspense } from 'react'
import { CategoryContent } from './category-content.tsx'

export default async function CategoryPage({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoryContent slug={params.slug} />
    </Suspense>
  )
}