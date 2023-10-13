"use client"

import React from 'react'
import { signIn } from "next-auth/react";
import Link from 'next/link';

const LoginButton = () => {
  return (

  
  <Link href="/login" className="bg-sky-400  px-3 py-1 rounded">Ingresar</Link>
  
  )
}

export default LoginButton