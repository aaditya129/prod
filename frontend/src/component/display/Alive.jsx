import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Ph2h2 from './Ph2h2';
import "./alive.css";

// const { tournamentId } = useParams();

const Alive = () => {
    
    const { tournamentId } = useParams();
    const [teams, setteams] = useState([]);
    const [teams1, setteams1] = useState(); 
    const [currentteam, setcurrentteam] = useState();
    const [tourn, settourn] = useState();
    const [prime, setprime] = useState();
   const [sec, setsec] = useState();
    console.log(tournamentId)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://143.198.107.248/api/matchrecord/alive/${tournamentId}`);
                setteams(response.data.teams.slice(1))
                setteams1(response.data.teams[0])
                setcurrentteam(response.data.currentDeadTeam)
                settourn(response.data.tournament)
                console.log(response.data.tournament);
                setprime(response.data.tournament.primaryColor)
                setsec(response.data.tournament.secondaryColor)
              
            } catch (err) {
                console.log('Error fetching data');
            
            }
        };

        // Fetch data initially
        fetchData();

        // Set interval to fetch data every second
        const intervalId = setInterval(fetchData, 1000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, [tournamentId]);

    return (
        <>
  <div className=" flex flex-col justify-center items-center" >
      <div>
{
    teams1 && (
        <div class="w-[329px] h-[172px] relative">
        <div style={{backgroundImage: `linear-gradient(to bottom right, ${sec}, ${prime})`}} class="w-[328px] h-[161px] left-[1px] top-0 absolute bg-gradient-to-b from-red-600 to-red-950"></div>
        <img class="w-[328px] h-[161px] left-[1px] top-0 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717177511/dada_1_a99fos.png" />
        <img class="w-[135px] h-[166px] left-[1px] top-[6px] absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717177582/Layer_1_nflmf5.png" />
        <img class="w-[163px] h-[166px] left-[129px] top-[6px] absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717181412/Layer_2_lsgalm.png" />
        <img class="w-[163px] h-[166px] left-[49px] top-[6px] absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717181412/Layer_2_lsgalm.png" />
        <img class="w-[117px] h-[166px] left-[212px] top-[6px] absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717181335/Layer_4_qyghsq.png" />
        <div class="w-[327px] h-[67px] left-[1px] top-[105px]  absolute bg-gradient-to-b from-transparent via-black-opacity-53 to-black"></div>
        <img class="w-[29px] h-[15px] left-[299px] top-[1px] absolute" src={tourn.url2} />
        <div class="w-[279px] h-6 left-[42px] top-[144px] absolute">
            {
                teams1.alivePlayerCount ==1 && (
                    <div className='relative bottom-1' >
    
            <img style={{font:"Orbitron"}} class="w-[15px] h-3.5 left-[212px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717182905/alive_m79hee.png" />
            <img class="w-3.5 h-3.5 left-[230px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717182905/alive_m79hee.png" />
            <img class="w-3.5 h-3.5 left-[247px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717182905/alive_m79hee.png" />
            <img class="w-[15px] h-3.5 left-[264px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717183041/alive1_ymh5yh.png" />
            </div>
    
                ) 
              
            }
            {
              teams1.alivePlayerCount==0 && (
                    <div className='relative bottom-1' >
    
            <img style={{font:"Orbitron"}} class="w-[15px] h-3.5 left-[212px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717182905/alive_m79hee.png" />
            <img class="w-3.5 h-3.5 left-[230px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717182905/alive_m79hee.png" />
            <img class="w-3.5 h-3.5 left-[247px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717182905/alive_m79hee.png" />
            <img class="w-[15px] h-3.5 left-[264px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717182905/alive_m79hee.png" />
            </div>
    
                ) 
              
            }
            {
                teams1.alivePlayerCount==2 && (
                    <div className='relative bottom-1' >
    
            <img style={{font:"Orbitron"}} class="w-[15px] h-3.5 left-[212px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717182905/alive_m79hee.png" />
            <img class="w-3.5 h-3.5 left-[230px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717182905/alive_m79hee.png" />
            <img class="w-3.5 h-3.5 left-[247px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717183041/alive1_ymh5yh.png" />
            <img class="w-[15px] h-3.5 left-[264px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717183041/alive1_ymh5yh.png" />
            </div>
    
                ) 
              
            }
            {
               teams1.alivePlayerCount==3 && (
                    <div className='relative bottom-1' >
    
            <img style={{font:"Orbitron"}} class="w-[15px] h-3.5 left-[212px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717182905/alive_m79hee.png" />
            <img class="w-3.5 h-3.5 left-[230px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717183041/alive1_ymh5yh.png" />
            <img class="w-3.5 h-3.5 left-[247px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717183041/alive1_ymh5yh.png" />
            <img class="w-[15px] h-3.5 left-[264px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717183041/alive1_ymh5yh.png" />
            </div>
    
                ) 
              
            }
            {
                teams1.alivePlayerCount==4 &&  (
                    <div className='relative bottom-1' >
    
            <img style={{font:"Orbitron"}} class="w-[15px] h-3.5 left-[212px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717183041/alive1_ymh5yh.png" />
            <img class="w-3.5 h-3.5 left-[230px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717183041/alive1_ymh5yh.png" />
            <img class="w-3.5 h-3.5 left-[247px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717183041/alive1_ymh5yh.png" />
            <img class="w-[15px] h-3.5 left-[264px] top-[5px] mt-2 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717183041/alive1_ymh5yh.png" />
            </div>
    
                ) 
              
            }
            
            <div style={{fontFamily:" Orbitron",textAlign:"center"}}  class="w-[92px] h-[21px] left-[110px] top-[1px] absolute text-white font-bold  text-2xl ">{teams1.overallpoints} + {teams1.totalkills}</div>
            <div  style={{fontFamily:" Orbitron"}} class="w-9 h-[61px] left-[30px] top-[1px] absolute text-white text-2xl font-bold  ">{teams1.teamTag}</div>
            <img class="w-[25px] h-6 left-0 top-0 absolute mt-2" src={teams1.teamLogo} />
        </div>
    </div>
    )
}

  
      </div>
      <div>
      <div className="w-[328px] h-[21px] relative">
    <div style={{backgroundImage: `linear-gradient(to bottom right, ${sec}, ${prime})`,fontFamily:" Orbitron"}}  className="w-[328px] h-[21px] left-0 top-0 absolute bg-gradient-to-b from-red-600 to-red-800" />
    <div style={{fontFamily:" Orbitron"}} className="w-[37px] h-[17px] left-[61px] top-[-4px] absolute text-white text-lg font-bold font-['Orbitron Unicase']">TEAM</div>
    <div style={{fontFamily:" Orbitron"}} className="w-[7px] h-[17px] left-[11px] top-[-4px]  absolute text-white text-lg font-bold  font-['Orbitron Unicase']">#</div>
    <div style={{fontFamily:" Orbitron"}} className="w-[23px] h-[17px] left-[186px] top-[-4px]  absolute text-white text-lg font-bold font-['Orbitron Unicase']">PTS</div>
    <div style={{fontFamily:" Orbitron"}} className="w-[38px] h-[17px] left-[248px] top-[-4px]  absolute text-white text-lg     font-bold  font-['Orbitron Unicase']">ALIVE</div>
</div>
      </div>
      {teams.map((element, index) => (
         <div className={`flex flex-col ${element.alivePlayerCount == 4 ? 'animate-opacity50 ' : ''}`}>
         <div className="flex flex-row">
         <div>
         <div className="Group68 w-8 h-7 relative">
 <div className="Rectangle39 w-9 h-9 left-0 top-0 text-center absolute bg-black" />
 <div  style={{fontFamily:" Orbitron"}} className=" w-1.5 text-center relative flex top-2 left-2 text-white text-1xl font-bold font-['Orbitron Unicase']">{index+2}</div>
 </div>
         </div>
         <div>
           <Ph2h2 element={element} sec={sec} prime={prime} />
     
         </div>
         </div>
         <div className="flex ">
         <div style={{backgroundColor:`${prime}`}} className=" mt-[8px] Rectangle40 w-8 h-px " />
         <div className="   mt-[8px] Rectangle38 w-[18.5rem] h-px bg-black" />
         </div>
       </div>

      ))}
     
      
    </div>


 </>
    );
}

export default Alive;
