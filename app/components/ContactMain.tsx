import Image from "next/image"
import globe from '@/public/asset/ee8718a26a77c8232c6dfd3482a61c60190b4918.png';
import beverly from '@/public/asset/263d8ccb74b65d724fa7d58310bbb095f7bf8f29.png';
import { FiInstagram } from "react-icons/fi";
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
            p-1 bg-[#F5F3DA]">
              <Image
              src={beverly}
              alt=""
              width={56}
              height={56}
              className="w-full h-full
              object-cover"/>
            </div>
            <h1 className="text-3xl
            font-semibold my-4">
             Let&apos;s Collaborate</h1>
            <p className="md:text-sm
            md:text-[#777777]
            text-[#4d4d4d]
            lg:text-base">
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
            <h2 className="text-sm">
             Follow us
            </h2>
            <div className="flex
            items-center gap-2 mt-2">
              <button
              className='bg-white
              rounded-full p-1
              shadow-lg cursor-pointer'>
                <RiFacebookFill />
              </button>
              <button
              className='bg-white
              rounded-full p-1
              shadow-lg cursor-pointer'>
                <FiInstagram />
              </button>
              <button
              className='bg-white
              rounded-full p-1
              shadow-lg cursor-pointer'>
                <RiTwitterFill />
              </button>
              <button
              className='bg-white
              rounded-full p-1
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
          sm:border-none">
            <svg width="30" height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
             <g clipPath="url(#clip0_2_1949)">
             <path d="M10.0757
             12.3489C11.1038 11.3208
             11.1038 9.64807 10.0757
             8.61999L6.46006
             5.00434C5.90699 4.45122
             5.14029 4.17096 4.3573
             4.23542C3.58926 4.29864
             2.89457 4.69016 2.45143
             5.3095C2.35943 5.43805
             2.27061 5.56848 2.18359
             5.69997L9.45408
             12.9705L10.0757 12.3489Z"
             fill="black"/>
             <path d="M24.9955
             23.5394L21.3798
             19.9237C20.3519 18.8958
             18.679 18.8956 17.6509
             19.9237L17.0293
             20.5454L24.3001
             27.8161C24.4316 27.7291
             24.5618 27.6399 24.6903
             27.548C25.3096 27.1049
             25.7011 26.4102 25.7644
             25.6421C25.8289 24.859
             25.5486 24.0926 24.9955
             23.5394Z" fill="black"/>
             <path d="M14.5435
             21.939C13.8391 21.939
             13.1771 21.6648 12.679
             21.1668L8.83292
             17.3207C8.33494 16.8227
             8.0606 16.1605 8.0606
             15.4562C8.0606 15.0561
             8.14937 14.6698 8.31707
             14.3193L1.2857
             7.28784C0.296635
             9.36458 -0.14106 11.6913
             0.0395256 14.0267C0.282865
             17.1738 1.64001 20.1301
             3.86107 22.3511L7.64869
             26.1386C9.86962 28.3596
             12.826 29.7168 15.973
             29.9602C16.3169 29.9868
             16.6605 30 17.0033
             30C18.9882 30 20.9409
             29.5575 22.7118
             28.7141L15.6804
             21.6826C15.3299 21.8503
             14.9435 21.939 14.5435
             21.939Z" fill="black"/>
             <path d="M17.6951
             0C17.2097 0 16.8162
             0.393516 16.8162
             0.878906C16.8162 1.3643
             17.2097 1.75781 17.6951
             1.75781C23.5106 1.75781
             28.2419 6.48914 28.2419
             12.3047C28.2419 12.7901
             28.6355 13.1836 29.1208
             13.1836C29.6062 13.1836
             29.9998 12.7901 29.9998
             12.3047C29.9998 5.51988
             24.4799 0 17.6951 0Z"
             fill="black"/>
             <path d="M17.695
             12.3039C17.695 12.3039
             17.6951 12.3042 17.6951
             12.3047C17.6951 12.7901
             18.0886 13.1836 18.574
             13.1836C19.0594 13.1836
             19.4529 12.7901 19.4529
             12.3047C19.4529 11.3354
             18.6643 10.5469 17.6951
             10.5469C17.2097 10.5469
             16.8162 10.94 16.8162
             11.4254C16.8162 11.9108
             17.2096 12.3039 17.695
             12.3039Z" fill="black"/>
             <path d="M17.6951
             8.78906C19.6336 8.78906
             21.2107 10.3662 21.2107
             12.3047C21.2107 12.7901
             21.6042 13.1836 22.0896
             13.1836C22.575 13.1836
             22.9685 12.7901 22.9685
             12.3047C22.9685 9.39691
             20.6028 7.03125 17.6951
             7.03125C17.2097 7.03125
             16.8162 7.42477 16.8162
             7.91016C16.8162 8.39555
             17.2097 8.78906 17.6951
             8.78906Z" fill="black"/>
             <path d="M17.6951
             3.51562C17.2097 3.51562
             16.8162 3.90914 16.8162
             4.39453C16.8162 4.87992
             17.2097 5.27344 17.6951
             5.27344C21.5721 5.27344
             24.7263 8.42766 24.7263
             12.3047C24.7263 12.7901
             25.1198 13.1836 25.6052
             13.1836C26.0906 13.1836
             26.4841 12.7901 26.4841
             12.3047C26.4841 7.4584
             22.5414 3.51562 17.6951
             3.51562Z" fill="black"/>
             </g>
             <defs>
             <clipPath id="clip0_2_1949">
             <rect width="30" height="30"
             fill="white"/>
             </clipPath>
             </defs>
            </svg>
            <span className="font-light
            text-[#333333] text-sm">
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
            <svg width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
             <path d="M14.254
             0.89209C9.04313 0.89209
             4.80371 5.13151 4.80371
             10.3423C4.80371 16.8918
             14.2632 28.0796 14.2632
             28.0796C14.2632 28.0796
             23.7042 16.5697 23.7042
             10.3423C23.7042 5.13151
             19.4649 0.89209 14.254
             0.89209ZM17.1053
             13.1094C16.3191 13.8954
             15.2866 14.2885 14.254
             14.2885C13.2215 14.2885
             12.1887 13.8954 11.4028
             13.1094C9.83051 11.5373
             9.83051 8.97914 11.4028
             7.40687C12.1641 6.64521
             13.1768 6.22571 14.254
             6.22571C15.3311 6.22571
             16.3436 6.64537 17.1053
             7.40687C18.6776 8.97914
             18.6776 11.5373 17.1053
             13.1094Z" fill="black"/>
            </svg>
            <span className="
            text-[#333333]
            font-light text-sm">
             but also the leap
             into electronic
             typesetting</span>
          </div>
      </section>
      <section className="p-6 h-full
      w-full bg-[#E8F4FA] mt-13">
        <div className="mb-10
        space-y-3.5 text-center">
          <h2 className="text-lg">
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
              text-[#4F4F4F] mb-1">
                First Name
              </label>
              <input type="text"
              className="py-2 px-3
              rounded-[9px] bg-white
              w-full outline-[#1090CB]"/>
            </div>
            <div className="w-full">
              <label className="text-xs
              text-[#4F4F4F] mb-1">
                Last Name
              </label>
              <input type="text"
              className="py-2 px-3
              rounded-[9px] bg-white
              w-full outline-[#1090CB]"/>
            </div>
          </div>
          <div className="w-full">
            <label className="text-xs
            text-[#4F4F4F] mb-1
            block">
              Email Address
            </label>
            <input type="text"
            className="py-2 px-3
            rounded-[9px] bg-white
            w-full outline-[#1090CB]"/>
          </div>
          <div className="w-full">
            <label className="text-xs
            text-[#4F4F4F] mb-1">
              Message
            </label>
            <textarea className="w-full
            rounded-[9px] py-2 px-3
            bg-white h-58
            outline-[#1090CB]"/>
          </div>
          <div className="flex
          justify-end">
            <button className="mt-8
            text-center text-sm w-full
            text-white rounded-[10px]
            py-2 px-3 bg-[#1090CB]
            cursor-pointer max-w-48.25">
             Get in touch
           </button>
          </div>
          
        </form>
      </section>
    </main>
  )
}

export default ContactMain