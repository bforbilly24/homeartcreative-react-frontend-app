import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/shadcn/carousel'
import Autoplay from 'embla-carousel-autoplay'
import AnimationContainer from '@/components/global/animation-container'
import MaxWidthWrapper from '@/components/global/max-width-wrapper'
import { TESTIMONIALS } from '../constants/testimonials'

function TestimonialCarousel() {
  return (
    <section id='carousel' className='bg-gray-50 dark:bg-gray-900'>
      <AnimationContainer>
        <MaxWidthWrapper className='py-12'>
          <Carousel
            className='w-full'
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[Autoplay({ delay: 3000 })]}
          >
            <CarouselContent>
              {TESTIMONIALS.map((item, index) => (
                <CarouselItem key={index}>
                  <div className='relative h-[400px] w-full md:h-[500px]'>
                    <img
                      src={item.img}
                      alt={item.title}
                      className='h-full w-full object-cover'
                    />
                    <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-6 text-white'>
                      <h3 className='mb-2 text-xl font-semibold md:text-2xl'>
                        {item.title}
                      </h3>
                      <p className='text-sm md:text-base'>{item.text}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='left-4 bg-white text-black hover:bg-gray-100' />
            <CarouselNext className='right-4 bg-white text-black hover:bg-gray-100' />
          </Carousel>
        </MaxWidthWrapper>
      </AnimationContainer>
    </section>
  )
}

export { TestimonialCarousel }
