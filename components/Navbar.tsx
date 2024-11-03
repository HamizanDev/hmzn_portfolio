import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed z-10 top-0 left-1/2 -translate-x-1/2 py-5 z-20'>
      <div className='flex gap-10 px-2 items-center text-center justify-between bg-white rounded-full h-[70px] w-300px] border border-gray-300'>
        <div className='pl-5 source-600 text-3xl'>
          Hamizan
        </div>
        <div className='bg-gray-900 text-white h-[55px] w-[170px] rounded-full flex items-center justify-center'>
          <a className='readex-700 text-xl'>Get in <a className='source-600 text-xl'>touch!</a></a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
