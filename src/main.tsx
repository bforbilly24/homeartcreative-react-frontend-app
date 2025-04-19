import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { ScrollProgressProvider } from './components/providers/scroll-progress.bar-provide'
import { ThemeProvider } from './components/providers/theme-provider'
import { routeTree } from './routeTree.gen'
import './styles/global.css'

const router = createRouter({ routeTree })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrollProgressProvider />
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
