"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { arrowLeft, calendly, clock, world } from '../../../public/images'
import Link from 'next/link'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
export default function SelectTime() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="flex flex-wrap justify-center items-center flex-col w-full">
      <div className='relative flex flex-wrap  border border-borderClr-1 shadow-2 rounded-md w-[95%] h-[90vh] sm:max-w-[1060px] sm:h-[700px] mt-[66px] mb-[30px]' >
        <Image src={calendly} alt="Logo" className='w-[105px] h-[105px] absolute top-0 right-0' />
        <div className='w-[35%] border-r border-borderClr-1 p-8'>
          <Link href={"/availability"} > <Image src={arrowLeft} alt="..." className='w-9 h-9 mr-1 border border-borderClr-1 rounded-full mb-4' /></Link>
          <p className='text-lightBlack font-semibold text-[14px] '>Muhammad Talha</p>
          <p className='text-black font-black text-2xl mb-3'>30 Minute Meeting</p>
          <p className='text-lightBlack font-normal text-[14px] mb-2 flex items-center'><Image src={clock} alt=".." className='w-3 h-3 mr-1' />30 min</p>
        </div>
        <div className='w-[65%]'>
          <p className='text-black font-bold text-[17px] mt-7 mb-5 ml-8 '>Select Data & Time</p>
          <div className='flex flex-wrap'>
            <div className='raletive mx-6'>
              <Calendar onChange={onChange} value={value}
                className="border-0"
              />
              <p className='text-black font-bold text-[17px] mt-6 ml-3'>Time Zone</p>
              <p className='text-black font-normal text-[12px] mb-2 flex items-center ml-5'><Image src={world} alt="..." className='w-4 h-4 mr-1' /> Pakistan, Maldives Time</p>
              <Link href={"/adddetail"} className='absolute bottom-4 left-[37%]  text-white-default bg-primary rounded-[40px] px-[17px] py-[11px]'>Next</Link>
            </div>
            <div >
              <p className='text-black font-normal text-[14px] mb-2 mt-3'>Wednesday, March 27</p>
              <div className='overflow-y-auto h-[572px] w-[250px] '>
                <button className=' text-primary font-bold text-[14px] border border-primaryII  rounded-[4px] mb-[10px] w-[208px] h-[52px] '>9:00am</button>
                <button className=' text-primary font-bold text-[14px] border border-primaryII  rounded-[4px] mb-[10px] w-[208px] h-[52px]'>9:30am</button>
                <button className=' text-primary font-bold text-[14px] border border-primaryII  rounded-[4px] mb-[10px] w-[208px] h-[52px]'>10:00am</button>
                <button className=' text-primary font-bold text-[14px] border border-primaryII  rounded-[4px] mb-[10px] w-[208px] h-[52px]'>10:30am</button>
                <button className=' text-primary font-bold text-[14px] border border-primaryII  rounded-[4px] mb-[10px] w-[208px] h-[52px]'>11:00am</button>
                <button className=' text-primary font-bold text-[14px] border border-primaryII  rounded-[4px] mb-[10px] w-[208px] h-[52px]'>11:30am</button>
                <button className=' text-primary font-bold text-[14px] border border-primaryII  rounded-[4px] mb-[10px] w-[208px] h-[52px]'>12:00pm</button>
                <button className=' text-primary font-bold text-[14px] border border-primaryII  rounded-[4px] mb-[10px] w-[208px] h-[52px]'>12:30pm</button>
                <button className=' text-primary font-bold text-[14px] border border-primaryII  rounded-[4px] mb-[10px] w-[208px] h-[52px]'>1:00pm</button>
                <button className=' text-primary font-bold text-[14px] border border-primaryII  rounded-[4px] mb-[10px] w-[208px] h-[52px]'>1:30pm</button>
                <button className=' text-primary font-bold text-[14px] border border-primaryII  rounded-[4px] mb-[10px] w-[208px] h-[52px]'>2:00pm</button>
                <button className=' text-primary font-bold text-[14px] border border-primaryII  rounded-[4px] mb-[10px] w-[208px] h-[52px]'>2:30pm</button>
              

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
