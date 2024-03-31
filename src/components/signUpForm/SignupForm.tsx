"use client"
import { URL } from '@/constants/SiteUrl'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const initialState = {
    email: '',
    fullName: '',
    userName: '',
    userPassword: ''
}

export default function SignupForm() {
    const [state, setstate] = useState(initialState)
    const router = useRouter()

    const handelChange = (e: any) => {
        setstate(s => ({ ...s, [e.target.name]: e.target.value }))
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("🚀 ~ SignupForm ~ state:", state)
        setstate(initialState)

        // axios({
        //     method: 'post',
        //     url: `${URL}/api/user`,
        //     data: {
        //       email: state.email,
        //       username: state.userName,
        //       password: state.userPassword,
        //     }
        //   });
        axios.post(`${URL}/api/user`, {
            email: state.email,
            username: state.userName,
            password: state.userPassword,
        })
            .then(function (response) {
                console.log(response);
                router.push("/signin")
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <form className='px-[33px] mb-[33px] py-[33px] border border-borderClr-1 shadow-2 rounded-md w-[95%] sm:w-[440px] ' onSubmit={handleSubmit}>
            <div className='mb-[12px]'>
                <label htmlFor="email" className='text-black font-bold text-sm'>Enter your email to get started</label>
                <input type="email" name='email' value={state.email} className='px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} onChange={(e) => handelChange(e)} placeholder='test@gmail.com' />
            </div>
            <div className='mb-[12px]'>
                <label className='text-black font-bold text-sm' htmlFor="fullName">Enter your full name</label>
                <input type="text" name='fullName' value={state.fullName} className='px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} onChange={(e) => handelChange(e)} placeholder='John Doe' />
            </div>
            <div className='mb-[12px]'>
                <label className='text-black font-bold text-sm' htmlFor="userName">Enter your username</label>
                <input type="text" name='userName' value={state.userName} className='px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} onChange={(e) => handelChange(e)} placeholder='John Doe' />
            </div>
            <div >
                <label className='text-black font-bold text-[12px]' htmlFor="userName">Choose a password with at least 8 characters</label>
                <input type="password" name='userPassword' value={state.userPassword} className='px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} onChange={(e) => handelChange(e)} placeholder='Password' />
            </div>
            <div className='w-full h-[6px] bg-white-line my-3'>
            </div>
            <p className='font-normal text-danger  text-[12px]'>Use a few words, avoid common phrases
                No need for symbols, digits, or uppercase letters</p>
            <p className='mt-[27px] mb-[12px] font-normal text-[12px] text-center'>By creating a Calendly account, you agree to <span className='text-primary'>Calendly's Terms</span> and <span className='text-primary '>Privacy Policy</span></p>
            <div className="text-center">
                <button type="submit" className='text-white-default bg-primary rounded-[40px] px-[17px] py-[11px]'>Sign Up</button>
            </div>
            <Link href={"/signin"} ><p className='mt-[27px]  font-normal text-[12px] text-center'>If already have an account<span className='text-primary'>SignIn</span></p></Link>
        </form>
    )
};
