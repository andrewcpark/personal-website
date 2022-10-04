import React from 'react'
import nftGeneratorImg from '/public/assets/projects/nftGenerator.png'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const nftGenerator = () => {
  return (
    <div className='w-full mb-20'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={nftGeneratorImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>  NFT Generator</h2>
            <h3> JavaScript / HTML / CSS </h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <h2> Project Overview </h2>
            <br/>
            <p> A web application for NFT enthusiasts that allows anyone to easily create and download their own unique NFTs.
            <br/>
            <br/>
            </p>
        <a href='https://github.com/andrewcpark/NFT-Generator' target='_blank' rel='noreferrer'>
          <button className='px-8 py-2 mt-4'> Github </button>
        </a>
      </div>
      <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
        <div className='p-2'>
          <p className='text-center font-bold pb-2'> Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1'/> JavaScript </p>
            <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1'/> HTML </p>
            <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1'/> CSS </p>
          </div>
        </div>
      </div>
      <Link href='/#projects'>
        <p className='underline cursor-pointer'> Back </p>
      </Link>
    </div>
    </div>
  )
}

export default nftGenerator;