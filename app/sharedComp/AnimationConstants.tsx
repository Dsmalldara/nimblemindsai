export const animateNav = {
    initial:{
      x:0,
      rotate:0
    },
   trigger:{
    y:8,
    rotate:45
   },
   }
  export  const animateNav2 = {
    initial:{
      rotate:0
    },
   trigger2:{
    y:-2,
    rotate:140
   },}
  export  const spring = {
    type: 'spring',
    stiffness: 260,
    damping: 20
  };

  export const NavCard = {
    initial :{
        scaleY:0
    },
    animate:{
        scaleY:1,
        transition:{
            duration:0.3,
            ease: [0.12,0,0.39,0]
        }
    },
    exit:{
        scaleY:0,
        transition:{
            delay:0.5,
            duration:0.3,
            ease:[0.22,1,0.36,1]
        }
    }
  }
  