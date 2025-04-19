import { cn } from '@/lib/cn'
import { Marquee } from '@/components/ui/magicui/marquee'
import AnimationContainer from '@/components/global/animation-container'
import MaxWidthWrapper from '@/components/global/max-width-wrapper'
import { LOGOS } from '../constants/logo'

const firstRow = LOGOS.slice(0, LOGOS.length / 2)
const secondRow = LOGOS.slice(LOGOS.length / 2)

const LogoCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        'relative h-28 w-40 cursor-pointer overflow-hidden rounded-lg',
        'border-none p-2',
        'dark:border-none'
      )}
    >
      <img
        className='h-full w-full object-contain'
        src={img}
        alt={`${name} logo`}
      />
    </figure>
  )
}

function OurPartner() {
  return (
    <section id='our-partner' className='bg-gray-50 dark:bg-gray-900'>
      <AnimationContainer>
        <MaxWidthWrapper className='py-12'>
          <div className='mb-8 flex flex-col items-center justify-center'>
            <h2 className='text-dark mb-2 text-[32px] font-bold uppercase dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]'>
              OUR CLIENT
            </h2>
            <p className='mb-9 max-w-md text-center text-base font-normal leading-relaxed text-muted-foreground'>
              We don't just sell products—we provide complete solutions for your
              event identity and branding needs.
            </p>
          </div>

          <div className='relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden py-8'>
            <Marquee pauseOnHover className='[--duration:20s] [--gap:1rem]'>
              {firstRow.map((logo) => (
                <LogoCard key={logo.name} img={logo.img} name={logo.name} />
              ))}
            </Marquee>
            <Marquee
              reverse
              pauseOnHover
              className='[--duration:20s] [--gap:1rem]'
            >
              {secondRow.map((logo) => (
                <LogoCard key={logo.name} img={logo.img} name={logo.name} />
              ))}
            </Marquee>
            <div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50 dark:from-background'></div>
            <div className='pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50 dark:from-background'></div>
          </div>
        </MaxWidthWrapper>
      </AnimationContainer>
    </section>
  )
}

export { OurPartner }
