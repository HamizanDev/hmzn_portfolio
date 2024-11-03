import React from 'react'
import star from '@/public/star.png'
import Image from 'next/image'

const Feedback = () => {
  return (
    <div className='mt-44'>
        <div className="flex justify-center items-center text-3xl mb-0 sm:text-[40px] md:text-[50px] lg:text-[60px] lg:mb-8">
                <h1 className="readex-700">Kamu Adalah <a className="source-600">Prioritas!</a></h1>
                <Image
                src={star}
                width='100'
                height='100'
                alt="star"
                className="ml-2 w-8 md:w-10 lg:w-12 xl:w-14"
                />
        </div>
        <div className='container mx-auto px-4 mt-6'>
            <div className='transition-all duration-1000 ease-in-out grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6'>
                <div className='transition-all duration-1000 ease-in-out justify-center bg-white w-full h-[250px] rounded-3xl border border-gray-400 p-7 text-lg readex-300'>
                    <a>bismillah di next project bisa kolaborasi lagi ya hamzan kakak sangat mengapresiasikan bangetttt hasil editan kamu bagusss ✨👍🏻</a>
                    <hr className='border border-gray-300 my-3'></hr>
                    <a className='readex-500 text-xl'>Dedek Aulia</a>
                </div>
                <div className='transition-all duration-1000 ease-in-out bg-white w-full h-[250px] rounded-3xl border border-gray-400 p-7 text-lg readex-300'>
                    <a>udah keren banget kak mizan🤩🤩 sesuai keinginan ku🤩</a>
                    <hr className='border border-gray-300 my-3'></hr>
                    <a className='readex-500 text-xl'>Amel</a>
                </div>
                <div className='transition-all duration-1000 ease-in-out bg-white w-full h-[250px] rounded-3xl border border-gray-400 p-7 text-lg readex-300'>
                    <a>makasi banyak kak hamizannn, kerenn editan nyaa</a>
                    <hr className='border border-gray-300 my-3'></hr>
                    <a className='readex-500 text-xl'>Yiesha</a>
                </div>
                <div className='transition-all duration-1000 ease-in-out justify-center bg-white w-full h-[250px] rounded-3xl border border-gray-400 p-7 text-lg readex-300'>
                    <a>WOOOWW aku dan teman temanku barusan liatt, baguss bangett kak editannyaa dan keren bangett 🥹 terima kasiihh yaaa kakk udah ngeusahainn yang terbaik bgtbgtbgt buat tim kami 🙏🏻🙏🏻</a>
                    <hr className='border border-gray-300 my-3'></hr>
                    <a className='readex-500 text-xl'>Gwen</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feedback
