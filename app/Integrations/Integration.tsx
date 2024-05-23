import React from 'react'
import StarBackground from './StarBackground'
import Image from 'next/image'
import Bounded from '../sharedComp/Bounded'
import { FaGithub } from "react-icons/fa";
import { SiSvelte } from "react-icons/si";
import { SiRemix } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import clsx from 'clsx';
import { iconNames } from '../sharedComp/Links';
export const icons = {
  github: <FaGithub  />,
  svelte: <SiSvelte />,
  remix: <SiRemix  />,
  react: <FaReact />,
  angular: <FaAngular />,
  prisma:<SiPrisma/>
}
function Integration() {
  return (
    <Bounded className='relative overflow-hidden w-[100%]'>
       <Image src='/integration.jpg' alt='header' className=' object-cover' fill quality={90}/>
      <StarBackground/>
      <div className='relative'>
        <h2 className='text-center font-semibold bg-gradient-to-tr from-slate-200 to-green-100 bg-clip-text text-transparent   items-center text-balance prose-invert text-fallback  h2-medium mx-auto '>
        Integration with 
        <br />
       <span className='flex items-center  justify-center text-balance'> Leading Technologies</span>
        </h2>
        <p className='mt-6 w-[60%] text-center mx-auto p-regular-16 flex-wrap text-slate-300'>The integrations your team needs to stay productive at scale, 
           connecting with your existing tools without impacting your burn rate.</p>

      </div>
      <div className="mt-6 items-center justify-center flex flex-col md:flex-row ">
        {/*  */}
       {/* we create a kinda logic where the nimbleminds logo comes in between the group of icons */}
       {
        iconNames.map((icon,index)=>(
          <React.Fragment>
          {index === Math.floor(iconNames.length/2) && (
           <>
            <Image src='/logoai.svg' width={65} height={45} alt='nimbleminds' className=' z-10 rounded-lg opacity-50' />
            <div className="signal-line rotate-180 "></div>
           </>
          )}
          <div className="pulsing-icon flex rounded-full aspect-square shrink-0 px-2 py-2 item-center justify-center border-blue-50/30 border bg-blue-50/25 text-2xl text-blue-100  
          opacity-95 md:text-3xl lg:text-4xl
          ">
             {icon.icon}
          </div>
         {
          index !== Math.floor(iconNames.length -1) &&(
            <div className={clsx("signal-line", index >= Math.floor(iconNames.length/2) ? "rotate-180" : "rotate-0")}></div>
          )
         }
          </React.Fragment>
        ))
       }
      </div>
    </Bounded>
  )
}

export default Integration
