'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { cn } from '@/lib/cn'

interface ScrollProgressProps {
  className?: string
}

const ScrollProgressProvider: React.FC<ScrollProgressProps> = ({
  className,
}) => {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className={cn(
        'fixed inset-x-0 top-0 z-[1000] h-1 origin-left bg-gradient-to-r from-[#FE6F11] via-[#FFB871] to-[#ffe600]',
        className
      )}
      style={{
        scaleX,
      }}
    />
  )
}

export { ScrollProgressProvider }
