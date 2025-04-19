// src/routes/index.tsx
import { Suspense, lazy } from 'react'
import { createFileRoute } from '@tanstack/react-router'

const Home = lazy(() => import('@/features/home'))

export const Route = createFileRoute('/')({
  component: () => (
    <Suspense fallback={<div>Loading Home...</div>}>
      <Home />
    </Suspense>
  ),
})
