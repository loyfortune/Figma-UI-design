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
          max-w-sm'>
           Lorem Ipsum is simply dummy text of the
           printing and typesetting industry.
         </p>
         <div className='flex items-center gap-3
         text-neutral-900 lg:hidden'>
            <Link href='/'>
            <button className='bg-white rounded-full
            p-1 shadow-lg cursor-pointer'>
                <FiFacebook />
            </button>
            </Link>
            <Link href='/'>
            <button className='bg-white rounded-full
            p-1 shadow-lg cursor-pointer'>
                <FiInstagram />
            </button>
            </Link>
            <Link href='/'>
            <button className='bg-white rounded-full
            p-1 shadow-lg cursor-pointer'>
                <FiTwitter />
            </button>
            </Link>
            <Link href='/'>
            <button className='bg-white rounded-full
            p-1 shadow-lg cursor-pointer'>
                <FiLinkedin />
            </button>
            </Link>
         </div>
         <p className='text-sm text-neutral-700
         hidden md:block'>
            @Lorem
         </p>
       </div>
       <div className="flex
       justify-between">
        <div className='flex items-center
        justify-center gap-12'>
          <div className="w-fit text-neutral-900
          text-sm">
           <h4 className='font-bold mb-4'>About us</h4>
            <ul className='flex flex-col gap-y-2'>
              <li>Lorem</li>
              <li>Portfolio</li>
              <li>Careers</li>
              <li>Contact us</li>
            </ul>
         </div>
         <div className="w-fit text-neutral-900
         text-sm max-w-xs">
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
            <button className='bg-white rounded-full
            p-1 shadow-lg cursor-pointer'>
                <FiFacebook />
            </button>
            </Link>
            <Link href='/'>
            <button className='bg-white rounded-full
            p-1 shadow-lg cursor-pointer'>
                <FiInstagram />
            </button>
            </Link>
            <Link href='/'>
            <button className='bg-white rounded-full
            p-1 shadow-lg cursor-pointer'>
                <FiTwitter />
            </button>
            </Link>
            <Link href='/'>
            <button className='bg-white rounded-full
            p-1 shadow-lg cursor-pointer'>
                <FiLinkedin />
            </button>
            </Link>
         </div>
       </div>
      </div>
      <p className='text-xs lg:text-sm
      text-neutral-700 text-center py-6 border-t
      border-taupe-300'>
        &copy; {new Date().getFullYear()} Lorem All rights Reserved.
      </p>
    </footer>
  )
}

export default Footer