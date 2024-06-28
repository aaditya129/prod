import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MatchStandingList = ({matchData ,primaryColor , secondaryColor}) => {
   

    const [displayedData, setDisplayedData] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const intervalTime = 15000; // 15 seconds
        const maxDisplay = 12;
        const dataToShow = matchData.slice(3); // Exclude top 3 teams
    
        let interval; // Declare interval here
    
        if (dataToShow.length > 0) {
            const initialDisplay = dataToShow.slice(0, Math.min(maxDisplay, dataToShow.length));
            setDisplayedData(initialDisplay);
            if (initialDisplay.length < maxDisplay) {
                clearInterval(interval);
            }
        }
    
        interval = setInterval(() => {
            setStartIndex(prevIndex => {
                const newIndex = prevIndex + maxDisplay;
                if (newIndex >= dataToShow.length) {
                    clearInterval(interval);
                    return prevIndex;
                } else {
                    setDisplayedData(dataToShow.slice(newIndex, newIndex + maxDisplay));
                    return newIndex;
                }
            });
        }, intervalTime);
    
        return () => clearInterval(interval);
    }, []);

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 }
    };
    

    return (
        <>
        <div  style={{ backgroundImage: `linear-gradient(to bottom right, ${secondaryColor}, ${primaryColor})` }} className="Group77 w-[871px] mr-[33px] h-10 flex">
            <div style={{ fontFamily: "Orbitron" }} className="Team w-3/5 h-8 text-center text-white text-4xl font-bold relative">TEAM</div>
            <div style={{ fontFamily: "Orbitron" }} className="PlacePts w-2/5 h-8 text-center text-white text-3xl font-bold relative right-3">RANK PTS</div>
            <div style={{ fontFamily: "Orbitron" }} className="Elims w-1/5 h-8 text-center text-white text-3xl font-bold relative right-5">ELIMS</div>
            <div style={{ fontFamily: "Orbitron" }} className="Total w-1/5 h-8 text-center text-white text-3xl font-bold relative">TOTAL</div>
        </div>
        <AnimatePresence>
            {
                displayedData.map((team, index) => (
                    <motion.div 
                        key={team._id} 
                        className="Group77 mt-2 text-black w-[866px] h-[57px] flex"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={itemVariants}
                        transition={{ duration: 0.5 }}
                    >
                        <div style={{ fontFamily: "Orbitron" }} className='w-[66px] flex justify-center items-center bg-black text-4xl text-white'>
                            {startIndex + index + 5} {/* Start counting from 4 */}
                        </div>
                        <div className='bg-white ml-2 pa flex justify-center w-[836px]'>
                            <div className='flex justify-start bg-white ml-2 w-2/5'>
                                <img height='47px' width='46px' className='mr-3' src={team.teamLogo} alt={team.teamName} />
                                <div style={{ fontFamily: "Orbitron" }} className="Team mr-6 text-center mt-1 text-5xl font-bold">{team.teamTag}</div>
                            </div>
                            <div style={{ fontFamily: "Orbitron" }} className="PlacePts w-1/5 text-center mt-1 text-5xl font-bold">{team.rankpoint}</div>
                            <div style={{ fontFamily: "Orbitron" }} className="Elims w-1/5 text-center mt-1 font-bold text-5xl relative -right-3 ">{team.totalkills}</div>
                            <div style={{ fontFamily: "Orbitron" }} className="Total w-1/5 text-center mt-1 font-bold text-5xl -right-3 ">{team.totalpoints}</div>
                        </div>
                    </motion.div>
                ))
            }
        </AnimatePresence>
    </>
    );
}

export default MatchStandingList;
