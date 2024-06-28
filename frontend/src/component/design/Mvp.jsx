import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Mvp = ({ Tourn, Group, Match, Matchmvp }) => {
    const primaryColor = Tourn.primaryColor;
    const secondaryColor = Tourn.secondaryColor;
    const textColor1 = Tourn.textcolor1;
    const textColor2 = Tourn.textcolor2
    return (
        <AnimatePresence>
            <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="MatchOverallFraggers w-[1920px] h-[1080px] relative">
                    <div className="Group70" style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <div
                            className="Rectangle87"
                            style={{
                                width: 53,
                                height: 1080,
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                backgroundImage: `linear-gradient(to bottom right, ${secondaryColor}, ${primaryColor})`,
                            }}
                        />
                        <div
                            style={{
                                width: 53,
                                height: 1080,
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <div className="Rectangle88" style={{ width: 3, height: 219, position: 'relative', background: 'black' }} />
                            <div
                                className="PubgMobileGlobalChampionship"
                                style={{
                                    width: 521,
                                    height: 522,
                                    left: 291,
                                    position: 'relative',
                                    transform: 'rotate(90deg)',
                                    transformOrigin: '0 0',
                                    textAlign: 'right',
                                    color: textColor1,
                                    fontSize: 46,
                                    fontFamily: 'Bebas Neue',
                                    fontWeight: '700',
                                    wordWrap: 'break-word',
                                    textAnchor: 'middle',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                {Tourn.name}
                            </div>
                            <div className="Rectangle72" style={{ width: 3, height: 219, position: 'relative', background: 'black' }} />
                        </div>
                    </div>
                    <div className="Group69 w-[950px] h-[205px] absolute top-4 right-[67px]">
                        <div className="P1 w-[436px] h-20 left-[472px] top-0 absolute">
                            <div
                                style={{ backgroundImage: `linear-gradient(to bottom right, ${secondaryColor}, ${primaryColor})` }}
                                className="Rectangle49 w-[436px] h-20 left-0 top-0 absolute bg-gradient-to-r from-red-600 to-red-900"
                            />
                            <img className="Dada5 w-[436px] h-20 left-0 top-0 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717781565/dada_5_b1grhu.png" />
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                transition={{ type: 'spring', stiffness: 200, duration: 2 }}
                                style={{ fontFamily: 'Bebas Neue',color: textColor2 }}
                                className="Day1Match18 top-[16px] w-[436px] h-14 flex justify-center items-center absolute text-right  text-7xl font-bold"
                            >
                                {Group.title}-{Match.match_no}/{Group.total_matches}
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            transition={{ type: 'spring', stiffness: 200, duration: 2 }}
                            style={{ fontFamily: 'SF Collegiate Solid', color: textColor2 }}
                            className="WwcdTeamStats w-[919px] h-28 left-[3.75rem] top-[130px] absolute  text-9xl font-normal font-['SF Collegiate Solid'] text-center leading-10"
                        >
                            MATCH MVP
                        </motion.div>
                    </div>
                    <div>
                        <div className="Frame5 top-0 z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.1 }}
                                className="Group75 w-[683px] h-96 right-[100px] top-[221px] absolute"
                            >
                                <div
                                    style={{
                                        backgroundImage: `linear-gradient(to bottom right, ${secondaryColor}, ${primaryColor})`,
                                    }}
                                    className="Group76 w-[683px] h-[102px] left-0 top-[714.48px] absolute bg-gradient-to-r from-red-700 to-red-900 flex items-center justify-center"
                                >
                                    <div
                                        style={{
                                            backgroundImage: `linear-gradient(to bottom right, ${secondaryColor}, ${primaryColor})`,
                                        }}
                                        className="Rectangle123 w-[683px] h-[102px] left-0 top-0 absolute "
                                    ></div>
                                    <div
                                        style={{ backgroundImage: `linear-gradient(to bottom right, ${secondaryColor}, ${primaryColor})` }}
                                        className="relative w-[683px] h-[102px] flex items-center justify-center space-x-4 top-2"
                                    >
                                        <img className="HoraaEsportsLightmode2 w-20 h-16 mr-2" src={Matchmvp.teamLogo} />
                                        <div
                                            style={{ fontFamily: 'Orbitron', color: textColor2 }}
                                            className="Malik  text-5xl font-bold font-['Orbitron']"
                                        >
                                            {Matchmvp.name}
                                        </div>
                                    </div>
                                </div>
                                <div className="Rectangle121 w-[683px] h-[184px] left-0 top-0 absolute bg-gradient-to-r from-white to-neutral-400 border-4 border-black" />
                                <div className="Group74 w-[683px] h-[184px] flex flex-row bg-gradient-to-r from-white to-neutral-400 justify-evenly items-center border-4 border-black left-[-0px] top-[547.57px] absolute">
                                    <div
                                        style={{ fontFamily: 'Violenta Solid', color: textColor1 }}
                                        className="Contri  text-9xl font-normal font-['Orbitron']"
                                    >
                                        CONTRI
                                    </div>
                                    <div
                                        style={{ fontFamily: 'Violenta Solid', color: textColor1 }}
                                        className="ml-6  text-9xl font-normal font-['Orbitron']"
                                    >
                                        {Matchmvp.contribution}
                                    </div>
                                </div>
                                <div className="Group73 w-[683px] h-[184px] left-[-0px] top-[365.02px] absolute">
                                    <div
                                        className="Rectangle120 w-[683px] h-[184px] left-0 top-0 absolute bg-gradient-to-r from-white to-neutral-400 border-4 border-black"
                                    />
                                    <div
                                        style={{ fontFamily: 'Violenta Solid', color: textColor1 }}
                                        className="29 w-48 h-24 left-[425px] top-[44.89px] absolute text-center  text-9xl font-medium font-['Abhaya Libre Medium']"
                                    >
                                        -
                                    </div>
                                    <div
                                        style={{ fontFamily: 'Violenta Solid', color: textColor1 }}
                                        className="KD w-64 h-24 left-[29px] top-[44.89px] absolute text-center text-9xl font-normal font-['Orbitron']"
                                    >
                                        K/D
                                    </div>
                                </div>
                                <div className="Group72 w-[683px] h-[184px] left-[-0px] top-[183.51px] absolute">
                                    <div
                                        className="Rectangle124 w-[683px] h-[184px] left-0 top-0 absolute bg-gradient-to-r from-white to-neutral-400 border-4 border-black"
                                    />
                                    <div
                                        style={{ fontFamily: 'Violenta Solid', color: textColor1 }}
                                        className="w-44 h-24 left-[438px] top-[43.92px] absolute text-center  text-9xl font-normal font-['Orbitron']"
                                    >
                                        {Matchmvp.kills}
                                    </div>
                                    <div
                                        style={{ fontFamily: 'Violenta Solid', color: textColor1 }}
                                        className="Kills w-64 h-24 left-[29px] top-[43.92px] absolute text-center  text-9xl font-normal font-['Orbitron']"
                                    >
                                        KILLS
                                    </div>
                                </div>
                                <div className="Group71 w-[683px] h-[184px] left-0 top-0 absolute">
                                    <div
                                        className="Rectangle118 w-[683px] h-[184px] left-0 top-0 absolute bg-gradient-to-r                                     from-white to-neutral-400 border-4 border-black"
                                    />
                                    <div
                                        style={{ fontFamily: 'Violenta Solid', color: textColor1 }}
                                        className="w-44 h-24 left-[438px] top-[44.89px] absolute text-center  text-9xl font-normal font-['Orbitron']"
                                    >
                                        1
                                    </div>
                                    <div
                                        style={{ fontFamily: 'Violenta Solid', color: textColor1 }}
                                        className="Rank w-52 h-24 left-[47px] top-[44.89px] absolute text-center  text-9xl font-normal font-['Orbitron']"
                                    >
                                        RANK
                                    </div>
                                </div>
                                <img
                                    className="Dada7 h-[715px] left-0 top-[9px] absolute"
                                    src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717980155/dada_7_hzwej8.png"
                                />
                            </motion.div>
                            <motion.img
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.1 }}
                                className="Layer6 left-[69px] top-[187px] absolute"
                                src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717283023/Layer_5_xzrkki.png"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Mvp;

