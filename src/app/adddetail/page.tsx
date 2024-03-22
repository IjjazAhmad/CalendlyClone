"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { arrowLeft, calender, calendly, clock, world } from '../../../public/images'
import Link from 'next/link'
import MeetingConfirm from '../../components/meetingConfirm/MeetingConfirm'
const initialState = {
  email: '',
  fullName: '',
  description: '',
}

export default function adddetail() {
  const [confirm, setisConfirm] = useState(false)
  const [state, setstate] = useState(initialState)
  const handelChange = (e: any) => {
    setstate(s => ({ ...s, [e.target.name]: e.target.value }))
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("🚀 ~ SignupForm ~ state:", state)
    setstate(initialState)
    setisConfirm(true)
  }
  return (

    <div className="flex flex-wrap justify-center items-center flex-col w-full">
      {
        !confirm ?
          <div className='relative flex   border border-borderClr-1 shadow-2 rounded-md w-[95%] h-[90vh] sm:max-w-[1060px] sm:h-[700px] mt-[66px] mb-[30px]' >
            <Image src={calendly} alt="..." className='w-[105px] h-[105px] absolute top-0 right-0' />
            <div className='w-[35%] border-r border-borderClr-1 p-8'>
              <Link href={"/selecttime"} > <Image src={arrowLeft} alt="..." className='w-9 h-9 mr-1 border border-borderClr-1 rounded-full mb-4' /></Link>
              <p className='text-lightBlack font-semibold text-[14px] '>Muhammad Talha</p>
              <p className='text-black font-black text-2xl mb-4'>30 Minute Meeting</p>
              <p className='text-lightBlack font-bold text-[14px] mb-2 flex items-center'><Image src={clock} alt=".." className='w-5 h-5 mr-1' />30 min</p>
              <p className='text-lightBlack font-bold text-[14px] mb-2 flex items-center '><Image src={calender} alt="..." className='w-5 h-5 mr-1' /> 11:00 am - 11:30 am, Wednesday, March 27, 2024 </p>
              <p className='text-lightBlack font-bold text-[14px] mb-2 flex items-center '><Image src={world} alt="..." className='w-5 h-5 mr-1' /> Pakistan, Maldives Time</p>
            </div>
            <div className='w-[65%]'>
              <p className='text-black font-bold text-[17px] mt-7 mb-5 ml-8 '>
                Enter Details
              </p>
              <form className='px-[33px] py-[33px]  w-[95%] sm:w-[440px] ' onSubmit={handleSubmit}>
                <div className='mb-[12px]'>
                  <label className='text-black font-bold text-sm' htmlFor="fullName">Name*</label>
                  <input type="text" name='fullName' value={state.fullName} className='px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} onChange={(e) => handelChange(e)} placeholder='' />
                </div>
                <div className='mb-[12px]'>
                  <label htmlFor="email" className='text-black font-bold text-sm'>Email*</label>
                  <input type="email" name='email' value={state.email} className='px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} onChange={(e) => handelChange(e)} placeholder='' />
                </div>
                <div className='mb-[14px]'>
                  <label className='text-black font-bold text-sm'>Plz share anythings that will help prepare for your meeting</label>
                  <textarea  name='description' value={state.description} className='px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} onChange={(e) => handelChange(e)} placeholder='' />
                </div>
                <p className='font-normal  text-[14px] mb-[14px]'>By proceeding. you confirm that you have read and agree to <span className='text-primary'>Calendly Terms of Use and Privacy Notice.</span> </p>
              <button onClick={handleSubmit} className='text-white-default bg-primary rounded-[40px] px-[17px] py-[11px]'>Schedule Event</button>
              </form>
            </div>
          </div>
          :
          <MeetingConfirm />
      }
    </div>
  )
}
