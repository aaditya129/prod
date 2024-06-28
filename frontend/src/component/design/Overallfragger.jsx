import React from 'react';
import { motion } from 'framer-motion';

const Overallfragger = ({ Tourn, Group, Match, topfragger }) => {
    const primaryColor = Tourn.primaryColor;
    const secColor = Tourn.secondaryColor;
    const textcolor1 = Tourn.textcolor1;
    const textcolor2 = Tourn.textcolor2;

    const top1 = topfragger[0];
    const top2 = topfragger.slice(1, 4);

    return (
        <div className="MatchOverallFraggers w-[1920px] h-[1080px] flex flex-row-reverse">
            <div className="Group70" style={{ width: 53, height: '100%', position: 'relative', backgroundImage: `linear-gradient(to bottom right, ${secColor}, ${primaryColor})` }}>
                <div style={{ width: 53, height: 1080, position: 'relative', right: 0, top: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div className="Rectangle88" style={{ width: 3, height: 219, position: 'relative', background: textcolor1 }} />
                    <div className="PubgMobileGlobalChampionship" style={{ width: 521, height: 522, left: 291, position: 'relative', transform: 'rotate(90deg)', transformOrigin: '0 0', textAlign: 'right', color: textcolor1, fontSize: 46, fontFamily: 'Bebas Neue', fontWeight: '700', wordWrap: 'break-word', textAnchor: "middle", display: "flex", justifyContent: "center" }}>{Tourn.name}</div>
                    <div className="Rectangle72" style={{ width: 3, height: 219, position: 'relative', background: textcolor1 }} />
                </div>
            </div>

            <div className='w-auto h-max'>
                <div className="Group69 w-[auto] h-[205px] flex mr-4 flex-col relative justify-center">
                    <div className='flex justify-end'>
                        <div style={{ backgroundImage: `url(https://res.cloudinary.com/drs0qtuhd/image/upload/v1717781565/dada_5_b1grhu.png), linear-gradient(to bottom right, ${secColor}, ${primaryColor})`, backgroundBlendMode: 'overlay' }} className="P1 w-[436px] h-20 relative ">
                            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 200, duration: 2 }} style={{ fontFamily: 'Bebas Neue' }} className="Day1Match18 w-[436px] h-20 flex justify-center items-center text-right text-white text-7xl font-bold">{Group.title}-{Match.match_no}/{Group.total_matches}</motion.div>
                        </div>
                    </div>
                    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 200, duration: 2 }} style={{ fontFamily: 'SF Collegiate Solid', color: textcolor2 }} className="WwcdTeamStats text-9xl font-normal">OVERALL FRAGGER</motion.div>
                </div>
            </div>

            <div className="Group63 w-[1850px] h-96 absolute top-[22rem] flex justify-evenly">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="1st w-[450px] z-10 ml-14 h-108 relative top-0">
                    <img width='106px' height='105px' className='absolute z-20 top-2 right-0' src={top1.teamLogo} alt="" />
                    <div style={{ backgroundImage: `linear-gradient(to bottom right, ${secColor}, ${primaryColor})` }} className="Rectangle104 w-[450px] h-[500px] left-0 top-0 absolute " />
                    <img className="Dada5 w-[450px] h-108 left-[0px] top-0 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717783651/dada_125_lohzzq.png" />
                    <img className="HoraaEsportsLightmode2 w-[450px] h-108 relative" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717283385/Layer_6_cnd9gl.png" />
                    <div style={{ backgroundImage: `linear-gradient(to bottom right, ${secColor}, ${primaryColor})` }} className="Rectangle108 w-[450px] h-20 left-0 top-[0px] relative bg-gradient-to-b from-red-600 to-red-900" />
                    <div style={{ fontFamily: 'Orbitron', color: textcolor1 }} className="Hora w-[450px] h-16 left-[8.86px] top-[-58px] font-extrabold relative text-center text-5xl ">{top1.name}</div>
                    <div className="Rectangle113 w-[450px] h-36 left-0 top-[-63px] relative bg-gradient-to-r from-white flex justify-center items-center to-neutral-400">
                        <div className="text-center relative top-[49px] left-[15px] text-black w-1/2 text-5xl font-bold">{top1.kd}</div>
                        <div className="text-center text-black w-1/2 text-9xl mb-3 font-bold">{top1.kills}</div>
                        <div className="text-center relative top-[49px] left-[15px] text-black w-1/2 text-[2.6rem] font-bold">{top1.contribution}</div>
                    </div>
                    <div style={{ backgroundImage: `linear-gradient(to bottom right, ${secColor}, ${primaryColor})` }} className="Rectangle114 flex w-[450px] justify-center items-center h-6 left-0 top-[-64px] relative bg-gradient-to-b from-red-600 to-red-900">
                        <div className="Eliminations text-center text-white text-sm font-medium w-1/3">K/D RATIO</div>
                        <div className="Eliminations text-center text-white text-sm font-medium w-1/3">ELIMINATIONS</div>
                        <div className="Eliminations text-center text-white text-sm font-medium w-1/3">CONTRIBUTION</div>
                    </div>
                </motion.div>

                <div className="player flex justify-between">
                    {top2.map((player, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 * index }} className="Group63 w-[350px] h-96 ml-6 relative top-0">
                            <img width='106px' height='105px' className='absolute z-20 top-2 right-0' src={player.teamLogo}  alt="" />
                            <div className="Rectangle104 w-[350px] h-96 left-0 top-0 absolute bg-gradient-to-r from-white to-neutral-400" />
                            <img className="Dada5 w-[350px] h-96 left-[0px] top-0 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717783651/dada_125_lohzzq.png" />
                            <img className="HoraaEsportsLightmode2 w-[350px] h-96 relative" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717283385/Layer_6_cnd9gl.png" />
                            <div className="Rectangle108 w-[350px] h-16 left-0 top-[0px] relative" style={{ backgroundColor: 'black' }} />
                            <div style={{ fontFamily: 'Orbitron', color: textcolor2 }} className="Hora w-[350px] h-14 left-[8.86px] top-[-52px] relative text-center text-3xl font-bold">{player.name}</div>
                            <div className="Rectangle113 w-[350px] h-32 left-0 top-[-56px] relative bg-gradient-to-r from-white flex justify-center items-center to-neutral-400">
                                <div style={{ fontFamily: 'Orbitron', color: textcolor1 }} className=" relative top-[51px] left-[24px] w-1/3 text-3xl font-bold">{player.kd}</div>
                                <div style={{ fontFamily: 'Orbitron', color: textcolor1 }} className="text-center  w-1/3 text-9xl mb-3 font-bold">{player.kills}</div>
                                <div style={{ fontFamily: 'Orbitron', color: textcolor1 }} className=" relative top-[51px] left-[15px] w-1/3 text-[1.7rem] font-bold">{player.contribution}</div>
                            </div>
                            <div
                                                            className="Rectangle114 flex w-[350px] justify-center items-center h-6 left-0 top-[-56px] relative bg-black">
                                                            <div style={{ fontFamily: 'Orbitron', color: textcolor2 }} className="Eliminations text-center  text-sm font-medium w-1/3">K/D RATIO</div>
                                                            <div style={{ fontFamily: 'Orbitron', color: textcolor2 }}  className="Eliminations text-center text-sm font-medium w-1/3">ELMS</div>
                                                            <div style={{ fontFamily: 'Orbitron', color: textcolor2 }}  className="Eliminations text-center  text-sm font-medium w-1/3">CONTRI</div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            
                            export default Overallfragger;
                            