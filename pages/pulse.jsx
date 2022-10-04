import React from 'react'
import pulseImg from '/public/assets/projects/pulse.png'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const pulse = () => {
  return (
    <div className='w-full mb-20'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={pulseImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'> Pulse </h2>
            <h3> TypeScript / React / Redux / Node / NoSQL </h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <h2> Project Overview </h2>
            <br/>
            <p> 
            <span className='font-bold'> TypeScript </span>
            <br/>
            In a developer perspective TypeScript comes to make the code easier to read, understand and debug. Leveraging productive development tools for JavaScript IDEs and practices, like static checking.
            <br/>
            <br/>
            <span className='font-bold'> React </span>
            <br/>
            React was a fundamental given for the development team as we felt its unique modularity, would give the frontend and backend teams a smooth foundation to write code, while simultaneously allowing an easier coordination of endpoints between the two teams. React's usage of the Virtual DOM also allows incredibly quick React object manipulation, making an overwhelmingly efficient frontend developer environment, and allows the creation of modular components that smoothed out the engineering process.
            <br/>
            <br/>
            <span className='font-bold'> Redux </span>
            <br/>
            The use of the Redux state management library was chosen to create a single source of data that could interact with the entire application with consistent performance. Redux also avoids prop drilling which can be performance expensive. By connecting multiple components it ensures that each connected component only extracts the required pieces of data from the store state that are needed by that component. In turn, the component will need to re-render less often, because generally these specific pieces of data haven't changed. In addition, Redux implements many internal performance optimizations to guarantee that components only re-render when it actually needs to, finally, by keeping a local storage of the data as a Cache on the store, it avoids unnecessary server calls and gives the user a smooth experience.
            <br/>
            <br/>
            <span className='font-bold'> Material-UI </span>
            <br/>
            Thinking of the end user the use of a UI Framework can bring a lot of advantages. In this case the Google Material Design was chosen with the focus of enforcing mobile first development, screen sensitive design and aria label accessibility. From a developer perspective it gives speed and consistency to the development process. TypescriptIn a developer perspective TypeScript comes to make the code easier to read, understand and debug. Leveraging productive development tools for JavaScript IDEs and practices, like static checking.
            <br/>
            <br/>
            <span className='font-bold'> MongoDB (NoSQL) </span>
            <br/>
            MongoDB's relative simplicity, allows for an expressive query language that developers would appreciate, if any other engineer wanted to itereate over this application. The flexibility of the MongoDB schema also means that it has a dynamic schematic architecture, and work very well with non-structured data and storage.
            <br/>
            <br/>
            <span className='font-bold'> Node / Express </span>
            <br/>
            Node and Express was chosen to keep “language consistency" between the frontend and the backend, Express' incredibly versatile Middleware modules, allows for an incredibly performant server environment, and assists in performing efficient server responses and requests. Express is also very customizable, and its massive ecosystem combined with Node, we felt that Express was an obvious choice for our product.
            </p>
        <a href='https://github.com/squirtleSquad-cs/pulse' target='_blank' rel='noreferrer'>
          <button className='px-8 py-2 mt-4'> Github </button>
        </a>
      </div>
      <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
        <div className='p-2'>
          <p className='text-center font-bold pb-2'> Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1'/> TypeScript </p>
            <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1'/> React </p>
            <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1'/> Redux </p>
            <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1'/> Material-UI </p>
            <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1'/> Node </p>
            <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1'/> Express </p>
            <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1'/> MongoDB (NoSQL) </p>
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

export default pulse;