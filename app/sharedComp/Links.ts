import { icons } from "./PulsingAnimations"



export type NavLinks ={
    title:string,
    href:string,
    className?:string,
    type?:boolean
}
export const NavItems:NavLinks[] = [
        {
        title:"Features",
        href:"/features",
        },
        {
            title:"Get Started",
            href:"/GetStarted",
            type:true,
            className: " relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2"
        }
]

export type CtaItemstype = {
    header:string,
    description:string,
    image:string,
    wide?:boolean
}

export const className ="h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2";
export const ctaItems:CtaItemstype[] = [
    {
        header:"Effortless Innovation",
        description:" Experience a new era of creativity where ideas emerge effortlessly",
        image:'/small.png'
    },
        {
            header:"Future-Ready Development",
            description:"Create without limits. Innovate freely and efficiently ",
            image:'/alice-smith.png',
            wide:true
        },
        {
            header:"Limitless Possibilities",
            description:" Explore new horizons with effortless,integrated and up to date technology. ",
            image:'/alice-smith.png',
            wide:true
        },
        {
            header:"Creative Excellence",
            description:" Empower your ideas with intuitive,seamless development tools",
            image:'/small.png'
        }


]

type iconNameType = {
    name:string,
    icon:JSX.Element
  }

 export  const iconNames:iconNameType[] = [
    {
      name: 'github',
      icon: icons.github
    },
    {
      name: 'svelte',
      icon: icons.svelte
    },
    {
      name: 'remix',
      icon: icons.remix
    },
    {
      name: 'react',
      icon: icons.react
    },
    {
      name: 'angular',
      icon: icons.angular
    },
    {
      name:'prisma',
      icon:icons.prisma
    }
  ]