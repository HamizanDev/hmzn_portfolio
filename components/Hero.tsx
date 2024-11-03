import Image from 'next/image'
import React from 'react'
import heart from '@/public/heart.png'
import bulb from "@/public/bulb.png"
import line from "@/public/line-1.png"

const Hero = () => {
  return (
    <div className='transition-all duration-1000 ease-in-out flex h-[700px] md:h-[800px] lg:h-[1080px] w-full px-7 sm:px-4 md:px-7 lg:px-20'>
      <div className='mt-[250px] z-10'>
        <div className='transition-all duration-1000 ease-in-out text-4xl space-y-1 sm:text-5xl md:text-6xl md:space-y-2 lg:text-7xl lg:space-y-3 xl:text-8xl'>
            <h1 className='readex-700'>Let’s <a className='source-500'>Touch</a></h1>
              <div className='flex'>
                <h1 className='readex-700'>People’s Hearts</h1>
                <Image
                src={heart}
                width={100}
                alt='heart'
                className='w-10 h-10 sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] xl:w-[90px] xl:h-[90px]'
                />
              </div>
              <div className='flex'>
                <h1 className='readex-700'>with <a className='source-500'>Creativity</a></h1>
                <Image
                src={bulb}
                width={100}
                alt='bulb'
                className='w-10 h-10 sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] xl:w-[90px] xl:h-[90px]'
                />
              </div>
        </div>
        <p className='transition-all duration-1000 ease-in-out text-md sm:text-lg md:text-xl xl:text-2xl readex-400 py-5 md:py-10'>I create attention-grabbing content that converts leads into paying customers.</p>
      </div>
      <Image
      src={line}
      alt=''
      className='absolute w-[200px] md:w-[600px] right-1 top-[-15] '
      />
    </div>
  )
}

export default Hero
