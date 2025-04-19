import React, { ReactNode } from 'react'
import { Outlet } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Footer } from '@/components/footer/footer'
import ConsoleLogger from '@/components/miscellaneous/console-logger'
import ScrollToAnchor from '@/components/miscellaneous/scroll-to-anchor'
import { Navbar } from '@/components/navigation/navbar'

interface MainLayoutProps {
  children?: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <motion.main
        className='scrollbar-hide size-full overflow-x-hidden'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {children || <Outlet />}
      </motion.main>
      <ScrollToAnchor />
      <Footer />
      <ConsoleLogger />
    </>
  )
}

export { MainLayout }
