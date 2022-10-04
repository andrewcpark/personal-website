import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { useRouter } from 'next/router';
import logoImg from "../public/assets/acp-logo.png"

const Navbar = () => {
  // HOOK TO INITIALIZE AND SET STATE
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavbg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

  // LOGIC TO TOGGLE BETWEEN STATE
  const handleNav = () => {
    setNav(!nav)
  };

  // LOGIC TO GIVE SHADOW ON NAVBAR ONCE SCROLLING
useEffect(() => {
  const handleShadow = () => {
    if (window.scrollY >= 90) {
      setShadow(true) 
    } else {
        setShadow(false)
      }
  };
  window.addEventListener('scroll', handleShadow)
}, []);

useEffect (() => {
  if (router.asPath === '/vendOMatic') {
    setNavbg('transparent')
    setLinkColor('#f8f8f8')
  } else {
    setNavbg('#ecf0f3')
    setLinkColor('#1f2937')
  }
}, [router]);

  return (
    <div id='navbar' style={{backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
      <div className='flex justify-between items-center w-full px-2 2xl:px-16'>
        <Link href='/'>
          <Image src={logoImg} alt="/" width='250' height='100'/>
        </Link>
        <div>
        <ul style={{color: `${linkColor}`}}className='hidden md:flex'>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase border-[#1e97f3] hover:border-b'> Home </li>
          </Link>
          <Link href='/#about'>
            <li className='ml-10 text-sm uppercase border-[#1e97f3] hover:border-b'> About </li>
          </Link>
          <Link href='/#skills'>
            <li className='ml-10 text-sm uppercase border-[#1e97f3] hover:border-b'> Skills </li>
          </Link>
          <Link href='/#projects'>
            <li className='ml-10 text-sm uppercase border-[#1e97f3] hover:border-b'> Projects </li>
          </Link>
          <Link href='/resume'>
            <li className='ml-10 text-sm uppercase border-[#1e97f3] hover:border-b'> Resume </li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase border-[#1e97f3] hover:border-b'> Blog </li>
          </Link>
          <Link href='/#contact'>
            <li className='ml-10 text-sm uppercase border-[#1e97f3] hover:border-b'> Contact </li>
          </Link>
        </ul>
          <div onClick={handleNav} className='md:hidden' >
            <AiOutlineMenu size={25} fill='#1e97f3' />
          </div>
        </div>
      </div>

      {/*MOBILE NAVBAR AND MENU */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <Image src='/../public/assets/acp-logo.png' alt='/' width='125' height='50' />
              </Link>
              <div onClick={handleNav} className='rounded-full shadow-lg shawdow-gray-400 p-3 cursor-pointer'>
                  <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[95%] py-4'> Let's build something together </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm uppercase border-[#1e97f3] hover:border-b'> Home </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm uppercase border-[#1e97f3] hover:border-b'> About </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm uppercase border-[#1e97f3] hover:border-b'> Skills </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm uppercase border-[#1e97f3] hover:border-b'> Projects </li>
              </Link>
              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm uppercase border-[#1e97f3] hover:border-b'> Resume </li>
              </Link>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm uppercase border-[#1e97f3] hover:border-b'> Blog </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm uppercase border-[#1e97f3] hover:border-b'> Contact </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#1e97f3]'> Let's Connect </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/andrew-c-park/'
                  target='_blank'
                  rel='noreferrer'
                >
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn/>
                </div>
                </a>
                <a
                  href='https://github.com/andrewcpark'
                  target='_blank'
                  rel='noreferrer'
                  >
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>
                </a>
                <Link href='/#contact'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail/>
                </div>
                </Link>
                <Link href='/resume'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <BsFillPersonLinesFill/>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;