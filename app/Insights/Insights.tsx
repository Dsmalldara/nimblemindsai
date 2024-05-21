import React from 'react'
import Bounded from '../sharedComp/Bounded'
import { GrSettingsOption } from "react-icons/gr";
function Insights() {
  return (
    <Bounded className="relative text-center py-20 md:py-25">
           <div className=' bg-blue-500/50 glow  blur-[160px] filter rounded-full aspect-square   absolute max-w-sm w-full -z-10'/>
            <GrSettingsOption className='text-8xl bg-gradient-to-b glass-container from-slate-700 to-slate-900 px-2 py-2 rounded-xl '/>
            <h1 className="md:text-4xl text-3xl w-[75%] font-semibold text-white md:w-[60%] mx-auto">
            AI-Driven Insights to Accelerate  Innovation</h1>
    </Bounded>
  )
}

export default Insights