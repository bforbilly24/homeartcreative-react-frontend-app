import { AboutUs } from './__components/about-us'
import { ContactUs } from './__components/contact-us'
import { Hero } from './__components/hero'
import { OurPartner } from './__components/our-partner'
import { OurServices } from './__components/our-service'
import { TestimonialCarousel } from './__components/testimonial-carousel'

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <Hero />
      <OurServices />
      <TestimonialCarousel />
      <OurPartner />
      <AboutUs />
      <ContactUs />
    </div>
  )
}
