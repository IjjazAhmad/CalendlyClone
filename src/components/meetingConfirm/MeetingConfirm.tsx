import React from 'react'
import { calender, calendly, userIcon, world } from '../../../public/images'
import Image from 'next/image'
import Link from 'next/link'

export default function meetingConfirm() {
  return (
    <div className='relative flex border border-borderClr-1 shadow-2 rounded-md w-[95%] h-[90vh] sm:w-[1060px] sm:h-[700px] mt-[66px] mb-[30px]' >
      <Image src={calendly} alt="Logo" className='w-[105px] h-[105px] absolute top-0 right-0' />
      <div className='flex flex-col items-center w-full mt-14'>
        <p className='text-black font-bold text-[18px]'>Your are scheduled</p>
        <p className='text-black font-medium text-[14px] my-5'>A calender invitation has been send to your email address</p>
        <Link href={"/"} className='text-black bg-white border rounded-[40px] px-[17px] py-[11px]'>Open Invitation</Link>
        <div className='border border-borderClr-1  rounded-md mt-5 py-5 ps-5 pr-16'>
          <p className='text-black font-extrabold text-[16px] mb-2 flex items-center '> 30 Minuts Meeting</p>
          <p className='text-lightBlack font-bold text-[14px] mb-2 flex items-center '><Image src={userIcon} alt="Logo" className='w-5 h-5 mr-1' /> Muhammad Talha</p>
          <p className='text-lightBlack font-bold text-[14px] mb-2 flex items-center '><Image src={calender} alt="Logo" className='w-5 h-5 mr-1' /> 11:00 am - 11:30 am, Wednesday, March 27, 2024 </p>
          <p className='text-lightBlack font-bold text-[14px] mb-2 flex items-center '><Image src={world} alt="Logo" className='w-5 h-5 mr-1' /> Pakistan, Maldives Time</p>
        </div>
      </div>
    </div>
  )
}
