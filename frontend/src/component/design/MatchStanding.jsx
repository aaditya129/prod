import React from 'react';
import { motion } from 'framer-motion';
import MatchStandingList from './MatchStandingList';

const MatchStanding = ({Wwcd, Tourn , Group, Match ,matchData}) => {
    const primaryColor = Tourn.primaryColor;
    const secondaryColor = Tourn.secondaryColor;
    const textColor1 = Tourn.textcolor1;
    const textColor2 = Tourn.textcolor2
    const top3Elements = matchData.slice(0, 3);
    console.log(matchData)
    console.log(top3Elements)
    const teams = Object.keys(Wwcd)
    .filter(key => key.startsWith('player_'))
    .map(key => Wwcd[key]);
    console.log('Teams:', teams);


    return (
        <div className="MatchOverallFraggers w-[1920px] h-[1080px] flex flex-row-reverse">

            



            
        <div className="Group70"  style={{ width: 53, height: '100%', position: 'relative', backgroundImage: `linear-gradient(to bottom right, ${secondaryColor}, ${primaryColor})` }} >
            {/* <div className="Rectangle87" style={{ width: 53, height: 1080, position: 'absolute', right: 0, top: 0, backgroundImage: 'linear-gradient(to bottom right, #003a73, #0061c0)' }} /> */}
            <div style={{ width: 53, height: 1080, position: 'relative', right: 0, top: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div className="Rectangle88" style={{ width: 3, height: 219, position: 'relative', background: 'black' }} />
                <div className="PubgMobileGlobalChampionship" style={{ width: 521, height: 522, left: 291, position: 'relative', transform: 'rotate(90deg)', transformOrigin: '0 0', textAlign: 'right', color: 'black', fontSize: 46, fontFamily: 'Bebas Neue', fontWeight: '700', wordWrap: 'break-word', textAnchor: "middle", display: "flex", justifyContent: "center" }}>{Tourn.name}</div>
                <div className="Rectangle72" style={{ width: 3, height: 219, position: 'relative', background: 'black' }} />
            </div>
        </div>
       <div>

            <div className='w-auto' >
  
        <div className="Group69 w-[auto] h-[205px] flex mr-4 flex-col relative justify-center ">
            <div className='flex justify-end ' > 

            <div style={{ backgroundImage: `url(https://res.cloudinary.com/drs0qtuhd/image/upload/v1717781565/dada_5_b1grhu.png), linear-gradient(to bottom right, ${secondaryColor}, ${primaryColor})`, backgroundBlendMode: 'overlay' }}  className="P1 w-[436px] h-20 relative  bg-gradient-to-r from-red-600 to-red-900 ">
              
                < motion.div  initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 200, duration: 2 }} style={{ fontFamily: 'Bebas Neue' }} className="Day1Match18  w-[436px] h-20 flex justify-center items-center text-right text-white text-7xl font-bold font-family: 'Bebas Neue'">{Group.title}-{Match.match_no}/{Group.total_matches}</motion.div>
            </div>
                        </div>
            <motion.div initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 200, duration: 2 }} style={{ fontFamily: 'SF Collegiate Solid' ,color:textColor2 }} className="WwcdTeamStats w-[auto] h-28  text-9xl font-normal font-['SF Collegiate Solid'] ">MATCH STANDING</motion.div>
        </div>

                <MatchStandingList matchData={matchData} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      
        </div>
        </div>
        <div className=' mt-[6.2rem] mr-12' >
            
<motion.div  
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }} >
<div style={{ backgroundImage: `linear-gradient(to bottom right, ${secondaryColor}, ${primaryColor})` }} className="Rectangle49  w-[871px] h-[453px] bg-red-600" >
    <div className=' relative w-[864px] top-3  flex h-[430px] bg-white'>
        <img height='414px' width='314 px' className='z-10 relative' src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717262687/wwcdalert_homdwz.png" alt="" />
        <img height='414px' width='410 px' className='relative right-[216px] z-20' src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717283023/Layer_5_xzrkki.png" alt="" />
        <img height='414px' width='410 px' className='relative right-[416px] z-20' src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717283385/Layer_6_cnd9gl.png" alt="" />
        <img height='414px' width='410 px' className='relative right-[566px] z-0' src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717283185/Layer_7_vu5uk2.png" alt="" />
    </div>
    </div>
    <div style={{ backgroundImage: `linear-gradient(to bottom right, ${secondaryColor}, ${primaryColor})` }} className="Group77 w-[871px] h-10 flex  ">

<div style={{fontFamily: "Orbitron"}} className="Team w-2/5 h-8  text-center  text-white text-4xl font-bold font-['Orbitron']">TEAM</div>
<div  style={{fontFamily: "Orbitron"}} className="PlacePts w-1/5 h-8 text-center    text-white text-4xl font-bold font-['Orbitron']">RANK PTS</div>
<div style={{fontFamily: "Orbitron"}}  className="Elims w-1/5 h-8  text-center   text-white text-4xl font-bold font-['Orbitron']">ELIMS</div>
<div style={{fontFamily: "Orbitron"}}  className="Total w-1/5 h-8 text-center   text-white text-4xl font-bold font-['Orbitron']">TOTAL</div>
</div>
    <div style={{}} className="Group77 text-black w-[871px] h-[57px] flex bg-white  ">
<div className=' flex justify-center   w-2/5'>
<img height='47px' width='46 px' className='mr-3 py-2' src={Wwcd.teamLogo? Wwcd.teamLogo:"https://res.cloudinary.com/drs0qtuhd/image/upload/v1717783560/12213_wexme8.png"} alt="" />
<div style={{fontFamily: "Orbitron"}}  className="Team mr-6 text-center mt-1 text-5xl font-bold font-['Orbitron']">{Wwcd.teamTag}</div>
</div>
<div style={{fontFamily: "Orbitron"}}  className="PlacePts w-1/5  text-center mt-1    text-5xl font-bold  font-['Orbitron']"> {Wwcd.rankpoint} </div>
<div style={{fontFamily: "Orbitron"}}  className="Elims w-1/5   text-center mt-1 font-bold    text-5xl  font-['Orbitron']">{Wwcd.totalkills}</div>
<div style={{fontFamily: "Orbitron"}}  className="Total w-1/5  text-center mt-1 font-bold  text-5xl  font-['Orbitron']">{Wwcd.totalpoints}</div>
</div>
</motion.div>

<div>
<div className='flex space-x-5' >
    {
        top3Elements.map((teams , index )=>(
            <motion.div key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }} className='bg-white mt-12 h-[300px] w-[277px]' >
        <div className=' flex  h-[219px] w-[277px] ' >
            <img className=" h-12 relative top-2 left-1" width='56px'   src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1718974891/roast-chicken_3_pfxsgz.png" alt="" />
            <img  height='162px' width='165 px' src={ teams.teamLogo? teams.teamLogo: "https://res.cloudinary.com/drs0qtuhd/image/upload/v1717783560/12213_wexme8.png"} alt="" />
            <div style={{ fontFamily: 'SF Collegiate Solid' }} className=' ml-3 text-4xl h-auto' > #{index+2}</div>

        </div>
        <div style={{ backgroundImage: `linear-gradient(to bottom right, ${secondaryColor}, ${primaryColor})` }} className='h-[52px] w-[277px]' >
            <div  style={{fontFamily: "Orbitron"}}  className=' w-auto h-auto text-5xl text-white font-bold text-center'>
                {teams.teamTag}
            </div>
        </div>
        <div className=' flex justify-between items-center px-1 h-[24px] bg-black w-[277px] '>
            <div style={{fontFamily: "Orbitron"}}  className='text-white font-bold text-lg '>RANK PTS</div>
            <div style={{fontFamily: "Orbitron"}}  className='text-white font-bold text-lg '>ELMIS</div>
            <div style={{fontFamily: "Orbitron"}}  className='text-white font-bold text-lg '>TOTAL</div>
        </div>
        <div className=' flex justify-between items-center px-1 h-[33px] text-black bg-white w-[277px] '>
            <div style={{fontFamily: "Orbitron"}}  className=' text-center w-1/3 font-bold text-4xl  '>{teams.rankpoint}</div>
            <div style={{fontFamily: "Orbitron"}}  className=' text-center font-bold w-1/3  text-4xl '>{teams.totalkills}</div>
            <div style={{fontFamily: "Orbitron"}}  className=' text-center font-bold w-1/3 text-4xl '>{teams.totalpoints}</div>
        </div>
</motion.div>
        ))
    }


</div>
</div>
</div>


       
    </div>
    
    );
}

export default MatchStanding;


