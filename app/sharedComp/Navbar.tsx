'use client'
import React from 'react'
import { NavItems } from './Links'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="px-4 py-4 md:px-6 md:py-5" aria-label='Main'>
    <div className='mx-auto max-w-5xl flex-col justify-between py-3 font-medium md:flex-row text-white md:items-center flex'>
    <span className=' flex gap-2'>
      <Image src="/logoai.svg" alt="logo" height={20} width={45}/>
     <p className="my-auto"> nimbleminds ai</p></span>
   <ul className='flex gap-6   '>
   {
      NavItems.map((link,header)=>{
        // const isActive = pathname === link.href
            return(
                <li  key={header}>
                    <Link href={link.href} className={`${link.className} inline-flex min-h-11 items-center `}>
                    {link.title}
                    </Link>
                </li>
            )
        })
      }  
   </ul>
    </div>
    </nav>
  )
}

export default MobileNav