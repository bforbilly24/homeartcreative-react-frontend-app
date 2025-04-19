import React from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/cn'
import { NAV_LINKS } from '@/constants/nav-links'
import { Button } from '@/components/ui/shadcn/button'

interface MobileNavProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (isOpen: boolean) => void
  scroll: boolean
}

const MobileNav: React.FC<MobileNavProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  return (
    <>
      <div
        className={cn(
          'fixed inset-y-0 right-0 z-[999] w-screen transform bg-white backdrop-blur-md transition-transform duration-300 ease-in-out dark:bg-green-950/80',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
          'md:hidden'
        )}
      >
        <div className='flex h-full flex-col'>
          <div className='flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-700'>
            <a href='/' onClick={() => setIsMobileMenuOpen(false)}>
              <div className='aspect-[115/39] h-[2.438rem] w-1/3'>
                <img
                  loading='lazy'
                  src='/brand/logo.jpg'
                  alt='logo'
                  className='h-full w-full object-contain'
                />
              </div>
            </a>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsMobileMenuOpen(false)}
              className='text-black dark:text-white'
            >
              <X className='h-6 w-6' />
              <span className='sr-only'>Close menu</span>
            </Button>
          </div>

          <nav className='flex flex-col gap-y-4 p-4'>
            {NAV_LINKS.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className='py-2 text-lg font-medium text-black dark:text-white'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className='fixed inset-0 z-[99] bg-black/50 md:hidden'
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

export { MobileNav }
