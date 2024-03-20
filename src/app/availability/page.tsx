"use client"
import React, { useState } from 'react'
import { logo, progressbar, shape, speaker } from '../../../public/images'
import Image from 'next/image'
import Link from 'next/link'

const daysName = [{ day: "Sundays" }, { day: "Mondays" }, { day: "Tuesdays" }, { day: "Wednesdays" }, { day: "Thrusdays" }, { day: "Fridays" }, { day: "Saturdays" },]
const initialState = {
  email: '',
  fullName: '',
  userName: '',
  userPassword: ''
}
export default function availability() {
  const [state, setstate] = useState(initialState)
  const handelChange = (e: any) => {
    setstate(s => ({ ...s, [e.target.name]: e.target.value }))
  }
  const handelSubmit = (e: any) => {
    e.preventDefault();
    console.log("🚀 ~ SignupForm ~ state:", state)
    setstate(initialState)
  }
  return (

    <div className="flex justify-center items-center flex-col w-full">
      <Image src={logo} alt="Logo" className='w-[182px] h-[48px] mt-[12px] mb-[40px]' />
      <form className='border border-borderClr-1 shadow-2 rounded-md w-[95%] sm:w-[645px]' onSubmit={handelSubmit}>
        <div className='flex justify-between items-center border-b border-borderClr-1'>
          <div className='mx-6 my-8'>
            <p className='text-black font-bold text-[18px] mb-6'>Set your availability</p>
            <p className='text-black font-normal text-[14px]'>Let Calendly know when you're typically available to
              accept meetings.</p>
          </div>
          <Image src={shape} alt="..." className='w-[185px] h-[162px]' />

        </div>
        <div className='mx-6 mb-6 mt-8'>
          <p className='text-black font-bold text-sm'>Available hours</p>
          <div className="flex flex-wrap gap-[38px]">
            <div >
              <select className='px-[17px] py-[13px] mt-[8px] w-[278px] border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} onChange={(e) => handelChange(e)}>
                <option >9:00 am</option>
                <option>10:00 am</option>
              </select>

            </div>
            <div>
              <select className='px-[15px] py-[14px] mt-[8px] w-[278px] border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} onChange={(e) => handelChange(e)}>
                <option >5:00 pm</option>
                <option>6:00 pm</option>
              </select>
            </div>
          </div>
          <div className='mt-5'>
            <p className='text-black font-bold text-sm'>Available days</p>

            <div className='flex flex-wrap border-y border-l border-borderClr-1 rounded-md mt-2'>
              {
                daysName.map((item, i) => {
                  return (
                    <div className='flex flex-col justify-center items-center border-r border-borderClr-1' key={i}>
                      <input type='checkbox' name='Sundays' className='w-4 h-4 my-2 mx-[34px] border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} />
                      <label htmlFor="Sundays" className='text-black font-normal text-[11px] mb-2'>{item.day}</label>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='flex justify-center items-center mt-14'>
            <Image src={speaker} alt="..." className='w-4 h-4' />
            <p className='text-black font-normal text-[14px] ms-2'>Don't worry! You'll be able to further customize your availability later on.</p>
          </div>
        </div>
      </form>
      <div className='flex justify-between items-center mt-14 w-[95%] sm:w-[645px]'>
        <Image src={progressbar} alt="..." className='w-[100px] h-[10px]' />
        <div className='flex justify-end items-center gap-1'>
          <button type="submit" className='text-black bg-white border-none px-[17px] py-[11px]'>Set up later</button>
          <Link href={"/selecttime"} type="submit" className='text-white-default bg-primary rounded-[40px] px-[17px] py-[11px]'>Continue</Link>
        </div>
      </div>
    </div>

  )
}
