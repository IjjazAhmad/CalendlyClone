"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { arrowLeft, calender, calendly, clock, world } from '../../../public/images'
import Link from 'next/link'
import MeetingConfirm from '../../components/meetingConfirm/MeetingConfirm'


export default function adddetail() {
  const [confirm, setisConfirm] = useState(false)
  const handleSubmit=()=>{
    setisConfirm(true)
  }
  return (

    <div className="flex flex-wrap justify-center items-center flex-col w-full">
      {
        !confirm?
      <div className='relative flex   border border-borderClr-1 shadow-2 rounded-md w-[95%] h-[90vh] sm:max-w-[1060px] sm:h-[700px] mt-[66px] mb-[30px]' >
        <Image src={calendly} alt="..." className='w-[105px] h-[105px] absolute top-0 right-0' />
        <div className='w-1/3 border-r border-borderClr-1 p-8'>
          <Link href={"/selecttime"} > <Image src={arrowLeft} alt="..." className='w-9 h-9 mr-1 border border-borderClr-1 rounded-full mb-4' /></Link>
          <p className='text-lightBlack font-semibold text-[14px] '>Muhammad Talha</p>
          <p className='text-black font-black text-2xl mb-4'>30 Minute Meeting</p>
          <p className='text-lightBlack font-bold text-[14px] mb-2 flex items-center'><Image src={clock} alt=".." className='w-5 h-5 mr-1' />30 min</p>
          <p className='text-lightBlack font-bold text-[14px] mb-2 flex items-center '><Image src={calender} alt="..." className='w-5 h-5 mr-1' /> 11:00 am - 11:30 am, Wednesday, March 27, 2024 </p>
          <p className='text-lightBlack font-bold text-[14px] mb-2 flex items-center '><Image src={world} alt="..." className='w-5 h-5 mr-1' /> Pakistan, Maldives Time</p>
        </div>
        <div className='w-3/3'>
          <p className='text-black font-bold text-[17px] mt-7 mb-5 ml-8 '>Select Data & Time</p>
          <div>1</div>
          <div>2</div>
          <button onClick={handleSubmit} type="submit" className='text-white-default bg-primary rounded-[40px] px-[17px] py-[11px]'>Schedule Event</button>
        </div>
      </div>
        :
        <MeetingConfirm/>
      }
    </div>
  )
}
