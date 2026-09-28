import Image from "next/image"
import globe from '@/public/asset/ee8718a26a77c8232c6dfd3482a61c60190b4918.png';
import beverly from '@/public/asset/263d8ccb74b65d724fa7d58310bbb095f7bf8f29.png';
import { FiInstagram, FiMapPin, FiPhoneCall, FiPhoneOutgoing } from "react-icons/fi";
import { RiFacebookFill,
         RiLinkedinFill,
         RiTwitterFill } from
         "react-icons/ri";

const ContactMain = () => {
  return (
    <main>
      <section className="p-8 max-w-7xl
      mx-auto h-full">
        <div className="relative md:flex
        md:items-center md:justify-between
        h-full">
          <div className="absolute top-1/2
          left-0 w-full h-97.75 md:hidden
          overflow-x-hidden sm:w-152">
            <Image
            src={globe}
            alt=""
            width={608}
            height={391}
            className="w-full h-full
            object-cover object-left"/>
          </div>
          <div className="absolute top-1/2
          left-0 md:relative mt-8 md:mt-0">
            <div className="rounded-full
            overflow-hidden w-14 h-14
            p-1 bg-[#F5F3DA] dark:bg-yellow-400/10">
              <Image
              src={beverly}
              alt=""
              width={56}
              height={56}
              className="w-full h-full
              object-cover"/>
            </div>
            <h1 className="text-3xl
            font-semibold my-4 dark:text-white">
             Let&apos;s Collaborate</h1>
            <p className="md:text-sm
            md:text-[#777777]
            text-[#4d4d4d]
            lg:text-base dark:text-gray-300">
             Lorem is simply dummy text
             of the printing.
            </p>
          </div>
          <div className="w-152 h-97.75
          overflow-hidden hidden
          md:inline-flex relative">
            <Image
            src={globe}
            alt=""
            width={608}
            height={391}
            className="w-full h-full
            object-cover"/>
            <div className="absolute
            bottom-5 left-1/2 p-4
            rounded-full bg-[#ff000023]">
              <svg width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
                <circle cx="5"
                cy="5" r="5"
                fill="#FF0000"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col
      sm:flex-row gap-4 md:gap-15
      sm:items-center mt-97.75 px-6
      md:mt-8 sm:justify-center">
          <div className="p-2
          border-l border-[#C2C2C2]
          sm:border-none">
            <h2 className="text-sm dark:text-white">
             Follow us
            </h2>
            <div className="flex
            items-center gap-2 mt-2">
              <button
              className='bg-white
              rounded-full p-1
              shadow-lg cursor-pointer dark:bg-gray-700
              dark:text-gray-400'>
                <RiFacebookFill />
              </button>
              <button
              className='bg-white
              rounded-full p-1 dark:bg-gray-700 dark:text-gray-400
              shadow-lg cursor-pointer'>
                <FiInstagram />
              </button>
              <button
              className='bg-white
              rounded-full p-1 dark:bg-gray-700 dark:text-gray-400
              shadow-lg cursor-pointer'>
                <RiTwitterFill />
              </button>
              <button
              className='bg-white
              rounded-full p-1 dark:bg-gray-700 dark:text-gray-400
              shadow-lg cursor-pointer'>
                <RiLinkedinFill />
              </button>
            </div>
          </div>
          <svg width="1" height="102"
          viewBox="0 0 1 102"
          fill="none"
          className="hidden
          sm:inline-flex"
          xmlns="http://www.w3.org/2000/svg">
           <line x1="0.5" x2="0.5"
           y2="102.005"
           stroke="#C2C2C2"/>
          </svg>
          <div className="flex
          items-center gap-3 p-2
          border-l border-[#C2C2C2]
          sm:border-none dark:border-gray-500">
            <FiPhoneCall className="dark:text-gray-500 text-3xl"/>
            <span className="font-light
            text-[#333333] text-sm dark:text-gray-100">
             +94 4444 5555 6
            </span>
          </div>
          <svg width="1" height="102"
          viewBox="0 0 1 102"
          fill="none"
          className="hidden
          sm:inline-flex"
          xmlns="http://www.w3.org/2000/svg">
           <line x1="0.5" x2="0.5"
           y2="102.005"
           stroke="#C2C2C2"/>
          </svg>
          <div className="p-2 flex
          items-center gap-3 border-l
          border-[#C2C2C2]
          sm:border-none">
            <FiMapPin className="dark:text-gray-500 text-3xl"/>
            <span className="
            text-[#333333]
            font-light text-sm dark:text-gray-50">
             but also the leap
             into electronic
             typesetting</span>
          </div>
      </section>
      <section className="p-6 h-full
      w-full bg-[#E8F4FA] mt-13 dark:bg-gray-900">
        <div className="mb-10
        space-y-3.5 text-center">
          <h2 className="text-lg dark:text-white">
            Say hello
          </h2>
          <p className="text-sm
          text-[#777777]">
            Lorem Ipsum is simply
            dummy text of the printing.
          </p>
        </div>
        <form className="max-w-xl
        mx-auto space-y-3">
          <div className="flex gap-4
          items-center w-full">
            <div className="w-full">
              <label className="text-xs
              text-[#4F4F4F] mb-1 dark:text-gray-400">
                First Name
              </label>
              <input type="text"
              className="py-2 px-3
              rounded-[9px] bg-white
              w-full outline-[#1090CB] dark:bg-neutral-800/70"/>
            </div>
            <div className="w-full">
              <label className="text-xs
              text-[#4F4F4F] mb-1 dark:text-gray-400">
                Last Name
              </label>
              <input type="text"
              className="py-2 px-3
              rounded-[9px] bg-white
              w-full outline-[#1090CB] dark:bg-neutral-800/70"/>
            </div>
          </div>
          <div className="w-full">
            <label className="text-xs
            text-[#4F4F4F] mb-1
            block dark:text-gray-400">
              Email Address
            </label>
            <input type="text"
            className="py-2 px-3
            rounded-[9px] bg-white
            w-full outline-[#1090CB] dark:bg-neutral-800/70"/>
          </div>
          <div className="w-full">
            <label className="text-xs
            text-[#4F4F4F] mb-1 dark:text-gray-400">
              Message
            </label>
            <textarea className="w-full
            rounded-[9px] py-2 px-3
            bg-white h-58
            outline-[#1090CB] dark:bg-neutral-800/70"/>
          </div>
          <div className="flex
          justify-end">
            <button className="mt-8
            text-center text-sm w-full
            text-white rounded-[10px]
            py-2 px-3 bg-[#1090CB]
            cursor-pointer max-w-48.25 dark:bg-blue-900/6s0">
             Get in touch
           </button>
          </div>
          
        </form>
      </section>
    </main>
  )
}

export default ContactMain