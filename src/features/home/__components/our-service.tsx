import { useState } from 'react'
import { IdCard, Omega, Tally1 } from 'lucide-react'
import { Button } from '@/components/ui/shadcn/button'
import AnimationContainer from '@/components/global/animation-container'
import MaxWidthWrapper from '@/components/global/max-width-wrapper'
import { DialogDetailService } from './dialog-detail-service'

function OurServices() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    null
  )

  const handleOpenDialog = (serviceId: string) => {
    setSelectedServiceId(serviceId)
    setDialogOpen(true)
  }

  return (
    <section id='our-services' className='bg-gray-50 dark:bg-gray-900'>
      <AnimationContainer>
        <MaxWidthWrapper className='py-12'>
          <div className='mb-8 flex flex-col items-center justify-center'>
            <h2 className='text-dark mb-2 text-[32px] font-bold uppercase dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]'>
              OUR SERVICES
            </h2>
            <p className='mb-9 max-w-md text-center text-base font-normal leading-relaxed text-muted-foreground'>
              We don't just sell products—we provide complete solutions for your
              event identity and branding needs with Fast Production, Best
              Quality and Affordable Price.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            <div className='flex flex-col items-center rounded-xl border border-gray-200 p-3.5 text-center transition-all duration-700 ease-in-out hover:border-gray-400'>
              <Tally1 className='mb-4 h-12 w-12 text-primary' />
              <h3 className='mb-2 font-manrope text-2xl font-bold leading-9 text-gray-900'>
                Lanyard
              </h3>
              <p className='mb-4 text-base font-normal leading-relaxed text-muted-foreground'>
                Lanyard berkualitas tinggi dengan desain kustom untuk acara dan
                branding.
              </p>
              <Button
                variant='outline'
                onClick={() => handleOpenDialog('lanyard')}
                className='text-primary hover:text-white'
              >
                Lihat Detail
              </Button>
            </div>
            <div className='flex flex-col items-center rounded-xl border border-gray-200 p-3.5 text-center transition-all duration-700 ease-in-out hover:border-gray-400'>
              <IdCard className='mb-4 h-12 w-12 text-primary' />
              <h3 className='mb-2 font-manrope text-2xl font-bold leading-9 text-gray-900'>
                ID Card
              </h3>
              <p className='mb-4 text-base font-normal leading-relaxed text-muted-foreground'>
                ID card tahan lama dengan cetakan tajam untuk kebutuhan
                profesional.
              </p>
              <Button
                variant='outline'
                onClick={() => handleOpenDialog('id-card')}
                className='text-primary hover:text-white'
              >
                Lihat Detail
              </Button>
            </div>
            <div className='flex flex-col items-center rounded-xl border border-gray-200 p-3.5 text-center transition-all duration-700 ease-in-out hover:border-gray-400'>
              <Omega className='mb-4 h-12 w-12 text-primary' />
              <h3 className='mb-2 font-manrope text-2xl font-bold leading-9 text-gray-900'>
                Tiket Gelang
              </h3>
              <p className='mb-4 text-base font-normal leading-relaxed text-muted-foreground'>
                Tiket gelang stylish dan aman untuk acara besar dan kecil.
              </p>
              <Button
                variant='outline'
                onClick={() => handleOpenDialog('tiket-gelang')}
                className='text-primary hover:text-white'
              >
                Lihat Detail
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </AnimationContainer>
      {selectedServiceId && (
        <DialogDetailService
          serviceId={selectedServiceId}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      )}
    </section>
  )
}

export { OurServices }
