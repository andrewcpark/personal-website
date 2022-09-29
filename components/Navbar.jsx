import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full px-2 2xl:px-16'>
      <Image src="/../public/assets/acp-logo.png" alt="/" width='250' height='100'/>
      </div>
    </div>
  )
}

export default Navbar