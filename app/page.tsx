import clsx from "clsx";
import Bounded from "./sharedComp/Bounded";
import { ctaItems } from "./sharedComp/Links";
import Stargrid from "./sharedComp/Stargrid";
import Image from "next/image";
export default function Home() {
  const className =
    "  h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2";
  return (
    <main className="flex min-h-screen flex-col items-center  ">
      <Bounded>   {/* for responsiveness */}
        <div className="relative">
          <Stargrid />
          <div className="mx-auto w-[90%] pb-6 md:w-[80%]">
            <h1 className="h1-bold text-balance text-center font-medium ">
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
          <div className="glass-container mt-12 w-fit">
            <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
            <Image
              src="/nocode1.png"
              height={800}
              width={1200}
              alt="DarkMode"
              className="mx-auto  rounded-md"
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
        <div className="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
            {
              ctaItems.map((item)=>{
                return(
                  <div key={item.header} className={clsx("glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg  bg-gradient-to-b from-gray-900 to-gray-950 p-4", item.wide ? 'col-span-2': "col-span-1")}>
                    <h3 className="text-center text-2xl">{item.header}</h3>
                   <div className="max-w-md-text-balance text-slate-300">
                   <p>
                    {item.description}
                    </p>
                   </div>
                    <img src={item.image} width={250} height={250}  className="max-h-36 w-auto"alt="first image"/>
                  </div>
                )
              })
            }
        </div>
        <div className=" mt-[8rem] md:mt-[14rem] relative">
          <div className="bg-blue-400/20 blur-3xl aspect-square   absolute max-w-xl w-full -z-10"/>
          <h1 className=" text-center text-balance text-3xl md:text-5xl">
           Smooth Integration 
           <br />
           {" "}
          <span className="flex items-center  justify-center ">
             with  Foundational Abstraction
            </span>
          </h1>
          <div className="glass-container mt-7">
            <Image
              src="/nocode2.png"
              height={500}
              width={800}
              alt="DarkMode"
              className="mx-auto  rounded-md"
            />
          </div>
        </div>
      </Bounded>
    </main>
  );
}
