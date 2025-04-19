import { Phone, Mail, Clock, MapPin, HouseIcon } from 'lucide-react'
import MaxWidthWrapper from '@/components/global/max-width-wrapper'
import AnimationContainer from '@/components/global/animation-container'

function ContactUs() {
  return (
    <section id='contact-us' className='bg-gray-50 py-16 dark:bg-gray-900'>
      <MaxWidthWrapper>
        <AnimationContainer>
          <div className='flex flex-row gap-x-4 lg:justify-between'>
            <div className='w-full px-4 lg:w-1/2 xl:w-6/12'>
              <div className='mb-12 max-w-[570px] lg:mb-0'>
                <h6 className='text-base font-normal leading-relaxed text-gray-400'>
                  Contact Us
                </h6>

                <h2 className='text-dark mb-6 text-[32px] font-bold uppercase dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]'>
                  GET IN TOUCH WITH US
                </h2>

                <p className='mb-9 text-center text-base font-normal leading-relaxed text-muted-foreground lg:text-start'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eius tempor incididunt ut labore e dolore magna aliqua. Ut
                  enim adiqua minim veniam quis nostrud exercitation ullamco
                </p>
                <div className='mb-8 flex w-full max-w-[370px]'>
                  <div className='mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]'>
                    <HouseIcon
                      width={36}
                      height={36}
                      className='size-9 text-primary'
                    />
                  </div>
                  <div className='w-full'>
                    <h4 className='text-dark mb-1 text-xl font-bold dark:text-white'>
                      Our Location
                    </h4>
                    <p className='text-body-color dark:text-dark-6 text-base'>
                      99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                    </p>
                  </div>
                </div>

                <div className='mb-8 flex w-full max-w-[370px]'>
                  <div className='mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]'>
                    <Phone
                      width={36}
                      height={36}
                      className='size-9 text-primary'
                    />
                  </div>
                  <div className='w-full'>
                    <h4 className='text-dark mb-1 text-xl font-bold dark:text-white'>
                      Phone Number
                    </h4>
                    <p className='text-body-color dark:text-dark-6 text-base'>
                      (+62)81 414 257 9980
                    </p>
                  </div>
                </div>

                <div className='mb-8 flex w-full max-w-[370px]'>
                  <div className='mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]'>
                    <Mail
                      width={36}
                      height={36}
                      className='size-9 text-primary'
                    />
                  </div>
                  <div className='w-full'>
                    <h4 className='text-dark mb-1 text-xl font-bold dark:text-white'>
                      Email Address
                    </h4>
                    <p className='text-body-color dark:text-dark-6 text-base'>
                      info@yourdomain.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='h-[400px] w-full max-w-lg overflow-hidden rounded-xl shadow-lg lg:h-[500px]'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.692!2d112.732672!3d-7.2874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTcnMTQuNiJTIDExMsKwNDQnMDMuNiJF!5e0!3m2!1sen!2sid!4v1698765432100!5m2!1sen!2sid'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Home Art Creative Location'
              ></iframe>
            </div>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>
    </section>
  )
}

export { ContactUs }
