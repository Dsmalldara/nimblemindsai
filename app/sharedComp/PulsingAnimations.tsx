"use client"
import React from 'react'
import Image from "next/image";
import { iconNames } from "../sharedComp/Links";
import { FaGithub } from "react-icons/fa";
import { SiSvelte } from "react-icons/si";
import { SiRemix } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import clsx from "clsx";
import { gsap } from 'gsap';
import { useRef } from 'react';
import {useGSAP} from '@gsap/react'
import {usePrefersReducedMotion} from '../hooks/usePrefersReducedMotion'
export const icons = {
  github: <FaGithub />,
  svelte: <SiSvelte />,
  remix: <SiRemix />,
  react: <FaReact />,
  angular: <FaAngular />,
  prisma: <SiPrisma />,
};
function PulsingAnimations() {
    const preference = usePrefersReducedMotion()
    const container = useRef(null)
    gsap.registerPlugin(useGSAP)
    const tl = gsap.timeline({
        repeat:-1,
        defaults:{ ease: "power2.inOut"}
    })
    useGSAP(()=>{
        if(preference){
            gsap.set(container,{
                x:0,
                y:0,
                opacity:1,
            })
            return
        }
        tl.to(".nimblemindslogo",{
            keyframes:[
                {   
                    filter:"brightness(0.6)",
                    opacity:0.8,
                    duration:1,
                    ease: "power2.in"

        
                },{
                    opacity:0.6,
                    filter:"brightness(0.7)",
                    duration:0.8,
                    stagger:{
                        from: "center",
                        ease: "power2.in",
                    
                      }
                },
                {
                    opacity:0.7,
                    filter:"brightness(0.8)",
                    duration:0.8,
                    stagger:{
                        from: "center"
                    
                      }
                }
            ]
    })
    tl.to(".signal-line",{
        keyframes:[
            {
                backgroundPosition:"0% 0%"
            },
            {
                backgroundPosition:"100% 100%",
                duration:1,
                stagger:{
                    from: "center",
                    each:0.4,
                
                  }

            }
        ]
    },"-=1.5")
    tl.to('.pulsing-icon',{
        keyframes:[
            {      
                // opacity:1,
                stagger:{
                    from: "center",
                    each:0.4,
                  },
                   duration:1,
    
            },{
                opacity:0.4,
                duration:1,
                stagger:{
                    from: "center",
                    each:0.4,
                  }
            },

        ]

    },"-=5.5")
    },{scope:container})
  return (
    <div className="mt-6 flex flex-col items-center justify-center md:flex-row " ref={container}>
    {/*  */}
    {/* we create a kinda logic where the nimbleminds logo comes in between the group of icons */}
    {iconNames.map((icon, index) => (
      <React.Fragment>
        {index === Math.floor(iconNames.length / 2) && (
          <>
            <Image
              src="/logoai.svg"
              width={65}
              height={45}
              alt="nimbleminds"
              className="nimblemindslogo z-10 rounded-lg opacity-50"
            />
            <div className="signal-line rotate-180 "></div>
          </>
        )}
        <div
          className="pulsing-icon item-center flex aspect-square shrink-0 justify-center rounded-full border border-blue-50/30 bg-blue-50/25 px-2 py-2 text-2xl text-blue-100  
      opacity-95 md:text-3xl lg:text-4xl">
          {icon.icon}
        </div>
        {index !== Math.floor(iconNames.length - 1) && (
          <div
            className={clsx(
              "signal-line",
              index >= Math.floor(iconNames.length / 2)
                ? "rotate-180"
                : "rotate-0",
            )}
          ></div>
        )}
      </React.Fragment>
    ))}
  </div>
  )
}

export default PulsingAnimations