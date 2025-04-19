import { useEffect, useState } from 'react'
import { useLocation } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { AlignRight, Phone } from 'lucide-react'
import { cn } from '@/lib/cn'
import { NAV_LINKS } from '@/constants/nav-links'
import { Button } from '@/components/ui/shadcn/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/shadcn/navigation-menu'
import { Separator } from '@/components/ui/shadcn/separator'
import AnimationContainer from '@/components/global/animation-container'
import MaxWidthWrapper from '@/components/global/max-width-wrapper'
import { MobileNav } from '@/components/navigation/mobile-nav'

const Navbar = () => {
  const [scroll, setScroll] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const handleScroll = () => {
    if (window.scrollY > 8) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isHomePage = pathname === '/'

  return (
    <>
      <motion.header
        id='navbar'
        className={cn(
          'fixed inset-x-0 top-0 z-[99] h-14 w-full select-none border-b border-transparent bg-transparent lg:h-24',
          scroll &&
            'border-white/80 bg-white/80 backdrop-blur-md dark:border-green-950/80 dark:bg-green-950/80'
        )}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <AnimationContainer reverse delay={0.1} className='size-full'>
          <MaxWidthWrapper className='flex items-center justify-between'>
            <a href='/' className='items-center lg:items-start'>
              <div className='aspect-[115/39] h-[2.438rem] w-1/3 lg:aspect-[271/78] lg:h-[4rem] lg:w-[16rem]'>
                <img
                  loading='lazy'
                  src='/brand/logo.jpg'
                  alt='logo'
                  className='h-full w-full object-contain'
                />
              </div>
            </a>

            <div className='hidden w-full flex-row items-center justify-end gap-x-4 md:flex lg:flex'>
              <NavigationMenu>
                <NavigationMenuList>
                  {NAV_LINKS.map((link) => (
                    <NavigationMenuItem key={link.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={link.href}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            !scroll && isHomePage
                              ? 'bg-transparent text-foreground hover:bg-accent/30'
                              : 'bg-transparent text-foreground'
                          )}
                        >
                          {link.title}
                        </a>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              <div className='hidden flex-row items-center justify-between gap-x-4 md:flex lg:flex'>
                <Separator orientation='vertical' className='h-6' />
                <div className='flex items-center justify-center gap-x-4'>
                  <div className='flex items-center gap-x-4'>
                    <a
                      href='/kontak'
                      target='_blank'
                      className={cn(
                        'inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                        !scroll && isHomePage
                          ? 'border border-foreground/20 bg-transparent text-foreground hover:border-foreground/40 hover:bg-accent/30'
                          : !scroll && !isHomePage
                            ? 'border border-foreground/20 bg-primary text-foreground hover:border-foreground/40 hover:bg-accent/30'
                            : 'text-foreground hover:bg-accent/30',
                        scroll && 'text-background hover:text-foreground'
                      )}
                    >
                      Contact Us{' '}
                      <Phone
                        className={cn(
                          'ml-1.5 size-3.5',
                          !scroll
                            ? 'fill-transparent'
                            : 'fill-background hover:fill-foreground'
                        )}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='md:hidden'>
              <Button
                variant='ghost'
                size='icon'
                onClick={() => setIsMobileMenuOpen(true)}
                className={cn(
                  !scroll && isHomePage
                    ? 'text-white hover:bg-accent/30'
                    : 'text-black hover:bg-accent/30 dark:text-white'
                )}
              >
                <AlignRight className='h-6 w-6' />
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </div>
          </MaxWidthWrapper>
        </AnimationContainer>
      </motion.header>

      <MobileNav
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        scroll={scroll}
      />
    </>
  )
}

export { Navbar }
