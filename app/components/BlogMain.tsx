import Image from "next/image"
import laptopImage from '@/public/asset/7414db416f86ad5f528c83ac716cb24718886f91.jpg';
import manProfile from '@/public/asset/15bd5453775c94f3812e0d7f305fa2d643c62c62.png';
import image1 from "@/public/asset/944d327d0dfeb29d4f300f3bd9018602a59b293c.jpg";
import image1Profile from '@/public/asset/60a1d2c3bc6745b7da27fbb1b7f3ae509b0deade.png';
import image2 from '@/public/asset/5d33261464a4a4cda7053ba7f3b4b5bf738e62c2.jpg';
import image2Profile from '@/public/asset/ff8f2b3ece44e6b1c069938d935df3b2e20e89e7.png';
import image3 from '@/public/asset/40846eb7b455552f22c57486e14ea648f980ed48.jpg';
import image3Profile from '@/public/asset/a57734129cfaa31551a7005e7db5a7fdf3dfca97.png';

const BlogMain = () => {
  return (
    <main>
      <section className='my-10 text-center
      w-full px-6'>
        <h1 className='text-2xl font-bold
        leading-[178%] dark:text-white'>
          Latest news <span
          className='text-[#1090CB]'>
          Updates</span>
        </h1>
        <p className='my-5 text-[#777777]
        xl:text-lg dark:text-[#8d8d8d]'>
          Lorem Ipsum is simply dummy text of
          the printing.
        </p>
        <div className='outline-none py-2 px-3
        bg-[#F1F1F1] rounded-[10px] mx-auto
        max-w-100 flex items-center gap-2 dark:bg-neutral-800/50'>
          <svg width="15" height="15"
          viewBox="0 0 15 15" fill="none"
          xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2_1776)">
            <path d="M14.9084 14.0247L10.5511
            9.66728C11.3775 8.64696 11.875
            7.34981 11.875 5.93752C11.875
            2.66359 9.21142 0 5.93749
            0C2.66356 0 0 2.66359 0 5.93752C0
            9.21145 2.66359 11.875 5.93752
            11.875C7.34981 11.875 8.64696
            11.3775 9.66729 10.5511L14.0247
            14.9085C14.1468 15.0305 14.3446
            15.0305 14.4667 14.9085L14.9085
            14.4666C15.0305 14.3446 15.0305
            14.1467 14.9084 14.0247ZM5.93752
            10.625C3.35268 10.625 1.25001
            8.52236 1.25001 5.93752C1.25001
            3.35268 3.35268 1.25001 5.93752
            1.25001C8.52236 1.25001 10.625
            3.35268 10.625 5.93752C10.625
            8.52236 8.52236 10.625 5.93752
            10.625Z" fill="#727272"/>
            </g>
            <defs>
            <clipPath id="clip0_2_1776">
            <rect width="15" height="15"
            fill="white"/>
            </clipPath>
            </defs>
          </svg>
          <input type="text"
          placeholder='Search'
          className='outline-none text-sm'/>
        </div>
        <div className='grid grid-cols-2 gap-4
        sm:grid-cols-4 md:grid-cols-5 mt-8
        max-w-236.5 mx-auto'>
          <div className='p-2
          rounded-full text-xs text-[#1090CB]
          bg-[#E7EFF3] cursor-pointer dark:bg-[#1090CB]/10'>
            Lorem Ipsum
          </div>
          <div className='py-2 px-3
          rounded-full text-xs text-[#1090CB]
          bg-[#E7EFF3] cursor-pointer dark:bg-[#1090CB]/10'>
            Lorem Ipsum
          </div>
          <div className='py-2 px-3
          rounded-full text-xs text-[#1090CB]
          bg-[#E7EFF3] cursor-pointer dark:bg-[#1090CB]/10'>
            Lorem Ipsum
          </div>
          <div className='py-2 px-3
          rounded-full text-xs text-[#1090CB]
          bg-[#E7EFF3] cursor-pointer dark:bg-[#1090CB]/10'>
            Lorem Ipsum
          </div>
          <div className='py-2 px-3
          rounded-full text-xs text-white dark:bg-blue-900/80
          bg-[#1090CB] cursor-pointer'>
            Lorem Ipsum
          </div>
        </div>
      </section>
      <section className='my-14 flex flex-col
      md:flex-row items-center gap-6 px-6
      w-full max-w-7xl md:mx-auto justify-center'>
        <div className='w-85.25 h-65
        md:w-136.25 md:h-70 overflow-hidden
        mr-auto'>
          <Image
          src={laptopImage}
          alt=""
          width={545}
          height={340}
          className="object-cover w-full
          h-full"/>
        </div>
        <div className="md:max-w-131.25">
          <h2 className="text-lg font-semibold
          mb-7 dark:text-white">Lorem Ipsum is simply dummy
            text of the printing.</h2>
          <p className="text-sm text-[#424242] dark:text-[#858585]">
            Lorem Ipsum is simply dummy text
            of the printing and typesetting
            industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text
            ever since the .</p>
            <div className="flex items-center
            justify-between w-full mt-5">
              <div className="flex items-center
              gap-2">
                <div className="w-13.5 h-13.5
                overflow-hidden rounded-full">
                 <Image
                 src={manProfile}
                 alt=""
                 width={54}
                 height={54}
                 className="w-full h-full
                 object-cover"/>  
                </div>
                <div>
                  <h3 className="text-sm dark:text-white">
                    Name here</h3>
                  <h4
                  className="text-[#7B7B7B]
                  text-xs mt-1">20.12.2020</h4>
                </div>
              </div>
              <button className="text-[#1090CB]
              text-xs cursor-pointer hover:underline">
                Read More
              </button>  
            </div>
        </div>
      </section>
      <section className='px-6 grid grid-cols-2
      md:grid-cols-3 gap-7 max-w-7xl mx-auto
      mb-12'>
        <div className="space-y-5">
          <div className="w-40.25 h-40.25
          sm:w-46.25 sm:h-46.25
          md:w-53.25 lg:w-63.25 lg:h-56.25
          rounded-[45px] overflow-hidden">
            <Image
            src={image1}
            alt=""
            width={333}
            height={306}
            className="w-full h-full
            object-cover"/>
          </div>
          <h2 className="md:text-[23px]
          font-semibold dark:text-white">
           Lorem Ipsum is simply dummy text
           of the printing.</h2>
           <p className="text-sm md:text-base
           text-[#424242] dark:text-[#858585]">
            Lorem Ipsum is simply dummy text
            of the printing and typesetting
            industry. Lorem Ipsum has been
            the industry&apos;s standard dummy
            text ever since the .
           </p>
           <div className="flex items-center
           gap-2">
            <div className="w-13.5 h-13.5
            overflow-hidden rounded-full">
                <Image
                src={image1Profile}
                alt=""
                width={54}
                height={54}
                className="w-full h-full
                object-cover"/>  
            </div>
            <div>
              <h3 className="text-sm dark:text-white">
              Name here</h3>
              <h4
              className="text-[#7B7B7B]
              text-xs mt-1">20.12.2020
              </h4>
            </div>
           </div>
        </div>
        <div className="space-y-5">
          <div className="w-40.25 h-40.25
          sm:w-46.25 sm:h-46.25
          md:w-53.25 lg:w-63.25 lg:h-56.25
          rounded-[45px] overflow-hidden">
            <Image
            src={image2}
            alt=""
            width={333}
            height={306}
            className="w-full h-full
            object-cover"/>
          </div>
          <h2 className="md:text-[23px]
          font-semibold dark:text-white">
           Lorem Ipsum is simply dummy text
           of the printing.</h2>
           <p className="text-sm md:text-base
           text-[#424242] dark:text-[#858585]">
            Lorem Ipsum is simply dummy text
            of the printing and typesetting
            industry. Lorem Ipsum has been
            the industry&apos;s standard dummy
            text ever since the .
           </p>
           <div className="flex items-center
           gap-2">
            <div className="w-13.5 h-13.5
            overflow-hidden rounded-full">
                <Image
                src={image2Profile}
                alt=""
                width={54}
                height={54}
                className="w-full h-full
                object-cover"/>  
            </div>
            <div>
              <h3 className="text-sm dark:text-white">
              Name here</h3>
              <h4
              className="text-[#7B7B7B]
              text-xs mt-1">20.12.2020
              </h4>
            </div>
           </div>
        </div>
        <div className="space-y-5">
          <div className="w-40.25 h-40.25
          sm:w-46.25 sm:h-46.25
          md:w-53.25 lg:w-63.25 lg:h-56.25
          rounded-[45px] overflow-hidden">
            <Image
            src={image3}
            alt=""
            width={333}
            height={306}
            className="w-full h-full
            object-cover"/>
          </div>
          <h2 className="md:text-[23px]
          font-semibold dark:text-white">
           Lorem Ipsum is simply dummy text
           of the printing.</h2>
           <p className="text-sm md:text-base
           text-[#424242] dark:text-[#858585]">
            Lorem Ipsum is simply dummy text
            of the printing and typesetting
            industry. Lorem Ipsum has been
            the industry&apos;s standard dummy
            text ever since the .
           </p>
           <div className="flex items-center
           gap-2">
            <div className="w-13.5 h-13.5
            overflow-hidden rounded-full">
                <Image
                src={image3Profile}
                alt=""
                width={54}
                height={54}
                className="w-full h-full
                object-cover"/>  
            </div>
            <div>
              <h3 className="text-sm dark:text-white">
              Name here</h3>
              <h4
              className="text-[#7B7B7B]
              text-xs mt-1">20.12.2020
              </h4>
            </div>
           </div>
        </div>
        <div className="space-y-5">
          <div className="w-40.25 h-40.25
          sm:w-46.25 sm:h-46.25
          md:w-53.25 lg:w-63.25 lg:h-56.25
          rounded-[45px] overflow-hidden">
            <Image
            src={image1}
            alt=""
            width={333}
            height={306}
            className="w-full h-full
            object-cover"/>
          </div>
          <h2 className="md:text-[23px]
          font-semibold dark:text-white">
           Lorem Ipsum is simply dummy text
           of the printing.</h2>
           <p className="text-sm md:text-base
           text-[#424242] dark:text-[#858585]">
            Lorem Ipsum is simply dummy text
            of the printing and typesetting
            industry. Lorem Ipsum has been
            the industry&apos;s standard dummy
            text ever since the .
           </p>
           <div className="flex items-center
           gap-2">
            <div className="w-13.5 h-13.5
            overflow-hidden rounded-full">
                <Image
                src={image1Profile}
                alt=""
                width={54}
                height={54}
                className="w-full h-full
                object-cover"/>  
            </div>
            <div>
              <h3 className="text-sm dark:text-white">
              Name here</h3>
              <h4
              className="text-[#7B7B7B]
              text-xs mt-1">20.12.2020
              </h4>
            </div>
           </div>
        </div>
        <div className="space-y-5">
          <div className="w-40.25 h-40.25
          sm:w-46.25 sm:h-46.25
          md:w-53.25 lg:w-63.25 lg:h-56.25
          rounded-[45px] overflow-hidden">
            <Image
            src={image2}
            alt=""
            width={333}
            height={306}
            className="w-full h-full
            object-cover"/>
          </div>
          <h2 className="md:text-[23px]
          font-semibold dark:text-white">
           Lorem Ipsum is simply dummy text
           of the printing.</h2>
           <p className="text-sm md:text-base
           text-[#424242] dark:text-[#858585]">
            Lorem Ipsum is simply dummy text
            of the printing and typesetting
            industry. Lorem Ipsum has been
            the industry&apos;s standard dummy
            text ever since the .
           </p>
           <div className="flex items-center
           gap-2">
            <div className="w-13.5 h-13.5
            overflow-hidden rounded-full">
                <Image
                src={image2Profile}
                alt=""
                width={54}
                height={54}
                className="w-full h-full
                object-cover"/>  
            </div>
            <div>
              <h3 className="text-sm dark:text-white">
              Name here</h3>
              <h4
              className="text-[#7B7B7B]
              text-xs mt-1">20.12.2020
              </h4>
            </div>
           </div>
        </div>
        <div className="space-y-5">
          <div className="w-40.25 h-40.25
          sm:w-46.25 sm:h-46.25
          md:w-53.25 lg:w-63.25 lg:h-56.25
          rounded-[45px] overflow-hidden">
            <Image
            src={image3}
            alt=""
            width={333}
            height={306}
            className="w-full h-full
            object-cover"/>
          </div>
          <h2 className="md:text-[23px]
          font-semibold dark:text-white">
           Lorem Ipsum is simply dummy text
           of the printing.</h2>
           <p className="text-sm md:text-base
           text-[#424242] dark:text-[#858585]">
            Lorem Ipsum is simply dummy text
            of the printing and typesetting
            industry. Lorem Ipsum has been
            the industry&apos;s standard dummy
            text ever since the .
           </p>
           <div className="flex items-center
           gap-2">
            <div className="w-13.5 h-13.5
            overflow-hidden rounded-full">
                <Image
                src={image3Profile}
                alt=""
                width={54}
                height={54}
                className="w-full h-full
                object-cover"/>  
            </div>
            <div>
              <h3 className="text-sm dark:text-white">
              Name here</h3>
              <h4
              className="text-[#7B7B7B]
              text-xs mt-1">20.12.2020
              </h4>
            </div>
           </div>
        </div>
      </section>
    </main>
  )
}

export default BlogMain