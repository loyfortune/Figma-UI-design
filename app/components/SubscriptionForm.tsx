import Image from "next/image"
import chartPng from '@/public/asset/2b89403717774ab27b7a32aead1730790d170b55.png';
import starImage from '@/public/asset/c8a10b1f570fb7c53829a4cd40d12d7b0564a635.png';

const SubscriptionForm = () => {
  return (
  <div className="w-full bg-[#E8F4FA] my-8 py-22
   relative px-6 dark:bg-gray-900">
    <Image src={starImage} alt="star"
         className="absolute -top-7 left-14 rotate-[40.8deg]"
         width={55}
         height={55}/>
    <div className='text-center max-w-sm
    text-neutral-800 mx-auto relative'>
       <h3 className='text-xl sm:text-2xl font-bold
       mb-7 leading-loose dark:text-white'>
        Lorem ipsum is simply dummy <br />
        text of printing.
       </h3>
       <div className='flex items-center
        justify-center gap-3 w-80 sm:w-full'>
            <input type="email"
            placeholder="Enter your email"
            className='py-3 px-4 bg-white rounded-lg
            text-sm w-sm dark:bg-[#282828]/60 dark:text-gray-400'/>
            <button className='bg-black py-3 px-4
             text-sm text-white uppercase rounded-lg
             cursor-pointer dark:bg-white dark:text-black'>Subscribe
            </button>
        </div>
        <Image src={chartPng} alt="Chart"
         className='absolute -top-9 right-0
         md:-right-4'
         width={40}
         height={40}/>
         
    </div>
  </div>  
    
  )
}

export default SubscriptionForm