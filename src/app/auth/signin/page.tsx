"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { logo } from '../../../../public/images';
import { useRouter } from 'next/navigation';

interface SignInState {
  email: string;
  password: string;
}
const initialState = {
  email: '',
  password: ''
}
export default function SignIn() {
  const [state, setState] = useState<SignInState>(initialState);

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = state;
    if (!email || !password) {
      return alert("Please fill in all inputs");
    }

    try {
      const req = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      
      if (req?.error) {
        alert("Invalid credentials");
        return;
      }
      
      router.replace("/");
    } catch (error) {
      console.log("Error:", error);
    }
    
    setState(initialState);
  };

  return (
    <div className="flex justify-center items-center flex-col w-full">
      <Image src={logo} alt="Logo" className='w-[182px] h-[48px] mt-[51px]' />
      <p className='my-[9px] font-bold text-[20px] text-center'>Sign up with Calendly for <br /> free</p>
      <form className='px-[33px] py-[33px] mb-[33px] border border-borderClr-1 shadow-2 rounded-md w-[95%] sm:w-[440px] ' onSubmit={handleSubmit}>
        <div className='mb-[12px]'>
          <label htmlFor="email" className='text-black font-bold text-sm'>Enter your email to get started</label>
          <input type="email" name='email' value={state.email} className='px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} onChange={handleChange} placeholder='test@gmail.com' />
        </div>
        <div >
          <label className='text-black font-bold text-[12px]' htmlFor="userName">Enter password</label>
          <input type="password" name='password' value={state.password} className='px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} onChange={handleChange} placeholder='Password' />
        </div>
        <div className='w-full h-[6px] bg-white-line my-3'>
        </div>
        <p className='mt-[14px] flex flex-row-reverse  mb-[12px]  font-bold text-[12px]  text-primary'>Forgot Password</p>
        <div className="text-center">
          <button type="submit" className='text-white-default bg-primary rounded-[40px] px-[17px] py-[11px]'>Sign In</button>
        </div>
        <Link href={"/auth/signup"}><p className='mt-[27px]  font-normal text-[12px] text-center'>If you don't have an account<span className='text-primary'>Sign Up</span></p></Link>
      </form>
    </div>
  );
}
