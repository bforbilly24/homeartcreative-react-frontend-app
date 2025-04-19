import { lazy, Suspense } from 'react'
import { Environment, Lightformer } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { AnimatedShinyText } from '@/components/ui/magicui/animated-shiny-text'
import { BoxReveal } from '@/components/ui/magicui/box-reveal'
import InteractiveHoverButton from '@/components/ui/magicui/interactive-hover-button'
import { Button } from '@/components/ui/shadcn/button'
import AnimationContainer from '@/components/global/animation-container'
import MaxWidthWrapper from '@/components/global/max-width-wrapper'

const Band = lazy(() => import('./band'))
const Physics = lazy(() =>
  import('@react-three/rapier').then((module) => ({ default: module.Physics }))
)

function Hero() {
  return (
    <section id='hero' className='bg-gray-50 dark:bg-gray-900'>
      <AnimationContainer>
        <MaxWidthWrapper className='py-12'>
          <div className='mx-auto flex max-w-container flex-col gap-y-24 pt-16 lg:flex-row lg:gap-y-0'>
            <div className='flex flex-col items-center gap-6 text-start lg:items-start lg:gap-y-12'>
              <div className='relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
                <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FE6F11_0%,#FFB871_50%,#FFECD4_100%)]' />
                <span className='inline-flex h-full w-full items-center justify-center rounded-full bg-slate-50 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl dark:bg-slate-950'>
                  <span className='z-10 flex items-center justify-center gap-1 py-0.5 text-sm'>
                    <AnimatedShinyText className='inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
                      ✨ Perkenalkan Home Art Creative
                    </AnimatedShinyText>
                  </span>
                </span>
              </div>

              <div className='flex flex-col items-center justify-center gap-y-10 lg:items-start'>
                <div className='flex flex-col items-center justify-center gap-y-8 lg:items-start'>
                  <BoxReveal boxColor={'#fe6f11'} duration={0.5}>
                    <h3 className='relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-center text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-6xl md:leading-tight lg:text-start'>
                      Home Art Creative
                    </h3>
                  </BoxReveal>

                  <BoxReveal boxColor={'#ff8f38'} duration={0.5}>
                    <p className='text-md relative z-10 max-w-[550px] animate-appear text-center font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl lg:text-start'>
                      Desain lanyard keren, berkualitas, dan sesuai kebutuhanmu.
                      Cocok untuk event, kantor, komunitas, atau bisnis
                    </p>
                  </BoxReveal>
                </div>

                <BoxReveal boxColor={'#ffb871'} duration={0.5}>
                  <div className='relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300'>
                    <Button
                      variant='default'
                      className='h-10 px-8'
                      onClick={() =>
                        (window.location.href =
                          'https://staging.dokteremr.com/admin/login')
                      }
                    >
                      Contact Us
                    </Button>
                    <a href='#our-services'>
                      <InteractiveHoverButton
                        text='Explore'
                        className='h-10 w-36'
                      />
                    </a>
                  </div>
                </BoxReveal>
              </div>
            </div>

            <div className='relative h-[500px] w-full lg:h-[450px] lg:w-1/2'>
              <Suspense
                fallback={
                  <div className='flex h-full w-full items-center justify-center'>
                    Loading 3D Scene...
                  </div>
                }
              >
                <Canvas
                  camera={{ position: [0, 0, 13], fov: 25 }}
                  style={{ backgroundColor: 'transparent' }}
                >
                  <ambientLight intensity={Math.PI} />
                  <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
                    <Band />
                  </Physics>
                  <Environment>
                    <Lightformer
                      intensity={2}
                      color='white'
                      position={[0, -1, 5]}
                      rotation={[0, 0, Math.PI / 3]}
                      scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                      intensity={3}
                      color='white'
                      position={[-1, -1, 1]}
                      rotation={[0, 0, Math.PI / 3]}
                      scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                      intensity={3}
                      color='white'
                      position={[1, 1, 1]}
                      rotation={[0, 0, Math.PI / 3]}
                      scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                      intensity={10}
                      color='white'
                      position={[-10, 0, 14]}
                      rotation={[0, Math.PI / 2, Math.PI / 3]}
                      scale={[100, 10, 1]}
                    />
                  </Environment>
                </Canvas>
              </Suspense>
            </div>
          </div>
        </MaxWidthWrapper>
      </AnimationContainer>
    </section>
  )
}

export { Hero }
