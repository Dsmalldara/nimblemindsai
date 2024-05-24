'use client'
import React from 'react'
import { gsap } from 'gsap';
import { useRef } from 'react';
import {useGSAP} from '@gsap/react'
import {usePrefersReducedMotion} from '../hooks/usePrefersReducedMotion'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function IntegrationAnimation({children}:{children:React.ReactNode}) {
  const container = useRef(null)
  const preference = usePrefersReducedMotion()
  gsap.registerPlugin(useGSAP,ScrollTrigger)
  useGSAP(()=>{
      if(preference){
        gsap.set(container.current, {
          y:0
        })
        return
      }
      gsap.fromTo(container.current,{
        y:100,
      },{
        y:0,
        ease:"power2.inOut",
        duration:1,
        scrollTrigger:{
          trigger:container.current,
          start:"top bottom-=40%",
          toggleActions:"play pause resume reverse", // onEnter onLeave onRnterBack onLeaveBack
         
        }
      })
     },{scope:container})
  return (
    <div ref={container}>
      {children}
    </div>
  )
}
export default IntegrationAnimation