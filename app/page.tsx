import clsx from "clsx";
import Bounded from "./sharedComp/Bounded";
import { ctaItems } from "./sharedComp/Links";
import Stargrid from "./sharedComp/Stargrid";
import Image from "next/image";
import { GiLightBulb } from "react-icons/gi";
import Integration from "./Integrations/Integration";
import Insights from "./Insights/Insights";
import {className} from   "./sharedComp/Links";
export default function Home() {

  return (
    <main className="flex  flex-col items-center  ">
      <Bounded>  
        <div className="relative">
          <Stargrid />
          <div className="mx-auto w-[90%] pb-6 md:w-[80%]">
            <h1 className=" h2-medium md:h1-bold text-balance text-center font-medium ">
              Connect data transformation with actionable results.
            </h1>
            <p className="p-regualr-24 mx-auto w-full text-balance pt-4 text-center text-slate-300 md:w-[60%]">
              At NimbleMind AI, we bridge the gap between complex data and
              actionable insights.
            </p>
            <button
              className={`${className} mx-auto mt-6 flex items-center justify-center  text-center`}
            >
              Get Started
            </button>
          </div>
          <div className="glass-container mt-12 w-fit  mx-auto">
            <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter  max-w-[90%]"/>
             <img
              src="/nocode1.png"
             
              alt="DarkMode"
              className="mx-auto  rounded-md w-fit  "
            /> 
          </div>
        </div>
        <div className="mt-12">
          <h1 className="text-fallback text-center text-5xl">
            Precision
            <br />
            <span className=" flex items-center  justify-center text-balance bg-gradient-to-b from-yellow-50 to-yellow-600 bg-clip-text text-transparent">
              {" "}
              in Every Byte.
            </span>
          </h1>
          <p className="cta-section p-regular-14 mx-auto mt-4 w-[85%] flex-wrap text-balance text-center text-slate-200 md:w-[60%]">
            Nimblemind AI seamlessly integrates advanced algorithms to provide
            unparalleled accuracy and insights.
          </p>
        </div>
        {/* //grid-rows auto-auto-auto helps to repeat the h3,p and img  */}
        {/* subgrid helps us to make horizontal alignment */}
        <div className="mt-16 grid md:max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
             {
              ctaItems.map((item)=>{
                return(
                  <div key={item.header} className={clsx("glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg  bg-gradient-to-b from-gray-900 to-gray-950 p-4", item.wide ? 'col-span-2': " col-span-2 md:col-span-1")}>
                    <h3 className="text-center text-2xl">{item.header}</h3>
                   <div className="max-w-md text-balance text-slate-300">
                   <p className=" text-center mx-auto ">
                    {item.description}
                    </p>
                   </div>
                    <img src={item.image} width={250} height={250}  className="max-h-48 w-auto"alt="images"/>
                  </div>
                )
              })
            } 
        </div>
        <div className=" mt-[8rem] md:mt-[14rem] relative">
          <div className="bg-blue-400/20 blur-3xl aspect-square   absolute max-w-xl w-full -z-10"/>
          <h1 className=" text-center text-balance text-3xl md:text-5xl bg-gradient-to-r from-gray-100 to-green-300 bg-clip-text text-transparent">
           Smooth Integration 
           <br />
           {" "}
          <span className="flex items-center  justify-center ">
             with  Foundational Abstraction
            </span>
          </h1>
          <div className=" mt-7 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-4 py-8 border-blue-50/15  border rounded-xl grid  lg:grid-cols-3 items-center  backdrop-blur">
            <div className="md:ml-[-1rem] mt-4 ">
            <div className="w-fit rounded-[0.4rem]  bg-blue-500/35 p-2 text-4xl mx-auto md:mb-0 mb-2 md:mx-0  ">
            <GiLightBulb />
            </div>
              <h1 className="h3-medium text-balance text-center md:text-start bg-gradient-to-b from-gray-100 to-green-300 bg-clip-text text-transparent">Empower Your Vision  </h1>
              <p className="mt-4 text-balance p-regular-18  text-slate-300 text-center md:text-start prose">Transform your ideas into reality with our cutting-edge AI technology. Whether you're an entrepreneur, designer, or innovator, nimbleAI provides the tools you need to create, innovate, and succeed. Experience the future of design today.</p>
              <button className={clsx("mt-5", className)}>
              Get started
              </button>
            </div>
            <img  src="/showcase.png" alt="DarkMode" className={clsx("mx-auto  rounded-md h-[18rem] mt-6  md:h-[24rem] w-fit md:col-span-2 opacity-90 shadow-2xl lg:-order-1 lg:translate-x-[-15%]", )}
            />
          </div>
        </div>
        <div className="mt-16 md:mt-[7rem] ">
          <h1 className="cta-section2 text-3xl  text-center text-balance">
            Unlike any tool
          <br/>
          <span className="flex items-center  justify-center ">
            you've used before
            </span>
            </h1>
        </div>
        <div className="grid grid-rows-[auto_auto_auto] gap-8 md:gap-10 md:grid-cols-3 mt-6 max-w-4xl ">
          <div className="grid grid-rows-subgrid bg-gradient-to-b row-span-3 border border-slate-700 rounded-[1.5rem] from-gray-900 to-gray-950 p-4 md:col-span-2 px-7 ">
          <img src="/keyboard.png" width={250} height={250}  className="max-h-48 w-auto"alt="images"/>
          <h2 className="text-2xl  bg-gradient-to-l from-gray-100 to-green-300 bg-clip-text text-transparent text-center">
            Built for your systems
          </h2>
          <p className="text-center w-[80%] mx-auto mt-0 subpixel-antialiased">
            NimbleMind AI is built for your systems. fly through your tasks  with rapid speed, shortcut for everything, literally everything.
          </p>
          </div>
          <div className=" grid grid-rows-subgrid bg-gradient-to-b row-span-3 border border-slate-700 rounded-[1.5rem]  p-4  px-7">  {/*from-gray-900 to-gray-950*/}
         <div className="relative">
         <img src="/flash.png" width={200} height={200}  className="  max-h-48 w-auto mx-auto items-center justify-center flex"alt="images"/>
         <div  className="absolute bg-gradient-to-r from-blue-400/20 to-[#151A38] blur-3xl aspect-square -z-10 w-full"/>
         </div>
         <h2 className="text-2xl  text-center  bg-gradient-to-l from-gray-100 to-green-300 bg-clip-text text-transparent subpixel-antialiased">Breathakingly fast</h2>
         <p className="text-center text-balance   subpixel-antialiased">
          Built for speed with 100ms response time and sync, let's get to work!
         </p>
           </div> 
        </div>
      </Bounded>
      <Integration/>
      <div className="mt-[3rem] md:mt-18">
      <Insights />
      </div>

    </main>
  );
}
