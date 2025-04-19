import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { WhatsappIcon } from '../svgs/whatsapp-icom'

interface ScrollToAnchorProps {
  targetId?: string
  offset?: number
  behavior?: ScrollBehavior
}

const ScrollToAnchor: React.FC<ScrollToAnchorProps> = ({
  targetId = 'top',
  offset = 0,
  behavior = 'smooth',
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior,
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior,
      })
    }
  }

  return (
    <div className='fixed bottom-4 right-4 z-[999] flex flex-col items-center justify-center gap-y-4 lg:bottom-10 lg:right-5'>
      <div className='flex flex-col items-center justify-center gap-y-4'>
        <a
          href='https://wa.me/62895349470606'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Contact Us'
          className='flex h-11 w-11 items-center justify-center rounded-full bg-primary shadow-lg hover:bg-blue-400 md:hidden lg:hidden lg:h-14 lg:w-14'
        >
          <WhatsappIcon className='h-4 w-5 fill-white lg:h-6 lg:w-6' />
        </a>

        {isVisible && (
          <button
            onClick={scrollToTarget}
            className='flex h-11 w-11 items-center justify-center rounded-full bg-slate-50 shadow-lg hover:bg-slate-100 dark:bg-primary dark:hover:bg-green-800 lg:h-14 lg:w-14'
            aria-label='Scroll to top'
          >
            <ChevronUp className='h-4 w-5 text-gray-900 dark:text-foreground lg:h-6 lg:w-6' />
          </button>
        )}
      </div>
    </div>
  )
}

export default ScrollToAnchor
