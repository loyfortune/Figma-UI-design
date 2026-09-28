import Link from "next/link"
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className='bg-transparent'>
      <div className="flex flex-col lg:flex-row
      lg:justify-between mt-10 gap-y-7 max-w-6xl
      mx-auto p-5">
       <div className='flex flex-col gap-y-4'>
         <h1 className='text-2xl font-bold
           uppercase text-[#1090CB]'>LOGO
         </h1>
         <p className='text-sm text-neutral-700
          max-w-sm dark:text-neutral-300'>
           Lorem Ipsum is simply dummy text of the
           printing and typesetting industry.
         </p>
         <div className='flex items-center gap-3
         text-neutral-900 lg:hidden'>
            <Link href='/'>
            <button className='bg-white dark:bg-gray-800 rounded-full
            p-2 shadow-lg cursor-pointer dark:text-gray-500'>
                <FiFacebook />
            </button>
            </Link>
            <Link href='/'>
            <button className='bg-white dark:bg-gray-800 rounded-full
            p-2 shadow-lg cursor-pointer dark:text-gray-500'>
                <FiInstagram />
            </button>
            </Link>
            <Link href='/'>
            <button className='bg-white dark:bg-gray-800 rounded-full
            p-2 shadow-lg cursor-pointer dark:text-gray-500'>
                <FiTwitter />
            </button>
            </Link>
            <Link href='/'>
            <button className='bg-white dark:bg-gray-800 rounded-full
            p-2 shadow-lg cursor-pointer dark:text-gray-500'>
                <FiLinkedin />
            </button>
            </Link>
         </div>
         <p className='text-sm text-neutral-700
         hidden md:block dark:text-white'>
            @Lorem
         </p>
       </div>
       <div className="flex
       justify-between">
        <div className='flex items-center
        justify-center gap-12'>
          <div className="w-fit text-neutral-900
          text-sm dark:text-white">
           <h4 className='font-bold mb-4'>About us</h4>
            <ul className='flex flex-col gap-y-2'>
              <li>Lorem</li>
              <li>Portfolio</li>
              <li>Careers</li>
              <li>Contact us</li>
            </ul>
         </div>
         <div className="w-fit text-neutral-900
         text-sm max-w-xs dark:text-white">
           <h4 className='font-bold mb-4'>Contact us</h4>
            <p>Lorem ipsum is simply a dummy text of
              the printing and typesetting industry.
            </p>
            <p className="mt-3">+234 901371 4240</p>
         </div>
        </div>
         <div className='items-baseline-last gap-3
         text-neutral-900 hidden lg:flex '>
            <Link href='/'>
            <button className='bg-white dark:bg-gray-700 rounded-full
            p-2 shadow-lg cursor-pointer dark:text-gray-400'>
                <FiFacebook />
            </button>
            </Link>
            <Link href='/'>
            <button className='bg-white dark:bg-gray-700 rounded-full
            p-2 shadow-lg cursor-pointer dark:text-gray-400'>
                <FiInstagram />
            </button>
            </Link>
            <Link href='/'>
            <button className='bg-white dark:bg-gray-700 rounded-full
            p-2 shadow-lg cursor-pointer dark:text-gray-400'>
                <FiTwitter />
            </button>
            </Link>
            <Link href='/'>
            <button className='bg-white dark:bg-gray-700 rounded-full
            p-2 shadow-lg cursor-pointer dark:text-gray-400'>
                <FiLinkedin />
            </button>
            </Link>
         </div>
       </div>
      </div>
      <p className='text-xs lg:text-sm
      text-neutral-700 text-center py-6 border-t
      border-taupe-300 dark:border-gray-700'>
        &copy; {new Date().getFullYear()} Lorem All rights Reserved.
      </p>
    </footer>
  )
}

export default Footer