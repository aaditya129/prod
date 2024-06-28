
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"

export default function Ph2h2({element,sec,prime}) {
  const [showMotionDiv, setShowMotionDiv] = useState(false);

  useEffect(() => {
    if(element.alivePlayerCount==4)
      {
        setShowMotionDiv(true)
        const timer = setTimeout(() => {
          setShowMotionDiv(false);
          console.log(element)
        }, 5000);
        
        return () => clearTimeout(timer);
      }
  }, [element.alivePlayerCount]); // Run once after component mount

  return (
    <>
      {showMotionDiv ? (
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="Group60 w-[18.5rem] h-7 relative"
        >
          <div style={{backgroundImage: `linear-gradient(to bottom right, ${sec}, ${prime})`}}  className="Rectangle37 w-[18.5rem] h-[36px] left-0 top-0 absolute bg-red-800" />
          <div className="Eliminated w-32 h-7 left-[75px] top-[2px] absolute text-white text-2xl font-normal font-['Acme'] leading-relaxed">ELIMINTAED</div>
        </motion.div>
      ) : null}
{
  !showMotionDiv &&
  (
    <div className="Group60 w-[18.5rem] h-7 relative">
    <div className="Rectangle37 w-[18.5rem] h-9 left-0 top-0 absolute bg-white" />
   
        
    {
          element.alivePlayerCount==1 && (
               <div className='relative bottom-1' >

       <img style={{font:"Violenta Solid"}} class="w-[15px] h-3.5 left-[212px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717182905/alive_m79hee.png" />
       <img class="w-3.5 h-3.5 left-[230px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717182905/alive_m79hee.png" />
       <img class="w-3.5 h-3.5 left-[247px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717182905/alive_m79hee.png" />
       <img class="w-[15px] h-3.5 left-[264px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717183041/alive1_ymh5yh.png" />
       </div>

           ) 
         
       }
    {
           element.alivePlayerCount==0 && (
               <div className='relative bottom-1' >

       <img style={{font:"Violenta Solid"}} class="w-[15px] h-3.5 left-[212px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717182905/alive_m79hee.png" />
       <img class="w-3.5 h-3.5 left-[230px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717182905/alive_m79hee.png" />
       <img class="w-3.5 h-3.5 left-[247px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717182905/alive_m79hee.png" />
       <img class="w-[15px] h-3.5 left-[264px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717182905/alive_m79hee.png" />
       </div>

           ) 
         
       }
       {
           element.alivePlayerCount==2 && (
               <div className='relative bottom-1' >

       <img style={{font:"Violenta Solid"}} class="w-[15px] h-3.5 left-[212px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717182905/alive_m79hee.png" />
       <img class="w-3.5 h-3.5 left-[230px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717182905/alive_m79hee.png" />
       <img class="w-3.5 h-3.5 left-[247px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717183041/alive1_ymh5yh.png" />
       <img class="w-[15px] h-3.5 left-[264px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717183041/alive1_ymh5yh.png" />
       </div>

           ) 
         
       }
       {
          element.alivePlayerCount==3 && (
               <div className='relative bottom-1' >

       <img style={{font:"Violenta Solid"}} class="w-[15px] h-3.5 left-[212px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717182905/alive_m79hee.png" />
       <img class="w-3.5 h-3.5 left-[230px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717183041/alive1_ymh5yh.png" />
       <img class="w-3.5 h-3.5 left-[247px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717183041/alive1_ymh5yh.png" />
       <img class="w-[15px] h-3.5 left-[264px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717183041/alive1_ymh5yh.png" />
       </div>

           ) 
         
       }
       {
           element.alivePlayerCount==4 && (
               <div className='relative bottom-1' >

       <img style={{font:"Violenta Solid"}} class="w-[15px] h-3.5 left-[212px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717183041/alive1_ymh5yh.png" />
       <img class="w-3.5 h-3.5 left-[230px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717183041/alive1_ymh5yh.png" />
       <img class="w-3.5 h-3.5 left-[247px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717183041/alive1_ymh5yh.png" />
       <img class="w-[15px] h-3.5 left-[264px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717183041/alive1_ymh5yh.png" />
       </div>

           ) 
         
       }
    <div  style={{fontFamily:" Violenta Solid",textAlign:"center"}} className="0 w-[92px] h-5 left-[119px] top-[2px] absolute text-black text-2xl font-normal font-['Violenta Solid Unicase']">{element.overallpoints} + {element.totalkills}</div>
    <div  style={{fontFamily:" Violenta Solid"}} className="Nne w-9 h-5 left-[40px] top-[2px] absolute text-black text-2xl font-normal font-['Violenta Solid Unicase']">{element.teamTag}</div>
    <img className="HoraaEsportsLightmode2 w-6 h-6 left-[10px] top-[6px] absolute" src={element.teamLogo} />
</div>
  )
}
           

    </>
  );
};
