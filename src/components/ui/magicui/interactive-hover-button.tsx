import React from 'react'
import { ArrowDown } from 'lucide-react'
import { cn } from '@/lib/cn'

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = 'Button', className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'rborder group relative cursor-pointer overflow-hidden rounded-md border-b-0 border-border/5 border-t-border/20 bg-gradient-to-b from-primary/10 to-primary/5 shadow-md hover:from-primary/15 hover:to-primary/5 hover:text-accent-foreground',
        className
      )}
      {...props}
    >
      <span className='inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0'>
        {text}
      </span>
      <div className='group absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100'>
        <p className='text-foreground group-hover:text-white'>{text}</p>
        <ArrowDown className='size-4 text-white lg:size-6' />
      </div>
      <div className='absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-primary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary'></div>
    </button>
  )
})

InteractiveHoverButton.displayName = 'InteractiveHoverButton'

export default InteractiveHoverButton
