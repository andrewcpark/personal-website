import React from 'react'
import Image from 'next/image'
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Github from '../public/assets/skills/github.png';
import NextJS from '../public/assets/skills/next.png'
import AWS from '../public/assets/skills/aws.png';
import MongoDB from '../public/assets/skills/mongodb.png';
import Node from '../public/assets/skills/node.png';
import Postgres from '../public/assets/skills/postgres.png';
import TypeScript from '../public/assets/skills/typescript.png';
import Redux from '../public/assets/skills/redux.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl trackingwidest uppercase text-[blue]'> Skills </p>
            <h2 className='py-4'> What I can do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image src={Javascript} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3> JavaScript </h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image src={TypeScript} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3> TypeScript </h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image src={ReactImg} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3> React </h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image src={Redux} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3> Redux </h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image src={Node} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3> Node.js</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image src={Github} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3> GitHub </h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image src={Postgres} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3> PostgreSQL </h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image src={MongoDB} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3> MongoDB </h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image src={Html} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3> HTML </h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image src={Css} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3> CSS </h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image src={NextJS} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3> Next.js </h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <Image src={AWS} alt='/' width='64px' height='64px' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3> AWS </h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills