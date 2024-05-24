import React from "react";
import StarBackground from "./StarBackground";
import Image from "next/image";
import Bounded from "../sharedComp/Bounded";
import PulsingAnimation from "@/app/sharedComp/PulsingAnimations"
function Integration() {
  return (
    <Bounded className="relative w-[100%] overflow-hidden">
      <Image
        src="/integration.jpg"
        alt="header"
        className=" object-cover"
        fill
        quality={90}
      />
      <StarBackground />
      <div className="relative">
          <h2 className="text-fallback h2-medium prose-invert mx-auto items-center text-balance bg-gradient-to-tr   from-slate-200 to-green-100 bg-clip-text text-center  font-semibold text-transparent ">
            Integration with
            <br />
            <span className="flex items-center  justify-center text-balance">
              {" "}
              Leading Technologies
            </span>
          </h2>
        <p className="p-regular-16 mx-auto mt-6 w-[60%] flex-wrap text-center text-slate-300">
          The integrations your team needs to stay productive at scale,
          connecting with your existing tools without impacting your burn rate.
        </p>
      </div>
     <PulsingAnimation/>
    </Bounded>
  );
}

export default Integration;
