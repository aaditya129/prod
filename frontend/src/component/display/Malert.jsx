import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Malert = () => {
    const { tournamentId } = useParams();
    const [tournament, setTournament] = useState(null);
    const [group, setGroup] = useState(null);
    const [match, setMatch] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isInView, setIsInView] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [primaryColor, setprimaryColor] = useState();
    const [secColor, setsecColor] = useState();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://143.198.107.248/api/matchrecord/${tournamentId}`);
                console.log(response.data);
                setGroup(response.data.groupstage);
                setMatch(response.data.match);
                setTournament(response.data.tournament);
                setprimaryColor(response.data.tournament.primaryColor)
                setsecColor(response.data.tournament.secondaryColor)
                setLoading(false);
            } catch (err) {
                console.error('Error fetching data:', err);
                setLoading(false);
            }
        };

        fetchData();
    }, [tournamentId]);

    useEffect(() => {
        if (!loading && isInView) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 8000);
            return () => clearTimeout(timer);
        }
    }, [loading, isInView]);

    if (loading) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className='w-screen h-screen flex justify-center items-center'
            >
                <img
                    src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1719090572/Power-Play-Logo-Design-Png_e4xdqq.png"
                    alt="Loading..."
                />
            </motion.div>
        );
    }

    if (!isVisible) {
        return null;
    }

    return (
        <div className="GameIntro fixed left-0 top-0 flex justify-center items-center w-full h-full" style={{ background: 'rgba(106.59, 106.59, 106.59, 0)' }}>
            <motion.div
                className="border-draw"
                style={{
                    width: 352,
                    height: 388,
                    border: `2px ${primaryColor} solid`,
                    background: 'linear-gradient(0deg, black 0%, black 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.20) 100%)',
                    position: 'relative',
                    WebkitMaskImage: isInView ? visibleMask : hiddenMask,
                    maskImage: isInView ? visibleMask : hiddenMask
                }}
                initial={false}
                animate={isInView ? { WebkitMaskImage: visibleMask, maskImage: visibleMask } : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
                transition={{ duration: 1, delay: 1 }}
                onViewportEnter={() => setIsInView(true)}
                viewport={{ once: true }}
            >
                <div className='h-[231px] w-auto flex justify-center items-center'>
                    <img className="" style={{ width: 290, height: 152, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} src={tournament?.url} alt="Logo2" />
                </div>
                <div className="" style={{ width: 350, height: 67, background: `linear-gradient(168deg, ${secColor} 0%, ${primaryColor} 100%)` }}>
                    <div className="text-white text-7xl font-bold h-auto text-center" style={{ fontFamily: 'Bebas Neue' }}>
                        {match?.map}
                    </div>
                </div>
                <div className='h-[88px] w-auto flex justify-center items-center'>
                    <div className="w-[306px] text-center h-[54px] text-white text-5xl" style={{ fontFamily: 'Bebas Neue' }}>
                        {group?.title}-{match?.match_no > 9 ? "" : "0"}{match?.match_no}/{group?.total_matches > 9 ? "" : "0"}{group?.total_matches}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Malert;
