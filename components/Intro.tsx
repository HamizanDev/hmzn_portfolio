import Image from 'next/image'
import React from 'react'
import wave from "@/public/wave.png"

const Intro = () => {
  return (
    <div className='transition-all duration-1000 ease-in-out grid md:flex justify-center items-center'>
     <iframe
     src='https://youtube.com/embed/Lhr72sWdiQs'
     width='485'
     height='861'
     frameBorder='1'
     allowFullScreen
     className='transition-all duration-1000 ease-in-out rounded-3xl w-[318] h-[561] md:w-[350] md:h-[620] lg:w-[380] lg:h-[680] xl:w-[485] xl:h-[861]'
     ></iframe>
     <div>
        <div className='transition-all duration-1000 ease-in-out text-6xl mt-9 md:mt-0 lg:text-8xl md:px-14 text-gray-900 mb-5'>
            <h1 className='readex-700'>Senang</h1>
            <h1 className='source-500'>Bertemu</h1>
            <h1 className='source-500'>Denganmu!</h1>
        </div>
        <div className='transition-all duration-1000 ease-in-out w-[350px] h-[120px] md:w-[400px] lg:w-[500px] lg:h-[140px] xl:w-[750px] xl:h-[180px] bg-white rounded-3xl lg:rounded-[40px] absolute md:left-[370px] lg:left-[400px] xl:left-[500px]  2xl:left-[780px] border border-gray-300'>
            <div className='transition-all duration-1000 ease-in-out m-5 md:m-7 lg:m-8 xl:m-10 lg:-space-y-1 lg:-space-y-3'>
                <div className='text-[24px] lg:text-[34px] xl:text-[50px] flex '>
                    <h1 className='readex-500'>Hai, <a className='source-600'>Aku Hamizan!</a></h1>
                    <Image
                    src={wave}
                    alt='wave'
                    className='w-6 h-6 lg:w-10 lg:h-10 xl:w-14 xl:h-14'
                    />
                </div>
                <h2 className='transition-all duration-1000 ease-in-out text-md lg:text-xl xl:text-3xl readex-300'>Siap membantu mencapai video impianmu!</h2>
            </div>
        </div>
     </div>
     
    </div>
  )
}

export default Intro
