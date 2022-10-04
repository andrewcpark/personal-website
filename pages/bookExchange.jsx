import React from 'react'
import bookExchangeImg from '/public/assets/projects/bookExchange.png'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const bookExchange = () => {
  return (
    <div className='w-full mb-20'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={bookExchangeImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>  Book Exchange </h2>
            <h3> JavaScript / React / Node / PostgreSQL </h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <h2> Project Overview </h2>
            <br/>
            <p> The Book Exchange is a one stop book trading platform, allowing users to not only search for their favorite books by ISBN, but also intereact with other users to trade books with each other.
            <br/>
            <br/>
            <span className='font-bold'> React </span>
            <br/>
            The choice of React comes with the SPA nature of this type of application designed to render views and easily convert between web or mobile. The reusability of the components and modularity was also key, as we wanted the application to be able to be iterated over by future open source developers. Also, React has the capabilities of server side rending, allowing developers to utilize the Vitual DOM without needing to update the view every time.
            <br/>
            <br/>
            <span className='font-bold'> PostgreSQL </span>
            <br/>
            The use of PostgreSQL was chosen to efficiently combine our highly relational data with the combination of users that we required for the application. The relational nature of a SQL database allowed an overarching top down view of the data we were moving from the backend to the frontend, and allowed concise data movement as we were developing the application.
            <br/>
            <br/>
            <span className='font-bold'> Bcrypt </span>
            <br/>
            Bcrypt was an ideal choice to encrypt the passwords for our users, as we felt its unique salt hashing system would add increased security, and also an easy framework for hashing passwords exponentially more if warranted.
            <br/>
            <br/>
            <span className='font-bold'> Node / Express </span>
            <br/>
            Node and Express was chosen to keep “language consistency" between front and back end. It is a cross-platform runtime environment built on V8, high-performance open-source JavaScript engine, ensures excellent performance in an event-driven, non-blocking I/O paradigm.
            </p>
        <a href='https://github.com/Book-Exchange-2-0/Book-Exchange-2.1' target='_blank' rel='noreferrer'>
          <button className='px-8 py-2 mt-4'> Github </button>
        </a>
      </div>
      <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
        <div className='p-2'>
          <p className='text-center font-bold pb-2'> Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1'/> JavaScript </p>
            <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1'/> React </p>
            <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1'/> Node </p>
            <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1'/> Express </p>
            <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1'/> PostgreSQL </p>
            <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1'/> Bcrypt </p>
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

export default bookExchange;