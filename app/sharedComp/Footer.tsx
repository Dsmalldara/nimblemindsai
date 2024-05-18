import Link from "next/link"
import { NavItems } from "./Links"
import Image from 'next/image'
function Footer() {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between  px-8  border-t border-slate-700 py-4">
            <div className="flex  gap-6 min-h-11  ">
            {/* <Logo/> */}
            <span className=' flex gap-2'>
      <Image src="/logoai.svg" alt="logo" height={20} width={45}/>
     <p className="my-auto"> nimbleminds ai</p></span>
            </div>
            <div className="flex flex-row gap-6 min-h-11 items-center ">
            {
             NavItems.map((link,header)=>{
            return (
                <span className="p-medium-16 ">
                    <Link key={header} href={link.href}>
                    {link.title}
                    </Link>
                </span>
            )
        })
      }  
            </div>
    </div>
  )
}

export default Footer