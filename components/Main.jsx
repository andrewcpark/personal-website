import React from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Link from 'next/link';

const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='py-4 text-gray-700'> Hi, I'm <span className='text-[#1e97f3]'> Andrew </span> </h1>
                <h1 className='py-2 text-gray-700'> A Software Engineer </h1>
                <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'> I'm experienced in scaling full-stack JavaScript applications 
                with React/Redux, Node, Express, SQL/NoSQL databases. Based in Los Angles, CA. </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-6'>
                    <a
                    href='https://www.linkedin.com/in/andrew-c-park/'
                    target='_blank'
                    rel='noreferrer'
                    >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn/>
                    </div>
                    </a>
                    <a
                    href='https://github.com/andrewcpark'
                    target='_blank'
                    rel='noreferrer'
                    >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                    </div>
                    </a>
                    <Link href='/#contact'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail/>
                    </div>
                    </Link>
                    <Link href='/resume'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill/>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;
