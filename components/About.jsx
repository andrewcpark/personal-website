import React from 'react'
import ProfileImg from '../public/assets/profile.jpg'
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#1e97f3]'> About </p>
                <h2 className='py-4'> Who I Am </h2>
                <p className='py-2 text-gray-600'> I specialize in building JavaScript applications and like to work on all parts of the tech stack. I’m passionate about learning new technologies and understand there is more than one way to accomplish a task. I am a quick learner and can pick up new tech stacks as needed. I believe that being a great developer is not using one specific language, but choosing the best tool for the job.
                In my free time I like to travel, train mixed martial arts, and work on personal projects.  </p>
                <Link href='/#projects'>
                  <p className='py-2 text-gray-600 underline cursor-pointer'> Check out some of my latest projects. </p>
                </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src={ProfileImg} className='rounded-xl' alt='/'/>
            </div>
        </div>
    </div>
  )
}

export default About