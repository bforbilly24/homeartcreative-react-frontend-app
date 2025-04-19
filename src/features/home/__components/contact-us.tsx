import { Phone, Mail, HouseIcon } from 'lucide-react'
import AnimationContainer from '@/components/global/animation-container'
import MaxWidthWrapper from '@/components/global/max-width-wrapper'

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
                  We’re here to help! If you have any questions, need more
                  information, or would like to collaborate, feel free to reach
                  out to us using the contact details below. Our team will be
                  happy to respond as soon as possible.
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
                      Ruko Ketintang Jetis Sraten Park, Jl. Ketintang Baru Sel.
                      I No. 33, Kota Surabaya, Provinsi Jawa Timur
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
                      (+62)819 3821 5569
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
                      homeartcreative@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='h-[400px] w-full max-w-lg overflow-hidden rounded-xl shadow-lg lg:h-[500px]'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2581637453413!2d112.7249442!3d-7.324873099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb304383b96f%3A0xac8c5895a8d9f822!2sJ%26T%20Cargo%20Surabaya%20Ketintang!5e0!3m2!1sid!2sid!4v1744209236831!5m2!1sid!2sid'
                className='rounded-4 shadow-sm'
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
