'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(true);

  function handleMenuDropdown() {
    setHidden(prev => !prev);
  };

  return (
    <nav className='bg-transparent py-3 px-5 flex
     items-center justify-between
     border-b-[0.7px] border-[#C4C4C4]'>
       <h1 className='text-2xl font-bold
        uppercase text-[#1090CB]'>LOGO
       </h1>
       <div className='items-center gap-3
        md:gap-5 hidden md:flex'>
         <Link href='/'
         className={`text-sm relative
         ${pathname === '/' ? 'text-[#1090CB]' :
         'text-neutral-900'} p-1`}>
         {pathname === '/' && (
          <BsCircleFill className='text-[#08D3BB]
          absolute top-0 -left-1 text-[6px]' />
         )}Home
         </Link>
         <Link href='/about'
         className={`text-sm relative
         ${pathname === '/about' ? 'text-[#1090CB]' :
         'text-neutral-900'} p-1`}>
         {pathname === '/about' && (
          <BsCircleFill className='text-[#08D3BB]
           absolute top-0 -left-1 text-[6px]' />
         )}About us
         </Link>
         <Link href='/services'
         className={`text-sm relative
         ${pathname === '/services' ? 'text-[#1090CB]' :
         'text-neutral-900'} p-1`}>Services
         {pathname === '/services' && (
          <BsCircleFill className='text-[#08D3BB]
           absolute top-0 -left-1 text-[6px]' />
         )}
         </Link>
         <Link href='/blog'
         className={`text-sm relative
         ${pathname === '/blog' ? 'text-[#1090CB]' :
         'text-neutral-900'} p-1`}>Blog
         {pathname === '/blog' && (
          <BsCircleFill className='text-[#08D3BB]
           absolute top-0 -left-1 text-[6px]' />
         )}
         </Link>
         <Link href='/contact'>
            <button className='bg-[#1090CB]
             text-white py-1.5 px-3.5 rounded-sm
             hover:bg-[#1080b4] transition
             duration-300 text-sm ml-3
             cursor-pointer'>
              Contact Us
            </button>
         </Link>
       </div>
       <button
         onClick={() => {handleMenuDropdown()}}
         className="md:hidden text-xl sm:text-2xl
         ml-3 cursor-pointer">
          {hidden ? <FiMenu/> : <FiX/>}
       </button>
       <div
        className={`absolute ${hidden ? 'hidden' :
         'block'} top-14 left-0 w-full border-t
         border-t-gray-300 bg-gray-950/60
         h-screen z-100 md:hidden`}
         onClick={() => setHidden(true)}>
          <div className="absolute top-0 left-0
          w-full h-[40%] bg-white p-4 flex flex-col
          gap-y-3 rounded-b-md tracking-wide"
          onClick={(e) => e.stopPropagation()}>
            <Link href={'/'} className="w-fit p-2
            text-gray-900 rounded-xl
            hover:text-[#1090CB]">
            Home</Link>
            <Link href={'/about'} className="w-fit p-2
            text-gray-900 hover:text-[#1090CB]">
            About us</Link>
            <Link href={'/services'} className="w-fit
            p-2 text-gray-900 hover:text-[#1090CB]">
            Services</Link>
            <Link href={'/blog'} className="w-fit p-2
            text-gray-900 hover:text-[#1090CB]">
            Blog</Link>
            <Link href={'/contact'} className="w-fit
            p-2 text-gray-900 hover:text-[#1090CB]">
            Contact us</Link>
          </div>
        </div>
     </nav>
  )
}

export default Navbar