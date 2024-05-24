'use client'
import React from 'react'
import Stargrid from './Stargrid'
import { className } from './Links'
import { gsap } from 'gsap';
import { useRef } from 'react';
import {useGSAP} from '@gsap/react'
import {usePrefersReducedMotion} from '../hooks/usePrefersReducedMotion'
function GsapAnimateContent() {
    const container = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();
    gsap.registerPlugin(useGSAP);
    useGSAP(()=>{
        if(prefersReducedMotion) {
            gsap.set(".hero_heading, .hero_text, .hero_button, .hero_image, .hero_glow", {opacity:1})
            return
        }
        const tl = gsap.timeline({
            defaults:{
                ease:"power2.inOut"
            }
        })
        tl.fromTo(".hero_heading",{scale:0.5},{scale:1, opacity:1, duration:1.4}) // we actually need to hide everything, and bring it back with js  so we don't get a static html that first loads before animating we use opacity-0 for that
        tl.fromTo(".hero_text",{y:20},{y:0, opacity:1, duration:1.2},"-=0.4") //the value outside the fromTo object is called position parameter and here i'm using it to make it start -0.4 from the normal time it would start
        tl.fromTo(".hero_button",{scale:1.5},{scale:1, opacity:1, duration:1.3}, "-=0.7")
        tl.fromTo(".hero_image",{y:100},{y:0, opacity:1, duration:1.3},"+=0.1")
        tl.fromTo(".hero_glow",{scale:0.5},{scale:1, opacity:1, duration:1.3},"-=0.7")
    },{scope:container}) //with scope, we can now add classes to each of these styles
  return (
    <div className="relative"  ref={container}>
    <Stargrid />
    <div className="mx-auto w-[90%] pb-6 md:w-[80%]">
      <h1 className="hero_heading h2-medium md:h1-bold  text-balance text-center font-medium opacity-0">
        Connect data transformation with actionable results.
      </h1>
      <p className="hero_text p-regualr-24 mx-auto w-full text-balance pt-4 text-center text-slate-300 md:w-[60%] opacity-0">
        At NimbleMind AI, we bridge the gap between complex data and
        actionable insights.
      </p>
      <button
        className={`${className} hero_button mx-auto mt-6 flex items-center justify-center  text-center opacity-0`}
      >
        Get Started
      </button>
    </div>
    <div className="hero_image glass-container mt-12  mx-auto md:w-[80%] opacity-0">
      <div className="hero_glow absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter  opacity-0"/>
       <img
        src="/nocode1.png"
       
        alt="DarkMode"
        className="mx-auto  rounded-md  "
      /> 
    </div>
  </div>
  )
}

export default GsapAnimateContent