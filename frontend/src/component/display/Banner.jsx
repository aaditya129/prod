import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const Banner = () => {
    
    const { tournamentId } = useParams();
    const [Tourn, setTourn] = useState();
    const [Group, setGroup] = useState();
    const [Match, setMatch] = useState();
    const [loading, setLoading] = useState(true);
    const [primaryColor, setprimaryColor] = useState();
    const [secColor, setsecColor] = useState();



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://143.198.107.248/api/matchrecord/${tournamentId}`);
                console.log(response.data)
                setGroup(response.data.groupstage)
                setMatch(response.data.match)
                setTourn(response.data.tournament)
                setprimaryColor(response.data.tournament.primaryColor)
                setsecColor(response.data.tournament.secondaryColor)
               
                
                setLoading(false);
            } catch (err) {
                
                setLoading(false);
            }
        };

        // Fetch data initially
        fetchData();
    }, [tournamentId]);

    if (loading) {
        return <motion.div  initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }} className='w-sreen h-screen flex justify-center ' > {<img  src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1719090572/Power-Play-Logo-Design-Png_e4xdqq.png" alt="Loading..." />}</motion.div>;
    }

   

    return (
        <>
        {
            Tourn && (
                <div className="w-[1920px] h-[1080px] relative bg-green-500/opacity-0">
                <div className="w-[328px] h-32 left-0 top-[952px] absolute">
                   
                    <div className="w-[328px] h-[59px] left-0 top-[69px] absolute bg-white" />
                    <div className="w-[302px] h-[45px] left-[19px] top-[76px] absolute text-black text-[32px] font-bold font-Arial">{Group.title}-{Match.match_no}/{Group.total_matches}</div>
                    <div style={{ backgroundImage: `linear-gradient(to bottom right, ${secColor}, ${primaryColor})` }} className="w-[328px] h-[61px] left-0 top-[8px] absolute bg-gradient-to-br from-red-600 to-red-800" />
                    <img className="w-[328px] h-[61px] left-0 top-[8px] absolute mix-blend-darken" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717177511/dada_1_a99fos.png" />
                    <div className="w-[287px] h-[39px] left-[23px] top-0 absolute text-white text-[52px] font-black font-['Arial']">{Match.map}</div>
                </div>
                <div className="w-[145px] h-[120px] left-[328px] top-[960px] absolute bg-black" />
                <img className="w-[382px] h-[200px] left-[14px] top-[758px] absolute" src={Tourn.url} />
                <img className="w-[124px] h-16 left-[339px] top-[992px] absolute" src={Tourn.url2}/> 
            </div>
            )
        }
   
        </>
    );
}

export default Banner;
