import React from 'react';
import { motion } from 'framer-motion';

const First = ({ Wwcd, Tourn, Group, Match }) => {
    console.log(Wwcd)
    if (!Wwcd || !Tourn || !Group || !Match) {
        return null; // or a loading spinner if you prefer
    }

    const primaryColor = Tourn.primaryColor;
    const secondaryColor = Tourn.secondaryColor;
    const textColor1 = Tourn.textcolor1;
    const textColor2 = Tourn.textcolor2;
    const teams = Object.keys(Wwcd)
        .filter(key => key.startsWith('player_'))
        .map(key => Wwcd[key]);
    console.log('Teams:', teams);

    return (
        <>
            {First && (
                <div className="MatchOverallFraggers w-[1920px] h-[1080px] relative">
                    <div className="Group70" style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <div className="Rectangle87" style={{ width: 53, height: 1080, position: 'absolute', right: 0, top: 0, backgroundImage: `linear-gradient(to bottom right, ${secondaryColor}, ${primaryColor})` }} />
                        <div style={{ width: 53, height: 1080, position: 'absolute', right: 0, top: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <div className="Rectangle88" style={{ width: 3, height: 219, position: 'relative', background: 'black' }} />
                            <div className="PubgMobileGlobalChampionship" style={{ width: 521, height: 522, left: 291, position: 'relative', transform: 'rotate(90deg)', transformOrigin: '0 0', textAlign: 'right', color: 'black', fontSize: 46, fontFamily: 'Bebas Neue', fontWeight: '700', wordWrap: 'break-word', textAnchor: "middle", display: "flex", justifyContent: "center" }}>{Tourn.name}</div>
                            <div className="Rectangle72" style={{ width: 3, height: 219, position: 'relative', background: 'black' }} />
                        </div>
                    </div>
                    <div className="Group69 w-[950px] h-[205px] absolute top-4 right-[67px]">
                        <div className="P1 w-[436px] h-20 left-[472px] top-0 absolute">
                            <div style={{ backgroundImage: `linear-gradient(to bottom right, ${secondaryColor}, ${primaryColor})` }} className="Rectangle49 w-[436px] h-20 left-0 top-0 absolute bg-gradient-to-r from-red-600 to-red-900" />
                            <img className="Dada5 w-[436px] h-20 left-0 top-0 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717781565/dada_5_b1grhu.png" />
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                transition={{ type: 'spring', stiffness: 200, duration: 2 }}
                                style={{ fontFamily: 'Bebas Neue' }}
                                className="Day1Match18 top-[16px] w-[436px] h-14 flex justify-center items-center absolute text-right text-white text-7xl font-bold"
                            >
                                {Group.title}-{Match.match_no}/{Group.total_matches}
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            transition={{ type: 'spring', stiffness: 200, duration: 2 }}
                            style={{ fontFamily: 'SF Collegiate Solid' }}
                            className="WwcdTeamStats w-[950px] h-28 left-[0rem] top-[130px] absolute text-white text-9xl font-normal"
                        >
                            WWCD TEAM STATS
                        </motion.div>
                    </div>
                    <div className="Group63 w-[1850px] h-96 absolute top-[22rem] flex justify-evenly">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.1 }}
                            className="Group63 w-[350px] h-96 relative top-0"
                        >
                            <div className="Rectangle104 w-[350px] h-96 left-0 top-0 absolute bg-gradient-to-b from-white to-neutral-400" />
                            <img className="Dada5 w-[350px] h-96 left-[0px] top-0 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717783651/dada_125_lohzzq.png" />
                            <img className="HoraaEsportsLightmode2 w-[350px] h-96 relative" src={Wwcd.teamLogo} />
                            <div className="Rectangle108 w-[350px] h-16 left-0 top-[0px] relative bg-black" />
                            <div style={{ fontFamily: 'Orbitron' }} className="Hora w-[350px] h-14 left-[8.86px] top-[-69px] relative text-center text-white text-7xl font-bold">{Wwcd.teamTag}</div>
                            <div className="Rectangle113 w-[350px] h-32 left-0 top-[-55px] relative bg-gradient-to-r from-white to-neutral-400" />
                            <div className="w-52 h-24 left-[77px] top-[-192px] relative text-center text-black text-9xl font-bold">{Wwcd.totalkills}</div>
                            <div className="Rectangle114 w-[350px] h-6 left-0 top-[-149px] relative bg-black" />
                            <div className="Eliminations w-36 h-4 left-[111px] top-[-177px] relative text-center text-white text-xl font-medium">ELIMINATIONS</div>
                        </motion.div>
                        <div className="player flex justify-evenly">
                            {teams.map((team, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: index * 0.3 }}
                                    className="Group63 w-[350px] ml-3 h-96 relative top-0"
                                >
                                    <div style={{ backgroundImage: `linear-gradient(to bottom right, ${secondaryColor}, ${primaryColor})` }} className="Rectangle104 w-[350px] h-96 left-0 top-0 absolute bg-gradient-to-b from-red-600 to-red-900" />
                                    <img className="Dada5 w-[350px] h-96 left-[0px] top-0 absolute" src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1717783651/dada_125_lohzzq.png" />
                                    <img className="HoraaEsportsLightmode2 w-[350px] h-96 relative" src={team.photo ? team.photo : "https://res.cloudinary.com/drs0qtuhd/image/upload/v1717283385/Layer_6_cnd9gl.png"} />
                                    <div style={{ backgroundImage: `linear-gradient(to bottom right, ${secondaryColor}, ${primaryColor})` }} className="Rectangle108 w-[350px] h-16 left-0 top-[0px] relative bg-gradient-to-b from-red-600 to-red-900" />
                                    <div style={{ fontFamily: 'Orbitron' }} className="Hora w-[350px] h-14 left-[8.86px] top-[-52px] relative text-center text-white text-4xl font-bold">{team.name.toUpperCase()}</div>
                                    <div className="Rectangle113 w-[350px] h-32 left-0 top-[-56px] relative bg-gradient-to-r from-white to-neutral-400" />
                                    <div className="w-52 h-24 left-[77px] top-[-192px] relative text-center text-black text-9xl font-bold">{team.kills}</div>
                                    <div style={{ backgroundImage: `linear-gradient(to bottom right, ${secondaryColor}, ${primaryColor})` }} className="Rectangle114 w-[350px] h-6 left-0 top-[-151px] relative bg-gradient-to-b from-red-600 to-red-900" />
                                    <div className="Eliminations w-36 h-4 left-[111px] top-[-179px] relative text-center text-white text-xl font-medium">ELIMINATIONS</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default First;
