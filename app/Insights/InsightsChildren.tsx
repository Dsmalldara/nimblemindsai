'use client'
import React from 'react'
import { useRef,} from 'react'
import { gsap } from 'gsap';
import {useGSAP} from '@gsap/react'
import {usePrefersReducedMotion} from '../hooks/usePrefersReducedMotion'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function InsightsChildren({children}:{children:React.ReactNode}) {
    gsap.registerPlugin(useGSAP,ScrollTrigger)
    const preference = usePrefersReducedMotion()
    const container = useRef(null)
   
    useGSAP(()=>{
        gsap.fromTo(container.current,{
            x:-100,
            opacity:0,  
          },
          {
            opacity:1,
              rotate:360,
              x:0,
              duration:2,
              scrollTrigger: {
                trigger: container.current,
                start: "top bottom-=30%",
                toggleActions:  "play none none none" // onEnter, onLeave, onEnterBack, onLeaveBack
            }
          }
      )
    },{scope:container})
  return (
    <div ref={container}>
        {children}
    </div>
  )
}

export default InsightsChildren