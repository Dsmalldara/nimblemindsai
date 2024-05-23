'use client'
import React, { useState } from 'react'
import { NavItems } from './Links'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { animate, motion, AnimatePresence } from "framer-motion"

import clsx from 'clsx'
import  {animateNav,spring, animateNav2,NavCard,} from "./AnimationConstants"
function MobileNav() {
      const [open, setOpen] = useState(false)
     const containerVariants={
      initial:{
        transition:{
          staggerChildren:0.09,
          staggerDirection:-1,
        }
      },
      animate:{
        transition:{
          delayChildren:0.6,
          staggerDirection:1,
          staggerChildren:0.9,
          ease:[0,0.55,0.43,1]
        }
      }
     }
     
  return (
    <nav className="px-4 py-4 md:px-6 md:py-5 relative" aria-label='Main'>
    <div className='mx-auto max-w-5xl flex-col justify-between py-3 font-medium md:flex-row text-white md:items-center flex'>
    <span className='  gap-2 flex '>
      <Image src="/logoai.svg" alt="logo" height={20} width={45}/>
     <p className="my-auto"> nimbleminds ai</p></span>
     <div className="md:hidden justify-end flex  items-end cursor-pointer mt-[-1.6rem]"    onClick={()=>{setOpen(!open)}}>
    <div className='flex flex-col gap-1'>
      <motion.div className="w-[22px] h-[2px] bg-white block mb-1"
      variants={animateNav}
      animate={open ? 'trigger' : 'initial'}
      transition={spring}
      ></motion.div>
     
      <motion.div className="w-[22px] h-[2px] bg-white block mb-1"
        variants={animateNav2}
        animate={open ? 'trigger2' : 'initial'}
        transition={spring}
      ></motion.div>
    </div>
   </div>
   <ul className=' gap-6  md:flex hidden '>
   {
      NavItems.map((link,header)=>{
        // const isActive = pathname === link.href
            return(
                <li  key={header}>
                    <Link href={link.href} className={`${link.className} inline-flex min-h-11 items-center font-lora `}>
                    {link.title}
                    </Link>
                </li>
            )
        })
      }  
   </ul>
    </div>
    <AnimatePresence>
 {
    open && (
      // we use animatePresence whenever we want to use exit. (making it mount and unmount)
      // we use origin-top to specify that the animation should start from top
      <motion.div className="fixed left-0 top-0 w-full h-screen bg-[#070815]  z-50  p-2 pt-[2rem] origin-top md:hidden"
      variants={NavCard}
      initial="initial"
      animate="animate"
      exit="exit"
      >
      <div className="flex h-full  flex-col  ">
        <div className="flex justify-between">
      <div className="flex gap-2 md:hidden">
      <Image src="/logoai.svg" alt="logo" height={20} width={45}/>
   <p className="my-auto"> nimbleminds ai</p>
        </div>
      <div className="md:hidden  pt-2 pr-2 cursor-pointer"    onClick={()=>{setOpen(!open)}}>
    <div className='flex flex-col gap-1'>
      <motion.div className="w-[22px] h-[2px] bg-white block mb-1"
      variants={animateNav}
      animate={open ? 'trigger' : 'initial'}
      transition={spring}
      ></motion.div>
     
      <motion.div className="w-[22px] h-[2px] bg-white block mb-1"
        variants={animateNav2}
        animate={open ? 'trigger2' : 'initial'}
        transition={spring}
      ></motion.div>
    </div>
   </div>
        </div>
     
        <motion.div variants={containerVariants} exit="initial" initial="initial" animate="animate" className=' justify-center items-center flex mt-[6rem] flex-col gap-[2rem]'  >
 {
    NavItems.map((link,header)=>{
      // const isActive = pathname === link.href
          return(
              <div className='overflow-hidden'>
                <Navbar href={link.href}  title={link.title} className={link.className} type={link.type}/>
               </div>
          )
      })
    }  
 </motion.div>
    </div>
    </motion.div>
    )
 }
   </AnimatePresence>
    </nav>
  )
}

export default MobileNav

const mobileVariants ={
  initial:{
    y:"30vh",
    transition:{
      duration:0.5
    }
  },
  open:{
    y:0,
    transition:{
     duration:0.5
    }
  }
}
export const Navbar = ({title,href,type,className}:any) => {

  return (
    <motion.div variants={mobileVariants} initial="initial" animate="open">
       <Link  href={href} className={clsx( type ? 'text-4xl font-lora uppercase' :  `${className} inline-flex min-h-11 items-center font-lora uppercase text-4xl`)}>
                  {title}
                  </Link>
    </motion.div>
  )
}