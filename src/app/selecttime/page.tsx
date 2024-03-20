import Image from 'next/image'
import React from 'react'
import { arrowLeft, calendly, clock } from '../../../public/images'
import Link from 'next/link'

export default function SelectTime() {
  return (
    <div className="flex flex-wrap justify-center items-center flex-col w-full">
      <div className='relative flex   border border-borderClr-1 shadow-2 rounded-md w-[95%] h-[90vh] sm:max-w-[1060px] sm:h-[700px] mt-[66px] mb-[30px]' >
        <Image src={calendly} alt="Logo" className='w-[105px] h-[105px] absolute top-0 right-0' />

        <div className='w-1/3 border-r border-borderClr-1 p-8'>
        <Link href={"/availability"} > <Image src={arrowLeft} alt="..." className='w-9 h-9 mr-1 border border-borderClr-1 rounded-full mb-4' /></Link>
          <p className='text-lightBlack font-semibold text-[14px] '>Muhammad Talha</p>
          <p className='text-black font-black text-2xl mb-3'>30 Minute Meeting</p>
          <p className='text-lightBlack font-normal text-[14px] mb-2 flex items-center'><Image src={clock} alt=".." className='w-3 h-3 mr-1' />30 min</p>
        </div>
        <div className='w-3/3'>
          <p className='text-black font-bold text-[17px] mt-7 mb-5 ml-8 '>Select Data & Time</p>
          <div>1</div>
          <div>2</div>
          <Link href={"/adddetail"} type="submit" className='text-white-default bg-primary rounded-[40px] px-[17px] py-[11px]'>Next</Link>
        </div>
      </div>
    </div>
  )
}
