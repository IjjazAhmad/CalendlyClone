"use client"
import React from 'react'
import { signOut } from "next-auth/react"
export default function LogoutBtn() {
  return (
    <button className="flex items-center  px-8 py-2 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"onClick={() => signOut()}>
    Log Out
  </button>
  )
}
