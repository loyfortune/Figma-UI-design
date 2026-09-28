import Image from "next/image"
import succlent from '@/public/asset/d06c223b1314fd827f18fa99ad2a14d4c761f41e.png';
import cuboid from '@/public/asset/38ba09759979e811d3e2b7ae3fd4621892f590fc.png';
import bigPlant from '@/public/asset/c2ccde108730746fb3b2aa64cb0debb93e7c3c98.png';
import billUsingLaptop from '@/public/asset/4b723c0b265d856c54d441e8037e270deceed8ef.png';

const Hero = () => {
  return (
    <section className="bg-[#E8F4FA] flex flex-row py-10
    px-8 justify-center items-center gap-4 md:gap-10
    relative w-full overflow-visible z-10 dark:bg-gray-900
    scrollbar-none">
      <div className="absolute top-14 -right-109
      w-115.75 sm:w-118.75 h-137.75 z-25">
        <svg width="47" height="531" viewBox="0 0 47 531"
        fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.7283 186.353C40.6069 228.272 19.7551
          282.23 45.6957 347.368C53.0404 365.811 56.5381
          376.626 66.8342 393.597C116.83 476.003 189.595
          521.937 285.656 529.148C352.27 534.148 431.191
          533.543 460.244 467.249C489.603 400.257 473.972
          315.214 423.839 241.2C368.644 159.713 320.481
          102.416 231.244 45.3169C183.487 14.7592 88.0571
          -27.7495 33.1692 24.9451C-8.61798 65.0625
          -7.15036 144.434 16.7283 186.353Z" fill="#1090CB"/>
        </svg>
      </div>
      <div className="absolute -bottom-23 -left-7 sm:-left-4
      w-[608.3px] h-[511.77px] sm:w-[631.3px]
      sm:h-[521.77px] z-25">
        <svg width="55" height="609"
        viewBox="0 0 55 609" fill="none"
        xmlns="http://www.w3.org/2000/svg">
          <path d="M-391.591 0.0580718C-445.452
          -1.66818 -477.316 35.2762 -501.572
          83.3967C-545.833 171.201 -560.967
          276.157 -546.418 365.515C-531.868 454.873
          -479.047 516.999 -426.364 554.226C-346.508
          610.655 -325.59 612.264 -247.5
          606.682C-190.503 602.607 -159.808 595.228
          -93.8058 561.507C-27.8039 527.786 76.4386
          464.776 50.4221 374.21C29.8276 302.518
          -112.879 281.976 -112.879 281.976C-112.879
          281.976 -179.389 274.376 -219.359 243.412C-260.729
          211.364 -286.937 127.7 -286.937 127.7C-286.937 127.7
          -327.164 2.12298 -391.591 0.0580718Z"
          fill="#08D3BB"/>
        </svg>
      </div>
      <div className="absolute left-0 top-12
       w-70 h-70 rounded-full z-0 from-0% to-100%
       text-transparent bg-conic blur-xl
       via-50% via-purple-50 dark:hidden">.</div>
      <Image src={succlent} alt="succlent"
        className="w-8 h-8 object-cover absolute
        top-1.5 left-6 z-10 sm:hidden"
        width={16.5} height={16.5}
        />
        <Image src={cuboid} alt="cuboid"
        className="w-6 h-6 object-cover absolute
        top-6 right-8 z-10 sm:hidden rotate-55"
        width={17} height={17}
        />
        <Image src={bigPlant} alt="bigPlant"
        className="w-13 h-13 object-cover absolute
        bottom-7 right-7 z-10 sm:hidden"
        width={46.25} height={46.25}
        />
     <div className="sm:w-120 md:w-[65%]">
        <div className='text-left space-y-6
         lg:space-y-10 relative'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl
          font-bold dark:text-white'>
            Experienced <span
            className='text-[#1090CB]'>
              mobile and web </span>
              applications and website builders measuring.
          </h1>
          <p className='text-sm sm:text-base lg:text-lg
          text-neutral-700 dark:text-neutral-500'>
            KODEX TECHNOLOGY (PVT) LTD is a team of
            experienced mobile and web applications
            and website builders measuring dozens of
            completed projects. We build and develop
            mobile applications for several top
            platforms, including Android & IOS. 
          </p>
           <div className='flex items-center gap-4'>
            <button className='bg-[#1090CB] text-sm
            text-white py-2 px-4 rounded-md
             cursor-pointer'>
              Contact Us
            </button>
            <button className='bg-white text-sm
            text-[#1090CB] py-2 px-4 rounded-md
            border border-[#1090CB] cursor-pointer'>
              View more
            </button>
          </div>
        </div>
     </div>
      <div className="relative hidden sm:inline-flex
       w-full lg:h-fit md:w-[50%]">
        <div className="absolute left-27 top-4
        w-60 h-60 rounded-full z-0 from-0% to-100%
        text-transparent bg-conic blur-xl
        via-50% via-amber-50 dark:hidden">.</div>
        <Image src={succlent} alt="succlent"
        className="w-16.5 h-16.5 object-cover absolute
        top-15 left-12 z-10 hidden sm:block"
        width={16.5} height={16.5}
        />
        <Image src={cuboid} alt="cuboid"
        className="w-17 h-17 object-cover absolute
        top-3 right-8 z-10 hidden sm:block rotate-55"
        width={17} height={17}
        />
        <Image src={bigPlant} alt="bigPlant"
        className="w-30.25 h-30.25 object-cover absolute
        bottom-4 right-0 z-25 hidden sm:block"
        width={46.25} height={46.25}
        />
        <Image src={billUsingLaptop} alt="man"
        className="object-cover w-90 h-130 z-10
        lg:h-150"
        width={127.25} height={190.75}
        />

      </div>
    </section>
  )
}

export default Hero