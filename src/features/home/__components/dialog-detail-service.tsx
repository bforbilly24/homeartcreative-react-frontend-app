import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/cn'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/shadcn/dialog'
import { SERVICE_DETAILS } from '../constants/service-detail'
import { ParallaxScrollProps } from '../data/parallax'

const ParallaxScroll = ({ images, className }: ParallaxScrollProps) => {
  const gridRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ['start start', 'end start'],
  })

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200])
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200])
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200])

  const third = Math.ceil(images.length / 3)
  const firstPart = images.slice(0, third)
  const secondPart = images.slice(third, 2 * third)
  const thirdPart = images.slice(2 * third)

  return (
    <div
      className={cn('h-[26rem] w-full items-start overflow-y-auto', className)}
      ref={gridRef}
    >
      <div
        className='mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 px-10 py-10 md:grid-cols-2 lg:grid-cols-3'
        ref={gridRef}
      >
        <div className='grid gap-10'>
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={'grid-1' + idx}>
              <img
                src={el}
                className='!m-0 size-64 gap-10 rounded-lg object-cover object-left-top !p-0'
                height='400'
                width='400'
                alt='thumbnail'
              />
            </motion.div>
          ))}
        </div>
        <div className='grid gap-10'>
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={'grid-2' + idx}>
              <img
                src={el}
                className='!m-0 size-64 gap-10 rounded-lg object-cover object-left-top !p-0'
                height='400'
                width='400'
                alt='thumbnail'
              />
            </motion.div>
          ))}
        </div>
        <div className='grid gap-10'>
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={'grid-3' + idx}>
              <img
                src={el}
                className='!m-0 size-64 gap-10 rounded-lg object-cover object-left-top !p-0'
                height='400'
                width='400'
                alt='thumbnail'
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

interface DialogDetailServiceProps {
  serviceId: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DialogDetailService({
  serviceId,
  open,
  onOpenChange,
}: DialogDetailServiceProps) {
  const service = SERVICE_DETAILS.find((s) => s.id === serviceId)

  if (!service) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-4xl p-6'>
        <DialogHeader>
          <DialogTitle className='text-dark text-2xl font-bold dark:text-white'>
            {service.name}
          </DialogTitle>
          <DialogDescription className='text-base leading-relaxed text-muted-foreground'>
            {service.description}
          </DialogDescription>
        </DialogHeader>
        <ParallaxScroll images={service.images} />
      </DialogContent>
    </Dialog>
  )
}
