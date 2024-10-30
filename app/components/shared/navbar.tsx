"use client"

import React from 'react'
import Image from 'next/image'
import Logo from '@/app/assets/logo.svg';
import { Button } from '@/components/ui/button';
import {motion} from "framer-motion";

const Navbar = () => {
  return (
    <div
    className='w-full py-4 text-white'>
      <div className='w-5/6 mx-auto animate-unblur flex align-middle justify-between items-center rounded-2xl px-4 py-2'>
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className='flex justify-start items-center cursor-pointer max-w-1/5'>
          <div className='flex justify-between items-center w-12 h-10 overflow-hidden'>
            <Image src={Logo} alt='logo' width={70} height={70} className='m-auto relative bottom-1' />
          </div>
          <h1 className='my-auto font-semibold'>KeizerWorks</h1>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='flex items-center gap-4 justify-end border rounded-3xl px-1 py-1 border-white/10 bg-black/10 backdrop-blur-sm'>
          <h1 className='my-auto cursor-pointer hover:text-gray-300 bg-white/10 px-3 rounded-3xl py-1'>Product</h1>
          <h1 className='my-auto cursor-pointer hover:text-gray-300 hover:bg-white/5 px-3 rounded-3xl py-1'>Development</h1>
          <h1 className='my-auto cursor-pointer hover:text-gray-300 hover:bg-white/5 px-3 rounded-3xl py-1'>Design</h1>
          <h1 className='my-auto cursor-pointer hover:text-gray-300  hover:bg-white/5 px-3 rounded-3xl py-1'>Marketing</h1>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button variant={"secondary"} className='my-auto rounded-3xl px-3 py-1 cursor-pointer'>Get Started</Button>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar