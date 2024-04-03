import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { authOptions } from '@/constants/authProvider'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function About() {
  const session = await getServerSession(authOptions)
  console.log("🚀 ~ Home ~ user:", session?.user)
  return (
    <DefaultLayout>
        <h1>{session?.user.username}</h1>
        <h1>{session?.user.email}</h1>
    </DefaultLayout>
  )
}
