"use client"

import React from 'react'
import Image from 'next/image'
import Logo from '@/app/assets/logo.svg';
import { Button } from '@/components/ui/button';
import {motion} from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 100 }}
    transition={{ duration: 0.8 }}
    className='w-full py-4 text-white'>
      <div className='w-5/6 mx-auto animate-unblur bg-black/10 backdrop-blur-sm border border-white/10 flex align-middle justify-between items-center rounded-2xl px-4 py-2 shadow-sm shadow-slate-100/10'>
        <div className='flex justify-start items-center cursor-pointer max-w-1/5'>
          <div className='flex justify-between items-center w-12 h-10 overflow-hidden'>
            <Image src={Logo} alt='logo' width={70} height={70} className='m-auto relative bottom-1' />
          </div>
          <h1 className='my-auto font-semibold'>KeizerWorks</h1>
        </div>
        <div className='flex items-center gap-4 justify-end'>
          <h1 className='my-auto cursor-pointer hover:text-gray-300'>Product</h1>
          <h1 className='my-auto cursor-pointer hover:text-gray-300'>Development</h1>
          <h1 className='my-auto cursor-pointer hover:text-gray-300'>Design</h1>
          <h1 className='my-auto cursor-pointer hover:text-gray-300'>Marketing</h1>
        </div>
        <div>
          <Button variant={"secondary"} className='my-auto'>Get Started</Button>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar