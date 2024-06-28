import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OverallStanding = ( {Tourn , Group, Match, overall}) => {
    const primaryColor = Tourn.primaryColor;
    const secColor = Tourn.secondaryColor;
    const textcolor1 = Tourn.textcolor1;
    const textcolor2 = Tourn.textcolor2;
    // console.log(overall)

    const middleIndex = Math.ceil(overall.length / 2);
    const firstHalf = overall.slice(0, middleIndex);
    const secondHalf = overall.slice(middleIndex);
    
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 }
    };
    return (
        <div className="MatchOverallFraggers w-[1920px] h-[1080px] flex flex-row-reverse">

            



            
        <div className="Group70"  style={{ width: 53, height: '100%', position: 'relative', backgroundImage: `linear-gradient(to bottom right, ${secColor}, ${primaryColor})` }}>
            {/* <div className="Rectangle87" style={{ width: 53, height: 1080, position: 'absolute', right: 0, top: 0, backgroundImage: 'linear-gradient(to bottom right, #003a73, #0061c0)' }} /> */}
            <div style={{ width: 53, height: 1080, position: 'relative', right: 0, top: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div className="Rectangle88" style={{ width: 3, height: 219, position: 'relative', background: 'black' }} />
                <div className="PubgMobileGlobalChampionship" style={{ width: 521, height: 522, left: 291, position: 'relative', transform: 'rotate(90deg)', transformOrigin: '0 0', textAlign: 'right', color: 'black', fontSize: 46, fontFamily: 'Bebas Neue', fontWeight: '700', wordWrap: 'break-word', textAnchor: "middle", display: "flex", justifyContent: "center" }}>{Tourn.name}</div>
                <div className="Rectangle72" style={{ width: 3, height: 219, position: 'relative', background: 'black' }} />
            </div>
        </div>
       

            <div className='w-auto h-max' >
  
        <div className="Group69 w-[auto] h-[205px] flex mr-4 flex-col relative justify-center ">
            <div className='flex justify-end ' > 

            <div style={{ backgroundImage: `url(https://res.cloudinary.com/drs0qtuhd/image/upload/v1717781565/dada_5_b1grhu.png), linear-gradient(to bottom right, ${secColor}, ${primaryColor})`, backgroundBlendMode: 'overlay' }} className="P1 w-[436px] h-20 relative  bg-gradient-to-r from-red-600 to-red-900 ">
              
                < motion.div  initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 200, duration: 2 }} style={{ fontFamily: 'Bebas Neue' }} className="Day1Match18  w-[436px] h-20 flex justify-center items-center text-right text-white text-7xl font-bold font-family: 'Bebas Neue'">{Group.title}-{Match.match_no}/{Group.total_matches}</motion.div>
            </div>
                        </div>
            <motion.div initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 200, duration: 2 }} style={{ fontFamily: 'SF Collegiate Solid' }} className="WwcdTeamStats text-white  w-[auto] h-28  text-9xl font-normal font-['SF Collegiate Solid'] ">OverallStanding</motion.div>
        </div>

               
      
       
        </div>
                <div className=' w-[1800px] flex relative justify-center top-[15.25rem] left-[799px] space-x-3 '>
                    <div>

                    <motion.div initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 200, duration: 3 }}  style={{ backgroundImage: `linear-gradient(to bottom right, ${secColor}, ${primaryColor})` }} className='w-[899px] h-[39px] mb-3 flex' >
                    <div style={{fontFamily: "Orbitron"}} className="Team w-3/5 h-8  text-center  text-white text-4xl font-bold font-['Orbitron']">TEAM</div>
                    <img src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717012261/roast-chicken_4_wanfxt.png" alt="" />
<div  style={{fontFamily: "Orbitron"}} className="PlacePts w-1/5 h-8 text-center    text-white text-4xl font-bold font-['Orbitron']"> PP</div>
<div style={{fontFamily: "Orbitron"}}  className="Elims w-1/5 h-8  text-center   text-white text-4xl font-bold font-['Orbitron']">ELIMS</div>
<div style={{fontFamily: "Orbitron"}}  className="Total w-1/5 h-8 text-center   text-white text-4xl font-bold font-['Orbitron']">TOTAL</div>
                    </motion.div>
                    {
                        firstHalf.map((team,index)=>(
                            <motion.div 
                       
                            className="Group77 mt-3 text-black w-[898px] h-[57px] flex"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={itemVariants}
                            transition={{ duration: 0.5 *index }}
                        >
                            <div style={{ fontFamily: "Orbitron" }} className='w-[66px] flex justify-center items-center bg-black text-4xl text-white'>
                            {index + 1} {/* Start counting from 4 */}
                            </div>
                            <div className='bg-white ml-2 pa flex justify-center w-[898px]'>
                                <div className='flex justify-start bg-white ml-8 w-2/5'>
                                    <img height='47px' width='46px' className='mr-3 py-2' src={team.teamLogo} />
                                    <div style={{ fontFamily: "Orbitron" }} className="Team mr-6 text-center mt-1 text-4xl font-bold">{team.teamTag}</div>
                                </div>
                                <div style={{ fontFamily: "Orbitron" }} className='text-center pl-[52px] w-1/5 mt-1 text-4xl font-bold'> {team.position1Count}</div>
                                <div style={{ fontFamily: "Orbitron" }} className=" pr-[38px] PlacePts w-1/5 text-center mt-1 text-4xl font-bold">{team.rankpoint}</div>
                                <div style={{ fontFamily: "Orbitron" }} className="Elims w-1/5 text-center mt-1 font-bold text-4xl pr-[36px]">{team.totalkills}</div>
                                <div style={{ fontFamily: "Orbitron" }} className="Total w-1/5 text-center mt-1 font-bold text-4xl">{team.totalpoints}</div>
                            </div>
                        </motion.div>
                        ))
                    }
                   
                    </div>
                    <div>

                   
                    <motion.div initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 200, duration: 2 }}  style={{ backgroundImage: `linear-gradient(to bottom right, ${secColor}, ${primaryColor})` }} className='w-[899px] mb-3 h-[39px] flex' >
                    <div style={{fontFamily: "Orbitron"}} className="Team w-3/5 h-8  text-center  text-white text-4xl font-bold font-['Orbitron']">TEAM</div>
                    <img src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717012261/roast-chicken_4_wanfxt.png" alt="" />
<div  style={{fontFamily: "Orbitron"}} className="PlacePts w-1/5 h-8 text-center    text-white text-4xl font-bold font-['Orbitron']"> PP</div>
<div style={{fontFamily: "Orbitron"}}  className="Elims w-1/5 h-8  text-center   text-white text-4xl font-bold font-['Orbitron']">ELIMS</div>
<div style={{fontFamily: "Orbitron"}}  className="Total w-1/5 h-8 text-center   text-white text-4xl font-bold font-['Orbitron']">TOTAL</div>
                    </motion.div>
                    {
                        secondHalf.map((team,index)=>(
                            <motion.div 
                       
                            key={index}
                            className="Group77 mt-3 text-black w-[898px] h-[57px] flex"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={itemVariants}
                            transition={{ duration: 0.5 *index }}
                        >
                            <div style={{ fontFamily: "Orbitron" }} className='w-[66px] flex justify-center items-center bg-black text-4xl text-white'>
                            {index + middleIndex + 1} {/* Start counting from 4 */}
                            </div>
                            <div className='bg-white ml-2 pa flex justify-center w-[898px]'>
                                <div className='flex justify-start bg-white ml-8 w-2/5'>
                                    <img height='47px' width='46px' className='mr-3 py-2' src={team.teamLogo}  />
                                    <div style={{ fontFamily: "Orbitron" }} className="Team mr-6 text-center mt-1 text-4xl font-bold">{team.teamTag}</div>
                                </div>
                                <div style={{ fontFamily: "Orbitron" }} className='text-center pl-[52px] w-1/5 mt-1 text-4xl font-bold'> {team.position1Count}</div>
                                <div style={{ fontFamily: "Orbitron" }} className=" pr-[38px] PlacePts w-1/5 text-center mt-1 text-4xl font-bold">{team.rankpoint}</div>
                                <div style={{ fontFamily: "Orbitron" }} className="Elims w-1/5 text-center mt-1 font-bold text-4xl pr-[36px]">{team.totalkills}</div>
                                <div style={{ fontFamily: "Orbitron" }} className="Total w-1/5 text-center mt-1 font-bold text-4xl">{team.totalpoints}</div>
                            </div>
                        </motion.div>
                        ))
                    }
                    </div>
                </div>


       
    </div>
    );
}

export default OverallStanding;
