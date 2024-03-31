"use client"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSigninSchema } from '@/constants/ValidationSchema/FormSchema'; // Update the path as needed
import Link from 'next/link';
import toast from 'react-hot-toast'
import { redirect, useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { logo } from '../../../../public/images';
import { signIn } from 'next-auth/react';

interface FormData {
  email: string;
  password: string;
}

export default function SignupForm() {
  const [loading, setisLoading] = useState(false)
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(userSigninSchema),
  });

  const onSubmit = async (value: FormData) => {
    setisLoading(true)
    const signinData = await signIn("credentials",{
      email: value.email,
      password: value.password,
      redirect:false,
    })
    console.log("🚀 ~ onSubmit ~ signinData:", signinData)
    if(signinData?.error){
      toast.error(`${signinData.error}`)
      setisLoading(false)
    }else{
      toast.success("User login successfuly")
      setisLoading(false)
      router.push("/")
    }
  };

  return (
    <div className="flex justify-center items-center flex-col w-full">
      <Image src={logo} alt="Logo" className='w-[182px] h-[48px] mt-[51px]' />
      <p className='my-[9px] font-bold text-[20px] text-center'>Sign up with Calendly for <br /> free</p>
      <form className='px-[33px] mb-[33px] py-[33px] border border-borderClr-1 shadow-2 rounded-md w-[95%] sm:w-[440px] ' onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-[12px]'>
          <label htmlFor="email" className='text-black font-bold text-sm'>Enter your email to get started</label>
          <input className='px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} {...register("email",)} placeholder='test@gmail.com' type='email' />
          {errors.email && <p className='text-danger text-[10px] font-bold'>{errors.email.message}</p>}
        </div>
        <div>
          <label className='text-black font-bold text-[12px]' htmlFor="userName">Enter  password</label>
          <input className='px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px]' style={{ outline: "none" }} {...register("password")} placeholder='password' type='password' />
          {errors.password && <p className='text-danger text-[10px] font-bold'>{errors.password.message}</p>}
        </div>
        <Link href={"/forgotpassword"} className='mt-[14px] flex flex-row-reverse  mb-[12px]  font-bold text-[12px]  text-primary'>Forgot Password</Link>
        <div className='w-full h-[6px] bg-white-line my-3'></div>
        <div className="text-center">
          {loading ?
            <button type="button" className=" text-white-default bg-primary rounded-[40px] px-[17px] py-[11px]" disabled>
              loading...
            </button>
            : <button type="submit" className='  text-white-default bg-primary rounded-[40px] px-[17px] py-[11px]  '>Sign In</button>

          }
        </div>

        <Link href={"/signup"} ><p className='mt-[27px]  font-normal text-[12px] text-center'>If don't have an account<span className='text-primary'>SignUp</span></p></Link>
      </form>
    </div>
  );
}

